"use client";

import { motion } from "framer-motion";
import type { ContactLink } from "@/data";

type ContactLinkCardProps = {
  link: ContactLink;
};

export function ContactLinkCard({ link }: ContactLinkCardProps) {
  const isExternal = !link.href.startsWith("mailto:");

  return (
    <motion.a
      href={link.href}
      title={link.value}
      aria-label={`${link.label}: ${link.value}`}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer noopener" : undefined}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.18, ease: "easeOut" }}
      className="inline-flex h-11 items-center justify-center rounded-full border border-[var(--border)] bg-[rgba(27,21,19,0.92)] px-5 font-[family:var(--font-label)] text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[var(--text-primary)] transition-colors hover:border-[#dd7b4d]/45 hover:bg-[#211917]"
    >
      {link.label}
    </motion.a>
  );
}
