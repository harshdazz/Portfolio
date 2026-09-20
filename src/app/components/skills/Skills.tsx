import { skillsData } from "@/../utils/Data/skills";
import { getSkillIcon, getSkillColor } from "@/../utils/skill-icons";
import { CSSProperties } from "react";
import Marquee from "../Marquee";
import SectionReveal from "../SectionReveal";

const SkillItem = ({ skill }: { skill: string }) => {
  const Icon = getSkillIcon(skill);
  const color = getSkillColor(skill);

  return (
    <div className="mx-4 my-4 group">
      <div className="relative px-8 py-6 rounded-2xl border border-white/5 bg-white/[0.02] transition-colors duration-300 hover:border-red-500/30 hover:bg-white/[0.05] flex items-center gap-4 shadow-xl">
        <div
          className="text-3xl transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_10px_var(--icon-color)]"
          style={{ "--icon-color": color } as CSSProperties}
        >
          <Icon style={{ color }} />
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-bold text-white tracking-wide uppercase whitespace-nowrap group-hover:text-red-500 transition-colors">
            {skill}
          </span>
          <span className="text-[10px] text-slate-500 font-medium uppercase tracking-tighter">
            Technology
          </span>
        </div>
      </div>
    </div>
  );
};

const midpoint = Math.ceil(skillsData.length / 2);
const firstHalf = skillsData.slice(0, midpoint);
const secondHalf = skillsData.slice(midpoint);

function Skills() {
  return (
    <div id="skills" className="relative z-10 py-16 lg:py-24 overflow-hidden">
      {/* Static background atmosphere */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-red-600/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-red-950/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative">
        <div className="flex flex-col items-center mb-12 lg:mb-16">
          <SectionReveal direction="down">
            <div className="flex flex-col items-center gap-4">
              <div className="flex items-center gap-3 text-red-500">
                <span className="w-8 h-px bg-red-500/50" />
                <span className="text-xs font-bold uppercase tracking-[0.5em]">
                  Inventory
                </span>
                <span className="w-8 h-px bg-red-500/50" />
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter text-center">
                The{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800">
                  Tech Stack
                </span>
              </h2>
            </div>
          </SectionReveal>
        </div>

        <div className="flex flex-col gap-6 lg:gap-8 relative">
          <SectionReveal direction="right" delay={0.15}>
            <Marquee duration={44}>
              {firstHalf.map((skill) => (
                <SkillItem key={skill} skill={skill} />
              ))}
            </Marquee>
          </SectionReveal>

          <SectionReveal direction="left" delay={0.3}>
            <Marquee duration={43} direction="right">
              {secondHalf.map((skill) => (
                <SkillItem key={skill} skill={skill} />
              ))}
            </Marquee>
          </SectionReveal>
        </div>
      </div>
    </div>
  );
}

export default Skills;
