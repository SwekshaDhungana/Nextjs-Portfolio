export const skillsSectionContent = {
  eyebrow: "Capabilities",
  title: "Skills",
  description:
    "The tools and frameworks I use to design, build, and deploy web applications.",
} as const;

export type SkillGroup = {
  category: string;
  items: readonly string[];
};

export const skillGroups: readonly SkillGroup[] = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "Tailwind"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express"],
  },
  {
    category: "Database",
    items: ["MongoDB", "PostgreSQL", "MySQL"],
  },
  {
    category: "Tools",
    items: ["Docker", "Git", "Postman", "VScode"],
  },
] as const;
