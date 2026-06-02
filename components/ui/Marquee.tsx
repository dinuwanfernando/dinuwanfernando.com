type MarqueeProps = {
  items: string[];
  reverse?: boolean;
};

function MarqueeRow({ items, hidden }: { items: string[]; hidden?: boolean }) {
  return (
    <ul aria-hidden={hidden} className="flex shrink-0 items-center gap-3 pr-3">
      {items.map((item) => (
        <li
          key={item}
          className="flex items-center gap-2.5 whitespace-nowrap rounded-full border border-border bg-surface/50 px-5 py-2.5 text-sm text-muted-strong"
        >
          <span
            className="h-1.5 w-1.5 rounded-full bg-accent/70"
            aria-hidden="true"
          />
          {item}
        </li>
      ))}
    </ul>
  );
}

/**
 * Infinite horizontal marquee built with pure CSS. The content is duplicated
 * (second copy aria-hidden) and the track is translated by -50% for a seamless
 * loop. Pauses on hover; static under prefers-reduced-motion (see globals.css).
 */
export function Marquee({ items, reverse = false }: MarqueeProps) {
  return (
    <div className="marquee-group marquee-mask flex overflow-hidden">
      <div
        className={`flex w-max ${reverse ? "marquee-track-reverse" : "marquee-track"}`}
      >
        <MarqueeRow items={items} />
        <MarqueeRow items={items} hidden />
      </div>
    </div>
  );
}
