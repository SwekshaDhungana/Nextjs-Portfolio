export const projectsSectionContent = {
  eyebrow: "Selected Work",
  title: "Projects",
  description:
    "A concise look at product-focused builds, the problems they address, and the technical decisions behind them.",
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
    title: "ThinkBoard",
    problem:
      "Task-heavy teams need a board that stays responsive even when lists and cards are requested repeatedly.",
    solution:
      "Built a MERN application with Redis caching to reduce repeated fetch cost and deployed it on Render for a straightforward hosted workflow.",
    techStack: ["MongoDB", "Express", "React", "Node.js", "Redis", "Render"],
    liveUrl: "https://thinkboard.onrender.com",
    githubUrl: "https://github.com/your-username/thinkboard",
  },
  {
    title: "AI Job Tracker",
    problem:
      "Job seekers often lose track of applications and spend too much time manually finding relevant opportunities.",
    solution:
      "Created an AI-powered job suggestion system that organizes applications and surfaces role recommendations based on user activity and profile context.",
    techStack: ["React", "Node.js", "Express", "MongoDB", "OpenAI API"],
    liveUrl: "https://ai-job-tracker.vercel.app",
    githubUrl: "https://github.com/your-username/ai-job-tracker",
  },
  {
    title: "Queue Management System",
    problem:
      "Manual queue handling causes delays, unclear status updates, and extra coordination overhead for service teams.",
    solution:
      "Developed a Next.js and PostgreSQL system for structured queue tracking, status management, and smoother handoff across service points.",
    techStack: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS"],
    liveUrl: "https://queue-management-system.vercel.app",
    githubUrl: "https://github.com/your-username/queue-management-system",
  },
] as const;
