import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Card } from "@/components/ui/Card";
import { ArrowUpRightIcon } from "@/components/icons";
import { experience, education } from "@/lib/content";

export function Experience() {
  return (
    <Section id="experience" labelledBy="experience-heading">
      <SectionHeading
        id="experience-heading"
        eyebrow="Experience"
        title="Leading engineering at Avagance"
      />

      <div className="space-y-5">
        <Reveal>
          <Card>
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
              <h3 className="text-xl font-semibold text-fg">
                {experience.role}
              </h3>
              <span className="shrink-0 text-sm font-medium text-muted">
                {experience.period}
              </span>
            </div>

            <a
              href={experience.companyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1.5 inline-flex items-center gap-1.5 text-accent transition-colors hover:text-accent-hover"
            >
              {experience.company}
              <ArrowUpRightIcon className="h-3.5 w-3.5" />
            </a>

            <p className="mt-5 max-w-3xl text-base leading-relaxed text-muted-strong">
              {experience.description}
            </p>
          </Card>
        </Reveal>

        <Reveal delay={100}>
          <Card>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
              Education
            </p>
            <h3 className="mt-2.5 text-lg font-semibold text-fg">
              {education.degree}
            </h3>
            <p className="mt-1 text-muted-strong">{education.institution}</p>
            <p className="mt-0.5 text-sm text-muted">{education.note}</p>
          </Card>
        </Reveal>
      </div>
    </Section>
  );
}
