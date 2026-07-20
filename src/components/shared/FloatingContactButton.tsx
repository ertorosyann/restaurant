"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { getSiteContent } from "@/content/site";
import {
  getDirectionsUrl,
  getEmailHref,
  getPhoneHref,
} from "@/config/restaurant";
import type { Locale } from "@/i18n/config";

interface FloatingContactButtonProps {
  locale: Locale;
}

/**
 * Floating contact button — fixed to the bottom-right corner on every
 * page (respecting mobile safe areas). Opens a compact panel with the
 * three key actions: call, email, directions.
 *
 * Accessibility: keyboard operable, labelled, closes on Escape, on
 * outside click, on the close button and after selecting an option;
 * focus returns to the toggle when the panel closes.
 */
export function FloatingContactButton({ locale }: FloatingContactButtonProps) {
  const siteContent = getSiteContent(locale);
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const firstOptionRef = useRef<HTMLAnchorElement>(null);

  const close = useCallback((restoreFocus = true) => {
    setOpen(false);
    if (restoreFocus) toggleRef.current?.focus();
  }, []);

  /* Close on Escape and on click/tap outside the widget. */
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };
    const onPointerDown = (event: PointerEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) {
        close(false);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [open, close]);

  /* Move focus into the panel when it opens. */
  useEffect(() => {
    if (open) firstOptionRef.current?.focus();
  }, [open]);

  const options = [
    {
      label: siteContent.floatingContact.call,
      href: getPhoneHref(),
      external: false,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden="true">
          <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.4 2.1L8.1 10a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.7 2Z" />
        </svg>
      ),
    },
    {
      label: siteContent.floatingContact.email,
      href: getEmailHref(),
      external: false,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden="true">
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="m22 7-10 6L2 7" />
        </svg>
      ),
    },
    {
      label: siteContent.floatingContact.directions,
      href: getDirectionsUrl(),
      external: true,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden="true">
          <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0Z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      ),
    },
  ];

  return (
    <div
      ref={containerRef}
      /* Hidden via CSS while the mobile navigation overlay is open. */
      data-floating-contact=""
      className="fixed z-50"
      style={{
        right: "calc(1.25rem + env(safe-area-inset-right, 0px))",
        bottom: "calc(1.25rem + env(safe-area-inset-bottom, 0px))",
      }}
    >
      <button
        ref={toggleRef}
        type="button"
        onClick={() => (open ? close() : setOpen(true))}
        aria-expanded={open}
        aria-haspopup="dialog"
        aria-controls={open ? "floating-contact-panel" : undefined}
        aria-label={open ? siteContent.floatingContact.close : siteContent.floatingContact.open}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-pine-800 text-cream-50 shadow-lifted transition-all duration-200 hover:bg-pine-900 motion-safe:animate-float-in motion-safe:[animation-delay:900ms] motion-safe:hover:scale-105"
      >
        {open ? (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" className="h-6 w-6" aria-hidden="true">
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6" aria-hidden="true">
            <path d="M21 11.5a8.4 8.4 0 0 1-9 8.4 8.9 8.9 0 0 1-3.2-.6L3 21l1.7-5.1a8.3 8.3 0 0 1-1.2-4.4 8.4 8.4 0 0 1 8.4-8.4h.5a8.4 8.4 0 0 1 8.6 8.4Z" />
          </svg>
        )}
      </button>

      {open && (
        <div
          id="floating-contact-panel"
          role="dialog"
          aria-label={siteContent.floatingContact.title}
          className="absolute bottom-[4.25rem] right-0 w-[calc(100vw-2.5rem)] max-w-72 overflow-hidden rounded-lg border border-charcoal-900/10 bg-cream-50 shadow-lifted motion-safe:animate-float-in"
        >
          <div className="flex items-center justify-between border-b border-charcoal-900/10 bg-cream-100 px-4 py-3">
            <p className="font-display text-base text-charcoal-900">
              {siteContent.floatingContact.title}
            </p>
            <button
              type="button"
              onClick={() => close()}
              aria-label={siteContent.floatingContact.close}
              className="-my-1 flex h-11 w-11 items-center justify-center rounded-full text-charcoal-600 transition-colors hover:bg-charcoal-900/5 hover:text-charcoal-900"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" className="h-4.5 w-4.5" aria-hidden="true">
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>
          </div>
          <ul className="p-2">
            {options.map((option, index) => (
              <li key={option.label}>
                <a
                  ref={index === 0 ? firstOptionRef : undefined}
                  href={option.href}
                  onClick={() => close(false)}
                  {...(option.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="flex min-h-12 items-center gap-3.5 rounded-md px-3.5 py-3 text-sm font-medium text-charcoal-800 transition-colors hover:bg-pine-50 hover:text-pine-800"
                >
                  <span className="text-pine-700" aria-hidden="true">
                    {option.icon}
                  </span>
                  {option.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
