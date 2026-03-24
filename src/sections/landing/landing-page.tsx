import { Navbar, PageShell } from "@/components";
import { heroContent, navigationItems, siteConfig } from "@/data";
import { AboutSection } from "./about-section";
import { ContactSection } from "./contact-section";
import { HeroSection } from "./hero-section";
import { ProjectsSection } from "./projects-section";
import { SkillsSection } from "./skills-section";

export function LandingPage() {
  return (
    <PageShell header={<Navbar brand={siteConfig.name} items={navigationItems} />}>
      <h1 className="sr-only">{siteConfig.name}</h1>
      <HeroSection content={heroContent} />
      <ProjectsSection />
      <SkillsSection />
      <AboutSection />
      <ContactSection />
    </PageShell>
  );
}