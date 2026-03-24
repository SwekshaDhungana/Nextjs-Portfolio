export type AboutPortrait = {
  src: string;
  alt: string;
  eyebrow: string;
  caption: string;
};

export type AboutCollege = {
  label: string;
  title: string;
  name?: string;
  description: string;
};

export const aboutSectionContent = {
  eyebrow: "About",
  title: "About Me",
  intro:
    "I am a full stack developer who enjoys turning ideas into practical web experiences and learning by building real projects.",
  college: {
    label: "College",
    title: "Bachelor's in Computer Engineering",
    name: "Khwopa Engineering College",
    description: "2019 - 2024",
  },
  portrait: {
    src: "/portfolio.jpg",
    alt: "Portrait of Sweksha Dhungana",
    eyebrow: "Portrait",
    caption: "Learning, building, and improving with every project.",
  },
} as const;
