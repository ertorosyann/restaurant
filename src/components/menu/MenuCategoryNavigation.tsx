"use client";

import { useEffect, useRef, useState } from "react";

interface MenuCategoryNavigationProps {
  categories: { id: string; title: string }[];
  ariaLabel: string;
}

/**
 * Sticky, horizontally scrollable menu category navigation.
 *
 * Uses plain anchor links (they work without JavaScript); smooth
 * scrolling and header offset come from CSS `scroll-behavior` and
 * `scroll-padding-top`, both of which respect reduced motion. JS adds
 * scroll-spy highlighting and keeps the active chip in view.
 */
export function MenuCategoryNavigation({ categories, ariaLabel }: MenuCategoryNavigationProps) {
  const [activeId, setActiveId] = useState<string>(categories[0]?.id ?? "");
  const stripRef = useRef<HTMLUListElement>(null);

  /* Scroll-spy: highlight the category currently in view. */
  useEffect(() => {
    const sections = categories
      .map((category) => document.getElementById(category.id))
      .filter((element): element is HTMLElement => element !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      /* A narrow horizontal band below the sticky bars decides "active". */
      { rootMargin: "-35% 0px -60% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [categories]);

  /* Keep the active chip visible inside the horizontal strip. */
  useEffect(() => {
    const strip = stripRef.current;
    const chip = strip?.querySelector<HTMLElement>(`[data-category="${activeId}"]`);
    if (!strip || !chip) return;

    const target =
      chip.offsetLeft - strip.clientWidth / 2 + chip.clientWidth / 2;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    strip.scrollTo({
      left: Math.max(0, target),
      behavior: reduceMotion ? "auto" : "smooth",
    });
  }, [activeId]);

  return (
    <nav
      aria-label={ariaLabel}
      className="sticky top-16 z-30 border-y border-charcoal-900/8 bg-cream-50/95 backdrop-blur-sm"
    >
      <ul
        ref={stripRef}
        className="scrollbar-hidden mx-auto flex max-w-6xl gap-2 overflow-x-auto px-4 py-3 sm:px-6 lg:px-8"
      >
        {categories.map((category) => {
          const isActive = category.id === activeId;
          return (
            <li key={category.id} className="shrink-0">
              <a
                href={`#${category.id}`}
                data-category={category.id}
                aria-current={isActive ? "true" : undefined}
                onClick={() => setActiveId(category.id)}
                className={`inline-flex min-h-11 items-center whitespace-nowrap rounded-full border px-4.5 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? "border-pine-800 bg-pine-800 text-cream-50"
                    : "border-charcoal-900/15 bg-transparent text-charcoal-700 hover:border-pine-700/50 hover:text-pine-800"
                }`}
              >
                {category.title}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
