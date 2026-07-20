/**
 * MENU DATA — Zentrum Café Restaurant
 * ====================================
 * ⚠️  This is an EXAMPLE menu with realistic placeholder dishes and prices.
 * It is NOT the restaurant's real menu. Replace dishes, descriptions and
 * prices with the actual Zentrum Café Restaurant offering before launch.
 *
 * HOW TO EDIT (now multilingual):
 * - Every `name`, `description`, `title` and `note` is either a plain
 *   string (same text in every language — e.g. "Wiener Schnitzel") or an
 *   object with one entry per language: { de, cs, en, pl }. German (`de`)
 *   is required; a missing language falls back to German automatically.
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
    pl: "Wegetariańskie",
  },
  vegan: {
    de: "Vegan",
    cs: "Veganské",
    en: "Vegan",
    pl: "Wegańskie",
  },
  "gluten-free": {
    de: "Glutenfrei",
    cs: "Bez lepku",
    en: "Gluten-Free",
    pl: "Bez glutenu",
  },
  spicy: {
    de: "Pikant",
    cs: "Pálivé",
    en: "Spicy",
    pl: "Pikantne",
  },
  "local-specialty": {
    de: "Regionale Spezialität",
    cs: "Místní specialita",
    en: "Local Specialty",
    pl: "Specjalność regionu",
  },
  "chefs-choice": {
    de: "Empfehlung des Küchenchefs",
    cs: "Doporučení šéfkuchaře",
    en: "Chef's Choice",
    pl: "Polecane przez szefa kuchni",
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
  description: LocalizedText;
  price: string;
  labels?: DietaryLabel[];
  featured?: boolean;
  image?: SiteImage;
}

interface MenuCategorySource {
  /** Used for anchors (#breakfast) and the category navigation. */
  id: string;
  title: LocalizedText;
  note?: LocalizedText;
  items: MenuItemSource[];
}

