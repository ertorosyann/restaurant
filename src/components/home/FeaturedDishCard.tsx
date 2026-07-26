import Image from "next/image";
import { getDietaryLabelText, type MenuItemData } from "@/data/menu";
import type { Locale } from "@/i18n/config";

interface FeaturedDishCardProps {
  item: MenuItemData;
  locale: Locale;
}

/**
 * Photo card for a highlighted dish (used on the home page).
 * Which dishes appear here is controlled by `featured: true` in
 * src/data/menu.ts.
 */
export function FeaturedDishCard({ item, locale }: FeaturedDishCardProps) {
  const dietaryLabelText = getDietaryLabelText(locale);
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-lg border border-charcoal-900/8 bg-white shadow-soft transition-all duration-300 hover:shadow-lifted motion-safe:hover:-translate-y-1.5">
      {item.image && (
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={item.image.src}
            alt={item.image.alt}
            fill
            sizes="(min-width: 1216px) 368px, (min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
            className="object-cover transition-transform duration-700 motion-safe:group-hover:scale-105"
          />
        </div>
      )}
      <div className="flex flex-1 flex-col p-6 sm:p-7">
        {item.labels && item.labels.length > 0 && (
          <ul className="mb-3 flex flex-wrap gap-2">
            {item.labels.map((label) => (
              <li
                key={label}
                className="rounded-full bg-pine-50 px-2.5 py-1 text-xs font-medium uppercase tracking-[0.1em] text-pine-800"
              >
                {dietaryLabelText[label]}
              </li>
            ))}
          </ul>
        )}
        <h3 className="font-display text-xl text-charcoal-900">{item.name}</h3>
        {item.description && (
          <p className="mt-2.5 text-sm leading-relaxed text-charcoal-600">
            {item.description}
          </p>
        )}
        <p className="mt-auto pt-5 font-display text-lg text-copper-700">{item.price}</p>
      </div>
    </article>
  );
}
