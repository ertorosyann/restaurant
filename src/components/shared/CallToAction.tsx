import Image from "next/image";
import { ButtonLink } from "@/components/shared/ButtonLink";
import { Reveal } from "@/components/shared/Reveal";
import { getSiteContent } from "@/content/site";
import { getPhoneHref } from "@/config/restaurant";
import { localeHref, type Locale } from "@/i18n/config";

interface CallToActionProps {
  locale: Locale;
  title: string;
  description?: string;
  /** Adds a "View Menu" button next to the contact actions. */
  showMenuLink?: boolean;
}

/**
 * Closing call-to-action panel used at the bottom of pages:
 * deep alpine green, warm copper accents, direct call/email actions.
 */
export function CallToAction({
  locale,
  title,
  description,
  showMenuLink = false,
}: CallToActionProps) {
  const siteContent = getSiteContent(locale);
  return (
    <section className="px-4 pb-20 sm:px-6 lg:px-8">
      <Reveal className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-xl bg-pine-900 px-6 py-16 text-center sm:px-12 sm:py-20">
          {/* Photo backdrop with a dark pine overlay to keep the text readable */}
          <Image
            // src="/resturant/moments0.png"
            src="/resturant/resturant-home.jpeg"
            alt=""
            aria-hidden="true"
            fill
            sizes="(min-width: 1152px) 1152px, 100vw"
            className="pointer-events-none object-cover"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-pine-950/70"
          />

          <div className="relative">
            <p className="ornament-rule mb-5 justify-center text-xs font-medium uppercase tracking-[0.22em] text-copper-300">
              {siteContent.home.hero.eyebrow}
            </p>
            <h2 className="mx-auto max-w-2xl font-display text-3xl leading-tight text-cream-50 sm:text-4xl">
              {title}
            </h2>
            {description && (
              <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-cream-100/80 sm:text-lg">
                {description}
              </p>
            )}
            <div className="mt-9 flex flex-col items-center justify-center gap-3.5 sm:flex-row">
              <ButtonLink href={getPhoneHref()} variant="copper">
                {siteContent.common.callNow}
              </ButtonLink>
              {showMenuLink && (
                <ButtonLink href={localeHref(locale, "/menu")} variant="light-outline">
                  {siteContent.common.viewMenu}
                </ButtonLink>
              )}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
