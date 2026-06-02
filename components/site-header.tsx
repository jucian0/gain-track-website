import Image from "next/image";
import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-2 text-sm font-semibold tracking-wide text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
        >
          <span className="relative size-8 overflow-hidden rounded-control border border-primary/30 bg-background">
            <Image
              src="/app-icon.png"
              alt=""
              fill
              sizes="32px"
              className="object-cover"
              priority
            />
          </span>
          Gain Track
        </Link>
        <nav aria-label="Main navigation" className="flex items-center gap-4">
          <Link
            href="/#features"
            className="hidden text-sm text-foreground-muted transition-colors hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary sm:inline"
          >
            Features
          </Link>
          <Link
            href="/privacy"
            className="text-sm text-foreground-muted transition-colors hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
          >
            Privacy
          </Link>
          <Link
            href="/#early-access"
            className="rounded-control border border-primary bg-primary px-3 py-2 text-xs font-semibold text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
          >
            Early access
          </Link>
        </nav>
      </div>
    </header>
  );
}
