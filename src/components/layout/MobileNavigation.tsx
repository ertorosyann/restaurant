"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { getNavLinks } from "@/components/layout/nav-links";
import {
  rememberLocale,
  switchLocalePath,
} from "@/components/layout/LanguageSwitcher";
import { getSiteContent } from "@/content/site";
import {
  restaurantConfig,
  getPhoneHref,
  getDirectionsUrl,
} from "@/config/restaurant";
import { localeNames, locales, localize, type Locale } from "@/i18n/config";
import { SocialLinks } from "@/components/shared/SocialLinks";

interface MobileNavigationProps {
  open: boolean;
  onClose: () => void;
  pathname: string;
  locale: Locale;
}

/**
 * Full-screen mobile navigation overlay: deep alpine green, large serif
 * links with a gentle staggered entrance, a language row and quick
 * contact actions. Closes on Escape and when a link is chosen.
 */
export function MobileNavigation({ open, onClose, pathname, locale }: MobileNavigationProps) {
  const firstLinkRef = useRef<HTMLAnchorElement>(null);
  const content = getSiteContent(locale);

  /* While open: Escape closes, body scroll is locked, the page behind the
     aria-modal dialog is made inert (so Tab cannot reach obscured content
     and the floating contact widget hides via the html attribute), and the
     menu closes itself if the viewport grows past the desktop breakpoint
     (where overlay and hamburger are display:none). */
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    firstLinkRef.current?.focus();

    const main = document.getElementById("main-content");
    const footer = document.querySelector("footer");
    main?.setAttribute("inert", "");
    footer?.setAttribute("inert", "");
    document.documentElement.setAttribute("data-mobile-nav-open", "");

    const desktopQuery = window.matchMedia("(min-width: 1024px)");
    const onDesktop = (event: MediaQueryListEvent) => {
      if (event.matches) onClose();
    };
    desktopQuery.addEventListener("change", onDesktop);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      desktopQuery.removeEventListener("change", onDesktop);
      document.body.style.overflow = previousOverflow;
      main?.removeAttribute("inert");
      footer?.removeAttribute("inert");
      document.documentElement.removeAttribute("data-mobile-nav-open");
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      id="mobile-navigation"
      role="dialog"
      aria-modal="true"
      aria-label={content.nav.menuLabel}
      className="fixed inset-0 z-40 flex flex-col bg-pine-950 motion-safe:animate-fade-in lg:hidden"
    >
      <div
        className="flex flex-1 flex-col justify-between overflow-y-auto px-6 pt-28"
        style={{ paddingBottom: "calc(2rem + env(safe-area-inset-bottom, 0px))" }}
      >
        <nav aria-label="Mobile">
          <ul className="space-y-2">
            {getNavLinks(locale).map((link, index) => {
              const isActive = pathname === link.href;
              return (
                <li
                  key={link.href}
                  className="motion-safe:animate-fade-up"
                  style={{ animationDelay: `${80 + index * 70}ms` }}
                >
                  <Link
                    ref={index === 0 ? firstLinkRef : undefined}
                    href={link.href}
                    onClick={onClose}
                    aria-current={isActive ? "page" : undefined}
                    className={`group flex min-h-14 items-center gap-4 font-display text-4xl transition-colors ${
                      isActive ? "text-copper-300" : "text-cream-50 hover:text-copper-200"
                    }`}
                  >
                    <span
                      aria-hidden="true"
                      className={`h-px w-6 bg-current transition-all duration-300 group-hover:w-10 ${
                        isActive ? "w-10" : ""
                      }`}
                    />
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div
          className="mt-10 space-y-6 border-t border-cream-50/15 pt-8 motion-safe:animate-fade-up"
          style={{ animationDelay: "360ms" }}
        >
          {/* Language switcher — one pill per language, current highlighted */}
          <div>
            <p className="text-[0.65rem] font-medium uppercase tracking-[0.22em] text-copper-300">
              {content.languageSwitcher.label}
            </p>
            <ul className="mt-3 flex flex-wrap gap-2">
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
                        if (isActive) onClose();
                      }}
                      className={`inline-flex min-h-11 items-center rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                        isActive
                          ? "border-copper-400 bg-copper-500/15 text-copper-200"
                          : "border-cream-50/30 text-cream-50 hover:bg-white/10"
                      }`}
                    >
                      {localeNames[entry]}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="flex flex-col gap-3">
            <a
              href={getPhoneHref()}
              onClick={onClose}
              className="flex min-h-12 items-center justify-center rounded-md bg-copper-500 px-6 text-sm font-medium uppercase tracking-[0.12em] text-charcoal-950 transition-colors hover:bg-copper-400"
            >
              {content.common.callNow}
            </a>
            <a
              href={getDirectionsUrl()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={onClose}
              className="flex min-h-12 items-center justify-center rounded-md border border-cream-50/30 px-4 text-center text-sm font-medium uppercase tracking-[0.1em] text-cream-50 transition-colors hover:bg-white/10"
            >
              {content.common.getDirections}
            </a>
          </div>

          <div className="flex items-center justify-between gap-4">
            <p className="text-sm text-cream-100/70">
              {restaurantConfig.city}, {localize(restaurantConfig.country, locale)}
            </p>
            <SocialLinks tone="dark" />
          </div>
        </div>
      </div>
    </div>
  );
}
