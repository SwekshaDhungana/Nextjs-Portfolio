"use client";

import { motion } from "framer-motion";
import type { SkillGroup } from "@/data";

type SkillGroupCardProps = {
  group: SkillGroup;
};

export function SkillGroupCard({ group }: SkillGroupCardProps) {
  return (
    <motion.article
      whileHover={{ y: -3, scale: 1.01 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="rounded-[1.75rem] border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[0_16px_34px_rgba(0,0,0,0.2)] transition-colors hover:border-[#7ca7a0]/45"
    >
      <p className="font-[family:var(--font-label)] text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-[#d7a26f]">
        {group.category}
      </p>
      <div className="mt-5 flex flex-wrap gap-2">
        {group.items.map((skill) => (
          <span
            key={skill}
            className="rounded-full border border-[var(--border)] bg-[#211917] px-3 py-1.5 font-[family:var(--font-label)] text-[0.68rem] uppercase tracking-[0.16em] text-[#eadfce]"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.article>
  );
}
