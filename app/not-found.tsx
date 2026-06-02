import Link from "next/link";

export default function NotFound() {
  return (
    <main className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-6 text-center">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/3 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(227,177,118,0.10),transparent_65%)] blur-3xl"
      />

      <Link
        href="/"
        aria-label="Dinuwan Fernando, back to home"
        className="absolute left-6 top-6 flex items-center gap-2.5 sm:left-8 sm:top-8"
      >
        <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-border-strong font-display text-sm font-bold text-accent">
          DF
        </span>
      </Link>

      <p className="text-gold-gradient font-display text-7xl font-bold sm:text-8xl">
        404
      </p>
      <h1 className="mt-6 text-2xl font-bold text-fg sm:text-3xl">
        Page not found
      </h1>
      <p className="mt-4 max-w-md text-muted-strong">
        The page you are looking for does not exist or may have moved.
      </p>

      <Link
        href="/"
        className="mt-9 inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-bg transition-colors hover:bg-accent-hover"
      >
        Back to home
      </Link>
    </main>
  );
}
