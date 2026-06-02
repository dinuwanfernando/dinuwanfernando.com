import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { MailIcon } from "@/components/icons";
import { contact } from "@/lib/content";

export function Contact() {
  return (
    <Section id="contact" labelledBy="contact-heading">
      <SectionHeading
        id="contact-heading"
        index="05"
        eyebrow="Contact"
        title="Get in touch"
      />

      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-border bg-surface/50 p-8 sm:p-12">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-28 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(227,177,118,0.13),transparent_65%)] blur-2xl"
          />
          <div className="relative">
            <p className="max-w-xl text-lg leading-relaxed text-muted-strong sm:text-xl">
              {contact.intro}
            </p>

            <a
              href={`mailto:${contact.email}`}
              className="group mt-8 inline-flex items-center gap-4 text-2xl font-bold tracking-tight sm:text-4xl"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-border-strong text-accent transition-colors group-hover:border-accent group-hover:bg-accent group-hover:text-bg sm:h-14 sm:w-14">
                <MailIcon className="h-6 w-6" />
              </span>
              <span className="text-gold-gradient break-all">
                {contact.email}
              </span>
            </a>

            <div className="mt-10 border-t border-border pt-8">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                Elsewhere
              </p>
              <SocialLinks />
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
