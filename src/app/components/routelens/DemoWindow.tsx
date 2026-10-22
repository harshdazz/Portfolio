import {
  Bot,
  Check,
  FastForward,
  Files,
  GitBranch,
  Play,
  Search,
  X,
} from "lucide-react";
import type { CSSProperties } from "react";
import RouteLensIcon from "./RouteLensIcon";

/*
 * A mock VS Code window for the guided demo. Code is drawn as placeholder
 * bars on purpose: the demo shows what RouteLens does, not the code itself.
 * Steps: 0 open project, 1 see routes, 2 send one, 3 test everything, 4 AI fix.
 */

const ROUTES = [
  { method: "GET", path: "/api/posts", code: 200 },
  { method: "POST", path: "/api/posts", code: 201 },
  { method: "GET", path: "/api/posts/:id", code: 200 },
  { method: "PATCH", path: "/api/posts/:id", code: 200 },
  { method: "DELETE", path: "/api/posts/:id", code: 204 },
  { method: "POST", path: "/api/login", code: 200 },
] as const;

/** Sent by hand in step 2. */
const SENT_ROUTE = 1;
/** Fails in step 3 until the AI fixes it in step 4. */
const BROKEN_ROUTE = 2;
/** When the fix lands in step 4, after the chat has explained it. */
const FIX_DELAY = "1.9s";

const METHOD_COLORS: Record<string, string> = {
  GET: "text-teal-300",
  POST: "text-amber-300",
  PATCH: "text-sky-300",
  DELETE: "text-rose-300",
};

const STATUS_TEXT: Record<number, string> = {
  200: "OK",
  201: "Created",
  204: "No Content",
  404: "Not Found",
};

type Result = { ok: boolean; code: number; ms: number } | null;

const resultFor = (index: number, step: number): Result => {
  const { code } = ROUTES[index];
  const ms = 9 + ((index * 7) % 11);
  if (step === 2) return index === SENT_ROUTE ? { ok: true, code, ms } : null;
  if (step === 3 && index === BROKEN_ROUTE) return { ok: false, code: 404, ms };
  if (step >= 3) return { ok: true, code, ms };
  return null;
};

const delayStyle = (delay: string) =>
  ({ "--rl-delay": delay }) as CSSProperties;

/* ── Placeholder code ───────────────────────────────────────────────── */

type Tone = "keyword" | "name" | "text" | "string";
type Bar = [indent: number, width: number, tone: Tone];

const TONES: Record<Tone, string> = {
  keyword: "bg-violet-400/40",
  name: "bg-sky-300/35",
  text: "bg-white/15",
  string: "bg-amber-300/30",
};

const IMPORTS: Bar[] = [
  [0, 46, "keyword"],
  [0, 38, "keyword"],
];
const CREATE_HANDLER: Bar[] = [
  [0, 58, "name"],
  [1, 44, "text"],
  [1, 62, "string"],
  [1, 36, "text"],
  [0, 8, "text"],
];
const READ_HANDLER: Bar[] = [
  [0, 54, "name"],
  [1, 48, "text"],
  [1, 30, "keyword"],
  [0, 8, "text"],
];
/** The line inside READ_HANDLER that breaks the route. */
const BROKEN_LINE = 1;

const CodeLine = ({
  number,
  bar: [indent, width, tone],
  highlight,
}: {
  number: number;
  bar: Bar;
  highlight?: "error" | "fixed";
}) => (
  <div
    className={`flex items-center h-[18px] border-l-2 ${
      highlight === "error"
        ? "bg-rose-500/10 border-rose-400"
        : highlight === "fixed"
          ? "bg-teal-400/10 border-teal-300 rl-pop"
          : "border-transparent"
    }`}
    style={highlight === "fixed" ? delayStyle(FIX_DELAY) : undefined}
  >
    <span className="w-7 shrink-0 pr-2 text-right text-[9px] text-slate-600 tabular-nums">
      {number}
    </span>
    <span
      className={`h-[7px] rounded-full ${TONES[tone]}`}
      style={{ width: `${width}%`, marginLeft: `${indent * 14}px` }}
    />
  </div>
);

