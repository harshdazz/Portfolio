import { personalData } from "@/../utils/Data/PersonalData";
import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaTwitterSquare } from "react-icons/fa";
import { RiContactsFill } from "react-icons/ri";
import { SiLeetcode } from "react-icons/si";
import ResumeViewer from "./ResumeViewer";

const socials = [
  { href: personalData.github, Icon: BsGithub, label: "GitHub" },
  { href: personalData.linkedIn, Icon: BsLinkedin, label: "LinkedIn" },
  { href: personalData.leetcode, Icon: SiLeetcode, label: "LeetCode" },
  { href: personalData.twitter, Icon: FaTwitterSquare, label: "Twitter" },
].filter((social) => Boolean(social.href));

const codeLines = [
  <>
    <span className="text-red-500">const</span>{" "}
    <span className="text-white">developer</span> = {"{"}
  </>,
  <>
    <span className="text-slate-200">name:</span>{" "}
    <span className="text-red-300">&apos;Harsh Dubey&apos;</span>,
  </>,
  <>
    <span className="text-slate-200">focus:</span>{" "}
    <span className="text-red-300">&apos;AI + Fullstack&apos;</span>,
  </>,
  <>
    <span className="text-slate-200">skills:</span> [
    <span className="text-red-300">
      &apos;NextJS&apos;, &apos;OpenAI&apos;, &apos;LangChain&apos;
    </span>
    ],
  </>,
  <>
    <span className="text-slate-200">passionate:</span>{" "}
    <span className="text-red-600">true</span>,
  </>,
  <>
    <span className="text-slate-200">motto:</span>{" "}
    <span className="text-red-400">&quot;Build Smarter with AI&quot;</span>
  </>,
  <>{"};"}</>,
];

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center py-12 lg:py-24 overflow-hidden">
      {/* Ambient glows — static, painted once. */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-red-600/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-900/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center px-4 md:px-8 relative z-10 w-full max-w-7xl mx-auto">
        {/* Left Side: Content */}
        <div className="order-2 lg:order-1 flex flex-col items-start gap-8">
          <div className="flex flex-col gap-4">
            <span className="animate-intro-left px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-500 text-xs font-bold tracking-[0.3em] w-fit">
              WELCOME TO MY UNIVERSE
            </span>
            <h1
              className="animate-intro-up text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1]"
              style={{ animationDelay: "0.15s" }}
            >
              Crafting{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800">
                Digital
              </span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-800 to-red-950">
                Masterpieces
              </span>
            </h1>
            <p
              className="animate-intro-up text-lg md:text-xl text-slate-400 max-w-xl leading-relaxed font-medium"
              style={{ animationDelay: "0.3s" }}
            >
              I&apos;m{" "}
              <span className="text-white font-bold">{personalData.name}</span>,
              a professional
              <span className="text-red-500 ml-2 font-bold">
                {personalData.designation}
              </span>
              <br />
              building intelligent, AI-powered web applications that ship to
              production.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <div
              className="animate-intro-up flex items-center gap-4"
              style={{ animationDelay: "0.45s" }}
            >
              {socials.map(({ href, Icon, label }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  aria-label={label}
                  className="p-3 rounded-xl bg-white/5 border border-white/10 text-white hover:text-red-500 hover:border-red-500/50 hover:-translate-y-1 transition-all duration-300 shadow-xl"
                >
                  <Icon size={24} />
                </Link>
              ))}
            </div>

            <div
              className="animate-intro-up flex flex-wrap gap-4"
              style={{ animationDelay: "0.55s" }}
            >
              <Link
                href="/#contact"
                className="group relative px-8 py-4 rounded-2xl bg-gradient-to-r from-red-600 to-red-900 text-white font-bold uppercase tracking-wider overflow-hidden transition-transform hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(239,68,68,0.3)]"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <span className="relative flex items-center gap-2">
                  Let&apos;s Collaborate <RiContactsFill />
                </span>
              </Link>

              {personalData.resume && (
                <ResumeViewer
                  src={personalData.resume}
                  fileName="Harsh_Dubey_Resume.pdf"
                />
              )}
            </div>
          </div>
        </div>

        {/* Right Side: Code Card */}
        <div className="order-1 lg:order-2 flex justify-center">
          <div className="w-full max-w-[550px] animate-intro-right">
            <div className="relative rounded-3xl border border-white/10 bg-[#030014]/80 overflow-hidden shadow-2xl">
              {/* Card Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-white/5">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-red-400/50" />
                  <div className="w-3 h-3 rounded-full bg-red-300/20" />
                </div>
                <div className="text-xs font-mono text-slate-500 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-500" />
                  Portfolio.ts
                </div>
              </div>

              <div className="p-6 lg:p-10">
                <code className="font-mono text-xs md:text-sm lg:text-base leading-relaxed">
                  {codeLines.map((line, i) => (
                    <div key={i} className="flex gap-4">
                      <span className="text-slate-600 italic">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <p className={i > 0 && i < 6 ? "ml-4" : undefined}>
                        {line}
                      </p>
                    </div>
                  ))}
                  <div className="flex gap-4 mt-4">
                    <span className="text-slate-600 italic">08</span>
                    <p>
                      <span className="text-red-500">developer</span>.
                      <span className="text-white">showcase</span>();
                    </p>
                  </div>
                </code>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
