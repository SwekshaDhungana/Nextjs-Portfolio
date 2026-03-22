type PageShellProps = {
  children: React.ReactNode;
};

export function PageShell({ children }: PageShellProps) {
  return (
    <main className="min-h-screen">
      <div className="mx-auto flex w-full max-w-7xl flex-col px-6 py-16 sm:px-10 lg:px-12">
        {children}
      </div>
    </main>
  );
}
