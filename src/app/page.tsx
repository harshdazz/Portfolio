import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Experience from "./components/experience/Experience";
import HeroSection from "./components/hero-section/HeroSection";
import Integrations from "./components/integrations/Integrations";
import Projects from "./components/projects/Projects";
import Skills from "./components/skills/Skills";
import SectionReveal from "./components/SectionReveal";

export default function Home() {
  return (
    <div className="container">
      <HeroSection />

      <SectionReveal>
        <About />
      </SectionReveal>

      <SectionReveal>
        <Experience />
      </SectionReveal>

      <SectionReveal>
        <Skills />
      </SectionReveal>

      <SectionReveal>
        <Integrations />
      </SectionReveal>

      <SectionReveal>
        <Projects />
      </SectionReveal>

      <SectionReveal>
        <Contact />
      </SectionReveal>
    </div>
  );
}
