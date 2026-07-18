import Link from "next/link";
import type { ReactNode } from "react";

type ButtonVariant =
  /** Solid alpine green — main action on light backgrounds. */
  | "primary"
  /** Quiet outline for secondary actions on light backgrounds. */
  | "outline"
  /** Solid cream — main action on dark/photo backgrounds. */
  | "light"
  /** Subtle outline for secondary actions on dark/photo backgrounds. */
  | "light-outline"
  /** Warm copper — for special emphasis. */
  | "copper";

interface ButtonLinkProps {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
  /** Opens in a new tab (used for external links such as directions). */
  newTab?: boolean;
  ariaLabel?: string;
}

const base =
  "inline-flex min-h-12 items-center justify-center gap-2.5 rounded-md px-7 py-3.5 text-sm font-medium uppercase tracking-[0.12em] transition-all duration-200 motion-safe:hover:-translate-y-0.5";

const variants: Record<ButtonVariant, string> = {
  primary: "bg-pine-800 text-cream-50 shadow-soft hover:bg-pine-900 hover:shadow-lifted",
  outline:
    "border border-charcoal-900/25 text-charcoal-800 hover:border-charcoal-900/60 hover:bg-charcoal-900/5",
  light: "bg-cream-50 text-charcoal-900 shadow-soft hover:bg-white hover:shadow-lifted",
  "light-outline":
    "border border-white/45 text-white hover:border-white/85 hover:bg-white/10",
  copper: "bg-copper-500 text-charcoal-950 shadow-soft hover:bg-copper-400 hover:shadow-lifted",
};

/**
 * Shared button-styled link. Internal routes use next/link; external,
 * `tel:` and `mailto:` targets render a plain anchor.
 */
export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
  newTab = false,
  ariaLabel,
}: ButtonLinkProps) {
  const classes = `${base} ${variants[variant]} ${className}`;
  const isInternal = href.startsWith("/") || href.startsWith("#");

  if (isInternal) {
    return (
      <Link href={href} className={classes} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  return (
    <a
      href={href}
      className={classes}
      aria-label={ariaLabel}
      {...(newTab ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </a>
  );
}
