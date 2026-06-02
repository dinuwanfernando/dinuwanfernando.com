import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Card } from "@/components/ui/Card";
import { TagPill } from "@/components/ui/TagPill";
import { ArrowUpRightIcon } from "@/components/icons";
import { projects } from "@/lib/content";

export function Projects() {
  return (
    <Section id="projects" labelledBy="projects-heading">
      <SectionHeading
        id="projects-heading"
        index="03"
        eyebrow="Projects"
        title="Selected work"
      />

      <div className="grid gap-5 sm:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal key={project.name} delay={(i % 2) * 100} className="h-full">
            <Card className="h-full overflow-hidden">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_0%,rgba(227,177,118,0.09),transparent_60%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              />
              <div className="relative flex h-full flex-col">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-lg font-semibold text-fg">
                    {project.href ? (
                      <a
                        href={project.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-colors hover:text-accent"
                      >
                        <span className="absolute inset-0" aria-hidden="true" />
                        {project.name}
                      </a>
                    ) : (
                      project.name
                    )}
                  </h3>
                  {project.href ? (
                    <ArrowUpRightIcon className="h-4 w-4 shrink-0 text-muted transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
                  ) : (
                    <span className="shrink-0 rounded-full border border-border px-2.5 py-0.5 text-xs text-muted">
                      Private
                    </span>
                  )}
                </div>

                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-strong">
                  {project.blurb}
                </p>

                <ul className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <TagPill key={tech}>{tech}</TagPill>
                  ))}
                </ul>
              </div>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
