import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { TagPill } from "@/components/ui/TagPill";
import { about, techStack } from "@/lib/content";

export function About() {
  return (
    <Section id="about" labelledBy="about-heading">
      <SectionHeading
        id="about-heading"
        eyebrow="About"
        title="Building the technical core of an AI-native wealth platform"
      />

      <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
        <Reveal className="space-y-5 text-base leading-relaxed text-muted-strong sm:text-lg">
          {about.paragraphs.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </Reveal>

        <Reveal delay={120}>
          <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-muted">
            Tech Stack
          </h3>
          <ul className="flex flex-wrap gap-2.5">
            {techStack.map((tech) => (
              <TagPill key={tech}>{tech}</TagPill>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
