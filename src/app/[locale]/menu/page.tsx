import type { Metadata } from "next";

import { MenuCategory } from "@/components/menu/MenuCategory";
import { MenuCategoryNavigation } from "@/components/menu/MenuCategoryNavigation";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { CallToAction } from "@/components/shared/CallToAction";
import { PageHero } from "@/components/shared/PageHero";
import { getSiteContent } from "@/content/site";
import { getDietaryLabelText, getMenuCategories } from "@/data/menu";
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

        {/* Example-menu notice — remove once the real menu is entered. */}
        <p className="mt-6 rounded-md border border-copper-400/40 bg-copper-100/50 px-4 py-3 text-sm leading-relaxed text-charcoal-700">
          {content.exampleNotice}
        </p>

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
        </div>
      </div>

      <div className="mx-auto max-w-6xl space-y-16 px-4 py-14 sm:space-y-20 sm:px-6 sm:py-16 lg:px-8">
        {menuCategories.map((category) => (
          <MenuCategory key={category.id} category={category} locale={locale} />
        ))}
      </div>

      <CallToAction
        locale={locale}
        title={content.cta.title}
        description={content.cta.description}
      />
    </>
  );
}
