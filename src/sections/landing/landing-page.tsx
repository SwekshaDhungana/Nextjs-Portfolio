import {
  ContentCard,
  Navbar,
  PageShell,
  SectionBlock,
} from "@/components";
import {
  homeContent,
  navigationItems,
  portfolioSections,
  siteConfig,
} from "@/data";

export function LandingPage() {
  return (
    <PageShell header={<Navbar brand={siteConfig.name} items={navigationItems} />}>
      <h1 className="sr-only">{siteConfig.name}</h1>

      <SectionBlock
        id="home"
        eyebrow={homeContent.eyebrow}
        title={homeContent.title}
        description={homeContent.description}
        className="flex min-h-[calc(100vh-5rem)] items-center"
      >
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {homeContent.highlights.map((highlight) => (
            <ContentCard
              key={highlight.title}
              title={highlight.title}
              description={highlight.description}
            />
          ))}
        </div>
      </SectionBlock>

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
