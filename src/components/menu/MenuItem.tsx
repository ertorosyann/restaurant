import Image from "next/image";
import { getDietaryLabelText, type MenuItemData } from "@/data/menu";
import type { Locale } from "@/i18n/config";

interface MenuItemProps {
  item: MenuItemData;
  locale: Locale;
}

/**
 * A single dish: name, dotted price leader, description and dietary
 * labels. Featured dishes may show a small photo — the menu itself
 * stays deliberately lightweight and readable.
 */
export function MenuItem({ item, locale }: MenuItemProps) {
  const dietaryLabelText = getDietaryLabelText(locale);
  return (
    <article className="flex gap-4">
      {item.image && (
        <div className="relative mt-1 hidden h-16 w-16 shrink-0 overflow-hidden rounded-md sm:block">
          <Image
            src={item.image.src}
            alt={item.image.alt}
            fill
            sizes="64px"
            className="object-cover"
          />
        </div>
      )}
      <div className="min-w-0 flex-1">
        <div className="flex items-baseline gap-3">
          <h3 className="font-display text-lg leading-snug text-charcoal-900">
            {item.name}
          </h3>
          <span
            aria-hidden="true"
            className="min-w-4 flex-1 border-b border-dotted border-charcoal-900/25"
          />
          <p className="whitespace-nowrap font-display text-lg text-copper-700">
            {item.price}
          </p>
        </div>
        <p className="mt-1.5 text-sm leading-relaxed text-charcoal-600">
          {item.description}
        </p>
        {item.labels && item.labels.length > 0 && (
          <ul className="mt-2.5 flex flex-wrap gap-1.5">
            {item.labels.map((label) => (
              <li
                key={label}
                className="rounded-full bg-pine-50 px-2.5 py-0.5 text-xs font-medium uppercase tracking-[0.08em] text-pine-800"
              >
                {dietaryLabelText[label]}
              </li>
            ))}
          </ul>
        )}
      </div>
    </article>
  );
}
