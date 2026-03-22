import { PageShell } from "@/components";
import { siteConfig } from "@/data";

export function LandingPage() {
  return (
    <PageShell>
      <h1 className="sr-only">{siteConfig.name}</h1>
      <section
        aria-label="Landing page content"
        className="min-h-[calc(100vh-8rem)]"
      />
    </PageShell>
  );
}
