import { routeLensQuestions } from "@/../utils/Data/routelens-data";
import SectionHeading from "./SectionHeading";

const CommonQuestions = () => (
  <section className="py-16 lg:py-24">
    <SectionHeading
      eyebrow="Sound familiar?"
      title="If you've ever wondered…"
    />

    <div className="mt-12 grid gap-5 md:grid-cols-2">
      {routeLensQuestions.map((item) => (
        <article
          key={item.question}
          className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-colors duration-300 hover:border-teal-300/30"
        >
          <h3 className="text-lg font-bold leading-snug text-white">
            {item.question}
          </h3>
          <p className="mt-3 leading-relaxed text-slate-400">
            <span className="font-semibold text-teal-300">RouteLens: </span>
            {item.answer}
          </p>
        </article>
      ))}
    </div>
  </section>
);

export default CommonQuestions;
