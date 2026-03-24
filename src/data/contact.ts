export const contactSectionContent = {
  eyebrow: "Contact",
  title: "Get In Touch",
  description:
    "Use the form below or reach out by email, GitHub, or LinkedIn.",
} as const;

export const contactFormEndpoint = "https://formspree.io/f/xbdznwqe";

export type ContactLink = {
  label: string;
  href: string;
  value: string;
};

export const contactLinks: readonly ContactLink[] = [
  {
    label: "Email",
    href: "mailto:swekshadhungana1@gmail.com",
    value: "swekshadhungana1@gmail.com",
  },
  {
    label: "GitHub",
    href: "https://github.com/SwekshaDhungana",
    value: "github.com/SwekshaDhungana",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/sweksha-dhungana-16651b311",
    value: "linkedin.com/in/sweksha-dhungana-16651b311",
  },
] as const;
