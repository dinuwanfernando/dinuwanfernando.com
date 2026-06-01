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
        eyebrow="Contact"
        title="Get in touch"
      />

      <Reveal>
        <div className="rounded-2xl border border-border bg-surface/50 p-8 sm:p-10">
          <p className="max-w-xl text-base leading-relaxed text-muted-strong sm:text-lg">
            {contact.intro}
          </p>

          <a
            href={`mailto:${contact.email}`}
            className="mt-7 inline-flex items-center gap-3 text-xl font-semibold text-fg transition-colors hover:text-accent sm:text-2xl"
          >
            <MailIcon className="h-6 w-6 shrink-0 text-accent" />
            <span className="break-all">{contact.email}</span>
          </a>

          <div className="mt-9 border-t border-border pt-8">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-muted">
              Elsewhere
            </p>
            <SocialLinks />
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
