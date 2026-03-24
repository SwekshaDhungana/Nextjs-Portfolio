"use client";

import { motion } from "framer-motion";
import type { Project } from "@/data";
import { ActionLink } from "./action-link";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.article
      whileHover={{ y: -4, scale: 1.01 }}
      transition={{ duration: 0.22, ease: "easeOut" }}
      className="flex h-full flex-col rounded-[1.9rem] border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[0_18px_42px_rgba(0,0,0,0.22)] transition-colors hover:border-[#dd7b4d]/45"
    >
      <div className="flex-1">
        <p className="font-[family:var(--font-label)] text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-[#d7a26f]">
          Case Study
        </p>
        <h3 className="mt-4 text-2xl font-semibold text-[var(--text-primary)]">
          {project.title}
        </h3>

        <div className="mt-5 space-y-4 text-sm leading-7 text-[var(--text-secondary)]">
          <p>
            <span className="font-[family:var(--font-label)] text-[0.68rem] uppercase tracking-[0.22em] text-[var(--text-primary)]">
              Problem
            </span>
            <span className="ml-3">{project.problem}</span>
          </p>
          <p>
            <span className="font-[family:var(--font-label)] text-[0.68rem] uppercase tracking-[0.22em] text-[var(--text-primary)]">
              Solution
            </span>
            <span className="ml-3">{project.solution}</span>
          </p>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-[var(--border)] bg-[#211917] px-3 py-1 font-[family:var(--font-label)] text-[0.68rem] uppercase tracking-[0.16em] text-[#e5d8c4]"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <ActionLink href={project.liveUrl} external>
          Live Link
        </ActionLink>
        <ActionLink href={project.githubUrl} external variant="secondary">
          GitHub
        </ActionLink>
      </div>
    </motion.article>
  );
}
