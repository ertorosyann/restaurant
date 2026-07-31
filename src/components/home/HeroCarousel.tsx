"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import type { SiteImage } from "@/data/images";

/** Time each slide stays on screen before the next one swipes in. */
const AUTO_ADVANCE_MS = 2000;
/** Duration of the swipe animation (keep in sync with `duration-700`). */
const SWIPE_CLASS = "duration-700";

interface HeroCarouselProps {
  slides: SiteImage[];
}

/**
 * Auto-playing background carousel for the home hero. On a timer, the
 * current photo swipes out to the left while the next swipes in from
 * the right. The first slide is server-rendered and loaded with
 * priority so the hero appears instantly.
 */
export function HeroCarousel({ slides }: HeroCarouselProps) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (slides.length < 2) return;
    const id = setInterval(
      () => setActive((index) => (index + 1) % slides.length),
      AUTO_ADVANCE_MS
    );
    return () => clearInterval(id);
  }, [slides.length]);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {slides.map((slide, index) => {
        // Position relative to the active slide: 0 = on screen,
        // 1 = waiting on the right, length-1 = just swiped out left.
        const offset = (index - active + slides.length) % slides.length;
        const isActive = offset === 0;
        const isLeaving = offset === slides.length - 1;

        return (
          <div
            // Keyed by position, not src — the same photo may appear twice.
            key={index}
            // overflow-hidden: the slow-zoom effect scales the photo past
            // its slide; without clipping, off-screen slides leak into the
            // edges of the visible one.
            className={`absolute inset-0 overflow-hidden ease-in-out motion-reduce:transition-none ${
              isActive
                ? `translate-x-0 transition-transform ${SWIPE_CLASS}`
                : isLeaving
                  ? `-translate-x-full transition-transform ${SWIPE_CLASS}`
                  : // Reposition to the right instantly (it happens offscreen).
                    "translate-x-full transition-none"
            }`}
          >
            <Image
              src={slide.src}
              alt={isActive ? slide.alt : ""}
              fill
              priority={index === 0}
              // Every slide is full-screen above the fold — load them all
              // immediately so no swipe reveals a still-loading image.
              loading={index === 0 ? undefined : "eager"}
              quality={85}
              sizes="100vw"
              className="object-cover motion-safe:animate-slow-zoom"
            />
          </div>
        );
      })}
    </div>
  );
}
