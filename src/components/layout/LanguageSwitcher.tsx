"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { getSiteContent } from "@/content/site";
import {
  LOCALE_COOKIE,
  isLocale,
  localeNames,
  locales,
  type Locale,
} from "@/i18n/config";

/**
 * Remembers the visitor's explicit language choice for a year, so
 * src/proxy.ts sends them to the right language on their next visit.
 */
export function rememberLocale(locale: Locale) {
  document.cookie = `${LOCALE_COOKIE}=${locale}; path=/; max-age=31536000; SameSite=Lax`;
}

/** The current page's path in another language: /de/menu → /cs/menu. */
export function switchLocalePath(pathname: string, locale: Locale): string {
  const segments = pathname.split("/");
  if (isLocale(segments[1] ?? "")) {
    segments[1] = locale;
    return segments.join("/");
  }
  return pathname === "/" ? `/${locale}` : `/${locale}${pathname}`;
}

/**
 * Tiny inline-SVG country flags (Austria for German, UK for English).
 * Drawn by hand instead of emoji so they render identically on every
 * platform — Windows browsers show plain letters for emoji flags.
 */
function FlagIcon({ locale }: { locale: Locale }) {
  const common = {
    viewBox: "0 0 24 16",
    className: "h-3.5 w-[1.3125rem] shrink-0 rounded-[2px] ring-1 ring-charcoal-950/10",
    "aria-hidden": true,
  } as const;

  switch (locale) {
    case "de": // Austria
      return (
        <svg {...common}>
          <rect width="24" height="16" fill="#ed2939" />
          <rect y="5.33" width="24" height="5.34" fill="#fff" />
        </svg>
      );
    case "cs": // Czechia
      return (
        <svg {...common}>
          <rect width="24" height="8" fill="#fff" />
          <rect y="8" width="24" height="8" fill="#d7141a" />
          <path d="M0 0l12 8-12 8z" fill="#11457e" />
        </svg>
      );
    case "en": // United Kingdom (simplified)
      return (
        <svg {...common}>
          <rect width="24" height="16" fill="#012169" />
          <path d="M0 0l24 16M24 0L0 16" stroke="#fff" strokeWidth="3.2" />
          <path d="M0 0l24 16M24 0L0 16" stroke="#c8102e" strokeWidth="1.3" />
          <path d="M12 0v16M0 8h24" stroke="#fff" strokeWidth="5.3" />
          <path d="M12 0v16M0 8h24" stroke="#c8102e" strokeWidth="3.2" />
        </svg>
      );
    case "pl": // Poland
      return (
        <svg {...common}>
          <rect width="24" height="8" fill="#fff" />
          <rect y="8" width="24" height="8" fill="#dc143c" />
        </svg>
      );
    case "hu": // Hungary
      return (
        <svg {...common}>
          <rect width="24" height="16" fill="#fff" />
          <rect width="24" height="5.33" fill="#cd2a3e" />
          <rect y="10.67" width="24" height="5.33" fill="#436f4d" />
        </svg>
      );
  }
}

interface LanguageSwitcherProps {
  locale: Locale;
  /** True while the header floats transparently over the page hero. */
  overHero: boolean;
}

/**
 * Globe button in the header (visible on every breakpoint) that opens a
 * small dropdown listing all languages in their own name. Selecting one
 * keeps the visitor on the same page, just in the other language.
 */
export function LanguageSwitcher({ locale, overHero }: LanguageSwitcherProps) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const containerRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const content = getSiteContent(locale).languageSwitcher;

  /* Close when the route changes (adjust during render). */
  const [lastPathname, setLastPathname] = useState(pathname);
  if (lastPathname !== pathname) {
    setLastPathname(pathname);
    setOpen(false);
  }

  /* Close on Escape and on click/tap outside the widget. */
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    const onPointerDown = (event: PointerEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [open]);

  return (
    <div ref={containerRef} className="relative">
      <button
        ref={toggleRef}
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-controls={open ? "language-switcher-menu" : undefined}
        aria-label={`${content.ariaLabel} — ${localeNames[locale]}`}
        className={`flex min-h-11 items-center gap-1.5 rounded-md px-2.5 py-2 text-sm font-medium uppercase tracking-[0.1em] transition-colors ${
          overHero
            ? "text-cream-50/90 hover:bg-white/10 hover:text-white"
            : "text-charcoal-700 hover:bg-charcoal-900/5 hover:text-charcoal-950"
        }`}
      >
        <FlagIcon locale={locale} />
        {locale.toUpperCase()}
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`h-3 w-3 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          aria-hidden="true"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>

      {open && (
        <ul
          id="language-switcher-menu"
          aria-label={content.label}
          className="absolute right-0 top-full mt-2 w-44 overflow-hidden rounded-lg border border-charcoal-900/10 bg-cream-50 p-1.5 shadow-lifted motion-safe:animate-float-in"
        >
          {locales.map((entry) => {
            const isActive = entry === locale;
            return (
              <li key={entry}>
                <Link
                  href={switchLocalePath(pathname, entry)}
                  lang={entry}
                  hrefLang={entry}
                  aria-current={isActive ? "true" : undefined}
                  onClick={() => {
                    rememberLocale(entry);
                    setOpen(false);
                  }}
                  className={`flex min-h-11 items-center justify-between rounded-md px-3.5 py-2.5 text-sm transition-colors ${
                    isActive
                      ? "bg-pine-50 font-medium text-pine-800"
                      : "text-charcoal-800 hover:bg-charcoal-900/5"
                  }`}
                >
                  <span className="flex items-center gap-2.5">
                    <FlagIcon locale={entry} />
                    {localeNames[entry]}
                  </span>
                  {isActive && (
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4"
                      aria-hidden="true"
                    >
                      <path d="m5 12.5 5 5 9-11" />
                    </svg>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
