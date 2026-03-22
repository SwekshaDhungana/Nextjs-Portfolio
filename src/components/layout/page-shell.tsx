type PageShellProps = {
  header?: React.ReactNode;
  children: React.ReactNode;
};

export function PageShell({ header, children }: PageShellProps) {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-950">
      {header}
      <main className="mx-auto flex w-full max-w-6xl flex-col px-6 pb-16 pt-6 sm:px-10 sm:pb-20 sm:pt-8 lg:px-12">
        {children}
      </main>
    </div>
  );
}
