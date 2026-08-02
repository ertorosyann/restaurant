/**
 * MENU DATA — Zentrum Café Restaurant
 * ====================================
 * This is the restaurant's REAL menu (provided by the owner, 2026-07-27).
 *
 * HOW TO EDIT (multilingual):
 * - Every `name`, `description`, `title` and `note` is either a plain
 *   string (same text in every language — e.g. "Wiener Schnitzel") or an
 *   object with one entry per language: { de, cs, en, pl, hu }. German (`de`)
 *   is required; a missing language falls back to German automatically.
 * - `description` is optional — most dishes are listed by name and price
 *   only, exactly like the printed menu.
 * - Add or remove dishes inside any category's `items` array.
 * - Change `price` strings freely (they are displayed exactly as written).
 * - Reorder categories by reordering this array — the menu page and its
 *   category navigation follow this order automatically.
 * - Add dietary labels from the `DietaryLabel` list to any dish.
 * - Set `featured: true` (and optionally an `image`) to highlight a dish
 *   with a photo — used on the home page and at the top of the menu.
 *
 * Components never read this array directly — they call
 * `getMenuCategories(locale)` / `getFeaturedDishes(locale)`, which resolve
 * all text to the requested language.
 */

import { siteImages, type SiteImage } from "@/data/images";
import { localize, type Locale, type LocalizedText } from "@/i18n/config";

export type DietaryLabel =
  | "vegetarian"
  | "vegan"
  | "gluten-free"
  | "spicy"
  | "local-specialty"
  | "chefs-choice";

const dietaryLabels: Record<DietaryLabel, LocalizedText> = {
  vegetarian: {
    de: "Vegetarisch",
    cs: "Vegetariánské",
    en: "Vegetarian",
    pl: "Wegetariańskie", hu: "Vegetáriánus",
  },
  vegan: {
    de: "Vegan",
    cs: "Veganské",
    en: "Vegan",
    pl: "Wegańskie", hu: "Vegán",
  },
  "gluten-free": {
    de: "Glutenfrei",
    cs: "Bez lepku",
    en: "Gluten-Free",
    pl: "Bez glutenu", hu: "Gluténmentes",
  },
  spicy: {
    de: "Pikant",
    cs: "Pálivé",
    en: "Spicy",
    pl: "Pikantne", hu: "Csípős",
  },
  "local-specialty": {
    de: "Regionale Spezialität",
    cs: "Místní specialita",
    en: "Local Specialty",
    pl: "Specjalność regionu", hu: "Regionális specialitás",
  },
  "chefs-choice": {
    de: "Empfehlung des Küchenchefs",
    cs: "Doporučení šéfkuchaře",
    en: "Chef's Choice",
    pl: "Polecane przez szefa kuchni", hu: "A séf ajánlata",
  },
};

export function getDietaryLabelText(locale: Locale): Record<DietaryLabel, string> {
  return Object.fromEntries(
    Object.entries(dietaryLabels).map(([key, value]) => [key, localize(value, locale)])
  ) as Record<DietaryLabel, string>;
}

/** A dish as authored — text fields may carry per-language variants. */
interface MenuItemSource {
  name: LocalizedText;
  description?: LocalizedText;
  /** Optional — seasonal items (e.g. ice cream) can be listed without one. */
  price?: string;
  labels?: DietaryLabel[];
  featured?: boolean;
  image?: SiteImage;
}

interface MenuCategorySource {
  /** Used for anchors (#soups) and the category navigation. */
  id: string;
  title: LocalizedText;
  note?: LocalizedText;
  items: MenuItemSource[];
}

/** A dish resolved to one language — what components render. */
export interface MenuItemData {
  name: string;
  description?: string;
  price?: string;
  labels?: DietaryLabel[];
  featured?: boolean;
  image?: SiteImage;
}

export interface MenuCategoryData {
  id: string;
  title: string;
  note?: string;
  items: MenuItemData[];
}

