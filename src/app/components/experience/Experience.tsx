import { experiences } from "@/../utils/Data/experience";
import { Calendar, Building2 } from "lucide-react";

function Experience() {
  return (
    <div
      id="experience"
      className="relative z-10 py-16 lg:py-24 overflow-hidden"
    >
      {/* Static decorative glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="flex justify-center mb-12 lg:mb-16">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-gradient-to-r from-transparent to-red-600" />
          <span className="bg-[#030014] border border-red-600/30 w-fit text-white p-3 px-8 text-2xl font-bold rounded-full shadow-[0_0_20px_rgba(220,38,38,0.2)]">
            Professional Journey
          </span>
          <span className="w-24 h-[2px] bg-gradient-to-l from-transparent to-red-600" />
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 relative flex flex-col gap-10">
        {experiences.map((exp) => (
          <article
            key={exp.id}
            className="relative p-6 sm:p-8 lg:p-10 rounded-3xl border border-white/10 bg-white/[0.02] overflow-hidden"
          >
            {/* Decorative Accent */}
            <div className="absolute w-1 h-16 bg-gradient-to-b from-red-600 to-transparent left-0 top-10 rounded-full" />

            <header className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 shrink-0 rounded-xl bg-red-500/10 border border-red-600/20 flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-red-500" />
                </div>
                <div>
                  <h3 className="text-xl lg:text-2xl font-bold text-white">
                    {exp.title}
                  </h3>
                  <p className="text-red-500 font-semibold">{exp.company}</p>
                </div>
              </div>

              <div className="w-fit shrink-0 bg-white/5 border border-white/10 px-4 py-2 rounded-full flex items-center gap-2 text-slate-400 text-sm font-medium">
                <Calendar className="w-4 h-4 text-red-600" />
                {exp.duration}
              </div>
            </header>

            <p className="mt-6 text-slate-400 leading-relaxed italic">
              {exp.summary}
            </p>

            <ul className="mt-8 grid gap-x-10 gap-y-6 md:grid-cols-2">
              {exp.highlights.map((item) => (
                <li
                  key={item.title}
                  className="border-l-2 border-white/10 pl-4 hover:border-red-600 transition-colors duration-300"
                >
                  <h4 className="text-white font-semibold text-sm lg:text-base">
                    {item.title}
                  </h4>
                  <p className="mt-1 text-slate-400 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </li>
              ))}
            </ul>

            <div className="mt-8 pt-6 border-t border-white/5 flex flex-wrap gap-2">
              {exp.stack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-[11px] font-bold bg-white/5 border border-white/10 text-slate-400 rounded-lg"
                >
                  {tech}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export default Experience;
