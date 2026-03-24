"use client";

import { motion, type HTMLMotionProps } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.06,
    },
  },
} as const;

const item = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: "easeOut",
    },
  },
} as const;

type StaggerGroupProps = HTMLMotionProps<"div"> & {
  amount?: number;
};

export function StaggerGroup({
  children,
  amount = 0.2,
  ...props
}: StaggerGroupProps) {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

type StaggerItemProps = HTMLMotionProps<"div">;

export function StaggerItem({ children, ...props }: StaggerItemProps) {
  return (
    <motion.div variants={item} {...props}>
      {children}
    </motion.div>
  );
}