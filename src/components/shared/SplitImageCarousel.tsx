"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import type { SiteImage } from "@/data/images";

/** Time each photo stays on screen before the next one fades in. */
const AUTO_ADVANCE_MS = 3500;

interface SplitImageCarouselProps {
  slides: SiteImage[];
}

/**
 * Auto-playing crossfade carousel for the SplitSection image slot.
 * Photos fade into one another on a timer; small dots show progress
 * and can be clicked to jump to a specific photo.
 */
export function SplitImageCarousel({ slides }: SplitImageCarouselProps) {
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
    <div className="absolute inset-0">
      {slides.map((slide, index) => (
        <div
          // Keyed by position, not src — the same photo may appear twice.
          key={index}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out motion-reduce:transition-none ${
            index === active ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.src}
            alt={index === active ? slide.alt : ""}
            fill
            sizes="(min-width: 1216px) 536px, (min-width: 1024px) 45vw, (min-width: 640px) 60vw, 100vw"
            className="object-cover"
          />
        </div>
      ))}

      {slides.length > 1 && (
        <div className="absolute inset-x-0 bottom-3 flex justify-center gap-2">
          {slides.map((slide, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setActive(index)}
              aria-label={`${index + 1} / ${slides.length}`}
              aria-current={index === active}
              className={`h-2 w-2 cursor-pointer rounded-full transition-colors duration-300 ${
                index === active
                  ? "bg-cream-50"
                  : "bg-cream-50/45 hover:bg-cream-50/70"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
