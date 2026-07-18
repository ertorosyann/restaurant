"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { DesktopNavigation } from "@/components/layout/DesktopNavigation";
import { MobileNavigation } from "@/components/layout/MobileNavigation";
import { restaurantConfig } from "@/config/restaurant";
import { siteContent } from "@/content/site";

/**
 * Sticky site header. It starts transparent, blending into each page's
 * photographic hero, and condenses into a solid cream bar with dark text
 * once the visitor scrolls.
 */
export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Close the mobile menu when the route changes (adjust during render —
     see react.dev "You Might Not Need an Effect"). */
  const [lastPathname, setLastPathname] = useState(pathname);
  if (lastPathname !== pathname) {
    setLastPathname(pathname);
    setMobileOpen(false);
  }

  const closeMobile = () => {
    setMobileOpen(false);
    toggleRef.current?.focus();
  };

  /* While the mobile overlay (dark green) is open, keep light text. */
  const overHero = !scrolled || mobileOpen;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          overHero
            ? "bg-transparent py-2"
            : "border-b border-charcoal-900/8 bg-cream-50/95 py-0 shadow-soft backdrop-blur-sm"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="group flex flex-col leading-none"
            aria-label={`${restaurantConfig.name} — ${siteContent.nav.home}`}
          >
            <span
              className={`font-display text-[1.6rem] tracking-wide transition-colors ${
                overHero ? "text-cream-50" : "text-charcoal-900"
              }`}
            >
              {restaurantConfig.shortName}
            </span>
            <span
              className={`mt-1 text-[0.6rem] font-medium uppercase tracking-[0.3em] transition-colors ${
                overHero ? "text-copper-300" : "text-copper-700"
              }`}
            >
              {siteContent.common.brandTagline}
            </span>
          </Link>

          <DesktopNavigation pathname={pathname} overHero={overHero} />

          {/* Mobile menu toggle */}
          <button
            ref={toggleRef}
            type="button"
            onClick={() => setMobileOpen((value) => !value)}
            aria-expanded={mobileOpen}
            aria-controls={mobileOpen ? "mobile-navigation" : undefined}
            aria-label={mobileOpen ? siteContent.nav.closeMenu : siteContent.nav.openMenu}
            className={`relative z-50 flex h-12 w-12 items-center justify-center rounded-md transition-colors lg:hidden ${
              overHero ? "text-cream-50 hover:bg-white/10" : "text-charcoal-900 hover:bg-charcoal-900/5"
            }`}
          >
            <span className="relative block h-4 w-6" aria-hidden="true">
              <span
                className={`absolute left-0 top-0 h-0.5 w-6 bg-current transition-all duration-300 ${
                  mobileOpen ? "top-1/2 -translate-y-1/2 rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-1/2 h-0.5 w-6 -translate-y-1/2 bg-current transition-opacity duration-200 ${
                  mobileOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`absolute bottom-0 left-0 h-0.5 w-6 bg-current transition-all duration-300 ${
                  mobileOpen ? "bottom-1/2 translate-y-1/2 -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </header>

      <MobileNavigation open={mobileOpen} onClose={closeMobile} pathname={pathname} />
    </>
  );
}
