import Image from "next/image";
import { FadeInView } from "@/components";
import { aboutSectionContent, heroContent } from "@/data";

export function AboutSection() {
  const collegeName = aboutSectionContent.college.name?.trim();
  const collegeBackdrop = collegeName ? collegeName.split(" ")[0]?.toUpperCase() : "COLLEGE";

  return (
    <section id="about" className="scroll-mt-24 py-16 sm:py-20">
      <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(300px,0.82fr)] lg:items-start">
        <FadeInView className="relative overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[rgba(27,21,19,0.94)] p-6 shadow-[0_22px_52px_rgba(0,0,0,0.22)] sm:p-8">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(203,92,50,0.12),transparent_28%),radial-gradient(circle_at_84%_16%,rgba(124,167,160,0.1),transparent_22%)]"
          />

          <div className="relative">
            <div className="flex flex-wrap gap-2 font-[family:var(--font-label)] text-[0.68rem] font-medium uppercase tracking-[0.28em] text-[var(--text-secondary)]">
              <span className="rounded-full border border-[var(--border)] px-3 py-1 text-[#d7a26f]">
                {aboutSectionContent.eyebrow}
              </span>
              <span className="rounded-full border border-[var(--border)] px-3 py-1">Who I am</span>
              <span className="rounded-full border border-[var(--border)] px-3 py-1">Where I studied</span>
            </div>

            <h2 className="mt-6 max-w-3xl text-3xl font-semibold text-[var(--text-primary)] sm:text-4xl lg:text-[2.8rem] lg:leading-[1.08]">
              {aboutSectionContent.title}
            </h2>

            <div className="mt-6 space-y-4">
              <article className="rounded-[1.6rem] border border-[var(--border)] bg-[linear-gradient(135deg,rgba(255,255,255,0.03),rgba(255,255,255,0.015))] p-5 sm:p-6">
                <p className="font-[family:var(--font-label)] text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-[#d7a26f]">
                  A little bit about me
                </p>
                <p className="mt-4 max-w-2xl text-base leading-8 text-[var(--text-secondary)] sm:text-lg">
                  {aboutSectionContent.intro}
                </p>
              </article>

              <article className="relative overflow-hidden rounded-[1.6rem] border border-[var(--border)] bg-[#161110] p-5 sm:p-6">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-2 bottom-0 font-[family:var(--font-heading)] text-[4.4rem] font-semibold tracking-[-0.08em] text-white/[0.04] sm:text-[5.4rem]"
                >
                  {collegeBackdrop}
                </div>
                <p className="font-[family:var(--font-label)] text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-[var(--text-secondary)]">
                  {aboutSectionContent.college.label}
                </p>
                <h3 className="mt-4 max-w-xl text-2xl font-semibold text-[var(--text-primary)] sm:text-[1.8rem]">
                  {aboutSectionContent.college.title}
                </h3>
                {collegeName ? (
                  <p className="mt-3 font-[family:var(--font-label)] text-[0.72rem] font-medium uppercase tracking-[0.22em] text-[#d7a26f]">
                    {collegeName}
                  </p>
                ) : null}
                <p className="mt-4 max-w-2xl text-base leading-8 text-[var(--text-secondary)] sm:text-lg">
                  {aboutSectionContent.college.description}
                </p>
              </article>
            </div>
          </div>
        </FadeInView>

        <FadeInView delay={0.12} className="relative lg:pt-8">
          <div
            aria-hidden="true"
            className="absolute -left-8 right-8 top-10 h-36 rounded-full bg-[#cb5c32]/18 blur-3xl"
          />
          <div className="relative overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[rgba(30,23,21,0.92)] p-4 shadow-[0_22px_52px_rgba(0,0,0,0.22)] sm:p-5">
            <div className="absolute right-4 top-4 rounded-full border border-[var(--border)] bg-black/20 px-3 py-1 font-[family:var(--font-label)] text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-[var(--text-secondary)]">
              {heroContent.name}
            </div>

            <div className="relative overflow-hidden rounded-[1.7rem] border border-[var(--border)] bg-[#0d0d13]">
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.06),transparent_28%,transparent_72%,rgba(203,92,50,0.12))]"
              />
              <Image
                src={aboutSectionContent.portrait.src}
                alt={aboutSectionContent.portrait.alt}
                width={900}
                height={1125}
                className="aspect-[4/5] h-auto w-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/78 to-transparent p-5 pt-20">
                <p className="font-[family:var(--font-label)] text-[0.68rem] font-semibold uppercase tracking-[0.32em] text-[#d7a26f]">
                  My corner of the internet
                </p>
                <p className="mt-3 text-2xl font-semibold text-[var(--text-primary)]">
                  {heroContent.name}
                </p>
                <p className="mt-2 text-sm leading-7 text-[#e5d8c4]">
                  {aboutSectionContent.portrait.caption}
                </p>
              </div>
            </div>
          </div>
        </FadeInView>
      </div>
    </section>
  );
}
