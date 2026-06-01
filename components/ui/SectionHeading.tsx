import { Reveal } from "@/components/ui/Reveal";

type SectionHeadingProps = {
  /** id applied to the h2 so the parent Section can reference it. */
  id: string;
  eyebrow: string;
  title: string;
};

/** Eyebrow label, h2 title, used at the top of each section. */
export function SectionHeading({ id, eyebrow, title }: SectionHeadingProps) {
  return (
    <Reveal className="mb-12 sm:mb-16">
      <p className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-accent">
        <span className="h-px w-8 bg-accent/50" aria-hidden="true" />
        {eyebrow}
      </p>
      <h2
        id={id}
        className="max-w-2xl text-3xl font-bold leading-tight text-fg sm:text-4xl"
      >
        {title}
      </h2>
    </Reveal>
  );
}
