"use client";

import { motion } from "framer-motion";
import { ActionLink } from "@/components";
import type { HeroContent } from "@/data";

type HeroSectionProps = {
  content: HeroContent;
};

const transition = {
  duration: 0.6,
  ease: "easeOut",
} as const;

export function HeroSection({ content }: HeroSectionProps) {
  return (
    <section id="home" className="scroll-mt-24 py-16 sm:py-20">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={transition}
        className="relative overflow-hidden rounded-[2.4rem] border border-[var(--border)] bg-[rgba(22,17,15,0.92)] px-6 py-12 shadow-[0_28px_70px_rgba(0,0,0,0.28)] sm:px-10 lg:px-14 lg:py-16"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(203,92,50,0.14),transparent_24%),radial-gradient(circle_at_86%_18%,rgba(124,167,160,0.12),transparent_22%)]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-8 right-8 hidden w-px bg-[linear-gradient(180deg,transparent,rgba(243,230,210,0.12),transparent)] lg:block"
        />

        <div className="relative grid gap-10 lg:grid-cols-[minmax(0,1fr)_290px] lg:items-end">
          <div className="max-w-3xl text-left">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...transition, delay: 0.1 }}
              className="font-[family:var(--font-label)] text-[0.72rem] font-semibold uppercase tracking-[0.3em] text-[#d7a26f]"
            >
              {content.title}
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...transition, delay: 0.2 }}
              className="mt-6 max-w-4xl text-4xl font-semibold leading-[0.94] text-[var(--text-primary)] sm:text-6xl lg:text-[5.4rem]"
            >
              {content.name}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...transition, delay: 0.3 }}
              className="mt-6 max-w-2xl text-lg leading-8 text-[var(--text-secondary)] sm:text-xl"
            >
              {content.subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...transition, delay: 0.4 }}
              className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:flex-wrap"
            >
              {content.actions.map((action) => (
                <ActionLink
                  key={action.label}
                  href={action.href}
                  external={action.external}
                  variant={action.variant}
                  download={action.download}
                >
                  {action.label}
                </ActionLink>
              ))}
            </motion.div>
          </div>

          <motion.aside
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...transition, delay: 0.45 }}
            className="rounded-[1.9rem] border border-[var(--border)] bg-[rgba(32,25,23,0.86)] p-5 text-left shadow-[0_18px_40px_rgba(0,0,0,0.2)]"
          >
            <p className="font-[family:var(--font-label)] text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-[#d7a26f]">
              {content.note.label}
            </p>
            <p className="mt-4 text-2xl font-semibold leading-9 text-[var(--text-primary)]">
              {content.note.headline}
            </p>
            <div className="mt-6 space-y-3 border-t border-[var(--border)] pt-5">
              {content.note.items.map((note) => (
                <div
                  key={note.label}
                  className="flex items-center justify-between gap-4 font-[family:var(--font-label)] text-[0.68rem] uppercase tracking-[0.16em] text-[var(--text-secondary)]"
                >
                  <span>{note.label}</span>
                  <span className="text-right text-[#f0dfcb]">{note.value}</span>
                </div>
              ))}
            </div>
          </motion.aside>
        </div>
      </motion.div>
    </section>
  );
}
