import ClosingCta from "@/app/components/routelens/ClosingCta";
import CommonQuestions from "@/app/components/routelens/CommonQuestions";
import Faq from "@/app/components/routelens/Faq";
import Features from "@/app/components/routelens/Features";
import HowItWorks from "@/app/components/routelens/HowItWorks";
import Install from "@/app/components/routelens/Install";
import RouteLensDemo from "@/app/components/routelens/RouteLensDemo";
import RouteLensHero from "@/app/components/routelens/RouteLensHero";
import SectionReveal from "@/app/components/SectionReveal";
import type { Metadata } from "next";

const title = "RouteLens: test your whole API in one click";
const description =
  "RouteLens is a free VS Code extension that reads your Next.js or Express project, finds every API route and tests it for you. See the demo and install it in two minutes.";

export const metadata: Metadata = {
  title: `${title} | Harsh Dubey`,
  description,
  alternates: { canonical: "/routelens" },
  openGraph: {
    title,
    description,
    url: "/routelens",
    siteName: "Harsh Dubey Portfolio",
    images: [
      {
        url: "/routelens/og.jpg",
        width: 1200,
        height: 600,
        alt: "RouteLens: the API client that reads your code and tests it for you.",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/routelens/og.jpg"],
  },
};

const RouteLensPage = () => (
  <div className="mx-auto max-w-6xl px-0 sm:px-4 lg:px-8 overflow-x-clip">
    <RouteLensHero />

    <SectionReveal>
      <RouteLensDemo />
    </SectionReveal>

    <SectionReveal>
      <HowItWorks />
    </SectionReveal>

    <SectionReveal>
      <CommonQuestions />
    </SectionReveal>

    <SectionReveal>
      <Features />
    </SectionReveal>

    <SectionReveal>
      <Install />
    </SectionReveal>

    <SectionReveal>
      <Faq />
    </SectionReveal>

    <SectionReveal>
      <ClosingCta />
    </SectionReveal>
  </div>
);

export default RouteLensPage;
