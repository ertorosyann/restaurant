import { ButtonLink } from "@/components/shared/ButtonLink";
import { HeroCarousel } from "@/components/home/HeroCarousel";
import { getSiteContent } from "@/content/site";
import { homeHeroSlides } from "@/data/images";
import { localeHref, type Locale } from "@/i18n/config";

interface HeroProps {
  locale: Locale;
}

/**
 * Full-screen home hero. Server component — all entrance motion is
 * lightweight CSS (fade-up stagger + a very gentle image zoom), disabled
 * automatically for visitors who prefer reduced motion.
 */
export function Hero({ locale }: HeroProps) {
  const siteContent = getSiteContent(locale);
  const { hero } = siteContent.home;

  return (
    <section className="relative flex min-h-svh items-center justify-center overflow-hidden bg-charcoal-950">
      <HeroCarousel slides={homeHeroSlides} />
      {/* Legibility overlays */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-charcoal-950/45"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-charcoal-950/80 via-transparent to-charcoal-950/40"
      />

      <div className="relative mx-auto max-w-4xl px-5 py-32 text-center sm:px-8">
        <p className="ornament-rule justify-center text-xs font-medium uppercase tracking-[0.26em] text-copper-300 motion-safe:animate-fade-up sm:text-sm">
          {hero.eyebrow}
        </p>
        <h1 className="mt-6 font-display text-4xl leading-[1.12] text-cream-50 sm:text-5xl lg:text-6xl motion-safe:animate-fade-up motion-safe:[animation-delay:140ms]">
          {hero.headline}
        </h1>
        <p className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-cream-100/90 sm:text-lg motion-safe:animate-fade-up motion-safe:[animation-delay:280ms]">
          {hero.description}
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-3.5 sm:flex-row motion-safe:animate-fade-up motion-safe:[animation-delay:420ms]">
          <ButtonLink
            href={localeHref(locale, "/menu")}
            variant="light"
            className="w-full sm:w-auto"
          >
            {siteContent.common.viewMenu}
          </ButtonLink>
          <ButtonLink
            href={localeHref(locale, "/contact")}
            variant="light-outline"
            className="w-full sm:w-auto"
          >
            {siteContent.common.contactUs}
          </ButtonLink>
        </div>
      </div>

      {/* Scroll hint */}
      <div
        aria-hidden="true"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 text-cream-100/70 sm:flex motion-safe:animate-fade-in motion-safe:[animation-delay:900ms]"
      >
        <span className="text-[0.65rem] font-medium uppercase tracking-[0.28em]">
          {hero.scrollHint}
        </span>
        <span className="h-10 w-px bg-gradient-to-b from-cream-100/70 to-transparent" />
      </div>
    </section>
  );
}