/** RouteLens's inline "▶ Send" line above a route handler. */
const SendLens = ({
  result,
  active,
  popDelay,
}: {
  result: Result;
  active?: boolean;
  popDelay?: string;
}) => (
  <div className="flex items-center gap-2 h-[20px] pl-9 font-mono text-[10px] sm:text-[11px]">
    <span
      className={`inline-flex items-center gap-1 rounded px-1.5 leading-[16px] ${
        active
          ? "bg-amber-400/15 text-amber-300 ring-1 ring-amber-400/60 rl-pulse"
          : "text-slate-400"
      }`}
    >
      <Play className="w-2.5 h-2.5 fill-current" /> Send
    </span>
    {result && (
      <span
        key={`${result.ok}-${result.code}`}
        className={`rl-pop ${result.ok ? "text-teal-300" : "text-rose-400"}`}
        style={popDelay ? delayStyle(popDelay) : undefined}
      >
        {result.ok ? "✓" : "✗"} {result.code} {STATUS_TEXT[result.code]} ·{" "}
        {result.ms} ms
      </span>
    )}
  </div>
);

/* ── Window ─────────────────────────────────────────────────────────── */

const DemoWindow = ({ step }: { step: number }) => {
  const results = ROUTES.map((_, index) => resultFor(index, step));
  const passed = results.filter((r) => r?.ok).length;
  const failed = results.filter((r) => r && !r.ok).length;
  const showRoutes = step >= 1;

  return (
    <div className="relative rounded-2xl border border-white/10 bg-[#0a0f1e] shadow-2xl shadow-black/50 overflow-hidden text-left">
      {/* Title bar */}
      <div className="flex items-center gap-2 px-4 h-9 border-b border-white/5 bg-white/[0.03]">
        <span className="w-2.5 h-2.5 rounded-full bg-rose-400/80" />
        <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
        <span className="flex-1 text-center text-[11px] text-slate-500 truncate pr-10">
          my-blog — Visual Studio Code
        </span>
      </div>

      <div className="relative flex flex-col sm:flex-row sm:h-[400px]">
        {/* Activity bar */}
        <div className="hidden sm:flex flex-col items-center gap-4 w-11 shrink-0 py-3 border-r border-white/5 bg-white/[0.02] text-slate-600">
          <Files className="w-[18px] h-[18px]" />
          <Search className="w-[18px] h-[18px]" />
          <GitBranch className="w-[18px] h-[18px]" />
          <span className="relative text-amber-300">
            <span className="absolute -left-[13px] top-0 h-full w-0.5 bg-amber-300" />
            <RouteLensIcon className="w-[18px] h-[18px]" />
          </span>
        </div>

        {/* RouteLens sidebar */}
        <div className="sm:w-[44%] shrink-0 border-b sm:border-b-0 sm:border-r border-white/5 bg-white/[0.015] p-3 flex flex-col gap-3 min-h-[230px]">
          <div className="flex items-center justify-between gap-2">
            <span className="text-[10px] font-bold tracking-[0.2em] text-slate-400">
              ROUTELENS
            </span>
            {showRoutes && (
              <span
                className={`inline-flex items-center gap-1 rounded-md px-2 py-0.5 text-[10px] font-semibold whitespace-nowrap ${
                  step === 3
                    ? "bg-amber-400 text-[#1a0d00] rl-pulse"
                    : "bg-white/5 text-slate-300"
                }`}
              >
                <FastForward className="w-3 h-3 fill-current" /> Test everything
              </span>
            )}
          </div>

          {!showRoutes && (
            <div className="flex flex-col gap-2.5 pt-1">
              <span className="text-[11px] text-slate-400">
                Reading your project…
              </span>
              {[80, 64, 72, 58].map((width) => (
                <span
                  key={width}
                  className="h-3 rounded rl-shimmer"
                  style={{ width: `${width}%` }}
                />
              ))}
            </div>
          )}

          {step >= 3 && (
            <div
              key={step}
              className="rounded-lg border border-white/10 bg-white/[0.03] p-2.5 rl-pop"
              style={step === 4 ? delayStyle(FIX_DELAY) : undefined}
            >
              <div className="flex items-center justify-between text-[11px] font-semibold">
                <span className="text-teal-300">{passed} passed</span>
                <span className={failed ? "text-rose-400" : "text-slate-500"}>
                  {failed} failed
                </span>
              </div>
              <div className="mt-2 flex h-1.5 overflow-hidden rounded-full bg-white/5">
                <span
                  className="bg-teal-300 transition-[width] duration-700"
                  style={{ width: `${(passed / ROUTES.length) * 100}%` }}
                />
                <span
                  className="bg-rose-400 transition-[width] duration-700"
                  style={{ width: `${(failed / ROUTES.length) * 100}%` }}
                />
              </div>
            </div>
          )}

          {showRoutes && (
            <ul className="flex flex-col gap-0.5 font-mono text-[11px]">
              {ROUTES.map((route, index) => {
                const result = results[index];
                const landsLater = step === 4 && index === BROKEN_ROUTE;
                return (
                  <li
                    key={`${route.method} ${route.path}`}
                    className={`flex items-center gap-2 rounded px-1.5 py-1 ${
                      step === 1 ? "rl-pop" : ""
                    } ${
                      result && !result.ok
                        ? "bg-rose-500/10"
                        : index === SENT_ROUTE && step === 2
                          ? "bg-amber-400/10"
                          : ""
                    }`}
                    style={
                      step === 1
                        ? delayStyle(`${0.15 + index * 0.12}s`)
                        : undefined
                    }
                  >
                    <span
                      className={`w-11 shrink-0 font-bold ${METHOD_COLORS[route.method]}`}
                    >
                      {route.method}
                    </span>
                    <span className="flex-1 truncate text-slate-300">
                      {route.path}
                    </span>
                    {result && (
                      <span
                        key={`${step}-${result.ok}`}
                        className={`flex items-center gap-0.5 rl-pop ${
                          result.ok ? "text-teal-300" : "text-rose-400"
                        }`}
                        style={delayStyle(
                          landsLater ? FIX_DELAY : `${0.1 + index * 0.1}s`,
                        )}
                      >
                        {result.ok ? (
                          <Check className="w-3 h-3" />
                        ) : (
                          <X className="w-3 h-3" />
                        )}
                        {result.code}
                      </span>
                    )}
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        {/* Editor */}
        <div className="relative flex-1 min-w-0 h-[280px] sm:h-auto flex flex-col">
          <div className="flex h-8 items-end border-b border-white/5 bg-white/[0.02]">
            <span className="h-full flex items-center gap-1.5 px-3 border-r border-white/5 border-t-2 border-t-amber-300/80 bg-[#0a0f1e] text-[11px] text-slate-300">
              <span className="text-sky-300 font-bold text-[9px]">TS</span>
              posts.ts
            </span>
          </div>

          <div className="flex-1 py-3 pr-3 overflow-hidden">
            {IMPORTS.map((bar, i) => (
              <CodeLine key={`i${i}`} number={i + 1} bar={bar} />
            ))}
            <div className="h-[18px]" />

            <div className="relative">
              {showRoutes ? (
                <SendLens
                  result={resultFor(SENT_ROUTE, step)}
                  active={step === 2}
                />
              ) : (
                <div className="h-[20px]" />
              )}
              {CREATE_HANDLER.map((bar, i) => (
                <CodeLine key={`c${i}`} number={i + 4} bar={bar} />
              ))}

              {step === 2 && <ResponsePeek />}
            </div>
            <div className="h-[18px]" />

            <div>
              {showRoutes ? (
                <SendLens
                  result={resultFor(BROKEN_ROUTE, step)}
                  popDelay={step === 4 ? FIX_DELAY : undefined}
                />
              ) : (
                <div className="h-[20px]" />
              )}
              {READ_HANDLER.map((bar, i) => (
                <CodeLine
                  key={`r${i}-${step}`}
                  number={i + 10}
                  bar={bar}
                  highlight={
                    i !== BROKEN_LINE
                      ? undefined
                      : step === 3
                        ? "error"
                        : step === 4
                          ? "fixed"
                          : undefined
                  }
                />
              ))}
            </div>
          </div>

          {step === 0 && (
            <div className="absolute right-3 bottom-3 left-3 sm:left-auto sm:w-[260px] rounded-lg border border-white/10 bg-[#141b2e] p-3 shadow-xl shadow-black/40 rl-pop">
              <div className="flex items-start gap-2.5">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal-300/15 text-teal-300">
                  <Check className="w-3 h-3" />
                </span>
                <div className="flex flex-col gap-1">
                  <span className="text-[12px] font-semibold text-white">
                    Found your API at localhost:3000
                  </span>
                  <span className="text-[11px] text-slate-400">
                    Spotted it in your dev script ·{" "}
                    <span className="text-amber-300">Change</span>
                  </span>
                </div>
              </div>
            </div>
          )}

          {step === 4 && <AgentChat />}
        </div>
      </div>

      {/* Status bar */}
      <div className="flex items-center justify-between gap-3 px-3 h-6 border-t border-white/5 bg-white/[0.03] text-[10px] text-slate-400">
        <span className="flex items-center gap-1.5">
          <RouteLensIcon className="w-3 h-3 text-amber-300" />
          RouteLens · local
        </span>
        {step >= 3 && (
          <span className="flex items-center gap-2">
            <span className="text-teal-300">✓ {passed}</span>
            {failed > 0 && <span className="text-rose-400">✗ {failed}</span>}
          </span>
        )}
      </div>
    </div>
  );
};

/** The response preview that opens next to a sent route. */
const ResponsePeek = () => (
  <div className="absolute left-10 sm:left-auto sm:right-0 top-6 z-10 w-44 rounded-lg border border-white/10 bg-[#141b2e] p-2.5 shadow-xl shadow-black/40 rl-pop">
    <div className="flex items-center justify-between text-[11px]">
      <span className="text-slate-400">Response</span>
      <span className="font-semibold text-teal-300">201 Created</span>
    </div>
    <div className="mt-2 flex flex-col gap-1.5">
      {[70, 88, 52].map((width) => (
        <span
          key={width}
          className="h-1.5 rounded-full bg-white/10"
          style={{ width: `${width}%` }}
        />
      ))}
    </div>
  </div>
);

/** The AI assistant's side of step 4. */
const AgentChat = () => (
  <div className="absolute inset-x-2 bottom-2 sm:bottom-auto sm:top-10 z-20 flex flex-col gap-2.5 rounded-xl border border-white/10 bg-[#111829]/95 p-3 shadow-2xl shadow-black/60 backdrop-blur rl-pop">
    <div className="flex items-center gap-2 text-[11px] font-semibold text-slate-300">
      <span className="flex h-5 w-5 items-center justify-center rounded-md bg-violet-400/15 text-violet-300">
        <Bot className="w-3.5 h-3.5" />
      </span>
      Your AI assistant
    </div>
    <p
      className="self-end max-w-[90%] rounded-lg rounded-br-sm bg-amber-400/15 px-2.5 py-1.5 text-[11px] text-amber-100 rl-pop"
      style={delayStyle("0.3s")}
    >
      Test my API and fix what&apos;s broken.
    </p>
    <p
      className="max-w-[95%] rounded-lg rounded-bl-sm bg-white/5 px-2.5 py-1.5 text-[11px] leading-relaxed text-slate-300 rl-pop"
      style={delayStyle("1s")}
    >
      I ran all 6 routes. Reading one post gave a 404 because the post number
      was read as text. I fixed that line.
    </p>
    <p
      className="flex items-center gap-1.5 text-[11px] font-semibold text-teal-300 rl-pop"
      style={delayStyle(FIX_DELAY)}
    >
      <Check className="w-3.5 h-3.5" /> Ran everything again: 6 of 6 passed
    </p>
  </div>
);

export default DemoWindow;
