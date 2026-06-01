import { site } from "@/lib/site";
import { GitHubIcon, LinkedInIcon, MediumIcon } from "@/components/icons";

const links = [
  { label: "LinkedIn", href: site.socials.linkedin, Icon: LinkedInIcon },
  { label: "GitHub", href: site.socials.github, Icon: GitHubIcon },
  { label: "Medium", href: site.socials.medium, Icon: MediumIcon },
];

/** Row of circular icon links to social profiles (each opens in a new tab). */
export function SocialLinks({
  className = "",
  iconClassName = "h-[18px] w-[18px]",
}: {
  className?: string;
  iconClassName?: string;
}) {
  return (
    <ul className={`flex items-center gap-2.5 ${className}`}>
      {links.map(({ label, href, Icon }) => (
        <li key={label}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${label} (opens in a new tab)`}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-muted-strong transition-colors duration-200 hover:border-accent hover:text-accent"
          >
            <Icon className={iconClassName} />
          </a>
        </li>
      ))}
    </ul>
  );
}
