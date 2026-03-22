import {
  ContentCard,
  Navbar,
  PageShell,
  SectionBlock,
} from "@/components";
import {
  heroContent,
  navigationItems,
  portfolioSections,
  siteConfig,
} from "@/data";
import { HeroSection } from "./hero-section";

export function LandingPage() {
  return (
    <PageShell header={<Navbar brand={siteConfig.name} items={navigationItems} />}>
      <h1 className="sr-only">{siteConfig.name}</h1>
      <HeroSection content={heroContent} />

      {portfolioSections.map((section) => (
        <SectionBlock
          key={section.id}
          id={section.id}
          eyebrow={section.eyebrow}
          title={section.title}
          description={section.description}
          className="border-t border-zinc-200"
        >
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {section.cards.map((card) => (
              <ContentCard
                key={`${section.id}-${card.title}`}
                title={card.title}
                description={card.description}
              />
            ))}
          </div>
        </SectionBlock>
      ))}
    </PageShell>
  );
}
