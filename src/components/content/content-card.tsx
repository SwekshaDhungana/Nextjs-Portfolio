type ContentCardProps = {
  title: string;
  description: string;
};

export function ContentCard({ title, description }: ContentCardProps) {
  return (
    <article className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm shadow-zinc-950/5">
      <h3 className="text-lg font-semibold tracking-tight text-zinc-950">
        {title}
      </h3>
      <p className="mt-3 text-sm leading-7 text-zinc-600">{description}</p>
    </article>
  );
}
