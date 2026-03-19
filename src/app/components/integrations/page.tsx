"use client";
import { integrationsData } from "@/../utils/Data/integrations-data";
import SectionReveal from "../SectionReveal";
import Marquee from "react-fast-marquee";
import {
  SiSlack,
  SiBitbucket,
  SiJira,
  SiGithub,
  SiNotion,
  SiZapier,
  SiAirtable,
  SiDiscord,
  SiTrello,
  SiZoom,
  SiGooglesheets,
  SiLinear,
  SiHubspot,
  SiClickup,
  SiMake,
  SiOpenai,
  SiAnthropic,
} from "react-icons/si";
import { IconType } from "react-icons";

const getIntegrationIcon = (key: string): IconType | null => {
  switch (key) {
    case "slack":
      return SiSlack;
    case "bitbucket":
      return SiBitbucket;
    case "jira":
      return SiJira;
    case "github":
      return SiGithub;
    case "notion":
      return SiNotion;
    case "zapier":
      return SiZapier;
    case "airtable":
      return SiAirtable;
    case "discord":
      return SiDiscord;
    case "trello":
      return SiTrello;
    case "zoom":
      return SiZoom;
    case "googlesheets":
      return SiGooglesheets;
    case "linear":
      return SiLinear;
    case "hubspot":
      return SiHubspot;
    case "clickup":
      return SiClickup;
    case "make":
      return SiMake;
    case "openai":
      return SiOpenai;
    case "claude":
      return SiAnthropic;
    default:
      return null;
  }
};

type Integration = { name: string; key: string; color: string };

const IntegrationCard = ({ integration }: { integration: Integration }) => {
  const Icon = getIntegrationIcon(integration.key);

  return (
    <div className="mx-4 my-4 group">
      <div className="relative px-8 py-6 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-3xl transition-all duration-500 hover:border-red-500/30 hover:bg-white/[0.05] flex items-center gap-4 shadow-xl">
        {/* Icon or text badge */}
        <div
          className="text-3xl transition-all duration-500 group-hover:scale-110 flex-shrink-0"
          style={{ color: integration.color }}
        >
          {Icon ? (
            <Icon />
          ) : (
            <span
              className="text-xs font-black px-2 py-1 rounded-lg border"
              style={{
                color: integration.color,
                borderColor: integration.color,
              }}
            >
              {integration.name.toUpperCase()}
            </span>
          )}
        </div>

        <div className="flex flex-col">
          <span className="text-sm font-bold text-white tracking-wide uppercase group-hover:text-red-500 transition-colors whitespace-nowrap">
            {integration.name}
          </span>
          <span className="text-[10px] text-slate-500 font-medium uppercase tracking-tighter">
            Integration
          </span>
        </div>

        {/* Hover glow */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500 pointer-events-none blur-xl"
          style={{ backgroundColor: integration.color }}
        />
      </div>
    </div>
  );
};

function Integrations() {
  const firstRow = integrationsData.slice(
    0,
    Math.ceil(integrationsData.length / 2),
  );
  const secondRow = integrationsData.slice(
    Math.ceil(integrationsData.length / 2),
  );

  return (
    <div id="integrations" className="relative py-24 lg:py-48 overflow-hidden">
      {/* Background atmosphere */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-red-600/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-red-950/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative">
        {/* Heading */}
        <div className="flex flex-col items-center mb-16 lg:mb-24">
          <SectionReveal direction="down">
            <div className="flex flex-col items-center gap-4 text-center">
              <div className="flex items-center gap-3 text-red-500">
                <span className="w-8 h-[1px] bg-red-500/50" />
                <span className="text-xs font-bold uppercase tracking-[0.5em]">
                  Ecosystem
                </span>
                <span className="w-8 h-[1px] bg-red-500/50" />
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter">
                Seamless{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800">
                  Integrations
                </span>
              </h2>
              <p className="text-slate-400 text-lg max-w-2xl leading-relaxed">
                Connecting AI agents with the tools you already use — automating
                workflows end-to-end so your stack works smarter, not harder.
              </p>
            </div>
          </SectionReveal>
        </div>

        {/* Dual Marquee */}
        <div className="flex flex-col gap-6 lg:gap-8">
          <SectionReveal direction="right" delay={0.2}>
            <Marquee speed={40} gradient={false} pauseOnHover={true}>
              {firstRow.map((item, i) => (
                <IntegrationCard key={`row1-${i}`} integration={item} />
              ))}
            </Marquee>
          </SectionReveal>

          <SectionReveal direction="left" delay={0.4}>
            <Marquee
              speed={35}
              gradient={false}
              pauseOnHover={true}
              direction="right"
            >
              {secondRow.map((item, i) => (
                <IntegrationCard key={`row2-${i}`} integration={item} />
              ))}
            </Marquee>
          </SectionReveal>
        </div>
      </div>
    </div>
  );
}

export default Integrations;
