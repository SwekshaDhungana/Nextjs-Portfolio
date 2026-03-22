type SectionBlockProps = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  children?: React.ReactNode;
  className?: string;
};

export function SectionBlock({
  id,
  eyebrow,
  title,
  description,
  children,
  className,
}: SectionBlockProps) {
  return (
    <section id={id} className={`scroll-mt-24 py-16 sm:py-20 ${className ?? ""}`}>
      <div className="max-w-2xl">
        <p className="text-sm font-medium uppercase tracking-[0.24em] text-zinc-500">
          {eyebrow}
        </p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl">
          {title}
        </h2>
        <p className="mt-4 text-base leading-8 text-zinc-600 sm:text-lg">
          {description}
        </p>
      </div>
      {children ? <div className="mt-10">{children}</div> : null}
    </section>
  );
}
