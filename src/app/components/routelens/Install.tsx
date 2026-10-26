import {
  routeLensInstallSteps,
  routeLensLinks,
  routeLensNpmCommands,
  routeLensRequirements,
} from "@/../utils/Data/routelens-data";
import { ArrowRight, Bot, Check, Download, Terminal } from "lucide-react";
import SectionHeading from "./SectionHeading";

const Install = () => (
  <section id="install" className="scroll-mt-24 py-16 lg:py-24">
    <SectionHeading
      eyebrow="Install"
      title="Up and running in two minutes"
      subtitle="RouteLens is on the VS Code Marketplace. Install it in one click, open your project and test every route."
    />

    <div className="mt-12 grid gap-8 lg:grid-cols-12">
      <ol className="lg:col-span-7 flex flex-col">
        {routeLensInstallSteps.map((item, index) => (
          <li key={item.title} className="relative flex gap-5 pb-8 last:pb-0">
            {index < routeLensInstallSteps.length - 1 && (
              <span className="absolute left-[19px] top-11 bottom-1 w-px bg-gradient-to-b from-amber-400/40 to-white/5" />
            )}
            <span className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-amber-400/30 bg-amber-400/10 text-sm font-black text-amber-300">
              {index + 1}
            </span>
            <div className="pt-1.5">
              <h3 className="text-lg font-bold text-white">{item.title}</h3>
              <p className="mt-1.5 leading-relaxed text-slate-400">
                {item.text}
              </p>
              {index === 0 && (
                <a
                  href={routeLensLinks.marketplace}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-amber-300 to-orange-500 px-5 py-2.5 text-xs font-bold uppercase tracking-widest text-[#1a0d00] transition-transform hover:scale-105 active:scale-95"
                >
                  <Download className="w-4 h-4" /> Get it on the Marketplace
                </a>
              )}
            </div>
          </li>
        ))}

        <li className="mt-8 flex items-center gap-3 rounded-2xl border border-teal-300/20 bg-teal-300/[0.05] px-5 py-4">
          <Check className="w-5 h-5 shrink-0 text-teal-300" />
          <p className="text-slate-300">
            <span className="font-bold text-white">That&apos;s it.</span> Open
            any route file and you&apos;ll see Send above each route.
          </p>
        </li>
      </ol>

      <aside className="lg:col-span-5 flex flex-col gap-5">
        <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
          <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500">
            What you need
          </h3>
          <ul className="mt-4 flex flex-col gap-3">
            {routeLensRequirements.map((requirement) => (
              <li
                key={requirement}
                className="flex items-center gap-2.5 text-slate-300"
              >
                <Check className="w-4 h-4 shrink-0 text-teal-300" />
                {requirement}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
          <h3 className="flex items-center gap-2 text-lg font-bold text-white">
            <Download className="w-5 h-5 text-teal-300" /> Using Cursor or
            VSCodium?
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-400">
            RouteLens is on Open VSX, the store they use. Search for{" "}
            <span className="font-semibold text-slate-200">
              RouteLens API Client
            </span>{" "}
            in the Extensions panel and click Install.
          </p>
          <a
            href={routeLensLinks.openVsx}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-amber-300 hover:text-amber-200 transition-colors"
          >
            Get it on Open VSX <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
          <h3 className="flex items-center gap-2 text-lg font-bold text-white">
            <Bot className="w-5 h-5 text-violet-300" /> Want your AI to help?
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-400">
            GitHub Copilot finds RouteLens on its own. For Claude Code or
            Cursor, open the Command Palette once and choose{" "}
            <span className="font-semibold text-slate-200">
              RouteLens: Connect an AI Agent
            </span>
            . Then ask it to test your API.
          </p>
        </div>
      </aside>

      <div className="lg:col-span-12 rounded-2xl border border-amber-400/20 bg-amber-400/[0.05] p-6">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white">
          <Terminal className="w-5 h-5 text-amber-300" /> Also on npm
        </h3>
        <ul className="mt-4 grid gap-4 sm:grid-cols-2">
          {routeLensNpmCommands.map((item) => (
            <li key={item.command}>
              <p className="text-sm text-slate-400">{item.label}</p>
              <code className="mt-1.5 block overflow-x-auto whitespace-nowrap rounded-lg border border-white/10 bg-black/30 px-3 py-2 font-mono text-xs text-slate-200">
                {item.command}
              </code>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default Install;