/** A dish resolved to one language — what components render. */
export interface MenuItemData {
  name: string;
  description: string;
  price: string;
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
    id: "breakfast",
    title: { de: "Frühstück", cs: "Snídaně", en: "Breakfast", pl: "Śniadania" },
    note: {
      de: "Jeden Morgen serviert – der perfekte Start vor einem Tag in den Bergen.",
      cs: "Podáváme každé ráno – dokonalý start před dnem na horách.",
      en: "Served every morning — the perfect start before a day in the mountains.",
      pl: "Serwowane każdego ranka – idealny początek dnia w górach.",
    },
    items: [
      {
        name: {
          de: "Alpines Bauernfrühstück",
          cs: "Alpská selská snídaně",
          en: "Alpine Farmer's Breakfast",
          pl: "Alpejskie śniadanie wiejskie",
        },
        description: {
          de: "Bauernbrot, Bergkäse, Schinken, Butter, hausgemachte Marmelade und ein Ei aus Freilandhaltung.",
          cs: "Selský chléb, horský sýr, šunka, máslo, domácí marmeláda a vejce z volného chovu.",
          en: "Farmhouse bread, mountain cheese, ham, butter, homemade jam and a free-range egg.",
          pl: "Wiejski chleb, ser górski, szynka, masło, domowa konfitura i jajko z wolnego wybiegu.",
        },
        price: "€ 13.50",
        labels: ["local-specialty"],
      },
      {
        name: {
          de: "Zentrum-Frühstück",
          cs: "Snídaně Zentrum",
          en: "Zentrum Breakfast",
          pl: "Śniadanie Zentrum",
        },
        description: {
          de: "Körberl mit frischem Brot und Gebäck, dazu Butter, Honig, Marmelade und ein weich gekochtes Ei.",
          cs: "Košík čerstvého pečiva s máslem, medem, marmeládou a vejcem naměkko.",
          en: "Basket of fresh breads and pastries with butter, honey, jam and a soft-boiled egg.",
          pl: "Koszyk świeżego pieczywa z masłem, miodem, konfiturą i jajkiem na miękko.",
        },
        price: "€ 11.90",
        labels: ["vegetarian"],
      },
      {
        name: {
          de: "Bircher Müsli",
          cs: "Bircher müsli",
          en: "Bircher Muesli",
          pl: "Musli Bircher",
        },
        description: {
          de: "Über Nacht eingeweichte Haferflocken mit Apfel, Joghurt, gerösteten Nüssen und Beeren der Saison.",
          cs: "Přes noc namočené ovesné vločky s jablkem, jogurtem, praženými ořechy a sezónním bobulovým ovocem.",
          en: "Oats soaked overnight with apple, yoghurt, toasted nuts and seasonal berries.",
          pl: "Płatki owsiane namoczone przez noc, z jabłkiem, jogurtem, prażonymi orzechami i sezonowymi owocami.",
        },
        price: "€ 8.50",
        labels: ["vegetarian"],
      },
      {
        name: {
          de: "Avocado-Ei-Toast",
          cs: "Toast s avokádem a vejcem",
          en: "Avocado & Egg Toast",
          pl: "Tost z awokado i jajkiem",
        },
        description: {
          de: "Sauerteigtoast mit zerdrückter Avocado, pochierten Eiern, Radieschen und Kresse.",
          cs: "Kváskový toast s rozmačkaným avokádem, ztracenými vejci, ředkvičkami a řeřichou.",
          en: "Sourdough toast with crushed avocado, poached eggs, radish and cress.",
          pl: "Tost na zakwasie z rozgniecionym awokado, jajkami w koszulce, rzodkiewką i rzeżuchą.",
        },
        price: "€ 12.50",
        labels: ["vegetarian"],
      },
      {
        name: {
          de: "Schinken-Käse-Omelett",
          cs: "Omeleta se šunkou a sýrem",
          en: "Ham & Cheese Omelette",
          pl: "Omlet z szynką i serem",
        },
        description: {
          de: "Omelett aus drei Eiern mit Bergkäse, Schinken und Schnittlauch, dazu Brot.",
          cs: "Omeleta ze tří vajec s horským sýrem, šunkou a pažitkou, podávaná s chlebem.",
          en: "Three-egg omelette with alpine cheese, ham and chives, served with bread.",
          pl: "Omlet z trzech jaj z górskim serem, szynką i szczypiorkiem, podawany z pieczywem.",
        },
        price: "€ 11.50",
      },
    ],
  },
  {
    id: "starters",
    title: { de: "Vorspeisen", cs: "Předkrmy", en: "Starters", pl: "Przystawki" },
    items: [
      {
        name: {
          de: "Rindercarpaccio",
          cs: "Hovězí carpaccio",
          en: "Beef Carpaccio",
          pl: "Carpaccio wołowe",
        },
        description: {
          de: "Hauchdünn geschnittenes Rindfleisch mit Rucola, Parmesanspänen, Kapern und Zitronen-Olivenöl.",
          cs: "Tence krájené hovězí s rukolou, hoblinami parmazánu, kapary a citronovým olivovým olejem.",
          en: "Thinly sliced beef with rocket, parmesan shavings, capers and lemon-olive oil.",
          pl: "Cienko krojona wołowina z rukolą, płatkami parmezanu, kaparami i cytrynową oliwą.",
        },
        price: "€ 14.90",
        labels: ["gluten-free"],
      },
      {
        name: {
          de: "Alpenkäse-Brettl",
          cs: "Prkénko alpských sýrů",
          en: "Alpine Cheese Board",
          pl: "Deska serów alpejskich",
        },
        description: {
          de: "Auswahl regionaler Käsesorten mit Feigensenf, Walnüssen und Bauernbrot.",
          cs: "Výběr regionálních sýrů s fíkovou hořčicí, vlašskými ořechy a selským chlebem.",
          en: "Selection of regional cheeses with fig mustard, walnuts and farmhouse bread.",
          pl: "Wybór regionalnych serów z musztardą figową, orzechami włoskimi i wiejskim chlebem.",
        },
        price: "€ 12.90",
        labels: ["vegetarian", "local-specialty"],
      },
      {
        name: {
          de: "Geräuchertes Forellenfilet",
          cs: "Filet z uzeného pstruha",
          en: "Smoked Trout Fillet",
          pl: "Filet z wędzonego pstrąga",
        },
        description: {
          de: "Regional geräucherte Forelle mit Krencreme, Apfel und dunklem Brot.",
          cs: "Místně uzený pstruh s křenovým krémem, jablkem a tmavým chlebem.",
          en: "Locally smoked trout with horseradish cream, apple and dark bread.",
          pl: "Lokalnie wędzony pstrąg z kremem chrzanowym, jabłkiem i ciemnym pieczywem.",
        },
        price: "€ 13.50",
        labels: ["local-specialty"],
      },
      {
        name: {
          de: "Pilze in Knoblauchbutter",
          cs: "Houby na česnekovém másle",
          en: "Garlic Butter Mushrooms",
          pl: "Grzyby w maśle czosnkowym",
        },
        description: {
          de: "In Kräuter-Knoblauchbutter gebratene Waldpilze auf geröstetem Sauerteigbrot.",
          cs: "Lesní houby restované na bylinkovo-česnekovém másle, na opečeném kváskovém chlebu.",
          en: "Pan-fried forest mushrooms in herb-garlic butter on toasted sourdough.",
          pl: "Leśne grzyby smażone na maśle ziołowo-czosnkowym, na grzance z chleba na zakwasie.",
        },
        price: "€ 10.90",
        labels: ["vegetarian"],
      },
    ],
  },
  {
    id: "soups",
    title: { de: "Suppen", cs: "Polévky", en: "Soups", pl: "Zupy" },
    items: [
      {
        name: "Frittatensuppe",
        description: {
          de: "Klare Rindsuppe mit Frittaten und Schnittlauch.",
          cs: "Čistý hovězí vývar s tradičními palačinkovými nudlemi a pažitkou.",
          en: "Clear beef broth with traditional sliced herb pancakes and chives.",
          pl: "Klarowny bulion wołowy z krojonym naleśnikiem ziołowym i szczypiorkiem.",
        },
        price: "€ 6.50",
        labels: ["local-specialty"],
      },
      {
        name: {
          de: "Kaspressknödelsuppe",
          cs: "Polévka s Kaspressknödelem",
          en: "Kaspressknödel Soup",
          pl: "Zupa z Kaspressknödel",
        },
        description: {
          de: "Kräftige Suppe mit knusprig gebratenem Kaspressknödel – ein alpiner Klassiker.",
          cs: "Silný vývar s dokřupava opečeným sýrovým knedlíčkem – alpská klasika.",
          en: "Hearty broth with a crisp, pan-fried cheese dumpling — an Alpine classic.",
          pl: "Esencjonalny bulion z chrupiącym, smażonym knedlem serowym – alpejski klasyk.",
        },
        price: "€ 7.90",
        labels: ["vegetarian", "local-specialty"],
        featured: true,
        image: siteImages.featuredDishThree,
      },
      {
        name: {
          de: "Kürbiscremesuppe",
          cs: "Krémová dýňová polévka",
          en: "Creamy Pumpkin Soup",
          pl: "Krem z dyni",
        },
        description: {
          de: "Samtige Kürbissuppe mit steirischem Kürbiskernöl und gerösteten Kernen.",
          cs: "Hedvábná dýňová polévka se štýrským dýňovým olejem a praženými semínky.",
          en: "Silky pumpkin soup with Styrian pumpkin seed oil and roasted seeds.",
          pl: "Aksamitna zupa dyniowa ze styryjskim olejem z pestek dyni i prażonymi pestkami.",
        },
        price: "€ 6.90",
        labels: ["vegetarian", "gluten-free", "local-specialty"],
      },
      {
        name: {
          de: "Knoblauchcremesuppe",
          cs: "Krémová česneková polévka",
          en: "Garlic Cream Soup",
          pl: "Krem czosnkowy",
        },
        description: {
          de: "Samtige Knoblauchsuppe mit knusprigen Kräutercroutons.",
          cs: "Jemná krémová česneková polévka s křupavými bylinkovými krutony.",
          en: "Velvety garlic soup topped with crunchy herb croutons.",
          pl: "Delikatny krem czosnkowy z chrupiącymi ziołowymi grzankami.",
        },
        price: "€ 6.50",
        labels: ["vegetarian"],
      },
    ],
  },
  {
    id: "salads",
    title: { de: "Salate", cs: "Saláty", en: "Salads", pl: "Sałatki" },
    items: [
      {
        name: {
          de: "Gemischter Alpensalat",
          cs: "Míchaný alpský salát",
          en: "Mixed Alpine Salad",
          pl: "Mieszana sałatka alpejska",
        },
        description: {
          de: "Knackige Blattsalate der Saison und Gartengemüse mit Hausdressing.",
          cs: "Křupavé sezónní listové saláty a zelenina se zálivkou podle domácí receptury.",
          en: "Crisp seasonal leaves and garden vegetables with house dressing.",
          pl: "Chrupiące sezonowe sałaty i warzywa z dressingiem domowej roboty.",
        },
        price: "€ 7.90",
        labels: ["vegan", "gluten-free"],
      },
      {
        name: {
          de: "Steirischer Backhendlsalat",
          cs: "Štýrský salát s Backhendlem",
          en: "Styrian Fried Chicken Salad",
          pl: "Sałatka styryjska z Backhendl",
        },
        description: {
          de: "Warme Streifen vom knusprigen Backhendl auf Blattsalat mit Kürbiskernöl-Dressing.",
          cs: "Teplé proužky křupavého kuřete na listovém salátu se zálivkou z dýňového oleje.",
          en: "Warm strips of crispy chicken on leaf salad with pumpkin seed oil dressing.",
          pl: "Ciepłe paski chrupiącego kurczaka na sałatach z dressingiem z oleju z pestek dyni.",
        },
        price: "€ 15.90",
        labels: ["local-specialty"],
      },
      {
        name: {
          de: "Salat mit gegrilltem Ziegenkäse",
          cs: "Salát s grilovaným kozím sýrem",
          en: "Grilled Goat Cheese Salad",
          pl: "Sałatka z grillowanym kozim serem",
        },
        description: {
          de: "Warmer Ziegenkäse mit Honig und Walnüssen auf marinierten Blattsalaten.",
          cs: "Teplý kozí sýr s medem a vlašskými ořechy na marinovaných salátech.",
          en: "Warm goat cheese with honey and walnuts on marinated leaves.",
          pl: "Ciepły kozi ser z miodem i orzechami włoskimi na marynowanych sałatach.",
        },
        price: "€ 14.50",
        labels: ["vegetarian", "gluten-free"],
      },
      {
        name: {
          de: "Bergkräuter-Bowl",
          cs: "Bowl s horskými bylinkami",
          en: "Mountain Herb Bowl",
          pl: "Bowl z górskimi ziołami",
        },
        description: {
          de: "Quinoa, geröstetes Gemüse, Kräuter und geröstete Kerne mit Zitronenvinaigrette.",
          cs: "Quinoa, pečená zelenina, bylinky a pražená semínka s citronovou vinaigrette.",
          en: "Quinoa, roasted vegetables, herbs and toasted seeds with lemon vinaigrette.",
          pl: "Komosa ryżowa, pieczone warzywa, zioła i prażone pestki z cytrynowym winegretem.",
        },
        price: "€ 13.90",
        labels: ["vegan", "gluten-free"],
      },
    ],
  },
  {
    id: "main-courses",
    title: {
      de: "Hauptgerichte",
      cs: "Hlavní chody",
      en: "Main Courses",
      pl: "Dania główne",
    },
    items: [
      {
        name: {
          de: "Schweinsbraten mit Knödel",
          cs: "Vepřová pečeně s knedlíkem",
          en: "Roast Pork with Dumplings",
          pl: "Pieczeń wieprzowa z knedlami",
        },
        description: {
          de: "Langsam gebratener Schweinsbraten in Dunkelbiersauce mit Semmelknödeln und warmem Krautsalat.",
          cs: "Pomalu pečené vepřové na tmavém pivu s houskovými knedlíky a teplým zelným salátem.",
          en: "Slow-roasted pork in dark beer sauce with bread dumplings and warm cabbage salad.",
          pl: "Wolno pieczona wieprzowina w sosie z ciemnego piwa, z knedlami bułczanymi i ciepłą surówką z kapusty.",
        },
        price: "€ 17.90",
      },
      {
        name: {
          de: "Gegrillter Alpensaibling",
          cs: "Grilovaný siven alpský",
          en: "Grilled Alpine Char",
          pl: "Grillowana palia alpejska",
        },
        description: {
          de: "Filet vom heimischen Saibling mit Petersilkartoffeln, brauner Butter und Zitrone.",
          cs: "Filet z místního sivena s petrželovými bramborami, hnědým máslem a citronem.",
          en: "Fillet of local char with parsley potatoes, brown butter and lemon.",
          pl: "Filet z lokalnej palii z ziemniakami z pietruszką, brązowym masłem i cytryną.",
        },
        price: "€ 21.50",
        labels: ["gluten-free", "local-specialty"],
      },
      {
        name: {
          de: "Rinderfiletsteak",
          cs: "Steak z hovězí svíčkové",
          en: "Beef Filet Steak",
          pl: "Stek z polędwicy wołowej",
        },
        description: {
          de: "Gegrilltes Rinderfilet mit Pfeffersauce, saisonalem Gemüse und Rosmarinkartoffeln.",
          cs: "Grilovaná hovězí svíčková s pepřovou omáčkou, sezónní zeleninou a rozmarýnovými bramborami.",
          en: "Grilled beef filet with pepper sauce, seasonal vegetables and rosemary potatoes.",
          pl: "Grillowana polędwica wołowa z sosem pieprzowym, sezonowymi warzywami i ziemniakami z rozmarynem.",
        },
        price: "€ 28.90",
        labels: ["gluten-free", "chefs-choice"],
      },
      {
        name: {
          de: "Kräuter-Hühnerbrust",
          cs: "Kuřecí prsa na bylinkách",
          en: "Herb Chicken Breast",
          pl: "Pierś z kurczaka w ziołach",
        },
        description: {
          de: "Maishühnerbrust mit Grillgemüse und cremiger Polenta.",
          cs: "Prsa z kukuřičného kuřete s grilovanou zeleninou a krémovou polentou.",
          en: "Corn-fed chicken breast with grilled vegetables and creamy polenta.",
          pl: "Pierś z kurczaka kukurydzianego z grillowanymi warzywami i kremową polentą.",
        },
        price: "€ 18.50",
        labels: ["gluten-free"],
      },
    ],
  },
  {
    id: "austrian-specialties",
    title: {
      de: "Österreichische Spezialitäten",
      cs: "Rakouské speciality",
      en: "Austrian Specialties",
      pl: "Specjały austriackie",
    },
    note: {
      de: "Traditionelle Rezepte, mit Sorgfalt zubereitet – der Geschmack der Region.",
      cs: "Tradiční receptury připravované s péčí – chuť regionu.",
      en: "Traditional recipes prepared with care — the taste of the region.",
      pl: "Tradycyjne receptury przygotowywane z dbałością – smak regionu.",
    },
    items: [
      {
        name: "Wiener Schnitzel",
        description: {
          de: "Goldgelb gebackenes Kalbsschnitzel mit Petersilkartoffeln, Preiselbeeren und Zitrone.",
          cs: "Dozlatova smažený telecí řízek s petrželovými bramborami, brusinkami a citronem.",
          en: "Golden-fried veal schnitzel with parsley potatoes, cranberries and lemon.",
          pl: "Smażony na złoto sznycel cielęcy z ziemniakami z pietruszką, borówkami i cytryną.",
        },
        price: "€ 22.90",
        labels: ["chefs-choice"],
        featured: true,
        image: siteImages.featuredDishTwo,
      },
      {
        name: "Tafelspitz",
        description: {
          de: "Sanft gekochter Tafelspitz mit Wurzelgemüse, Apfelkren und Schnittlauchsauce.",
          cs: "Zvolna vařená hovězí špička s kořenovou zeleninou, jablečným křenem a pažitkovou omáčkou.",
          en: "Gently simmered prime boiled beef with root vegetables, apple-horseradish and chive sauce.",
          pl: "Delikatnie gotowana wołowina z warzywami korzeniowymi, chrzanem jabłkowym i sosem szczypiorkowym.",
        },
        price: "€ 23.50",
      },
      {
        name: "Kasnocken",
        description: {
          de: "In der Pfanne geröstete Nocken mit geschmolzenem Bergkäse, Röstzwiebeln und grünem Salat.",
          cs: "Na pánvi opečené noky s rozpuštěným horským sýrem, smaženou cibulkou a zeleným salátem.",
          en: "Pan-fried spaetzle with melted mountain cheese, crispy onions and green salad.",
          pl: "Podsmażane kluseczki z roztopionym górskim serem, chrupiącą cebulką i zieloną sałatą.",
        },
        price: "€ 14.90",
        labels: ["vegetarian", "local-specialty"],
        featured: true,
        image: siteImages.featuredDishOne,
      },
      {
        name: {
          de: "Rindsgulasch",
          cs: "Hovězí guláš",
          en: "Beef Goulash",
          pl: "Gulasz wołowy",
        },
        description: {
          de: "Kräftiges Paprikagulasch, langsam geschmort, serviert mit Semmelknödel.",
          cs: "Poctivý paprikový guláš, pomalu dušený, podávaný s houskovým knedlíkem.",
          en: "Rich paprika goulash, slowly braised, served with bread dumpling.",
          pl: "Treściwy gulasz paprykowy, długo duszony, podawany z knedlem bułczanym.",
        },
        price: "€ 16.90",
        labels: ["spicy"],
      },
      {
        name: "Brettljause",
        description: {
          de: "Rustikales Brettl mit regionalem Schinken, Speck, Käse, Aufstrichen und Bauernbrot.",
          cs: "Rustikální prkénko s regionální šunkou, špekem, sýrem, pomazánkami a selským chlebem.",
          en: "Rustic wooden board with regional ham, speck, cheese, spreads and farmhouse bread.",
          pl: "Rustykalna deska z regionalną szynką, boczkiem, serem, pastami i wiejskim chlebem.",
        },
        price: "€ 15.90",
        labels: ["local-specialty"],
      },
    ],
  },
  {
    id: "international-dishes",
    title: {
      de: "Internationale Gerichte",
      cs: "Mezinárodní kuchyně",
      en: "International Dishes",
      pl: "Dania międzynarodowe",
    },
    items: [
      {
        name: "Spaghetti al Pomodoro",
        description: {
          de: "Spaghetti in langsam gekochter Tomatensauce mit Basilikum und Parmesan.",
          cs: "Špagety v pomalu vařené rajčatové omáčce s bazalkou a parmazánem.",
          en: "Spaghetti in slow-cooked tomato sauce with basil and parmesan.",
          pl: "Spaghetti w wolno gotowanym sosie pomidorowym z bazylią i parmezanem.",
        },
        price: "€ 12.90",
        labels: ["vegetarian"],
      },
      {
        name: "Penne Arrabbiata",
        description: {
          de: "Penne in pikanter Tomaten-Chili-Sauce mit Knoblauch und frischer Petersilie.",
          cs: "Penne v pikantní rajčatovo-chilli omáčce s česnekem a čerstvou petrželkou.",
          en: "Penne in spicy tomato-chili sauce with garlic and fresh parsley.",
          pl: "Penne w pikantnym sosie pomidorowo-chili z czosnkiem i świeżą pietruszką.",
        },
        price: "€ 12.50",
        labels: ["vegan", "spicy"],
      },
      {
        name: "Zentrum Burger",
        description: {
          de: "Rindfleisch-Burger mit Bergkäse, Speck, Haussauce und Rosmarin-Pommes.",
          cs: "Hovězí burger s horským sýrem, slaninou, domácí omáčkou a rozmarýnovými hranolky.",
          en: "Beef burger with alpine cheese, bacon, house sauce and rosemary fries.",
          pl: "Burger wołowy z górskim serem, boczkiem, domowym sosem i frytkami z rozmarynem.",
        },
        price: "€ 16.90",
      },
      {
        name: {
          de: "Lachs-Bowl vom Grill",
          cs: "Bowl s grilovaným lososem",
          en: "Grilled Salmon Bowl",
          pl: "Bowl z grillowanym łososiem",
        },
        description: {
          de: "Lachsfilet auf Kräuterreis mit Avocado, Edamame und Sesam-Soja-Dressing.",
          cs: "Filet z lososa na bylinkové rýži s avokádem, edamame a sezamovo-sójovou zálivkou.",
          en: "Salmon fillet on herbed rice with avocado, edamame and sesame-soy dressing.",
          pl: "Filet z łososia na ziołowym ryżu z awokado, edamame i dressingiem sezamowo-sojowym.",
        },
        price: "€ 19.50",
      },
    ],
  },
  {
    id: "vegetarian-dishes",
    title: {
      de: "Vegetarische Gerichte",
      cs: "Vegetariánská jídla",
      en: "Vegetarian Dishes",
      pl: "Dania wegetariańskie",
    },
    items: [
      {
        name: {
          de: "Waldpilzrisotto",
          cs: "Rizoto s lesními houbami",
          en: "Wild Mushroom Risotto",
          pl: "Risotto z leśnymi grzybami",
        },
        description: {
          de: "Cremiges Risotto mit Waldpilzen, Parmesan und frischem Thymian.",
          cs: "Krémové rizoto s lesními houbami, parmazánem a čerstvým tymiánem.",
          en: "Creamy risotto with forest mushrooms, parmesan and fresh thyme.",
          pl: "Kremowe risotto z leśnymi grzybami, parmezanem i świeżym tymiankiem.",
        },
        price: "€ 15.90",
        labels: ["vegetarian", "gluten-free"],
      },
      {
        name: {
          de: "Gemüsecurry",
          cs: "Zeleninové kari",
          en: "Vegetable Curry",
          pl: "Curry warzywne",
        },
        description: {
          de: "Saisonales Gemüse in mildem Kokoscurry mit duftendem Basmatireis.",
          cs: "Sezónní zelenina v jemném kokosovém kari s voňavou rýží basmati.",
          en: "Seasonal vegetables in mild coconut curry with fragrant basmati rice.",
          pl: "Sezonowe warzywa w łagodnym curry kokosowym z aromatycznym ryżem basmati.",
        },
        price: "€ 14.50",
        labels: ["vegan", "gluten-free"],
      },
      {
        name: {
          de: "Spinatknödel mit Käse",
          cs: "Špenátové knedlíčky se sýrem",
          en: "Spinach & Cheese Dumplings",
          pl: "Knedle szpinakowe z serem",
        },
        description: {
          de: "Spinatknödel mit brauner Butter, Parmesan und knackigem Salat.",
          cs: "Špenátové knedlíčky s hnědým máslem, parmazánem a křupavým salátem.",
          en: "Spinach dumplings with brown butter, parmesan and crisp salad.",
          pl: "Knedle szpinakowe z brązowym masłem, parmezanem i chrupiącą sałatą.",
        },
        price: "€ 13.90",
        labels: ["vegetarian"],
      },
      {
        name: {
          de: "Grillgemüse-Teller",
          cs: "Talíř grilované zeleniny",
          en: "Grilled Vegetable Plate",
          pl: "Talerz grillowanych warzyw",
        },
        description: {
          de: "Mariniertes Grillgemüse mit Kräuterpolenta und Basilikumpesto.",
          cs: "Marinovaná grilovaná zelenina s bylinkovou polentou a bazalkovým pestem.",
          en: "Marinated grilled vegetables with herb polenta and basil pesto.",
          pl: "Marynowane grillowane warzywa z ziołową polentą i pesto bazyliowym.",
        },
        price: "€ 13.50",
        labels: ["vegan", "gluten-free"],
      },
    ],
  },
  {
    id: "desserts",
    title: {
      de: "Desserts & Kuchen",
      cs: "Dezerty a koláče",
      en: "Desserts & Cakes",
      pl: "Desery i ciasta",
    },
    note: {
      de: "Täglich hausgemacht – am besten langsam genießen, mit einem guten Kaffee.",
      cs: "Každý den domácí výroby – nejlépe si je vychutnáte pomalu, s dobrou kávou.",
      en: "Homemade every day — best enjoyed slowly, with a good coffee.",
      pl: "Codziennie domowej roboty – najlepiej delektować się nimi powoli, przy dobrej kawie.",
    },
    items: [
      {
        name: "Apfelstrudel",
        description: {
          de: "Warmer Apfelstrudel in knusprigem Teig mit Vanillesauce oder Schlagobers.",
          cs: "Teplý jablečný závin v křupavém těstě s vanilkovou omáčkou nebo šlehačkou.",
          en: "Warm apple strudel in crisp pastry with vanilla sauce or whipped cream.",
          pl: "Ciepły strudel jabłkowy w kruchym cieście z sosem waniliowym lub bitą śmietaną.",
        },
        price: "€ 6.90",
        labels: ["vegetarian", "local-specialty"],
      },
      {
        name: "Kaiserschmarrn",
        description: {
          de: "Flaumiger Kaiserschmarrn mit Rosinen, Staubzucker und Zwetschkenröster.",
          cs: "Nadýchaný trhaný lívanec s rozinkami, moučkovým cukrem a švestkovým kompotem.",
          en: "Fluffy shredded pancake with raisins, icing sugar and plum compote.",
          pl: "Puszysty omlet cesarski z rodzynkami, cukrem pudrem i kompotem śliwkowym.",
        },
        price: "€ 12.50",
        labels: ["vegetarian", "chefs-choice"],
      },
      {
        name: "Sachertorte",
        description: {
          de: "Klassische Schokoladentorte mit Marillenmarmelade und Schlagobers.",
          cs: "Klasický čokoládový dort s meruňkovou marmeládou a šlehačkou.",
          en: "Classic chocolate cake with apricot jam and whipped cream.",
          pl: "Klasyczny tort czekoladowy z konfiturą morelową i bitą śmietaną.",
        },
        price: "€ 5.90",
        labels: ["vegetarian"],
      },
      {
        name: {
          de: "Kuchen des Tages",
          cs: "Koláč dne",
          en: "Cake of the Day",
          pl: "Ciasto dnia",
        },
        description: {
          de: "Täglich wechselnder hausgemachter Kuchen aus unserer Vitrine – fragen Sie unser Team.",
          cs: "Každý den jiný domácí koláč z naší vitríny – zeptejte se našeho týmu.",
          en: "A daily changing homemade cake from our pastry counter — ask our team.",
          pl: "Codziennie inne domowe ciasto z naszej witryny – zapytaj naszą obsługę.",
        },
        price: "€ 4.90",
        labels: ["vegetarian"],
      },
      {
        name: {
          de: "Vanille-Panna-Cotta",
          cs: "Vanilková panna cotta",
          en: "Vanilla Panna Cotta",
          pl: "Waniliowa panna cotta",
        },
        description: {
          de: "Seidige Vanillecreme mit warmem Beerenkompott.",
          cs: "Hedvábný vanilkový krém s teplým kompotem z bobulového ovoce.",
          en: "Silky vanilla cream with warm berry compote.",
          pl: "Jedwabisty krem waniliowy z ciepłym kompotem z owoców leśnych.",
        },
        price: "€ 6.50",
        labels: ["vegetarian", "gluten-free"],
      },
    ],
  },
  {
    id: "coffee",
    title: { de: "Kaffee", cs: "Káva", en: "Coffee", pl: "Kawa" },
    note: {
      de: "Sorgfältig zubereitet aus hochwertigen Bohnen – das Herz jedes guten Cafés.",
      cs: "Pečlivě připravovaná z kvalitních zrn – srdce každé dobré kavárny.",
      en: "Carefully prepared from quality beans — the heart of every good café.",
      pl: "Starannie parzona z wysokiej jakości ziaren – serce każdej dobrej kawiarni.",
    },
    items: [
      {
        name: "Wiener Melange",
        description: {
          de: "Espresso mit heißer Milch und einer sanften Haube aus Milchschaum.",
          cs: "Espresso s horkým mlékem a jemnou čepicí mléčné pěny.",
          en: "Espresso with steamed milk and a soft cap of milk foam.",
          pl: "Espresso z gorącym mlekiem i delikatną czapką mlecznej pianki.",
        },
        price: "€ 4.20",
      },
      {
        name: "Espresso",
        description: {
          de: "Kurz und intensiv – auch als Doppio erhältlich.",
          cs: "Krátká, intenzivní klasika – také jako doppio.",
          en: "A short, intense classic — also available as doppio.",
          pl: "Krótka, intensywna klasyka – dostępna także jako doppio.",
        },
        price: "€ 2.90",
      },
      {
        name: "Cappuccino",
        description: {
          de: "Espresso mit samtigem Milchschaum.",
          cs: "Espresso se sametovou mléčnou pěnou.",
          en: "Espresso with velvety milk foam.",
          pl: "Espresso z aksamitną pianką mleczną.",
        },
        price: "€ 4.10",
      },
      {
        name: "Einspänner",
        description: {
          de: "Doppelter Espresso im Glas, gekrönt mit Schlagobers.",
          cs: "Dvojité espresso ve skle, korunované šlehačkou.",
          en: "Double espresso in a glass, crowned with whipped cream.",
          pl: "Podwójne espresso w szklance, zwieńczone bitą śmietaną.",
        },
        price: "€ 4.50",
        labels: ["local-specialty"],
      },
      {
        name: "Café Latte",
        description: {
          de: "Milder Espresso mit viel heißer Milch.",
          cs: "Jemné espresso s velkým podílem horkého mléka.",
          en: "Mild espresso with plenty of steamed milk.",
          pl: "Łagodne espresso z dużą ilością gorącego mleka.",
        },
        price: "€ 4.30",
      },
      {
        name: {
          de: "Heiße Schokolade",
          cs: "Horká čokoláda",
          en: "Hot Chocolate",
          pl: "Gorąca czekolada",
        },
        description: {
          de: "Cremige heiße Schokolade mit Schlagobers.",
          cs: "Hustá horká čokoláda se šlehačkou.",
          en: "Rich hot chocolate with whipped cream.",
          pl: "Gęsta gorąca czekolada z bitą śmietaną.",
        },
        price: "€ 4.20",
      },
    ],
  },
  {
    id: "tea",
    title: { de: "Tee", cs: "Čaj", en: "Tea", pl: "Herbata" },
    items: [
      {
        name: {
          de: "Alpenkräutertee",
          cs: "Čaj z alpských bylin",
          en: "Alpine Herb Tea",
          pl: "Herbata z ziół alpejskich",
        },
        description: {
          de: "Wohltuende Mischung aus Bergkräutern der Region.",
          cs: "Uklidňující směs horských bylin z regionu.",
          en: "Soothing blend of mountain herbs from the region.",
          pl: "Kojąca mieszanka górskich ziół z regionu.",
        },
        price: "€ 3.60",
        labels: ["local-specialty"],
      },
      {
        name: "Earl Grey",
        description: {
          de: "Klassischer Schwarztee mit Bergamotte.",
          cs: "Klasický černý čaj s bergamotem.",
          en: "Classic black tea with bergamot.",
          pl: "Klasyczna czarna herbata z bergamotką.",
        },
        price: "€ 3.40",
      },
      {
        name: {
          de: "Frischer Minztee",
          cs: "Čaj z čerstvé máty",
          en: "Fresh Mint Tea",
          pl: "Herbata ze świeżej mięty",
        },
        description: {
          de: "Aufguss aus frischen Minzblättern, dazu Honig.",
          cs: "Nálev z čerstvých mátových lístků, med podáváme zvlášť.",
          en: "Fresh mint leaves infused with honey on the side.",
          pl: "Napar ze świeżych listków mięty, miód podawany osobno.",
        },
        price: "€ 3.90",
      },
      {
        name: {
          de: "Früchtetee",
          cs: "Ovocný čaj",
          en: "Fruit Infusion",
          pl: "Napar owocowy",
        },
        description: {
          de: "Fruchtige Mischung aus Beeren und Hibiskus, von Natur aus koffeinfrei.",
          cs: "Ovocná směs z bobulí a ibišku, přirozeně bez kofeinu.",
          en: "Fruity blend of berries and hibiscus, naturally caffeine-free.",
          pl: "Owocowa mieszanka jagód i hibiskusa, naturalnie bez kofeiny.",
        },
        price: "€ 3.40",
      },
    ],
  },
  {
    id: "cold-drinks",
    title: {
      de: "Kalte Getränke",
      cs: "Studené nápoje",
      en: "Cold Drinks",
      pl: "Zimne napoje",
    },
    items: [
      {
        name: "Almdudler",
        description: {
          de: "Österreichs beliebte Alpenkräuterlimonade.",
          cs: "Oblíbená rakouská limonáda z alpských bylin.",
          en: "Austria's beloved alpine herb lemonade.",
          pl: "Ulubiona austriacka lemoniada z ziół alpejskich.",
        },
        price: "€ 3.60",
        labels: ["local-specialty"],
      },
      {
        name: {
          de: "Holunderblütenspritzer",
          cs: "Bezový spritzer",
          en: "Elderflower Spritzer",
          pl: "Spritzer z kwiatu czarnego bzu",
        },
        description: {
          de: "Hausgemachter Holunderblütensirup mit Sodawasser und Zitrone.",
          cs: "Domácí sirup z bezového květu se sodovkou a citronem.",
          en: "Homemade elderflower syrup with sparkling water and lemon.",
          pl: "Domowy syrop z kwiatów czarnego bzu z wodą gazowaną i cytryną.",
        },
        price: "€ 3.90",
      },
      {
        name: {
          de: "Frisch gepresster Orangensaft",
          cs: "Čerstvě vymačkaný pomerančový džus",
          en: "Fresh Orange Juice",
          pl: "Świeżo wyciskany sok pomarańczowy",
        },
        description: {
          de: "Auf Bestellung frisch gepresst.",
          cs: "Připravujeme čerstvý na objednávku.",
          en: "Freshly squeezed to order.",
          pl: "Wyciskany na świeżo na zamówienie.",
        },
        price: "€ 4.50",
      },
      {
        name: {
          de: "Apfelsaft gespritzt",
          cs: "Jablečný střik",
          en: "Apple Juice Spritzer",
          pl: "Szprycer jabłkowy",
        },
        description: {
          de: "Regionaler Apfelsaft mit prickelndem Mineralwasser.",
          cs: "Regionální jablečný džus s perlivou minerální vodou.",
          en: "Regional apple juice with sparkling mineral water.",
          pl: "Regionalny sok jabłkowy z gazowaną wodą mineralną.",
        },
        price: "€ 3.40",
      },
      {
        name: {
          de: "Mineralwasser",
          cs: "Minerální voda",
          en: "Mineral Water",
          pl: "Woda mineralna",
        },
        description: {
          de: "Still oder prickelnd, 0,33 l.",
          cs: "Perlivá nebo neperlivá, 0,33 l.",
          en: "Still or sparkling, 0.33 l.",
          pl: "Gazowana lub niegazowana, 0,33 l.",
        },
        price: "€ 2.90",
      },
    ],
  },
];

/** The full menu resolved to one language. */
export function getMenuCategories(locale: Locale): MenuCategoryData[] {
  return menuSource.map((category) => ({
    id: category.id,
    title: localize(category.title, locale),
    ...(category.note ? { note: localize(category.note, locale) } : {}),
    items: category.items.map((item) => ({
      ...item,
      name: localize(item.name, locale),
      description: localize(item.description, locale),
    })),
  }));
}

/** Dishes highlighted with photos on the home page and menu. */
export function getFeaturedDishes(locale: Locale): MenuItemData[] {
  return getMenuCategories(locale)
    .flatMap((category) => category.items)
    .filter((item) => item.featured);
}
