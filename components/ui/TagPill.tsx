/** A small technology tag. Render inside a <ul>. */
export function TagPill({ children }: { children: React.ReactNode }) {
  return (
    <li className="rounded-full border border-border bg-white/[0.02] px-3.5 py-1.5 text-sm text-muted-strong transition-colors duration-200 hover:border-border-strong hover:text-fg">
      {children}
    </li>
  );
}
