"use client";
import { routeLensDemoSteps } from "@/../utils/Data/routelens-data";
import {
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
  RotateCcw,
} from "lucide-react";
import { CSSProperties, useEffect, useRef, useState } from "react";
import DemoWindow from "./DemoWindow";
import SectionHeading from "./SectionHeading";

const STEP_MS = 5500;
const LAST_STEP = routeLensDemoSteps.length - 1;

const RouteLensDemo = () => {
  const [step, setStep] = useState(0);
  const [playing, setPlaying] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const touchedRef = useRef(false);

  // Start playing the first time the demo scrolls into view, unless the
  // visitor already took over or prefers reduced motion.
  useEffect(() => {
    const el = sectionRef.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        if (!touchedRef.current) setPlaying(true);
        observer.disconnect();
      },
      { threshold: 0.35 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!playing) return;
    const timer = window.setTimeout(() => {
      const next = step + 1;
      setStep(next);
      if (next === LAST_STEP) setPlaying(false);
    }, STEP_MS);
    return () => window.clearTimeout(timer);
  }, [playing, step]);

  const goTo = (next: number) => {
    touchedRef.current = true;
    setPlaying(false);
    setStep(Math.min(Math.max(next, 0), LAST_STEP));
  };

  const togglePlay = () => {
    touchedRef.current = true;
    if (playing) {
      setPlaying(false);
      return;
    }
    if (step === LAST_STEP) setStep(0);
    setPlaying(true);
  };

  const current = routeLensDemoSteps[step];

  return (
    <section id="demo" className="scroll-mt-24 py-16 lg:py-24">
      <SectionHeading
        eyebrow="Demo"
        title="See it in action"
        subtitle="Five steps, about a minute. Click any step to jump to it."
      />

      <div
        ref={sectionRef}
        className="mt-12 grid gap-8 lg:grid-cols-12 lg:gap-10 items-start"
      >
        <div className="lg:col-span-5 flex flex-col gap-4">
          <ol className="flex flex-col gap-2">
            {routeLensDemoSteps.map((item, index) => {
              const isActive = index === step;
              // On small screens only the current step shows, so the
              // window stays in view while the demo plays.
              return (
                <li
                  key={item.title}
                  className={isActive ? undefined : "hidden lg:block"}
                >
                  <button
                    type="button"
                    onClick={() => goTo(index)}
                    aria-current={isActive ? "step" : undefined}
                    className={`relative w-full overflow-hidden rounded-xl border px-4 py-3 text-left transition-colors duration-300 ${
                      isActive
                        ? "border-amber-400/40 bg-amber-400/[0.07]"
                        : "border-white/5 bg-white/[0.02] hover:border-white/15 hover:bg-white/[0.04]"
                    }`}
                  >
                    <span className="flex items-center gap-3">
                      <span
                        className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-black transition-colors ${
                          isActive
                            ? "bg-amber-400 text-[#1a0d00]"
                            : index < step
                              ? "bg-teal-300/15 text-teal-300"
                              : "bg-white/5 text-slate-500"
                        }`}
                      >
                        {index + 1}
                      </span>
                      <span
                        className={`font-bold ${
                          isActive ? "text-white" : "text-slate-400"
                        }`}
                      >
                        {item.title}
                      </span>
                      <span className="ml-auto text-xs font-semibold text-slate-500 lg:hidden">
                        {index + 1} / {routeLensDemoSteps.length}
                      </span>
                    </span>
                    {isActive && (
                      <span className="mt-2 block pl-10 text-sm leading-relaxed text-slate-300 rl-pop">
                        {item.text}
                      </span>
                    )}
                    {isActive && playing && (
                      <span
                        key={step}
                        className="absolute bottom-0 left-0 h-0.5 w-full bg-gradient-to-r from-amber-300 to-orange-500 rl-progress"
                        style={
                          { "--rl-step-ms": `${STEP_MS}ms` } as CSSProperties
                        }
                      />
                    )}
                  </button>
                </li>
              );
            })}
          </ol>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => goTo(step - 1)}
              disabled={step === 0}
              aria-label="Previous step"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition-colors hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-30"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={togglePlay}
              className="flex h-10 flex-1 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 text-xs font-bold uppercase tracking-widest text-slate-200 transition-colors hover:bg-white/10"
            >
              {playing ? (
                <>
                  <Pause className="w-4 h-4" /> Pause
                </>
              ) : step === LAST_STEP ? (
                <>
                  <RotateCcw className="w-4 h-4" /> Watch again
                </>
              ) : (
                <>
                  <Play className="w-4 h-4" /> Play
                </>
              )}
            </button>
            <button
              type="button"
              onClick={() => goTo(step + 1)}
              disabled={step === LAST_STEP}
              aria-label="Next step"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition-colors hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-30"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <p className="sr-only" aria-live="polite">
            Step {step + 1} of {routeLensDemoSteps.length}: {current.title}.{" "}
            {current.text}
          </p>
        </div>

        <div className="lg:col-span-7 relative">
          <div className="absolute -inset-6 rounded-[2rem] bg-amber-500/10 blur-3xl pointer-events-none" />
          <div className="relative" aria-hidden="true">
            <DemoWindow step={step} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RouteLensDemo;
