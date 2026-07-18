import type { Metadata } from "next";
import { ButtonLink } from "@/components/shared/ButtonLink";
import { siteContent } from "@/content/site";
import { restaurantConfig } from "@/config/restaurant";

export const metadata: Metadata = {
  title: `Page Not Found | ${restaurantConfig.name}`,
  description:
    "The page you are looking for could not be found. Return to Zentrum Café Restaurant in Ramsau am Dachstein.",
  robots: { index: false },
};

export default function NotFound() {
  const content = siteContent.notFound;

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
          <ButtonLink href="/" variant="copper">
            {content.backHome}
          </ButtonLink>
          <ButtonLink href="/menu" variant="light-outline">
            {content.viewMenu}
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
