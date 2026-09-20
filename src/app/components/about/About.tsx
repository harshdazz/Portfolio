import { personalData } from "@/../utils/Data/PersonalData";
import Image from "next/image";
import { User, Sparkles } from "lucide-react";
import SectionReveal from "../SectionReveal";

const stats = [
  { value: "1+", label: "Years Experience" },
  { value: "5+", label: "Projects Built" },
  { value: "20+", label: "Tech Stack" },
];

function About() {
  return (
    <div id="about" className="relative py-16 lg:py-24 overflow-hidden">
      {/* Static decorative glows */}
      <div className="absolute top-1/4 -left-20 w-[400px] h-[400px] bg-red-600/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-[400px] h-[400px] bg-red-900/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
          {/* Left Side: Content */}
          <div className="lg:col-span-7 flex flex-col gap-8 order-2 lg:order-1">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3 text-red-500 mb-2">
                <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center">
                  <User className="w-5 h-5" />
                </div>
                <span className="text-sm font-bold uppercase tracking-[0.3em]">
                  Who I Am
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
                AI Full Stack{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800">
                  Developer
                </span>
              </h2>
            </div>

            <SectionReveal direction="up">
              <div className="relative group p-8 lg:p-10 rounded-3xl border border-white/5 bg-white/[0.02] overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:rotate-12 transition-transform duration-700">
                  <Sparkles className="w-24 h-24 text-red-500" />
                </div>

                <p className="text-slate-300 text-lg lg:text-xl leading-relaxed text-justify font-medium italic">
                  {personalData.description}
                </p>

                {/* Decorative Accent */}
                <div className="absolute w-1 h-20 bg-gradient-to-b from-red-600 to-transparent left-0 top-10 rounded-full" />
              </div>
            </SectionReveal>

            <div className="flex flex-wrap gap-8 items-center mt-4">
              {stats.map((stat, i) => (
                <div key={stat.label} className="flex items-center gap-8">
                  {i > 0 && <div className="w-px h-10 bg-white/10" />}
                  <div className="flex flex-col">
                    <span className="text-3xl font-black text-white">
                      {stat.value}
                    </span>
                    <span className="text-xs text-slate-500 uppercase tracking-widest font-bold">
                      {stat.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Profile Image */}
          <div className="lg:col-span-5 order-1 lg:order-2">
            <SectionReveal direction="left">
              <div className="relative group">
                {/* Decorative Frames */}
                <div className="absolute -inset-4 border border-red-500/20 rounded-3xl group-hover:-inset-6 transition-all duration-500 opacity-50" />
                <div className="absolute -inset-8 border border-red-950/10 rounded-[40px] group-hover:-inset-12 transition-all duration-700 delay-75 opacity-30" />

                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border-2 border-white/10 shadow-[0_0_50px_rgba(239,68,68,0.15)] bg-[#030014]">
                  <Image
                    src={personalData.profile}
                    fill
                    alt={personalData.name}
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    quality={80}
                  />

                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-transparent to-transparent opacity-60" />

                  <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                    <p className="text-white font-bold text-center tracking-widest uppercase text-xs">
                      AI-Powered Developer
                    </p>
                  </div>
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
