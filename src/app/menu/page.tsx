import type { Metadata } from "next";

import { MenuCategory } from "@/components/menu/MenuCategory";
import { MenuCategoryNavigation } from "@/components/menu/MenuCategoryNavigation";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { CallToAction } from "@/components/shared/CallToAction";
import { PageHero } from "@/components/shared/PageHero";
import { siteContent } from "@/content/site";
import { dietaryLabelText, menuCategories } from "@/data/menu";
import { siteImages } from "@/data/images";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Menu | Zentrum Café Restaurant Ramsau am Dachstein",
  description:
    "Browse the menu of Zentrum Café Restaurant in Ramsau am Dachstein: Austrian specialties, fresh salads, hearty main courses, homemade cakes and carefully prepared coffee near the Dachstein.",
  path: "/menu",
});

export default function MenuPage() {
  const content = siteContent.menu;

  return (
    <>
      <PageHero
        image={siteImages.menuHero}
        eyebrow={content.header.eyebrow}
        title={content.header.title}
        description={content.header.description}
      />

      <MenuCategoryNavigation
        categories={menuCategories.map(({ id, title }) => ({ id, title }))}
      />

      <div className="mx-auto max-w-6xl px-4 pt-6 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ name: siteContent.nav.menu }]} />

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
          <MenuCategory key={category.id} category={category} />
        ))}
      </div>

      <CallToAction
        title={content.cta.title}
        description={content.cta.description}
      />
    </>
  );
}
