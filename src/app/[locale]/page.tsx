import Image from "next/image";
import type { Metadata } from "next";

import { Hero } from "@/components/home/Hero";
import { FeaturedDishCard } from "@/components/home/FeaturedDishCard";
import { LocationSection } from "@/components/home/LocationSection";
import { ButtonLink } from "@/components/shared/ButtonLink";
import { CallToAction } from "@/components/shared/CallToAction";
import { Gallery } from "@/components/shared/Gallery";
import { OpeningHours } from "@/components/shared/OpeningHours";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { getSiteContent } from "@/content/site";
import {
  restaurantConfig,
  getDirectionsUrl,
  isPlaceholder,
} from "@/config/restaurant";
import { getFeaturedDishes } from "@/data/menu";
import { siteImages } from "@/data/images";
import { buildPageMetadata } from "@/lib/seo";
import {
  defaultLocale,
  isLocale,
  localeHref,
  localize,
  type Locale,
} from "@/i18n/config";

interface PageProps {
  params: Promise<{ locale: string }>;
}

async function resolveLocale({ params }: PageProps): Promise<Locale> {
  const { locale } = await params;
  return isLocale(locale) ? locale : defaultLocale;
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const locale = await resolveLocale(props);
  const { meta } = getSiteContent(locale);
  return buildPageMetadata({ ...meta.home, path: "/", locale });
}

