import { integrationsData } from "@/../utils/Data/integrations-data";
import { IconType } from "react-icons";
import {
  SiAmazonwebservices,
  SiAnthropic,
  SiBitbucket,
  SiGithub,
  SiHuggingface,
  SiJira,
  SiNotion,
  SiOpenai,
  SiSlack,
  SiZapier,
} from "react-icons/si";
import Marquee from "../Marquee";
import SectionReveal from "../SectionReveal";

const INTEGRATION_ICONS: Record<string, IconType> = {
  slack: SiSlack,
  bitbucket: SiBitbucket,
  jira: SiJira,
  github: SiGithub,
  notion: SiNotion,
  zapier: SiZapier,
  openai: SiOpenai,
  claude: SiAnthropic,
  huggingface: SiHuggingface,
  // react-icons has no Bedrock mark, so the AWS logo stands in for it.
  bedrock: SiAmazonwebservices,
};

type Integration = { name: string; key: string; color: string };

const IntegrationCard = ({ integration }: { integration: Integration }) => {
  const Icon = INTEGRATION_ICONS[integration.key];

  return (
    <div className="mx-4 my-4 group">
      <div className="relative px-8 py-6 rounded-2xl border border-white/5 bg-white/[0.02] transition-colors duration-300 hover:border-red-500/30 hover:bg-white/[0.05] flex items-center gap-4 shadow-xl">
        <div
          className="text-3xl transition-transform duration-300 group-hover:scale-110 flex-shrink-0"
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
          <span className="text-sm font-bold text-white tracking-wide uppercase whitespace-nowrap group-hover:text-red-500 transition-colors">
            {integration.name}
          </span>
          <span className="text-[10px] text-slate-500 font-medium uppercase tracking-tighter">
            Integration
          </span>
        </div>
      </div>
    </div>
  );
};

const midpoint = Math.ceil(integrationsData.length / 2);
const firstRow = integrationsData.slice(0, midpoint);
const secondRow = integrationsData.slice(midpoint);

function Integrations() {
  return (
    <div id="integrations" className="relative py-16 lg:py-24 overflow-hidden">
      {/* Static background atmosphere */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-red-600/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-red-950/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative">
        <div className="flex flex-col items-center mb-12 lg:mb-16">
          <SectionReveal direction="down">
            <div className="flex flex-col items-center gap-4 text-center">
              <div className="flex items-center gap-3 text-red-500">
                <span className="w-8 h-px bg-red-500/50" />
                <span className="text-xs font-bold uppercase tracking-[0.5em]">
                  Ecosystem
                </span>
                <span className="w-8 h-px bg-red-500/50" />
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

        <div className="flex flex-col gap-6 lg:gap-8">
          <SectionReveal direction="right" delay={0.15}>
            <Marquee duration={38}>
              {firstRow.map((item) => (
                <IntegrationCard key={item.key} integration={item} />
              ))}
            </Marquee>
          </SectionReveal>

          <SectionReveal direction="left" delay={0.3}>
            <Marquee duration={34} direction="right">
              {secondRow.map((item) => (
                <IntegrationCard key={item.key} integration={item} />
              ))}
            </Marquee>
          </SectionReveal>
        </div>
      </div>
    </div>
  );
}

export default Integrations;
