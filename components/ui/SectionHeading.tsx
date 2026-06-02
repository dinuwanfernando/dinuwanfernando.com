import { Reveal } from "@/components/ui/Reveal";

type SectionHeadingProps = {
  /** id applied to the h2 so the parent Section can reference it. */
  id: string;
  /** Two-digit section index, e.g. "01". */
  index: string;
  eyebrow: string;
  title: string;
};

/** Indexed eyebrow label and h2 title, used at the top of each section. */
export function SectionHeading({ id, index, eyebrow, title }: SectionHeadingProps) {
  return (
    <Reveal className="mb-12 sm:mb-16">
      <p className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-accent">
        <span className="font-display text-sm tabular-nums">{index}</span>
        <span className="h-px w-8 bg-accent/50" aria-hidden="true" />
        {eyebrow}
      </p>
      <h2
        id={id}
        className="max-w-3xl text-3xl font-bold leading-[1.1] tracking-tight text-fg sm:text-4xl md:text-5xl"
      >
        {title}
      </h2>
    </Reveal>
  );
}
