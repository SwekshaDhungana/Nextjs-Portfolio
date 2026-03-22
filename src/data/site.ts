export const siteConfig = {
  name: "Developer Portfolio",
  description:
    "Responsive portfolio scaffold built with Next.js App Router and Tailwind CSS.",
} as const;

export type NavigationItem = {
  label: "Home" | "Projects" | "Skills" | "About" | "Contact";
  href: "#home" | "#projects" | "#skills" | "#about" | "#contact";
};

type SectionCard = {
  title: string;
  description: string;
};

type PortfolioSection = {
  id: "projects" | "skills" | "about" | "contact";
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

export const homeContent = {
  eyebrow: "Developer Portfolio",
  title: "A minimal, responsive foundation for presenting modern web work.",
  description:
    "This landing page keeps the structure clean: a sticky top navigation, reusable sections, and enough spacing and typography to scale into a full portfolio without reworking the layout.",
  highlights: [
    {
      title: "App Router Ready",
      description:
        "The page is structured for server-first composition while keeping interactive navigation isolated to a small client component.",
    },
    {
      title: "Reusable Sections",
      description:
        "Each anchor target is built from shared components so content can expand without duplicating layout code.",
    },
    {
      title: "Responsive Navigation",
      description:
        "Desktop links stay visible, while mobile users get a compact hamburger menu with the same section anchors.",
    },
  ] as const,
} as const;

export const portfolioSections: readonly PortfolioSection[] = [
  {
    id: "projects",
    eyebrow: "Selected Work",
    title: "Projects",
    description:
      "Use this section to highlight case studies, product impact, and the kinds of problems you solve across frontend and backend systems.",
    cards: [
      {
        title: "Featured Builds",
        description:
          "Reserve space here for flagship applications, screenshots, and concise project summaries with measurable outcomes.",
      },
      {
        title: "Implementation Notes",
        description:
          "Document the stack, constraints, and architecture decisions behind each project so the portfolio stays useful to technical readers.",
      },
    ],
  },
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
