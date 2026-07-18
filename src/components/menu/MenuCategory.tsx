import { MenuItem } from "@/components/menu/MenuItem";
import { Reveal } from "@/components/shared/Reveal";
import type { MenuCategoryData } from "@/data/menu";

interface MenuCategoryProps {
  category: MenuCategoryData;
}

/**
 * One menu section, anchored for the category navigation
 * (e.g. /menu#breakfast).
 */
export function MenuCategory({ category }: MenuCategoryProps) {
  return (
    <section id={category.id} aria-labelledby={`${category.id}-heading`}>
      <Reveal>
        <div className="flex items-center gap-5">
          <h2
            id={`${category.id}-heading`}
            className="font-display text-2xl text-charcoal-900 sm:text-3xl"
          >
            {category.title}
          </h2>
          <span
            aria-hidden="true"
            className="h-px flex-1 bg-gradient-to-r from-copper-400/70 to-transparent"
          />
        </div>
        {category.note && (
          <p className="mt-2.5 max-w-xl text-sm italic leading-relaxed text-charcoal-500">
            {category.note}
          </p>
        )}
      </Reveal>

      <div className="mt-8 grid gap-x-14 gap-y-8 md:grid-cols-2">
        {category.items.map((item, index) => (
          <Reveal key={item.name} delay={(index % 2) * 80}>
            <MenuItem item={item} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
