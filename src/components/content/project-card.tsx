import { ActionLink } from "./action-link";
import type { Project } from "@/data";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="flex h-full flex-col rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm shadow-zinc-950/5 transition-transform duration-300 ease-out hover:scale-[1.02] hover:shadow-md">
      <div className="flex-1">
        <h3 className="text-xl font-semibold tracking-tight text-zinc-950">
          {project.title}
        </h3>

        <div className="mt-5 space-y-4 text-sm leading-7 text-zinc-600">
          <p>
            <span className="font-semibold text-zinc-950">Problem:</span>{" "}
            {project.problem}
          </p>
          <p>
            <span className="font-semibold text-zinc-950">Solution:</span>{" "}
            {project.solution}
          </p>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-700"
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
    </article>
  );
}
