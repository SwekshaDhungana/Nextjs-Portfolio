import { FadeInView } from "../motion";

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
      <FadeInView className="max-w-3xl">
        <p className="font-[family:var(--font-label)] text-[0.72rem] font-medium uppercase tracking-[0.24em] text-[#d7a26f]">
          {eyebrow}
        </p>
        <h2 className="mt-4 text-3xl font-semibold text-[var(--text-primary)] sm:text-4xl lg:text-[2.9rem]">
          {title}
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-8 text-[var(--text-secondary)] sm:text-lg">
          {description}
        </p>
      </FadeInView>
      {children ? <div className="mt-10">{children}</div> : null}
    </section>
  );
}
