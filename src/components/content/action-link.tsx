"use client";

import { motion } from "framer-motion";

type ActionLinkProps = {
  href: string;
  children: React.ReactNode;
  external?: boolean;
  variant?: "primary" | "secondary";
  download?: boolean | string;
};

export function ActionLink({
  href,
  children,
  external = false,
  variant = "primary",
  download,
}: ActionLinkProps) {
  const classes =
    variant === "primary"
      ? "border border-[#dd7b4d]/60 bg-[var(--accent)] text-[#1b120f] shadow-[0_16px_36px_rgba(203,92,50,0.24)] hover:bg-[#dc6f42]"
      : "border border-[var(--border)] bg-white/[0.03] text-[var(--text-primary)] hover:border-[#dd7b4d]/45 hover:bg-white/[0.06]";

  return (
    <motion.a
      href={href}
      // download={download}
      // target={external ? "_blank" : undefined}
      // rel={external ? "noreferrer noopener" : undefined}
      download={download && !external ? download : undefined} // only add download if not external
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer noopener" : undefined}
      whileHover={{ y: -2, scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
      transition={{ duration: 0.18, ease: "easeOut" }}
      className={`inline-flex h-12 w-full items-center justify-center rounded-full px-6 font-[family:var(--font-label)] text-[0.72rem] font-semibold uppercase tracking-[0.18em] backdrop-blur-sm transition-colors sm:w-auto ${classes}`}
    >
      {children}
    </motion.a>
  );
}
