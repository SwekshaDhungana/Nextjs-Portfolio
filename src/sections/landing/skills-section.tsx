import { SectionBlock, SkillGroupCard, StaggerGroup, StaggerItem } from "@/components";
import { skillGroups, skillsSectionContent } from "@/data";

export function SkillsSection() {
  return (
    <SectionBlock
      id="skills"
      eyebrow={skillsSectionContent.eyebrow}
      title={skillsSectionContent.title}
      description={skillsSectionContent.description}
      className="mt-4"
    >
      <StaggerGroup className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
        {skillGroups.map((group) => (
          <StaggerItem key={group.category}>
            <SkillGroupCard group={group} />
          </StaggerItem>
        ))}
      </StaggerGroup>
    </SectionBlock>
  );
}