import {
  routeLensLinks,
  routeLensSectionNav,
  routeLensTrustBadges,
} from "@/../utils/Data/routelens-data";
import { ArrowLeft, Check, Download, Play } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import RouteLensIcon from "./RouteLensIcon";

const RouteLensHero = () => (
  <section className="relative pt-8 pb-12 lg:pt-12 lg:pb-16">
    {/* Ambient glows — static, painted once. */}
    <div className="absolute top-10 left-1/4 w-72 h-72 bg-amber-500/10 blur-[120px] rounded-full pointer-events-none" />
    <div className="absolute top-40 right-1/4 w-80 h-80 bg-teal-500/10 blur-[130px] rounded-full pointer-events-none" />

    <Link
      href="/#projects"
      className="relative inline-flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-amber-300 transition-colors group"
    >
      <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
      Back to projects
    </Link>

    <div className="relative mx-auto mt-10 flex max-w-3xl flex-col items-center gap-7 text-center">
      <div className="animate-intro-up flex flex-wrap items-center justify-center gap-3">
        <span className="flex items-center gap-2.5">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-amber-300 to-orange-500 text-[#1a0d00] shadow-lg shadow-amber-500/20">
            <RouteLensIcon className="w-6 h-6" />
          </span>
          <span className="text-xl font-extrabold tracking-tight text-white">
            Route<span className="text-amber-300">Lens</span>
          </span>
        </span>
        <span className="rounded-full border border-amber-400/30 bg-amber-400/10 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-amber-300">
          Early preview
        </span>
      </div>

      <h1
        className="animate-intro-up text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tighter text-white"
        style={{ animationDelay: "0.1s" }}
      >
        Test your whole API{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-orange-500">
          in one click.
        </span>
      </h1>

      <p
        className="animate-intro-up max-w-2xl text-lg md:text-xl leading-relaxed text-slate-400"
        style={{ animationDelay: "0.2s" }}
      >
        RouteLens is a free VS Code extension that reads your project, finds
        every API route and tests it for you. No copying links, no writing
        requests by hand, no setup.
      </p>

      <div
        className="animate-intro-up flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto"
        style={{ animationDelay: "0.3s" }}
      >
        <a
          href="#demo"
          className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-300 to-orange-500 px-7 py-3.5 text-sm font-bold uppercase tracking-widest text-[#1a0d00] shadow-[0_0_30px_rgba(245,158,11,0.25)] transition-transform hover:scale-105 active:scale-95"
        >
          <Play className="w-4 h-4" /> Watch the demo
        </a>
        <a
          href="#install"
          className="flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-bold uppercase tracking-widest text-white transition-colors hover:border-amber-400/40 hover:bg-amber-400/10"
        >
          <Download className="w-4 h-4" /> How to install
        </a>
        <a
          href={routeLensLinks.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 rounded-xl px-5 py-3.5 text-sm font-bold text-slate-300 transition-colors hover:text-white"
        >
          <FaGithub className="w-4 h-4" /> GitHub
        </a>
      </div>

      <ul
        className="animate-intro-up flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-slate-400"
        style={{ animationDelay: "0.4s" }}
      >
        {routeLensTrustBadges.map((badge) => (
          <li key={badge} className="flex items-center gap-1.5">
            <Check className="w-4 h-4 text-teal-300" />
            {badge}
          </li>
        ))}
      </ul>
    </div>

    <div
      className="animate-intro-up relative mx-auto mt-14 max-w-5xl"
      style={{ animationDelay: "0.5s" }}
    >
      <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-r from-amber-500/20 via-orange-500/10 to-teal-500/20 blur-2xl pointer-events-none" />
      <Image
        src="/routelens/hero.webp"
        width={2048}
        height={1024}
        priority
        sizes="(max-width: 1024px) 100vw, 1024px"
        alt="RouteLens illustration: a friendly robot holds a big lens over a city of API routes at sunset, showing which routes pass and which one failed."
        className="relative w-full h-auto rounded-2xl border border-white/10 shadow-2xl"
      />
    </div>

    <nav
      aria-label="On this page"
      className="relative mt-12 flex flex-wrap justify-center gap-2"
    >
      {routeLensSectionNav.map((item) => (
        <a
          key={item.href}
          href={item.href}
          className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs font-bold uppercase tracking-widest text-slate-300 transition-colors hover:border-amber-400/40 hover:text-amber-300"
        >
          {item.label}
        </a>
      ))}
    </nav>
  </section>
);

export default RouteLensHero;
