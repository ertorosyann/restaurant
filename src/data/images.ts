/**
 * PLACEHOLDER IMAGE REGISTRY
 * ==========================
 * ⚠️  EVERY image on this website is a temporary, royalty-free placeholder
 * from Unsplash. They show generic food, coffee, interiors and Alpine
 * scenery — they do NOT show Zentrum Café Restaurant, its team or its
 * actual dishes, and must all be replaced with real photography of the
 * restaurant before the final launch.
 *
 * HOW TO REPLACE:
 * 1. Put the real photos in the /public folder (e.g. /public/images/hero.jpg)
 *    or on your image CDN.
 * 2. Swap the `src` values below (e.g. src: "/images/hero.jpg").
 * 3. Update the `alt` text to describe the real photo.
 *
 * Because every component reads its images from this file, no component
 * code needs to change when the photography is replaced.
 */

export interface SiteImage {
  src: string;
  alt: string;
}

const unsplash = (id: string, w = 1600): string =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const siteImages = {
  /* ---------------- Hero & page headers ---------------- */

  homeHero: {
    src: unsplash("photo-1414235077428-338989a2e8c0", 2000),
    alt: "Elegantly set restaurant tables glowing in warm evening light (placeholder image)",
  },
  aboutHero: {
    src: unsplash("photo-1517248135467-4c7edcad34c4", 2000),
    alt: "Warmly lit restaurant dining room with wooden tables and soft lighting (placeholder image)",
  },
  menuHero: {
    src: unsplash("photo-1544025162-d76694265947", 2000),
    alt: "Beautifully plated dishes arranged on a rustic wooden table (placeholder image)",
  },
  contactHero: {
    src: unsplash("photo-1521017432531-fbd92d768814", 2000),
    alt: "Inviting café terrace with warm lights and comfortable seating (placeholder image)",
  },

  /* ---------------- Food & drink ---------------- */

  featuredDishOne: {
    src: unsplash("photo-1546069901-ba9599a7e63c", 1200),
    alt: "Colourful, freshly prepared dish served in a ceramic bowl (placeholder image)",
  },
  featuredDishTwo: {
    src: unsplash("photo-1467003909585-2f8a72700288", 1200),
    alt: "Refined plated main course garnished with fresh herbs (placeholder image)",
  },
  featuredDishThree: {
    src: unsplash("photo-1547592166-23ac45744acd", 1200),
    alt: "Steaming bowl of homemade soup with fresh garnish (placeholder image)",
  },
  coffee: {
    src: unsplash("photo-1509042239860-f550ce710b93", 1200),
    alt: "Freshly brewed cappuccino with delicate latte art (placeholder image)",
  },
  coffeeAlt: {
    src: unsplash("photo-1495474472287-4d71bcdd2085", 1200),
    alt: "Cup of coffee on a wooden café table beside coffee beans (placeholder image)",
  },
  dessert: {
    src: unsplash("photo-1578985545062-69928b1d9587", 1200),
    alt: "Slice of rich layered chocolate cake on an elegant plate (placeholder image)",
  },
  dessertAlt: {
    src: unsplash("photo-1551024506-0bccd828d307", 1200),
    alt: "Delicate dessert with fresh berries served on fine tableware (placeholder image)",
  },
  pastry: {
    src: unsplash("photo-1509440159596-0249088772ff", 1200),
    alt: "Golden, freshly baked pastries arranged on a bakery counter (placeholder image)",
  },
  breakfast: {
    src: unsplash("photo-1533089860892-a7c6f0a88666", 1200),
    alt: "Generous breakfast spread with pancakes, fruit and coffee (placeholder image)",
  },
  salad: {
    src: unsplash("photo-1512621776951-a57141f2eefd", 1200),
    alt: "Fresh, vibrant salad bowl with seasonal vegetables (placeholder image)",
  },

  /* ---------------- Interior & atmosphere ---------------- */

  interiorOne: {
    src: unsplash("photo-1554118811-1e0d58224f24", 1400),
    alt: "Cozy café interior with warm wood and inviting seating (placeholder image)",
  },
  interiorTwo: {
    src: unsplash("photo-1517248135467-4c7edcad34c4", 1400),
    alt: "Restaurant dining room with softly lit tables ready for guests (placeholder image)",
  },
  tableSetting: {
    src: unsplash("photo-1414235077428-338989a2e8c0", 1400),
    alt: "Fine table setting with glassware in warm evening light (placeholder image)",
  },
  kitchen: {
    src: unsplash("photo-1556910103-1c02745aae4d", 1400),
    alt: "Chef carefully preparing a dish in a professional kitchen (placeholder image)",
  },

  /* ---------------- Alpine scenery ---------------- */

  mountains: {
    src: unsplash("photo-1506905925346-21bda4d32df4", 1800),
    alt: "Majestic Alpine mountain peaks rising above the valley (placeholder image)",
  },
  alpineValley: {
    src: unsplash("photo-1458668383970-8ddd3927deed", 1600),
    alt: "Green Alpine valley surrounded by dramatic mountain slopes (placeholder image)",
  },
  mountainsWinter: {
    src: unsplash("photo-1519681393784-d120267933ba", 1600),
    alt: "Snow-covered mountain range beneath a starry night sky (placeholder image)",
  },
} satisfies Record<string, SiteImage>;

export type SiteImageKey = keyof typeof siteImages;

/**
 * Social sharing (Open Graph) preview image.
 * ⚠️ Placeholder — replace with a real 1200×630 photo of the restaurant,
 * e.g. put it at /public/og-image.jpg and change this to its absolute URL.
 * While the src points at Unsplash, structured data omits it automatically
 * (see StructuredData.tsx) so a stock photo is never indexed as the
 * restaurant itself.
 */
export const ogImage = {
  src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&h=630&q=80",
  alt: "Elegantly set restaurant tables in warm evening light (placeholder image)",
  width: 1200,
  height: 630,
};
