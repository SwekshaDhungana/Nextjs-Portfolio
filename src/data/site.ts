export const siteConfig = {
  name: "Developer Portfolio",
  description:
    "Responsive portfolio scaffold built with Next.js App Router and Tailwind CSS.",
} as const;

export type NavigationItem = {
  label: "Home" | "Projects" | "Skills" | "About" | "Contact";
  href: "#home" | "#projects" | "#skills" | "#about" | "#contact";
};

export type HeroAction = {
  label: string;
  href: string;
  external?: boolean;
  variant: "primary" | "secondary";
};

export type HeroContent = {
  name: string;
  title: string;
  subtitle: string;
  actions: readonly HeroAction[];
};

type SectionCard = {
  title: string;
  description: string;
};

type PortfolioSection = {
  id: "skills" | "about" | "contact";
  eyebrow: string;
  title: string;
  description: string;
  cards: readonly SectionCard[];
};

export const navigationItems: readonly NavigationItem[] = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const heroContent: HeroContent = {
  name: "[REPLACE WITH MY NAME]",
  title: "Full Stack Developer",
  subtitle: "I build scalable web apps with MERN and AI",
  actions: [
    {
      label: "View Projects",
      href: "#projects",
      variant: "primary",
    },
    {
      label: "GitHub",
      href: "https://github.com/",
      external: true,
      variant: "secondary",
    },
  ],
};

export const portfolioSections: readonly PortfolioSection[] = [
  {
    id: "skills",
    eyebrow: "Capabilities",
    title: "Skills",
    description:
      "Group your strengths by area so visitors can scan the stack quickly and understand how you contribute across the delivery lifecycle.",
    cards: [
      {
        title: "Frontend",
        description:
          "Next.js, React, TypeScript, Tailwind CSS, and component-driven systems for accessible user interfaces.",
      },
      {
        title: "Backend",
        description:
          "APIs, database-backed applications, authentication flows, and pragmatic service design for product delivery.",
      },
      {
        title: "Workflow",
        description:
          "Testing, code review, CI, deployment, and the engineering practices that keep a project maintainable as it grows.",
      },
    ],
  },
  {
    id: "about",
    eyebrow: "Profile",
    title: "About",
    description:
      "This section can carry a brief professional summary, your working style, and the kinds of teams or products you are best suited for.",
    cards: [
      {
        title: "Approach",
        description:
          "Focus on building reliable interfaces, reducing complexity, and keeping systems understandable for the next engineer.",
      },
      {
        title: "Collaboration",
        description:
          "Create room for communication around tradeoffs, delivery scope, and technical quality so teams can move with clarity.",
      },
    ],
  },
  {
    id: "contact",
    eyebrow: "Get In Touch",
    title: "Contact",
    description:
      "Keep a clear path for outreach. Add your preferred channels here so hiring teams, clients, or collaborators know how to reach you.",
    cards: [
      {
        title: "Email",
        description:
          "Add a primary contact address for project inquiries, hiring conversations, and portfolio feedback.",
      },
      {
        title: "Professional Links",
        description:
          "Link to your LinkedIn, GitHub, or resume when you are ready to attach real destinations to the layout.",
      },
    ],
  },
] as const;
