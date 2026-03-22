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
        className="flex min-h-[calc(100vh-6rem)] items-center justify-center rounded-[2rem] border border-zinc-200 bg-white px-6 py-16 text-center shadow-sm shadow-zinc-950/5 sm:px-10 lg:px-16"
      >
        <div className="mx-auto max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...transition, delay: 0.1 }}
            className="text-sm font-semibold uppercase tracking-[0.3em] text-zinc-500"
          >
            {content.title}
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...transition, delay: 0.2 }}
            className="mt-6 text-4xl font-bold tracking-tight text-zinc-950 sm:text-6xl lg:text-7xl"
          >
            {content.name}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...transition, delay: 0.3 }}
            className="mt-6 text-lg leading-8 text-zinc-600 sm:text-xl"
          >
            {content.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...transition, delay: 0.4 }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            {content.actions.map((action) => (
              <ActionLink
                key={action.label}
                href={action.href}
                external={action.external}
                variant={action.variant}
              >
                {action.label}
              </ActionLink>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
