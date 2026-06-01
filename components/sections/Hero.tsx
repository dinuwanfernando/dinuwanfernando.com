import Image from "next/image";
import { hero } from "@/lib/content";
import { site } from "@/lib/site";
import { Button } from "@/components/ui/Button";
import { SocialLinks } from "@/components/ui/SocialLinks";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Ambient gold glows, decorative. */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 left-1/2 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,var(--glow-gold-soft),transparent_70%)]" />
      </div>

      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-6 pb-16 pt-28 sm:px-8 sm:pt-32 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 lg:pb-28 lg:pt-40">
        {/* Copy */}
        <div className="order-2 lg:order-1">
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-white/[0.02] px-4 py-1.5 text-xs font-medium tracking-wide text-muted-strong">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
            Fintech / Applied AI / Engineering
          </p>

          <h1 className="text-balance text-4xl font-bold leading-[1.04] tracking-tight text-fg sm:text-5xl lg:text-6xl">
            {hero.name}
          </h1>

          <p className="mt-5 text-lg font-medium text-fg sm:text-xl">
            Co-Founder &amp; CTO at{" "}
            <a
              href={site.company.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent underline decoration-accent/30 underline-offset-4 transition-colors hover:decoration-accent"
            >
              Avagance
            </a>
          </p>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-strong sm:text-lg">
            {hero.tagline}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Button href="#writing" variant="primary">
              Read my articles
            </Button>
            <Button href="#contact" variant="ghost">
              Get in touch
            </Button>
          </div>

          <div className="mt-10">
            <SocialLinks />
          </div>
        </div>

        {/* Portrait */}
        <div className="order-1 lg:order-2 lg:justify-self-end">
          <div className="relative mx-auto w-full max-w-[18rem] sm:max-w-sm lg:max-w-md">
            <div
              aria-hidden="true"
              className="absolute -inset-8 -z-10 rounded-full bg-[radial-gradient(circle_at_42%_40%,var(--glow-gold),transparent_70%)] blur-2xl"
            />
            <Image
              src="/headshot.png"
              alt={hero.photoAlt}
              width={554}
              height={584}
              priority
              sizes="(min-width: 1024px) 28rem, (min-width: 640px) 24rem, 18rem"
              className="headshot-mask h-auto w-full select-none"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
