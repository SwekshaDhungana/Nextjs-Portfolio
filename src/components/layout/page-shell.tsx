type PageShellProps = {
  header?: React.ReactNode;
  children: React.ReactNode;
};

export function PageShell({ header, children }: PageShellProps) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[var(--background)] text-[var(--text-primary)]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(203,92,50,0.12),transparent_28%),radial-gradient(circle_at_84%_18%,rgba(124,167,160,0.1),transparent_24%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-8 hidden w-px bg-[linear-gradient(180deg,transparent,rgba(243,230,210,0.12),transparent)] lg:block"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-8 hidden w-px bg-[linear-gradient(180deg,transparent,rgba(243,230,210,0.08),transparent)] lg:block"
      />
      {header}
      <main className="relative mx-auto flex w-full max-w-6xl flex-col px-6 pb-20 pt-6 sm:px-10 sm:pb-24 sm:pt-8 lg:px-12">
        {children}
      </main>
      <footer className="relative border-t border-[var(--border)] px-6 py-6 sm:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <p className="font-[family:var(--font-label)] text-[0.72rem] font-medium uppercase tracking-[0.24em] text-[var(--text-secondary)]">
            Designed by Sweksha Dhungana
          </p>
        </div>
      </footer>
    </div>
  );
}
