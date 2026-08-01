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
  homeHero1: {
    src: "/resturant/resturant.jpeg",
    alt: "Sunny terrace of Zentrum Café Restaurant with wooden tables under green umbrellas and alpine scenery",
  },
  aboutHero: {
    src: '/resturant/event-place.jpeg',
    alt: "Warmly lit restaurant dining room with wooden tables and soft lighting (placeholder image)",
  },
  menuHero: {
    src: '/resturant/event-place3.jpeg',
    alt: "Beautifully plated dishes arranged on a rustic wooden table (placeholder image)",
  },
  contactHero: {
    // src: "/resturant/img-2.jpeg",
    src: "/resturant/resturant-home.jpeg",
    alt: "Street view of Zentrum Café Restaurant with blooming flower beds in front of the shaded terrace",
  },


  /* ---------------- Food & drink ---------------- */

  /* Real photos of dishes served at Zentrum Café Restaurant.
     They live in /public/manu — reference them from there, do not move
     or rename the files. */
  dishGrilledCheeseSalad: {
    src: "/manu/Grilled-camembert.jpg",
    alt: "Grilled cheese wedge on a fresh leaf salad with tomatoes, arugula, seeds and a cranberry dip at Zentrum Café Restaurant",
  },
  canapePlatters: {
    src: "/manu/img-2.jpg",
    alt: "Festive platters of homemade canapés with salami, cheese, spreads, cucumber and cherry tomatoes at Zentrum Café Restaurant",
  },
  flammkuchen: {
    src: "/manu/Flammkuchen.jpg",
    alt: "Crisp oven-baked tarte flambée topped with colourful peppers, zucchini and herbs at Zentrum Café Restaurant",
  },
  dishWienerSchnitzel: {
    src: "/manu/wiener-schnitzel.jpeg",
    alt: "Golden Wiener Schnitzel with roast potatoes, fries, lemon and cranberries served on a decorated table at Zentrum Café Restaurant",
  },
  apfel: {
    src: '/manu/Apfel.jpeg',
    alt: 'Apfel'
  },
  vegetablerisotto: {
    src: '/manu/Vegetable-risotto.jpeg',
    alt: 'Vegetable-risotto',
  },
  hamandcheese: {
    src: '/manu/Ham-and-cheese.jpeg',  
    alt: 'Ham-and-cheese'
  },
  putenstreifensalat: {
    src: '/manu/Putenstreifensalat.jpeg',
    alt: 'Putenstreifensalat'
  },
  gulaschsuppe: {
    src: '/manu/Gulaschsuppe.jpeg',
    alt: 'Gulaschsuppe'
  },
  dishFrittatensuppe: {
    src: "/manu/frittatensuppe.jpeg",
    alt: "Clear broth with thin pancake strips and fresh chives at Zentrum Café Restaurant",
  },
  dishMixedSalad: {
    src: "/manu/gemischte-salat.jpeg",
    alt: "Fresh mixed salad with crisp leaves, tomatoes and house dressing at Zentrum Café Restaurant",
  },
  dishLumberjackBread: {
    src: "/manu/lumberjack_bread.jpeg",
    alt: "Hearty Holzfällerbrot — rustic open bread topped with savoury garnish at Zentrum Café Restaurant",
  },
  dishTunaCiabatta: {
    src: "/manu/Thunfisch-auf-Ciabatta-Brot.jpeg",
    alt: "Tuna on toasted ciabatta bread served with a fresh side salad at Zentrum Café Restaurant",
  },
  dishTomatoMozzarellaBread: {
    src: "/manu/Tomaten-Mozzarella-Brot.jpeg",
    alt: "Toasted bread topped with tomatoes, melted mozzarella and herbs at Zentrum Café Restaurant",
  },
  dishFrankfurter: {
    src: "/manu/frankfur-sausages.jpeg",
    alt: "Frankfurter sausages with bread, mustard and horseradish at Zentrum Café Restaurant",
  },
  dishKaesekrainer: {
    src: "/manu/käsekrainer.jpeg",
    alt: "Grilled Käsekrainer cheese sausage served with golden fries at Zentrum Café Restaurant",
  },
  dishSpaghettiBolognese: {
    src: "/manu/spaghetti-Bolognese.jpeg",
    alt: "Spaghetti Bolognese topped with freshly grated parmesan at Zentrum Café Restaurant",
  },
  dishCordonBleu: {
    src: "/manu/cordon-potatoes.jpeg",
    alt: "Golden Cordon bleu with roast potatoes and cranberries at Zentrum Café Restaurant",
  },
  dishSeafoodRisotto: {
    src: "/manu/seafood-risotto.jpeg",
    alt: "Creamy risotto with seafood and fresh herbs at Zentrum Café Restaurant",
  },
  dishPizzaMargherita: {
    src: "/manu/pzz-margarita.jpeg",
    alt: "Classic Pizza Margherita with tomato sauce, mozzarella and basil at Zentrum Café Restaurant",
  },
  dishBelgianWaffles: {
    src: "/manu/belgian-waffles-chocolate.jpeg",
    alt: "Belgian waffles with ice cream and warm chocolate sauce at Zentrum Café Restaurant",
  },
  dishKaiserschmarren: {
    src: "/manu/kaiserschmarren.jpeg",
    alt: "Fluffy shredded Kaiserschmarren pancake dusted with icing sugar, served with apple sauce at Zentrum Café Restaurant",
  },
  iceBananaSplit: {
    src: "/manu/ice-Bananensplit.jpeg",
    alt: "Banana split sundae with ice cream, whipped cream and chocolate sauce at Zentrum Café Restaurant",
  },
  iceFruitSundae: {
    src: "/manu/ice-früchteeisbecher.jpeg",
    alt: "Ice cream sundae topped with fresh fruit and whipped cream at Zentrum Café Restaurant",
  },
  iceKrokant: {
    src: "/manu/ice-Krokant.jpeg",
    alt: "Krokant ice cream sundae with caramel brittle and whipped cream at Zentrum Café Restaurant",
  },
  coffee: {
    src: '/manu/coffee1.jpeg',
    alt: "Freshly brewed cappuccino with delicate latte art (placeholder image)",
  },
  dishGemueseCreamSuppe: {
    src: '/manu/Brokkoli-Zucchini-Cremesuppe.jpeg',
    alt: 'Gemuese-Cream-Suppe',
  },

  /* ---------------- Interior & atmosphere ---------------- */

  interiorOne: {
    src: "/resturant/event-place3.jpeg",
    alt: "Bright dining room of Zentrum Café Restaurant with plush grey armchairs, round wooden tables and the bar beneath timber beams",
  },
  tableSetting: {
    src: "/resturant/img-2.jpeg",
    alt: "Wooden benches and tables on the terrace of Zentrum Café Restaurant on a sunny day",
  },
  tableSetting1: {
    src: "/resturant/event-place.jpeg",
    alt: "Wooden benches and tables on the terrace of Zentrum Café Restaurant on a sunny day",
  },
  tableSetting3: {
    src: "/resturant/event-place3.jpeg",
    alt: "Wooden benches and tables on the terrace of Zentrum Café Restaurant on a sunny day",
  },
  eventsRoom: {
    src: "/resturant/events.jpeg",
    alt: "Festively set event room at Zentrum Café Restaurant, ready for a celebration",
  },
  kitchen: {
    src: unsplash("photo-1556910103-1c02745aae4d", 1400),
    alt: "Chef carefully preparing a dish in a professional kitchen (placeholder image)",
  },
  homeHero2: {
    src: "/resturant/resturant-home2.jpeg",
    alt: "Zentrum Café Restaurant terrace with green umbrellas beneath the Dachstein mountains",
  },

  /* ---------------- Alpine scenery ---------------- */

  mountains: {
    src: '/resturant/moments3.png',
    alt: "Majestic Alpine mountain peaks rising above the valley (placeholder image)",
  },
  moments: {
    src: "/resturant/moments.png",
    alt: "Lunch with a glass of sparkling wine on the terrace of Zentrum Café Restaurant",
  },
  moments1: {
    // src: "/manu/aperol-spritz2.png",
    src: "/manu/hugo-and-aperol.png",
    alt: "Aperol Spritz served on the sunny terrace of Zentrum Café Restaurant",
  },
  moments2: {
    src: "/resturant/resturant-home.jpeg",
    alt: "Zentrum Café Restaurant terrace with green umbrellas beneath the Dachstein mountains",
  },
  moments3: {
    src: "/resturant/moments.png",
    alt: "Lunch with a glass of sparkling wine on the terrace of Zentrum Café Restaurant",
  },
  moments4: {
    src: "/resturant/moments4.png",
    alt: "Guests enjoying a moment at Zentrum Café Restaurant",
  },
} satisfies Record<string, SiteImage>;

export type SiteImageKey = keyof typeof siteImages;

/**
 * Slides for the auto-playing home hero carousel, in display order —
 * the first entry is what visitors see on page load.
 */
export const homeHeroSlides: SiteImage[] = [
  siteImages.moments2, 
  siteImages.moments1, 
  siteImages.homeHero2,
  // siteImages.homeHero1, // resturant.jpeg
  siteImages.moments3, 
  siteImages.homeHero, // img-2.jpeg
];

/**
 * Photos of the event rooms — shown as a carousel in the events
 * section of the About page.
 */
export const eventRoomSlides: SiteImage[] = [
  siteImages.tableSetting1, // event-place.jpeg
  siteImages.tableSetting3, // event-place3.jpeg
  siteImages.eventsRoom, // events.jpeg
];

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
