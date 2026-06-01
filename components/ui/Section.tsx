type SectionProps = {
  id: string;
  /** id of the heading that labels this section (for aria-labelledby). */
  labelledBy?: string;
  children: React.ReactNode;
  className?: string;
};

/** A page section with consistent max width, horizontal padding, and rhythm. */
export function Section({ id, labelledBy, children, className = "" }: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={`mx-auto w-full max-w-6xl px-6 py-20 sm:px-8 sm:py-28 ${className}`}
    >
      {children}
    </section>
  );
}
