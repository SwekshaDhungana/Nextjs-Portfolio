"use client";

import { motion, type HTMLMotionProps } from "framer-motion";

type FadeInViewProps = HTMLMotionProps<"div"> & {
  delay?: number;
  y?: number;
  amount?: number;
};

export function FadeInView({
  children,
  delay = 0,
  y = 24,
  amount = 0.2,
  transition,
  ...props
}: FadeInViewProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={transition ?? { duration: 0.5, ease: "easeOut", delay }}
      {...props}
    >
      {children}
    </motion.div>
  );
}