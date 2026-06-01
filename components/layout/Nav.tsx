"use client";

import { useEffect, useRef, useState } from "react";
import { navLinks, hero } from "@/lib/content";
import { MenuIcon, CloseIcon } from "@/components/icons";

export function Nav() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const toggleRef = useRef<HTMLButtonElement | null>(null);

  // Highlight the nav link for the section currently in view.
  useEffect(() => {
    const sections = navLinks
      .map((l) => document.getElementById(l.href.slice(1)))
      .filter((el): el is HTMLElement => el !== null);
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const inView = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (inView[0]) setActive(inView[0].target.id);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.25, 0.5, 1] },
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  // Solidify the bar background once the page is scrolled.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Mobile menu: lock scroll, trap focus, close on Escape.
  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
        return;
      }
      if (e.key === "Tab" && panelRef.current) {
        const items =
          panelRef.current.querySelectorAll<HTMLElement>("a[href]");
        if (items.length === 0) return;
        const first = items[0];
        const last = items[items.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", onKeyDown);
    panelRef.current?.querySelector<HTMLElement>("a[href]")?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? "border-b border-border bg-bg/80 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 sm:px-8"
      >
        <a
          href="#main"
          onClick={() => setOpen(false)}
          aria-label={`${hero.name}, back to top`}
          className="group flex items-center gap-2.5"
        >
          <span
            aria-hidden="true"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-border-strong font-display text-sm font-bold text-accent transition-colors group-hover:border-accent"
          >
            DF
          </span>
          <span className="hidden font-display text-sm font-semibold tracking-tight text-fg sm:inline">
            {hero.name}
          </span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const isActive = active === link.href.slice(1);
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  aria-current={isActive ? "true" : undefined}
                  className={`rounded-full px-4 py-2 text-sm transition-colors ${
                    isActive ? "text-accent" : "text-muted hover:text-fg"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>

        <button
          ref={toggleRef}
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-fg transition-colors hover:border-border-strong md:hidden"
        >
          {open ? (
            <CloseIcon className="h-5 w-5" />
          ) : (
            <MenuIcon className="h-5 w-5" />
          )}
        </button>
      </nav>

      {open && (
        <div
          id="mobile-menu"
          ref={panelRef}
          className="fixed inset-x-0 top-16 z-40 h-[calc(100dvh-4rem)] overflow-y-auto border-t border-border bg-bg/95 backdrop-blur-xl md:hidden"
        >
          <ul className="mx-auto flex max-w-6xl flex-col gap-1 px-6 py-6">
            {navLinks.map((link, i) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between rounded-xl px-4 py-4 text-lg text-muted-strong transition-colors hover:bg-elevated hover:text-fg"
                >
                  <span>{link.label}</span>
                  <span
                    aria-hidden="true"
                    className="font-display text-sm text-muted/70"
                  >
                    {`0${i + 1}`}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
