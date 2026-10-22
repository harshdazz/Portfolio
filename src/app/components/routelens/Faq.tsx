import { routeLensFaq } from "@/../utils/Data/routelens-data";
import { ChevronDown } from "lucide-react";
import SectionHeading from "./SectionHeading";

const Faq = () => (
  <section id="faq" className="scroll-mt-24 py-16 lg:py-24">
    <SectionHeading eyebrow="FAQ" title="Questions" />

    <div className="mx-auto mt-12 flex max-w-3xl flex-col gap-3">
      {routeLensFaq.map((item, index) => (
        <details
          key={item.question}
          open={index === 0}
          className="group rounded-2xl border border-white/10 bg-white/[0.02] transition-colors open:border-amber-400/30 open:bg-amber-400/[0.03]"
        >
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 font-bold text-white [&::-webkit-details-marker]:hidden">
            {item.question}
            <ChevronDown className="w-5 h-5 shrink-0 text-slate-500 transition-transform duration-300 group-open:rotate-180 group-open:text-amber-300" />
          </summary>
          <p className="px-6 pb-6 -mt-1 leading-relaxed text-slate-400">
            {item.answer}
          </p>
        </details>
      ))}
    </div>
  </section>
);

export default Faq;
