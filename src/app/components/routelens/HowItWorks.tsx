import { routeLensHowItWorks } from "@/../utils/Data/routelens-data";
import SectionHeading from "./SectionHeading";

const HowItWorks = () => (
  <section id="how-it-works" className="scroll-mt-24 py-16 lg:py-24">
    <SectionHeading
      eyebrow="How it works"
      title="Open. Click. Done."
      subtitle="No setup files, no terminal, nothing to configure."
    />

    <ol className="mt-12 grid gap-6 md:grid-cols-3">
      {routeLensHowItWorks.map((item, index) => (
        <li
          key={item.title}
          className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-7 transition-colors duration-300 hover:border-amber-400/30"
        >
          <span className="absolute -right-2 -top-6 text-[7rem] font-black leading-none text-white/[0.03] select-none">
            {index + 1}
          </span>
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-400/10 text-sm font-black text-amber-300 border border-amber-400/20">
            0{index + 1}
          </span>
          <h3 className="mt-5 text-2xl font-black text-white">{item.title}</h3>
          <p className="mt-2 leading-relaxed text-slate-400">{item.text}</p>
        </li>
      ))}
    </ol>
  </section>
);

export default HowItWorks;
