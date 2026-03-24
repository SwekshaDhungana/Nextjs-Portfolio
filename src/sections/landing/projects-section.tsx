import { ProjectCard, SectionBlock, StaggerGroup, StaggerItem } from "@/components";
import { projects, projectsSectionContent } from "@/data";

export function ProjectsSection() {
  return (
    <SectionBlock
      id="projects"
      eyebrow={projectsSectionContent.eyebrow}
      title={projectsSectionContent.title}
      description={projectsSectionContent.description}
      className="mt-4"
    >
      <StaggerGroup className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <StaggerItem key={project.title}>
            <ProjectCard project={project} />
          </StaggerItem>
        ))}
      </StaggerGroup>
    </SectionBlock>
  );
}