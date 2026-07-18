"use client";

import { useEffect, useRef, type ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Stagger delay in milliseconds. */
  delay?: number;
}

/**
 * Subtle scroll-reveal wrapper.
 *
 * Progressive enhancement: content is fully visible by default (SSR and
 * no-JS). After hydration, elements still *below* the viewport are hidden
 * and gently faded in as they scroll into view. Elements already visible
 * are never touched, so nothing flashes and no layout shifts occur
 * (opacity/transform only). Respects `prefers-reduced-motion`.
 */
export function Reveal({ children, className, delay = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // Skip elements already (nearly) in view — no hide/flash for them.
    const rect = element.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.92) return;

    // Defer the class write to the next frame so the layout reads of all
    // Reveal instances batch together (avoids read/write reflow thrash
    // when many instances mount at once after hydration).
    const frame = requestAnimationFrame(() => {
      element.classList.add("reveal-hidden");
    });

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            element.classList.add("reveal-visible");
            observer.disconnect();
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 }
    );

    observer.observe(element);
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
