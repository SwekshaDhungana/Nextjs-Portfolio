type ActionLinkProps = {
  href: string;
  children: React.ReactNode;
  external?: boolean;
  variant?: "primary" | "secondary";
};

export function ActionLink({
  href,
  children,
  external = false,
  variant = "primary",
}: ActionLinkProps) {
  const classes =
    variant === "primary"
      ? "bg-zinc-950 text-white hover:bg-zinc-800"
      : "border border-zinc-300 bg-white text-zinc-950 hover:border-zinc-400 hover:bg-zinc-100";

  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer noopener" : undefined}
      className={`inline-flex h-12 w-full items-center justify-center rounded-full px-6 text-sm font-semibold transition sm:w-auto ${classes}`}
    >
      {children}
    </a>
  );
}
