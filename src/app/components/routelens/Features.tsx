import { routeLensFeatures } from "@/../utils/Data/routelens-data";
import {
  Bot,
  FileText,
  KeyRound,
  ListChecks,
  Power,
  RefreshCw,
  Route,
  ShieldCheck,
  WandSparkles,
  type LucideIcon,
} from "lucide-react";
import SectionHeading from "./SectionHeading";

const FEATURE_ICONS: Record<string, LucideIcon> = {
  setup: WandSparkles,
  routes: Route,
  requests: FileText,
  testAll: ListChecks,
  onSave: RefreshCw,
  server: Power,
  login: KeyRound,
  ai: Bot,
  private: ShieldCheck,
};

const Features = () => (
  <section id="features" className="scroll-mt-24 py-16 lg:py-24">
    <SectionHeading
      eyebrow="Features"
      title="Everything it does for you"
      subtitle="The boring parts of testing an API, handled. You keep building."
    />

    <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {routeLensFeatures.map((feature) => {
        const Icon = FEATURE_ICONS[feature.key];
        return (
          <article
            key={feature.key}
            className="group rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-colors duration-300 hover:border-amber-400/30 hover:bg-amber-400/[0.03]"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-amber-400/20 bg-amber-400/10 text-amber-300 transition-colors group-hover:bg-amber-400/20">
              <Icon className="w-5 h-5" />
            </span>
            <h3 className="mt-5 text-lg font-bold text-white">
              {feature.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-400">
              {feature.text}
            </p>
          </article>
        );
      })}
    </div>
  </section>
);

export default Features;
