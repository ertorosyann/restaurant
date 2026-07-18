"use client";

import { useEffect, useRef, useState } from "react";
import { siteContent } from "@/content/site";
import { restaurantConfig, isPlaceholder } from "@/config/restaurant";

/**
 * Performance-friendly map: a lightweight styled placeholder is rendered
 * first, and the Google Maps embed (a heavy third-party iframe) is only
 * loaded after the visitor explicitly asks for it.
 *
 * The embed defaults to a search for the restaurant name and town.
 * For a precise pin, set `mapUrl` in src/config/restaurant.ts — if it is
 * a Google Maps *embed* URL (contains "/maps/embed"), it is used directly.
 */
export function MapSection() {
  const [loaded, setLoaded] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const content = siteContent.contact.map;

  /* The load button unmounts when the map appears — move keyboard focus
     to the iframe so the focus position is not lost. */
  useEffect(() => {
    if (loaded) iframeRef.current?.focus();
  }, [loaded]);

  const query = encodeURIComponent(
    `${restaurantConfig.name}, ${restaurantConfig.city}, ${restaurantConfig.country}`
  );
  const embedUrl =
    !isPlaceholder(restaurantConfig.mapUrl) &&
    restaurantConfig.mapUrl.includes("/maps/embed")
      ? restaurantConfig.mapUrl
      : `https://www.google.com/maps?q=${query}&output=embed`;

  return (
    <div className="overflow-hidden rounded-lg border border-charcoal-900/8 bg-white shadow-soft">
      {loaded ? (
        <iframe
          ref={iframeRef}
          src={embedUrl}
          title={content.iframeTitle}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          className="h-[26rem] w-full border-0"
        />
      ) : (
        <div className="relative flex h-[26rem] w-full flex-col items-center justify-center gap-5 bg-pine-50 px-6 text-center">
          {/* Decorative contour lines suggesting a map */}
          <svg
            aria-hidden="true"
            viewBox="0 0 400 300"
            className="pointer-events-none absolute inset-0 h-full w-full text-pine-200/60"
            preserveAspectRatio="xMidYMid slice"
          >
            <path d="M-20 60 C 80 20, 140 110, 240 70 S 400 90, 440 50" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <path d="M-20 120 C 90 80, 150 170, 250 130 S 410 150, 450 110" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <path d="M-20 180 C 100 140, 160 230, 260 190 S 420 210, 460 170" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <path d="M-20 240 C 110 200, 170 290, 270 250 S 430 270, 470 230" fill="none" stroke="currentColor" strokeWidth="1.5" />
          </svg>

          <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-pine-800 text-cream-50 shadow-soft">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6" aria-hidden="true">
              <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0Z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
          </span>
          <div className="relative">
            <p className="font-display text-xl text-charcoal-900">
              {restaurantConfig.city}, {restaurantConfig.country}
            </p>
            <p className="mt-1 text-sm text-charcoal-600">{content.loadNote}</p>
          </div>
          <button
            type="button"
            onClick={() => setLoaded(true)}
            className="relative inline-flex min-h-12 items-center justify-center rounded-md bg-pine-800 px-7 py-3.5 text-sm font-medium uppercase tracking-[0.12em] text-cream-50 shadow-soft transition-all duration-200 hover:bg-pine-900 hover:shadow-lifted"
          >
            {content.loadButton}
          </button>
        </div>
      )}
    </div>
  );
}
