import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Marquee } from "@/components/ui/Marquee";
import { about, techStack } from "@/lib/content";

const half = Math.ceil(techStack.length / 2);
const rowOne = techStack.slice(0, half);
const rowTwo = techStack.slice(half);

const focus = [
  "Agentic AI systems",
  "Full-stack TypeScript",
  "Fintech integrations and compliance",
  "Applied machine learning",
];

export function About() {
  return (
    <>
      <Section id="about" labelledBy="about-heading">
        <SectionHeading
          id="about-heading"
          index="01"
          eyebrow="About"
          title="Building the technical core of an AI-native wealth platform"
        />

        <div className="grid gap-10 lg:grid-cols-[1.35fr_1fr] lg:gap-16">
          <Reveal className="space-y-6 text-lg leading-relaxed text-muted-strong sm:text-xl">
            {about.paragraphs.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </Reveal>

          <Reveal delay={120}>
            <div className="rounded-2xl border border-border bg-surface/40 p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                Focus
              </p>
              <ul className="mt-5 space-y-4">
                {focus.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-base text-fg"
                  >
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Full-bleed tech marquee */}
      <div className="relative overflow-hidden border-y border-border bg-surface/20 py-10">
        <p className="mb-7 text-center text-xs font-semibold uppercase tracking-[0.22em] text-muted">
          The stack I build with
        </p>
        <div className="flex flex-col gap-4">
          <Marquee items={rowOne} />
          <Marquee items={rowTwo} reverse />
        </div>
      </div>
    </>
  );
}
