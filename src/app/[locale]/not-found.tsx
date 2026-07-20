"use client";

import { usePathname } from "next/navigation";
import { ButtonLink } from "@/components/shared/ButtonLink";
import { getSiteContent } from "@/content/site";
import { defaultLocale, isLocale, localeHref } from "@/i18n/config";

/**
 * Localized 404 page. `not-found.tsx` receives no route params, so the
 * language is derived from the URL's first path segment on the client
 * (falling back to German).
 */
export default function NotFound() {
  const pathname = usePathname();
  const segment = pathname.split("/")[1] ?? "";
  const locale = isLocale(segment) ? segment : defaultLocale;
  const content = getSiteContent(locale).notFound;

  return (
    <section className="flex min-h-svh items-center justify-center bg-pine-950 px-4 py-32 sm:px-6">
      <div className="mx-auto max-w-xl text-center">
        <p className="ornament-rule justify-center font-display text-5xl text-copper-300 motion-safe:animate-fade-up">
          {content.eyebrow}
        </p>
        <h1 className="mt-7 font-display text-3xl leading-tight text-cream-50 sm:text-4xl motion-safe:animate-fade-up motion-safe:[animation-delay:120ms]">
          {content.title}
        </h1>
        <p className="mt-5 text-base leading-relaxed text-cream-100/80 sm:text-lg motion-safe:animate-fade-up motion-safe:[animation-delay:240ms]">
          {content.description}
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-3.5 sm:flex-row motion-safe:animate-fade-up motion-safe:[animation-delay:360ms]">
          <ButtonLink href={localeHref(locale)} variant="copper">
            {content.backHome}
          </ButtonLink>
          <ButtonLink href={localeHref(locale, "/menu")} variant="light-outline">
            {content.viewMenu}
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
