/**
 * IMAGE REGISTRY
 * ==============
 * Real photos of Zentrum Café Restaurant live in /public/resturant
 * (restaurant/terrace shots) and /public/manu (dishes). Slots whose
 * `src` still points at Unsplash are ⚠️ temporary placeholders showing
 * generic food, coffee and interiors — replace them with real photography
 * as it becomes available.
 *
 * HOW TO REPLACE A PLACEHOLDER:
 * 1. Put the real photo in /public/resturant (ideally ≤ 2400px wide JPEG).
 * 2. Swap the `src` value below (e.g. src: "/resturant/kitchen.jpg").
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
    src: "/resturant/img-2.jpeg",
    alt: "Sunny terrace of Zentrum Café Restaurant with wooden tables under green umbrellas and alpine scenery",
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
    src: "/resturant/img-1.jpeg",
    alt: "Street view of Zentrum Café Restaurant with blooming flower beds in front of the shaded terrace",
  },

  /* ---------------- Food & drink ---------------- */

  /* Real photos of dishes served at Zentrum Café Restaurant.
     They live in /public/manu — reference them from there, do not move
     or rename the files. */
  dishGrilledCheeseSalad: {
    src: "/manu/img-1.jpg",
    alt: "Grilled cheese wedge on a fresh leaf salad with tomatoes, arugula, seeds and a cranberry dip at Zentrum Café Restaurant",
  },
  canapePlatters: {
    src: "/manu/img-2.jpg",
    alt: "Festive platters of homemade canapés with salami, cheese, spreads, cucumber and cherry tomatoes at Zentrum Café Restaurant",
  },
  flammkuchen: {
    src: "/manu/img-3.jpg",
    alt: "Crisp oven-baked tarte flambée topped with colourful peppers, zucchini and herbs at Zentrum Café Restaurant",
  },

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
    src: "/resturant/img-2.jpeg",
    alt: "Wooden benches and tables on the terrace of Zentrum Café Restaurant on a sunny day",
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
 * Social sharing (Open Graph) preview image — a real photo of the
 * restaurant's terrace. Because it no longer points at Unsplash, it is
 * also published in the schema.org structured data automatically
 * (see StructuredData.tsx).
 */
export const ogImage = {
  src: "/resturant/img-2.jpeg",
  alt: "Sunny terrace of Zentrum Café Restaurant with wooden tables under green umbrellas",
  width: 2000,
  height: 1505,
};
