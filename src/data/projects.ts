export const projectsSectionContent = {
  eyebrow: "Selected Work",
  title: "Projects",
  description:
    "A quick overview of my projects, what they do, and how they were built.",
} as const;

export type Project = {
  title: string;
  problem: string;
  solution: string;
  techStack: readonly string[];
  liveUrl: string;
  githubUrl: string;
};

export const projects: readonly Project[] = [
  {
    title: "Chat App",
    problem:
      "Most chat apps demos focus only on UI and miss real challenges like secure authentication, real-time messaging, media sharing, and online user presence.",
    solution:
      "I built Chatify, a full-stack real-time chat app with JWT auth, Socket.IO live messaging, image uploads, online status tracking, and persistent chat storage using React, Node.js, and MongoDB.",
    techStack: ["Nodejs", "React", "MongoDB", "Tailwind CSS", "Socket.IO"],
    liveUrl: "https://chatify-xnwe.onrender.com/",
    githubUrl: "https://github.com/SwekshaDhungana/chatify",
  },
  {
    title: "ThinkBoard",
    problem:
      "Busy teams need a board that stays quick and responsive, even with frequent use.",
    solution:
      "Created a MERN app, added Redis caching for better performance, and deployed it on Render.",
    techStack: ["MongoDB", "Express", "React", "Node.js", "Redis", "Render"],
    liveUrl: "https://thinkboard-mern-0zci.onrender.com/",
    githubUrl: "https://github.com/SwekshaDhungana/ThinkBoard-mern",
  },
  {
    title: "Inventory Management App",
    problem: "Manual inventory tracking is slow and causes stock mistakes.",
    solution:
      "I built an inventory app where users can log in, manage products, and track stock with a simple dashboard.",
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Prisma",
      "Neon PostgreSQL",
      "Neon Auth",
    ],
    liveUrl: "https://inventory-management-app-d9vk.vercel.app/",
    githubUrl: "https://github.com/SwekshaDhungana/Inventory-Management-app",
  },
  {
    title: "Jobora",
    problem:
      "Job seekers often struggle to track applications and waste time searching for suitable roles.",
    solution:
      "Created an AI system that organizes job applications and suggests roles based on user activity.",
    techStack: ["Next", "Node.js", "Express", "PostgreSQL", "Mock API"],
    liveUrl: "https://job-track-zeta.vercel.app",
    githubUrl: "https://github.com/SwekshaDhungana/job-track",
  },
  {
    title: "Shopping Website",
    problem: "Many shopping sites are slow, cluttered, or hard to navigate.",
    solution:
      "Added search, categories, and filters so users can find products easily.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://nextjs-shopping-website.vercel.app",
    githubUrl: "https://github.com/SwekshaDhungana/Nextjs-Shopping-Website",
  },
] as const;
