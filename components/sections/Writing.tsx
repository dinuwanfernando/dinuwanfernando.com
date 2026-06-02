import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Card } from "@/components/ui/Card";
import { MediumIcon, ArrowUpRightIcon } from "@/components/icons";
import { writing } from "@/lib/content";

export function Writing() {
  return (
    <Section id="writing" labelledBy="writing-heading">
      <SectionHeading
        id="writing-heading"
        index="04"
        eyebrow="Writing"
        title="Notes on building fintech and applied ML"
      />

      <div className="grid gap-5 md:grid-cols-3">
        {writing.map((article, i) => (
          <Reveal key={article.href} delay={(i % 3) * 90} className="h-full">
            <Card className="h-full overflow-hidden">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_0%,rgba(227,177,118,0.09),transparent_60%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              />
              <a
                href={article.href}
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex h-full flex-col"
              >
                <span className="absolute inset-0" aria-hidden="true" />
                <h3 className="text-base font-semibold leading-snug text-fg transition-colors group-hover:text-accent">
                  {article.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                  {article.excerpt}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent">
                  <MediumIcon className="h-4 w-4" />
                  Read on Medium
                  <ArrowUpRightIcon className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
              </a>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
