import { personalData } from "@/../utils/Data/PersonalData";
import { routeLensLinks } from "@/../utils/Data/routelens-data";
import { ArrowRight, Download } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

const ClosingCta = () => (
  <section className="flex flex-col gap-16 py-16 lg:py-24">
    {/* Who built it */}
    <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 rounded-3xl border border-white/10 bg-white/[0.02] p-8 text-center sm:flex-row sm:text-left">
      <Image
        src={personalData.profile}
        alt={personalData.name}
        width={96}
        height={96}
        sizes="96px"
        className="h-24 w-24 shrink-0 rounded-full border-2 border-amber-400/40 object-cover"
      />
      <div>
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-amber-400">
          Built by
        </p>
        <h3 className="mt-2 text-2xl font-black text-white">
          {personalData.name}
        </h3>
        <p className="mt-2 leading-relaxed text-slate-400">
          Full-stack AI developer. I built RouteLens to take the repetitive part
          out of testing an API, so you can spend that time building.
        </p>
        <div className="mt-4 flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm font-bold sm:justify-start">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-1.5 text-amber-300 hover:text-amber-200 transition-colors"
          >
            See my other work <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
          >
            Get in touch <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>

    {/* Final call to action */}
    <div className="relative overflow-hidden rounded-3xl border border-amber-400/20 bg-gradient-to-br from-amber-500/10 via-[#030014] to-teal-500/10 px-6 py-14 text-center sm:px-12">
      <div className="absolute -top-24 left-1/2 h-48 w-96 -translate-x-1/2 rounded-full bg-amber-500/20 blur-[100px] pointer-events-none" />
      <h2 className="relative text-3xl md:text-5xl font-black tracking-tighter text-white">
        Stop copying links into your API tool.
      </h2>
      <p className="relative mx-auto mt-4 max-w-xl text-lg text-slate-400">
        Let RouteLens read your code and test it for you.
      </p>
      <div className="relative mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
        <a
          href="#install"
          className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-300 to-orange-500 px-7 py-3.5 text-sm font-bold uppercase tracking-widest text-[#1a0d00] transition-transform hover:scale-105 active:scale-95"
        >
          <Download className="w-4 h-4" /> Install RouteLens
        </a>
        <a
          href={routeLensLinks.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-bold uppercase tracking-widest text-white transition-colors hover:border-amber-400/40 hover:bg-amber-400/10"
        >
          <FaGithub className="w-4 h-4" /> Star it on GitHub
        </a>
      </div>
    </div>
  </section>
);

export default ClosingCta;
