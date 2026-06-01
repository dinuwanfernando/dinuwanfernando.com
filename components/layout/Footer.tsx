import { footer } from "@/lib/content";
import { SocialLinks } from "@/components/ui/SocialLinks";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 py-10 sm:flex-row sm:px-8">
        <p className="text-sm text-muted">{footer.text}</p>
        <SocialLinks iconClassName="h-4 w-4" />
      </div>
    </footer>
  );
}
