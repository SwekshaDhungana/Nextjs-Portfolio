import { ProjectCard, SectionBlock } from "@/components";
import { projects, projectsSectionContent } from "@/data";

export function ProjectsSection() {
  return (
    <SectionBlock
      id="projects"
      eyebrow={projectsSectionContent.eyebrow}
      title={projectsSectionContent.title}
      description={projectsSectionContent.description}
      className="border-t border-zinc-200"
    >
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </SectionBlock>
  );
}
