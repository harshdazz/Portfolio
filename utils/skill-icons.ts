import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiFirebase,
  SiGit,
  SiFigma,
  SiBootstrap,
  SiMui,
  SiCanva,
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiDocker,
  SiVercel,
  SiGooglegemini,
  SiOpenai,
  SiLangchain,
  SiStripe,
  SiClerk,
  SiPostman,
  SiFreelancer,
} from "react-icons/si";
import { IconType } from "react-icons";

export const getSkillIcon = (skill: string): IconType => {
  const s = skill.toLowerCase();

  if (s.includes("html")) return SiHtml5;
  if (s.includes("css") && !s.includes("tailwind")) return SiCss3;
  if (s.includes("tailwind")) return SiTailwindcss;
  if (s.includes("javascript") || s === "js") return SiJavascript;
  if (s.includes("typescript") || s === "ts") return SiTypescript;
  if (s.includes("react")) return SiReact;
  if (s.includes("next")) return SiNextdotjs;
  if (s.includes("express")) return SiExpress;
  if (s.includes("node")) return SiNodedotjs;
  if (s.includes("mongodb")) return SiMongodb;
  if (s.includes("mysql")) return SiMysql;
  if (s.includes("firebase")) return SiFirebase;
  if (s.includes("docker")) return SiDocker;
  if (s.includes("git")) return SiGit;
  if (s.includes("figma")) return SiFigma;
  if (s.includes("bootstrap")) return SiBootstrap;
  if (s.includes("material") || s.includes("mui")) return SiMui;
  if (s.includes("canva")) return SiCanva;
  if (s.includes("illustrator")) return SiAdobeillustrator;
  if (s.includes("photoshop")) return SiAdobephotoshop;
  if (s.includes("vercel")) return SiVercel;
  if (s.includes("gemini")) return SiGooglegemini;
  if (s.includes("openai")) return SiOpenai;
  if (s.includes("langchain")) return SiLangchain;
  if (s.includes("stripe")) return SiStripe;
  if (s.includes("clerk")) return SiClerk;
  if (s.includes("rest") || s.includes("api")) return SiPostman;

  return SiFreelancer;
};

export const getSkillColor = (skill: string): string => {
  const s = skill.toLowerCase();

  if (s.includes("html")) return "#E34F26";
  if (s.includes("css") && !s.includes("tailwind")) return "#1572B6";
  if (s.includes("tailwind")) return "#06B6D4";
  if (s.includes("javascript") || s === "js") return "#F7DF1E";
  if (s.includes("typescript") || s === "ts") return "#3178C6";
  if (s.includes("react")) return "#61DAFB";
  if (s.includes("next")) return "#ffffff";
  if (s.includes("express")) return "#ffffff";
  if (s.includes("node")) return "#339933";
  if (s.includes("mongodb")) return "#47A248";
  if (s.includes("mysql")) return "#4479A1";
  if (s.includes("firebase")) return "#FFCA28";
  if (s.includes("docker")) return "#2496ED";
  if (s.includes("git")) return "#F05032";
  if (s.includes("figma")) return "#F24E1E";
  if (s.includes("bootstrap")) return "#7952B3";
  if (s.includes("material") || s.includes("mui")) return "#007FFF";
  if (s.includes("canva")) return "#00C4CC";
  if (s.includes("vercel")) return "#ffffff";
  if (s.includes("gemini")) return "#4285F4";
  if (s.includes("openai")) return "#10A37F";
  if (s.includes("langchain")) return "#1C3C3C";
  if (s.includes("stripe")) return "#635BFF";
  if (s.includes("clerk")) return "#6C47FF";
  if (s.includes("rest") || s.includes("api")) return "#FF6C37";

  return "#ef4444";
};