const menuSource: MenuCategorySource[] = [
  {
    id: "soups",
    title: { de: "Suppen", cs: "Polévky", en: "Soups", pl: "Zupy", hu: "Levesek" },
    items: [
      {
        name: {
          de: "Frittatensuppe",
          cs: "Frittatensuppe – vývar s palačinkovými nudlemi",
          en: "Frittatensuppe – clear broth with pancake strips",
          pl: "Frittatensuppe – bulion z kluskami naleśnikowymi", hu: "Frittatensuppe – erőleves palacsintametélttel",
        },
        price: "€ 6.50",
        labels: ["local-specialty"],
        image: siteImages.dishFrittatensuppe,
      },
      {
        name: {
          de: "Gemüsecremesuppe mit Croutons",
          cs: "Krémová zeleninová polévka s krutony",
          en: "Cream of vegetable soup with croutons",
          pl: "Krem z warzyw z grzankami", hu: "Zöldségkrémleves krutonnal",
        },
        price: "€ 7.50",
        labels: ["vegetarian", "local-specialty"],
        image: siteImages.dishGemueseCreamSuppe,
      },
      {
        name: {
          de: "Gulaschsuppe mit Brot",
          cs: "Gulášová polévka s chlebem",
          en: "Goulash soup with bread",
          pl: "Zupa gulaszowa z chlebem", hu: "Gulyásleves kenyérrel",
        },
        price: "€ 8.70",
        image: siteImages.gulaschsuppe,
      },
    ],
  },
  {
    id: "salads",
    title: { de: "Salate", cs: "Saláty", en: "Salads", pl: "Sałatki", hu: "Saláták" },
    items: [
      {
        name: {
          de: "Gemischter Salat",
          cs: "Míchaný salát",
          en: "Mixed salad",
          pl: "Sałatka mieszana", hu: "Vegyes saláta",
        },
        price: "€ 7.00",
        labels: ["vegetarian"],
        image: siteImages.dishMixedSalad,
      },
      {
        name: {
          de: "Putenstreifensalat mit Brot",
          cs: "Salát s krůtími nudličkami a chlebem",
          en: "Turkey strip salad with bread",
          pl: "Sałatka z paskami indyka i chlebem", hu: "Saláta pulykacsíkokkal, kenyérrel",
        },
        price: "€ 15.50",
        image: siteImages.putenstreifensalat,
      },
    ],
  },
  {
    id: "snacks",
    title: {
      de: "Snacks & Brote",
      cs: "Snacky a chleby",
      en: "Snacks & Breads",
      pl: "Przekąski i pieczywo", hu: "Snackek és kenyerek",
    },
    items: [
      {
        name: {
          de: "Schinken-Käse Toast mit Salatschüssel",
          cs: "Toast se šunkou a sýrem a miskou salátu",
          en: "Ham and cheese toast with a salad bowl",
          pl: "Tost z szynką i serem z miską sałatki", hu: "Sonkás-sajtos melegszendvics salátástállal",
        },
        price: "€ 9.50",
        image: siteImages.hamandcheese
      },
      {
        name: {
          de: "Holzfällerbrot",
          cs: "Holzfällerbrot – „dřevorubecký“ chléb",
          en: "Holzfällerbrot – hearty lumberjack bread",
          pl: "Holzfällerbrot – chleb „drwala”", hu: "Holzfällerbrot – „favágókenyér”",
        },
        price: "€ 9.20",
        image: siteImages.dishLumberjackBread,
      },
      {
        name: {
          de: "Thunfisch auf Ciabatta Brot mit Salat",
          cs: "Tuňák na ciabattě se salátem",
          en: "Tuna on ciabatta bread with salad",
          pl: "Tuńczyk na pieczywie ciabatta z sałatką", hu: "Tonhal ciabatta kenyéren, salátával",
        },
        price: "€ 10.50",
        image: siteImages.dishTunaCiabatta,
      },
      {
        name: {
          de: "Tomaten-Mozzarella-Brot",
          cs: "Chléb s rajčaty a mozzarellou",
          en: "Tomato and mozzarella bread",
          pl: "Pieczywo z pomidorami i mozzarellą", hu: "Paradicsomos-mozzarellás kenyér",
        },
        price: "€ 9.00",
        labels: ["vegetarian"],
        image: siteImages.dishTomatoMozzarellaBread,
      },
      {
        name: {
          de: "Frankfurter mit Brot, Senf und Kren",
          cs: "Frankfurtské párky s chlebem, hořčicí a křenem",
          en: "Frankfurter sausages with bread, mustard and horseradish",
          pl: "Parówki frankfurterki z chlebem, musztardą i chrzanem", hu: "Frankfurti virsli kenyérrel, mustárral és tormával",
        },
        price: "€ 8.00",
        image: siteImages.dishFrankfurter,
      },
    ],
  },
  {
    id: "main-courses",
    title: {
      de: "Hauptgerichte",
      cs: "Hlavní chody",
      en: "Main Courses",
      pl: "Dania główne", hu: "Főételek",
    },
    items: [
      {
        name: {
          de: "Käsekrainer mit Pommes",
          cs: "Käsekrainer – klobása se sýrem, s hranolky",
          en: "Käsekrainer – cheese-filled sausage with fries",
          pl: "Käsekrainer – kiełbasa z serem, z frytkami", hu: "Käsekrainer – sajttal töltött kolbász, hasábburgonyával",
        },
        price: "€ 14.00",
        labels: ["local-specialty"],
        image: siteImages.dishKaesekrainer,
      },
      {
        name: {
          de: "Spaghetti Bolognese mit frischem Parmesan",
          cs: "Spaghetti Bolognese s čerstvým parmazánem",
          en: "Spaghetti Bolognese with fresh parmesan",
          pl: "Spaghetti Bolognese ze świeżym parmezanem", hu: "Spaghetti Bolognese frissen reszelt parmezánnal",
        },
        price: "€ 14.50",
        image: siteImages.dishSeafoodRisotto,
      },
      {
        name: {
          de: "Wiener Schnitzel mit Pommes und Preiselbeeren",
          cs: "Vídeňský řízek s hranolky a brusinkami",
          en: "Wiener Schnitzel with fries and cranberries",
          pl: "Sznycel wiedeński z frytkami i borówkami", hu: "Bécsi szelet hasábburgonyával és vörösáfonyával",
        },
        price: "€ 16.50",
        labels: ["local-specialty"],
        featured: true,
        image: siteImages.dishWienerSchnitzel,
      },
      {
        name: {
          de: "Cordon bleu mit Kartoffeln und Preiselbeeren",
          cs: "Cordon bleu s bramborami a brusinkami",
          en: "Cordon bleu with potatoes and cranberries",
          pl: "Cordon bleu z ziemniakami i borówkami", hu: "Cordon bleu burgonyával és vörösáfonyával",
        },
        price: "€ 17.90",
        image: siteImages.dishCordonBleu,
      },
      {
        name: {
          de: "Gegrillter Camembert mit Salat und Preiselbeeren",
          cs: "Grilovaný camembert se salátem a brusinkami",
          en: "Grilled camembert with salad and cranberries",
          pl: "Grillowany camembert z sałatką i borówkami", hu: "Grillezett camembert salátával és vörösáfonyával",
        },
        price: "€ 15.50",
        labels: ["vegetarian"],
        featured: true,
        image: siteImages.dishGrilledCheeseSalad,
      },
      {
        name: {
          de: "Gemüse Risotto",
          cs: "Zeleninové rizoto",
          en: "Vegetable risotto",
          pl: "Risotto warzywne", hu: "Zöldséges rizottó",
        },
        price: "€ 14.50",
        labels: ["vegetarian"],
        image: siteImages.vegetablerisotto
      },
      {
        name: {
          de: "Risotto mit Meeresfrüchten",
          cs: "Rizoto s mořskými plody",
          en: "Risotto with seafood",
          pl: "Risotto z owocami morza", hu: "Rizottó tenger gyümölcseivel",
        },
        price: "€ 18.50",    
        image: siteImages.dishSpaghettiBolognese,
      },
      {
        name: {
          de: "Pazifischer Polardorsch paniert",
          cs: "Treska polární v trojobalu",
          en: "Breaded Pacific polar cod",
          pl: "Panierowany dorsz polarny", hu: "Rántott csendes-óceáni sarki tőkehal",
        },
        price: "€ 18.80",
        image: siteImages.dishPacificPolarCod,
      },
      {
        name: {
          de: "Flammkuchen mit Schafskäse und Grillgemüse",
          cs: "Flammkuchen s ovčím sýrem a grilovanou zeleninou",
          en: "Flammkuchen (tarte flambée) with sheep's cheese and grilled vegetables",
          pl: "Flammkuchen z serem owczym i grillowanymi warzywami", hu: "Flammkuchen juhsajttal és grillezett zöldségekkel",
        },
        price: "€ 15.00",
        labels: ["vegetarian"],
        featured: true,
        image: siteImages.flammkuchen,
      },
      {
        name: "Pizza Margharitha",
        price: "€ 11.50",
        labels: ["vegetarian"],
        image: siteImages.dishPizzaMargherita,
      },
      {
        name: {
          de: "Bauern Pizza",
          cs: "Selská pizza",
          en: "Farmer's pizza",
          pl: "Pizza wiejska", hu: "Parasztpizza",
        },
        price: "€ 15.50",
        image: siteImages.dishBauernPizza,
      },
    ],
  },
  {
    id: "desserts",
    title: { de: "Desserts", cs: "Dezerty", en: "Desserts", pl: "Desery", hu: "Desszertek" },
    items: [
      {
        name: {
          de: "Hauskuchen mit Schlag",
          cs: "Domácí koláč se šlehačkou",
          en: "Homemade cake with whipped cream",
          pl: "Domowe ciasto z bitą śmietaną", hu: "Házi sütemény tejszínhabbal",
        },
        price: "€ 5.00",
        labels: ["vegetarian"],
        image: siteImages.dishHauskuchen,
      },
      {
        name: {
          de: "Apfel- oder Topfenstrudel mit Eis oder Vanillesauce",
          cs: "Jablečný nebo tvarohový závin se zmrzlinou nebo vanilkovou omáčkou",
          en: "Apple or curd cheese strudel with ice cream or vanilla sauce",
          pl: "Strudel jabłkowy lub serowy z lodami lub sosem waniliowym", hu: "Almás vagy túrós rétes fagylalttal vagy vaníliasodóval",
        },
        price: "€ 7.50",
        labels: ["vegetarian", "local-specialty"],
        image: siteImages.apfel
      },
      {
        name: {
          de: "Belgische Waffeln mit Eis und Schokosauce",
          cs: "Belgické vafle se zmrzlinou a čokoládovou omáčkou",
          en: "Belgian waffles with ice cream and chocolate sauce",
          pl: "Gofry belgijskie z lodami i sosem czekoladowym", hu: "Belga gofri fagylalttal és csokoládészósszal",
        },
        price: "€ 9.50",
        labels: ["vegetarian"],
        image: siteImages.dishBelgianWaffles,
      },
      {
        name: {
          de: "Kaiserschmarren mit Apfelmus",
          cs: "Kaiserschmarren – trhaný lívanec s jablečným pyré",
          en: "Kaiserschmarren – shredded pancake with apple sauce",
          pl: "Kaiserschmarren – omlet cesarski z musem jabłkowym", hu: "Kaiserschmarren – császármorzsa almaszósszal",
        },
        price: "€ 14.80",
        labels: ["vegetarian", "local-specialty"],
        image: siteImages.dishKaiserschmarren,
      },
    ],
  },
  {
    id: "ice-cream",
    title: {
      de: "Eisbecher",
      cs: "Zmrzlinové poháry",
      en: "Ice Cream Sundaes",
      pl: "Puchary lodowe", hu: "Fagylaltkelyhek",
    },
    note: {
      de: "Nur im Sommer erhältlich – fragen Sie unser Team nach dem aktuellen Angebot.",
      cs: "K dispozici pouze v létě – na aktuální nabídku se zeptejte naší obsluhy.",
      en: "Available in summer only — ask our team for the current selection.",
      pl: "Dostępne tylko latem – o aktualną ofertę zapytaj naszą obsługę.", hu: "Csak nyáron kapható – az aktuális kínálatról érdeklődjön csapatunknál.",
    },
    items: [
      {
        name: {
          de: "Bananensplit",
          cs: "Banánový pohár (banana split)",
          en: "Banana split",
          pl: "Deser bananowy (banana split)", hu: "Banana split",
        },
        labels: ["vegetarian"],
        image: siteImages.iceBananaSplit,
      },
      {
        name: {
          de: "Früchteeisbecher",
          cs: "Ovocný zmrzlinový pohár",
          en: "Fruit sundae",
          pl: "Puchar lodowy z owocami", hu: "Gyümölcsös fagylaltkehely",
        },
        labels: ["vegetarian"],
        image: siteImages.iceFruitSundae,
      },
      {
        name: {
          de: "Krokantbecher",
          cs: "Zmrzlinový pohár s krokantem",
          en: "Krokant sundae with brittle",
          pl: "Puchar lodowy z krokantem", hu: "Grillázsos fagylaltkehely",
        },
        labels: ["vegetarian"],
        image: siteImages.iceKrokant,
      },
      {
        name: {
          de: "Eiskaffee",
          cs: "Eiskaffee",
          en: "Eiskaffee",
          pl: "Eiskaffee", hu: "Eiskaffee",
        },
        labels: ["vegetarian"],
        image: siteImages.iceEiskaffee,
      }
    ],
  },
];

/** The full menu resolved to one language. */
export function getMenuCategories(locale: Locale): MenuCategoryData[] {
  return menuSource.map((category) => ({
    id: category.id,
    title: localize(category.title, locale),
    ...(category.note ? { note: localize(category.note, locale) } : {}),
    items: category.items.map((item) => {
      const { name, description, ...rest } = item;
      return {
        ...rest,
        name: localize(name, locale),
        ...(description ? { description: localize(description, locale) } : {}),
      };
    }),
  }));
}

/** Dishes highlighted with photos on the home page and menu. */
export function getFeaturedDishes(locale: Locale): MenuItemData[] {
  return getMenuCategories(locale)
    .flatMap((category) => category.items)
    .filter((item) => item.featured);
}
