import Image from "next/image";
import { hero } from "@/lib/content";
import { site } from "@/lib/site";
import { Button } from "@/components/ui/Button";
import { SocialLinks } from "@/components/ui/SocialLinks";

const stats = [
  { value: "600+", label: "Service modules" },
  { value: "200+", label: "API route registries" },
  { value: "2024", label: "Building Avagance" },
];

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden">
      {/* Background layers */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_75%_60%_at_50%_0%,#000_35%,transparent_75%)]" />
        <div className="absolute -right-[12%] -top-40 h-[42rem] w-[42rem] rounded-full bg-[radial-gradient(circle,rgba(227,177,118,0.18),transparent_60%)] blur-3xl" />
        <div className="absolute -bottom-1/4 -left-[12%] h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle,rgba(227,177,118,0.07),transparent_60%)] blur-3xl" />
      </div>

      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-10 px-6 py-28 sm:px-8 lg:grid-cols-[1fr_minmax(0,37rem)] lg:gap-12 lg:py-0">
        {/* Copy */}
        <div className="order-2 lg:order-1">
          <p
            className="animate-rise inline-flex items-center gap-2 rounded-full border border-border bg-white/[0.03] px-4 py-1.5 text-xs font-medium tracking-wide text-muted-strong"
            style={{ animationDelay: "0.05s" }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
            Fintech / Applied AI / Engineering
          </p>

          <h1
            className="animate-rise mt-6 text-[clamp(2.75rem,7vw,5.25rem)] font-bold leading-[0.95] tracking-[-0.035em] text-fg"
            style={{ animationDelay: "0.12s" }}
          >
            Dinuwan
            <br />
            <span className="text-gold-gradient">Fernando</span>
          </h1>

          <p
            className="animate-rise mt-6 text-lg font-medium text-fg sm:text-xl"
            style={{ animationDelay: "0.2s" }}
          >
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

          <p
            className="animate-rise mt-5 max-w-lg text-base leading-relaxed text-muted-strong sm:text-lg"
            style={{ animationDelay: "0.28s" }}
          >
            {hero.tagline}
          </p>

          <div
            className="animate-rise mt-9 flex flex-wrap items-center gap-3"
            style={{ animationDelay: "0.36s" }}
          >
            <Button href="#writing" variant="primary">
              Read my articles
            </Button>
            <Button href="#contact" variant="ghost">
              Get in touch
            </Button>
          </div>

          <div className="animate-rise mt-10" style={{ animationDelay: "0.44s" }}>
            <SocialLinks />
          </div>

          <dl
            className="animate-rise mt-12 grid max-w-lg grid-cols-3 gap-4 border-t border-border pt-8"
            style={{ animationDelay: "0.52s" }}
          >
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="font-display text-2xl font-bold text-fg sm:text-3xl">
                  {stat.value}
                </dt>
                <dd className="mt-1 text-xs text-muted sm:text-sm">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Portrait */}
        <div className="order-1 lg:order-2 lg:justify-self-end">
          <div
            className="animate-rise-scale relative mx-auto w-[clamp(17rem,88vw,37rem)]"
            style={{ animationDelay: "0.25s" }}
          >
            <div
              aria-hidden="true"
              className="absolute -inset-6 -z-10 rounded-[3rem] bg-[radial-gradient(circle_at_50%_42%,var(--glow-gold),transparent_70%)] blur-2xl"
            />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl shadow-black/60">
              <Image
                src="/headshot.png"
                alt={hero.photoAlt}
                width={1372}
                height={1147}
                quality={90}
                priority
                sizes="(min-width: 1024px) 37rem, 88vw"
                className="h-auto w-full"
              />
              <div
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-bg/70 to-transparent"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 rounded-[2rem] ring-1 ring-inset ring-white/10"
              />
              <div className="absolute bottom-4 left-4 inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-bg/70 px-4 py-2 text-xs font-medium text-fg backdrop-blur-md">
                <span className="relative flex h-2 w-2" aria-hidden="true">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                </span>
                Currently building Avagance
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <a
        href="#about"
        aria-label="Scroll to about"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 lg:block"
      >
        <span className="flex h-9 w-[22px] items-start justify-center rounded-full border border-border p-1.5">
          <span className="h-2 w-1 animate-bounce rounded-full bg-muted" />
        </span>
      </a>
    </section>
  );
}