export default async function HomePage(props: PageProps) {
  const locale = await resolveLocale(props);
  const siteContent = getSiteContent(locale);
  const content = siteContent.home;
  const featuredDishes = getFeaturedDishes(locale);
  const { address } = restaurantConfig;

  return (
    <>
      <Hero locale={locale} />

      {/* ---------- Introduction ---------- */}
      <section className="px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <SectionHeading
              eyebrow={content.intro.eyebrow}
              title={content.intro.title}
            />
            <div className="mt-6 space-y-4 text-base leading-relaxed text-charcoal-600 sm:text-lg">
              {content.intro.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 32)}>{paragraph}</p>
              ))}
            </div>
            <div className="mt-9">
              <ButtonLink href={localeHref(locale, "/about")} variant="outline">
                {siteContent.nav.about}
              </ButtonLink>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Offset copper frame — a small premium detail */}
              <div
                aria-hidden="true"
                className="absolute -bottom-4 -right-4 h-full w-full rounded-lg border border-copper-400/50"
              />
              <div className="relative aspect-[4/5] overflow-hidden rounded-lg shadow-lifted">
                <Image
                  src={siteImages.interiorOne.src}
                  alt={siteImages.interiorOne.alt}
                  fill
                  sizes="(min-width: 1216px) 536px, (min-width: 1024px) 45vw, (min-width: 640px) 60vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- Featured dishes ---------- */}
      <section className="bg-cream-100 px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <SectionHeading
              eyebrow={content.featured.eyebrow}
              title={content.featured.title}
              description={content.featured.description}
              align="center"
            />
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredDishes.map((dish, index) => (
              <Reveal key={dish.name} delay={index * 110}>
                <FeaturedDishCard item={dish} locale={locale} />
              </Reveal>
            ))}
          </div>
          <Reveal>
            <p className="mt-8 text-center text-xs text-charcoal-500">
              {content.featured.note}
            </p>
            <div className="mt-6 text-center">
              <ButtonLink href={localeHref(locale, "/menu")} variant="primary">
                {siteContent.common.viewMenu}
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- Coffee & dessert ---------- */}
      <section className="px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal className="order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-[3/4] overflow-hidden rounded-lg shadow-soft">
                <Image
                  src={siteImages.coffee.src}
                  alt={siteImages.coffee.alt}
                  fill
                  sizes="(min-width: 1216px) 262px, (min-width: 1024px) 22vw, 45vw"
                  className="object-cover"
                />
              </div>
              <div className="relative mt-10 aspect-[3/4] overflow-hidden rounded-lg shadow-soft">
                <Image
                  src={siteImages.dessert.src}
                  alt={siteImages.dessert.alt}
                  fill
                  sizes="(min-width: 1216px) 262px, (min-width: 1024px) 22vw, 45vw"
                  className="object-cover"
                />
              </div>
            </div>
            <p className="mt-6 text-xs text-charcoal-500">
              {content.coffeeDessert.imageCaption}
            </p>
          </Reveal>

          <Reveal delay={120} className="order-1 lg:order-2">
            <SectionHeading
              eyebrow={content.coffeeDessert.eyebrow}
              title={content.coffeeDessert.title}
            />
            <div className="mt-6 space-y-4 text-base leading-relaxed text-charcoal-600 sm:text-lg">
              {content.coffeeDessert.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 32)}>{paragraph}</p>
              ))}
            </div>
            <div className="mt-9">
              <ButtonLink href={localeHref(locale, "/menu#coffee")} variant="outline">
                {siteContent.common.viewMenu}
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- Atmosphere gallery ---------- */}
      <section className="bg-cream-100 px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <SectionHeading
              eyebrow={content.gallery.eyebrow}
              title={content.gallery.title}
              description={content.gallery.description}
              align="center"
            />
          </Reveal>
          <Gallery
            className="mt-14"
            images={[
              siteImages.interiorTwo,
              siteImages.coffeeAlt,
              siteImages.pastry,
              siteImages.salad,
              siteImages.dessertAlt,
            ]}
          />
          <p className="mt-6 text-center text-xs text-charcoal-500">
            {siteContent.common.placeholderNotice}
          </p>
        </div>
      </section>

      {/* ---------- Alpine location ---------- */}
      <LocationSection locale={locale} />

      {/* ---------- Food philosophy ---------- */}
      <section className="px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <SectionHeading
              eyebrow={content.philosophy.eyebrow}
              title={content.philosophy.title}
            />
            <div className="mt-6 space-y-4 text-base leading-relaxed text-charcoal-600 sm:text-lg">
              {content.philosophy.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 32)}>{paragraph}</p>
              ))}
            </div>
            <blockquote className="mt-9 border-l-2 border-copper-500 pl-5 font-display text-xl italic leading-relaxed text-charcoal-800 sm:text-2xl">
              “{content.philosophy.quote}”
            </blockquote>
          </Reveal>

          <Reveal delay={120}>
            <div className="relative mx-auto aspect-[4/5] max-w-md overflow-hidden rounded-lg shadow-lifted lg:max-w-none">
              <Image
                src={siteImages.kitchen.src}
                alt={siteImages.kitchen.alt}
                fill
                sizes="(min-width: 1024px) 45vw, (min-width: 640px) 60vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- Opening hours & visit ---------- */}
      <section className="bg-cream-100 px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <SectionHeading
              eyebrow={content.hours.eyebrow}
              title={content.hours.title}
              align="center"
            />
          </Reveal>
          <div className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-2">
            <Reveal>
              <div className="h-full rounded-lg border border-charcoal-900/8 bg-white p-7 shadow-soft sm:p-9">
                <h3 className="font-display text-xl text-charcoal-900">
                  {siteContent.common.openingHours}
                </h3>
                <OpeningHours locale={locale} className="mt-6" />
                <p className="mt-5 text-xs leading-relaxed text-charcoal-500">
                  {content.hours.note}
                </p>
              </div>
            </Reveal>
            <Reveal delay={110}>
              <div className="flex h-full flex-col rounded-lg border border-charcoal-900/8 bg-white p-7 shadow-soft sm:p-9">
                <h3 className="font-display text-xl text-charcoal-900">
                  {restaurantConfig.name}
                </h3>
                <address className="mt-6 flex-1 text-base not-italic leading-relaxed text-charcoal-600">
                  {!isPlaceholder(address.street) && (
                    <>
                      {address.street}
                      <br />
                    </>
                  )}
                  {!isPlaceholder(address.postalCode) && `${address.postalCode} `}
                  {address.city}
                  <br />
                  {localize(address.country, locale)}
                </address>
                <div className="mt-7">
                  <ButtonLink
                    href={getDirectionsUrl()}
                    variant="primary"
                    newTab
                    className="w-full"
                  >
                    {siteContent.common.getDirections}
                  </ButtonLink>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------- Final call-to-action ---------- */}
      <div className="bg-cream-100 pt-0">
        <CallToAction
          locale={locale}
          title={content.cta.title}
          description={content.cta.description}
        />
      </div>
    </>
  );
}
