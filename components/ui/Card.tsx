/** Shared surface card with a hairline border and a subtle hover lift. */
export function Card({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`group relative flex flex-col rounded-2xl border border-border bg-surface/50 p-6 transition-colors duration-300 hover:border-border-strong sm:p-7 ${className}`}
    >
      {children}
    </div>
  );
}
