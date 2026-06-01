type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost";
  external?: boolean;
  className?: string;
};

/** A link styled as a button. Use external for off-site destinations. */
export function Button({
  href,
  children,
  variant = "primary",
  external = false,
  className = "",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-200";

  const variants = {
    primary:
      "bg-accent text-bg hover:bg-accent-hover shadow-[0_10px_34px_-12px_rgba(227,177,118,0.55)] hover:shadow-[0_12px_40px_-10px_rgba(227,177,118,0.7)]",
    ghost:
      "border border-border-strong bg-white/[0.01] text-fg hover:border-accent hover:text-accent",
  } as const;

  const externalProps = external
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <a
      href={href}
      className={`${base} ${variants[variant]} ${className}`}
      {...externalProps}
    >
      {children}
    </a>
  );
}
