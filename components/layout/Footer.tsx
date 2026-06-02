import { footer } from "@/lib/content";
import { SocialLinks } from "@/components/ui/SocialLinks";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border">
      <div
        aria-hidden="true"
        className="pointer-events-none select-none px-4 pt-14"
      >
        <span className="block whitespace-nowrap text-center font-display text-[13vw] font-bold leading-[0.8] tracking-tighter text-white/[0.045]">
          Dinuwan Fernando
        </span>
      </div>

      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 py-10 sm:flex-row sm:px-8">
        <p className="text-sm text-muted">{footer.text}</p>
        <div className="flex items-center gap-6">
          <SocialLinks iconClassName="h-4 w-4" />
          <a
            href="#main"
            className="text-sm text-muted transition-colors hover:text-accent"
          >
            Back to top
          </a>
        </div>
      </div>
    </footer>
  );
}
