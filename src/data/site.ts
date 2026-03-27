export const siteConfig = {
  name: "SWEKSHA DHUNGANA",
} as const;

export const seoConfig = {
  title: "SWEKSHA DHUNGANA | Full Stack Developer",
  description:
    "Portfolio of Sweksha Dhungana, a Full Stack Developer building scalable web apps with MERN, Next.js, and AI.",
  keywords: [
    "Full Stack Developer",
    "MERN Developer",
    "Next.js Portfolio",
    "React Developer",
    "Node.js Developer",
    "AI Developer",
  ],
} as const;

export type NavigationItem = {
  label: "Home" | "Projects" | "Skills" | "About" | "Contact";
  href: "#home" | "#projects" | "#skills" | "#about" | "#contact";
};

export type HeroAction = {
  label: string;
  href: string;
  external?: boolean;
  download?: boolean | string;
  variant: "primary" | "secondary";
};

export type HeroNoteItem = {
  label: string;
  value: string;
};

export type HeroNote = {
  label: string;
  headline: string;
  items: readonly HeroNoteItem[];
};

export type HeroContent = {
  name: string;
  title: string;
  subtitle: string;
  actions: readonly HeroAction[];
  note: HeroNote;
};

export const navigationItems: readonly NavigationItem[] = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const heroContent: HeroContent = {
  name: "SWEKSHA DHUNGANA",
  title: "Full Stack Developer",
  subtitle:
    "Computer engineering graduate building web apps with MERN, Next.js, and modern APIs.",
  actions: [
    {
      label: "View Projects",
      href: "#projects",
      variant: "primary",
    },
    {
      label: "Download Resume",
      href: "/Sweksha_Dhungana_CV_.pdf",
      download: "Sweksha-Dhungana-Resume.pdf",
      variant: "secondary",
      external: false,
    },
    {
      label: "GitHub",
      href: "https://github.com/SwekshaDhungana",
      external: true,
      variant: "secondary",
    },
  ],
  note: {
    label: "Sweksha / in short",
    headline:
      "I believe curiosity is the spark that keeps me growing, both in work and in life.",
    items: [
      { label: "College", value: "Khwopa Engineering College" },
      { label: "Recent work", value: "Jobora + ThinkBoard" },
      { label: "Working with", value: "MERN, Next.js, Docker" },
    ],
  },
};
