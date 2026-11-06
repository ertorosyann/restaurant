import type { Metadata } from "next";

import { MenuCategory } from "@/components/menu/MenuCategory";
import { MenuCategoryNavigation } from "@/components/menu/MenuCategoryNavigation";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { CallToAction } from "@/components/shared/CallToAction";
import { PageHero } from "@/components/shared/PageHero";
import { getSiteContent } from "@/content/site";
import { allergenBadgeClassName } from "@/components/menu/AllergenCodes";
import { Reveal } from "@/components/shared/Reveal";
import { allergenCodes, getAllergenNames, getDietaryLabelText, getMenuCategories } from "@/data/menu";
import { siteImages } from "@/data/images";
import { buildPageMetadata } from "@/lib/seo";
import { defaultLocale, isLocale, type Locale } from "@/i18n/config";

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
  return buildPageMetadata({ ...meta.menu, path: "/menu", locale });
}

export default async function MenuPage(props: PageProps) {
  const locale = await resolveLocale(props);
  const siteContent = getSiteContent(locale);
  const content = siteContent.menu;
  const menuCategories = getMenuCategories(locale);
  const dietaryLabelText = getDietaryLabelText(locale);
  const allergenNames = getAllergenNames(locale);

  return (
    <>
      <PageHero
        image={siteImages.menuHero}
        eyebrow={content.header.eyebrow}
        title={content.header.title}
        description={content.header.description}
      />

      <MenuCategoryNavigation
        ariaLabel={content.categoriesAriaLabel}
        categories={menuCategories.map(({ id, title }) => ({ id, title }))}
      />

      <div className="mx-auto max-w-6xl px-4 pt-6 sm:px-6 lg:px-8">
        <Breadcrumbs locale={locale} items={[{ name: siteContent.nav.menu }]} />

        {/* Dietary label legend */}
        <div className="mt-6 flex flex-wrap items-center gap-2">
          <span className="text-xs font-medium uppercase tracking-[0.18em] text-charcoal-500">
            {content.dietaryLegendTitle}
          </span>
          {Object.values(dietaryLabelText).map((label) => (
            <span
              key={label}
              className="rounded-full bg-pine-50 px-2.5 py-0.5 text-xs font-medium uppercase tracking-[0.08em] text-pine-800"
            >
              {label}
            </span>
          ))}
          <a
            href="#allergens"
            className="inline-flex items-center gap-1.5 rounded-full px-1 text-xs font-medium text-charcoal-600 underline-offset-4 transition-colors hover:text-copper-800 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-copper-500"
          >
            <span aria-hidden="true" className={allergenBadgeClassName}>
              A
            </span>
            {content.allergenLegend.title}
          </a>
        </div>
      </div>

      <div className="mx-auto max-w-6xl space-y-16 px-4 py-14 sm:space-y-20 sm:px-6 sm:py-16 lg:px-8">
        {menuCategories.map((category) => (
          <MenuCategory key={category.id} category={category} locale={locale} />
        ))}

        {/* Allergen legend — explains the letter badges next to dishes */}
        <Reveal>
          <section
            id="allergens"
            aria-labelledby="allergens-heading"
            className="scroll-mt-28 rounded-lg border border-charcoal-900/8 bg-cream-100/70 p-6 sm:p-8"
          >
            <h2
              id="allergens-heading"
              className="font-display text-xl text-charcoal-900 sm:text-2xl"
            >
              {content.allergenLegend.title}
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-charcoal-600">
              {content.allergenLegend.note}
            </p>
            <ul className="mt-5 grid gap-x-8 gap-y-2.5 sm:grid-cols-2 lg:grid-cols-3">
              {allergenCodes.map((code) => (
                <li key={code} className="flex items-center gap-2.5 text-sm text-charcoal-700">
                  <span aria-hidden="true" className={allergenBadgeClassName}>
                    {code}
                  </span>
                  <span>
                    <span className="sr-only">{code}: </span>
                    {allergenNames[code]}
                  </span>
                </li>
              ))}
            </ul>
          </section>
        </Reveal>
      </div>

      <CallToAction
        locale={locale}
        title={content.cta.title}
        description={content.cta.description}
      />
    </>
  );
}
