/**
 * MENU DATA — Zentrum Café Restaurant
 * ====================================
 * This is the restaurant's REAL menu (provided by the owner, 2026-07-27).
 *
 * HOW TO EDIT (multilingual):
 * - Every `name`, `description`, `title` and `note` is either a plain
 *   string (same text in every language — e.g. "Wiener Schnitzel") or an
 *   object with one entry per language: { de, cs, en, pl, hu, hr, ru }. German (`de`)
 *   is required; a missing language falls back to German automatically.
 * - `description` is optional — most dishes are listed by name and price
 *   only, exactly like the printed menu.
 * - Add or remove dishes inside any category's `items` array.
 * - Change `price` strings freely (they are displayed exactly as written).
 * - Reorder categories by reordering this array — the menu page and its
 *   category navigation follow this order automatically.
 * - Add dietary labels from the `DietaryLabel` list to any dish.
 * - Add `allergens` codes (A, B, C … R, see `AllergenCode`) to a dish —
 *   they are shown as small badges next to its name and explained in the
 *   legend at the bottom of the menu page.
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
    pl: "Wegetariańskie", hr: "Vegetarijansko", ru: "Вегетарианское", hu: "Vegetáriánus",
  },
  vegan: {
    de: "Vegan",
    cs: "Veganské",
    en: "Vegan",
    pl: "Wegańskie", hr: "Vegansko", ru: "Веганское", hu: "Vegán",
  },
  "gluten-free": {
    de: "Glutenfrei",
    cs: "Bez lepku",
    en: "Gluten-Free",
    pl: "Bez glutenu", hr: "Bez glutena", ru: "Без глютена", hu: "Gluténmentes",
  },
  spicy: {
    de: "Pikant",
    cs: "Pálivé",
    en: "Spicy",
    pl: "Pikantne", hr: "Pikantno", ru: "Острое", hu: "Csípős",
  },
  "local-specialty": {
    de: "Regionale Spezialität",
    cs: "Místní specialita",
    en: "Local Specialty",
    pl: "Specjalność regionu", hr: "Regionalni specijalitet", ru: "Региональное фирменное блюдо", hu: "Regionális specialitás",
  },
  "chefs-choice": {
    de: "Empfehlung des Küchenchefs",
    cs: "Doporučení šéfkuchaře",
    en: "Chef's Choice",
    pl: "Polecane przez szefa kuchni", hr: "Preporuka šefa kuhinje", ru: "Рекомендация шеф-повара", hu: "A séf ajánlata",
  },
};

export function getDietaryLabelText(locale: Locale): Record<DietaryLabel, string> {
  return Object.fromEntries(
    Object.entries(dietaryLabels).map(([key, value]) => [key, localize(value, locale)])
  ) as Record<DietaryLabel, string>;
}

/**
 * Allergen codes as printed on the menu card (Austrian/EU labelling).
 * Codes are the same in every language — only their names are translated.
 */
export type AllergenCode =
  | "A" | "B" | "C" | "D" | "E" | "F" | "G"
  | "H" | "L" | "M" | "N" | "O" | "P" | "R";

const allergenNames: Record<AllergenCode, LocalizedText> = {
  A: { de: "Glutenhaltiges Getreide", cs: "Obiloviny obsahující lepek", en: "Cereals containing gluten", pl: "Zboża zawierające gluten", hu: "Glutént tartalmazó gabonafélék", hr: "Žitarice koje sadrže gluten", ru: "Злаки, содержащие глютен" },
  B: { de: "Krebstiere", cs: "Korýši", en: "Crustaceans", pl: "Skorupiaki", hu: "Rákfélék", hr: "Rakovi", ru: "Ракообразные" },
  C: { de: "Ei", cs: "Vejce", en: "Egg", pl: "Jaja", hu: "Tojás", hr: "Jaja", ru: "Яйца" },
  D: { de: "Fisch", cs: "Ryby", en: "Fish", pl: "Ryby", hu: "Hal", hr: "Riba", ru: "Рыба" },
  E: { de: "Erdnuss", cs: "Arašídy", en: "Peanuts", pl: "Orzeszki ziemne", hu: "Földimogyoró", hr: "Kikiriki", ru: "Арахис" },
  F: { de: "Soja", cs: "Sója", en: "Soy", pl: "Soja", hu: "Szója", hr: "Soja", ru: "Соя" },
  G: { de: "Milch oder Laktose", cs: "Mléko nebo laktóza", en: "Milk or lactose", pl: "Mleko lub laktoza", hu: "Tej vagy laktóz", hr: "Mlijeko ili laktoza", ru: "Молоко или лактоза" },
  H: { de: "Schalenfrüchte", cs: "Skořápkové plody", en: "Tree nuts", pl: "Orzechy", hu: "Diófélék", hr: "Orašasti plodovi", ru: "Орехи" },
  L: { de: "Sellerie", cs: "Celer", en: "Celery", pl: "Seler", hu: "Zeller", hr: "Celer", ru: "Сельдерей" },
  M: { de: "Senf", cs: "Hořčice", en: "Mustard", pl: "Gorczyca", hu: "Mustár", hr: "Gorušica", ru: "Горчица" },
  N: { de: "Sesam", cs: "Sezam", en: "Sesame", pl: "Sezam", hu: "Szezám", hr: "Sezam", ru: "Кунжут" },
  O: { de: "Sulfite", cs: "Siřičitany", en: "Sulphites", pl: "Siarczyny", hu: "Szulfitok", hr: "Sulfiti", ru: "Сульфиты" },
  P: { de: "Lupinen", cs: "Vlčí bob", en: "Lupin", pl: "Łubin", hu: "Csillagfürt", hr: "Lupina", ru: "Люпин" },
  R: { de: "Weichtiere", cs: "Měkkýši", en: "Molluscs", pl: "Mięczaki", hu: "Puhatestűek", hr: "Mekušci", ru: "Моллюски" },
};

/** All codes in the order the legend lists them. */
export const allergenCodes = Object.keys(allergenNames) as AllergenCode[];

export function getAllergenNames(locale: Locale): Record<AllergenCode, string> {
  return Object.fromEntries(
    Object.entries(allergenNames).map(([key, value]) => [key, localize(value, locale)])
  ) as Record<AllergenCode, string>;
}

/** A dish as authored — text fields may carry per-language variants. */
interface MenuItemSource {
  name: LocalizedText;
  description?: LocalizedText;
  /** Optional — seasonal items (e.g. ice cream) can be listed without one. */
  price?: string;
  labels?: DietaryLabel[];
  /** Allergen codes as printed on the card (see `AllergenCode`). */
  allergens?: AllergenCode[];
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
  /** Allergen codes as printed on the card (see `AllergenCode`). */
  allergens?: AllergenCode[];
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
    title: { de: "Suppen", cs: "Polévky", en: "Soups", pl: "Zupy", hr: "Juhe", ru: "Супы", hu: "Levesek" },
    items: [
      {
        name: {
          de: "Frittatensuppe",
          cs: "Frittatensuppe – vývar s palačinkovými nudlemi",
          en: "Frittatensuppe – clear broth with pancake strips",
          pl: "Frittatensuppe – bulion z kluskami naleśnikowymi", hr: "Frittatensuppe – bistra juha s rezancima od palačinki", ru: "Фриттатензуппе — бульон с блинной лапшой", hu: "Frittatensuppe – erőleves palacsintametélttel",
        },
        price: "€ 6.70",
        allergens: ["C", "G", "L"],
        labels: ["local-specialty"],
        image: siteImages.dishFrittatensuppe,
      },
      {
        name: {
          de: "Gemüsecremesuppe",
          cs: "Krémová zeleninová polévka",
          en: "Cream of vegetable soup",
          pl: "Krem z warzyw", hr: "Krem juha od povrća", ru: "Овощной крем-суп", hu: "Zöldségkrémleves",
        },
        description: {
          de: "Brokkoli, Zucchini und Croutons",
          cs: "Brokolice, cuketa a krutony",
          en: "Broccoli, courgette and croutons",
          pl: "Brokuły, cukinia i grzanki", hr: "Brokula, tikvice i krutoni", ru: "Брокколи, цукини и гренки", hu: "Brokkoli, cukkini és kruton",
        },
        price: "€ 7.70",
        allergens: ["G", "L"],
        labels: ["vegetarian", "local-specialty"],
        image: siteImages.dishGemueseCreamSuppe,
      },
      {
        name: {
          de: "Gulaschsuppe mit Brot",
          cs: "Gulášová polévka s chlebem",
          en: "Goulash soup with bread",
          pl: "Zupa gulaszowa z chlebem", hr: "Gulaš juha s kruhom", ru: "Суп-гуляш с хлебом", hu: "Gulyásleves kenyérrel",
        },
        price: "€ 9.00",
        allergens: ["A", "G", "L"],
        image: siteImages.gulaschsuppe,
      },
    ],
  },
  {
    id: "salads",
    title: { de: "Salate", cs: "Saláty", en: "Salads", pl: "Sałatki", hr: "Salate", ru: "Салаты", hu: "Saláták" },
    items: [
      {
        name: {
          de: "Gemischter Salat",
          cs: "Míchaný salát",
          en: "Mixed salad",
          pl: "Sałatka mieszana", hr: "Miješana salata", ru: "Смешанный салат", hu: "Vegyes saláta",
        },
        description: {
          de: "Mit Hausdressing und frischem Salat",
          cs: "S domácím dresinkem a čerstvým salátem",
          en: "With house dressing and fresh salad",
          pl: "Z sosem domowym i świeżą sałatą", hr: "S kućnim dresingom i svježom salatom", ru: "С домашней заправкой и свежим салатом", hu: "Házi öntettel és friss salátával",
        },
        price: "€ 7.00",
        allergens: ["M", "N"],
        labels: ["vegetarian"],
        image: siteImages.dishMixedSalad,
      },
      {
        name: {
          de: "Putenstreifensalat",
          cs: "Salát s krůtími nudličkami",
          en: "Turkey strip salad",
          pl: "Sałatka z paskami indyka", hr: "Salata s trakicama puretine", ru: "Салат с полосками индейки", hu: "Saláta pulykacsíkokkal",
        },
        description: {
          de: "Mit frischem Buntsalat, Hausdressing und Brot",
          cs: "S čerstvým míchaným salátem, domácím dresinkem a chlebem",
          en: "With fresh mixed salad, house dressing and bread",
          pl: "Ze świeżą sałatą mieszaną, sosem domowym i chlebem", hr: "Sa svježom miješanom salatom, kućnim dresingom i kruhom", ru: "Со свежим салатным миксом, домашней заправкой и хлебом", hu: "Friss vegyes salátával, házi öntettel és kenyérrel",
        },
        price: "€ 15.90",
        allergens: ["A", "M", "N"],
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
      pl: "Przekąski i pieczywo", hr: "Zalogaji i kruh", ru: "Закуски и хлеб", hu: "Snackek és kenyerek",
    },
    items: [
      {
        name: {
          de: "Schinken-Käse Toast",
          cs: "Toast se šunkou a sýrem",
          en: "Ham and cheese toast",
          pl: "Tost z szynką i serem", hr: "Tost sa šunkom i sirom", ru: "Тост с ветчиной и сыром", hu: "Sonkás-sajtos melegszendvics",
        },
        description: {
          de: "Mit Butter gestrichen und bunter Salatschüssel",
          cs: "Namazaný máslem, s miskou míchaného salátu",
          en: "Buttered, with a bowl of mixed salad",
          pl: "Posmarowany masłem, z miską sałatki mieszanej", hr: "Namazan maslacem, uz zdjelu miješane salate", ru: "С маслом, с миской салатного микса", hu: "Vajjal megkenve, vegyes salátástállal",
        },
        price: "€ 9.90",
        allergens: ["A", "G", "M", "N"],
        image: siteImages.hamandcheese
      },
      {
        name: {
          de: "Holzfällerbrot",
          cs: "Holzfällerbrot – „dřevorubecký“ chléb",
          en: "Holzfällerbrot – hearty lumberjack bread",
          pl: "Holzfällerbrot – chleb „drwala”", hr: "Holzfällerbrot – „drvosječin” kruh", ru: "Хольцфеллерброт — сытный «хлеб дровосека»", hu: "Holzfällerbrot – „favágókenyér”",
        },
        description: {
          de: "Schwarzbrot, Speck, Käse, Zwiebeln, Schnittlauch",
          cs: "Tmavý chléb, slanina, sýr, cibule, pažitka",
          en: "Dark rye bread, bacon, cheese, onions, chives",
          pl: "Ciemny chleb, boczek, ser, cebula, szczypiorek", hr: "Crni kruh, slanina, sir, luk, vlasac", ru: "Чёрный хлеб, шпик, сыр, лук, зелёный лук", hu: "Fekete kenyér, szalonna, sajt, hagyma, metélőhagyma",
        },
        price: "€ 9.50",
        allergens: ["A", "G"],
        image: siteImages.dishLumberjackBread,
      },
      {
        name: {
          de: "Thunfisch auf Ciabatta Brot mit Salat",
          cs: "Tuňák na ciabattě se salátem",
          en: "Tuna on ciabatta bread with salad",
          pl: "Tuńczyk na pieczywie ciabatta z sałatką", hr: "Tuna na ciabatta kruhu sa salatom", ru: "Тунец на чиабатте с салатом", hu: "Tonhal ciabatta kenyéren, salátával",
        },
        description: {
          de: "Tomatensauce, Thunfisch, Mozzarella, Zwiebeln",
          cs: "Rajčatová omáčka, tuňák, mozzarella, cibule",
          en: "Tomato sauce, tuna, mozzarella, onions",
          pl: "Sos pomidorowy, tuńczyk, mozzarella, cebula", hr: "Umak od rajčice, tuna, mozzarella, luk", ru: "Томатный соус, тунец, моцарелла, лук", hu: "Paradicsomszósz, tonhal, mozzarella, hagyma",
        },
        price: "€ 10.80",
        image: siteImages.dishTunaCiabatta,
      },
      {
        name: {
          de: "Tomaten-Mozzarella-Brot",
          cs: "Chléb s rajčaty a mozzarellou",
          en: "Tomato and mozzarella bread",
          pl: "Pieczywo z pomidorami i mozzarellą", hr: "Kruh s rajčicom i mozzarellom", ru: "Хлеб с томатами и моцареллой", hu: "Paradicsomos-mozzarellás kenyér",
        },
        description: {
          de: "Mit handgemachtem Weizenbrot, Basilikumbutter",
          cs: "S ručně dělaným pšeničným chlebem a bazalkovým máslem",
          en: "With handmade wheat bread and basil butter",
          pl: "Z ręcznie robionym chlebem pszennym i masłem bazyliowym", hr: "S ručno rađenim pšeničnim kruhom i maslacem od bosiljka", ru: "С домашним пшеничным хлебом и базиликовым маслом", hu: "Kézzel készített búzakenyérrel és bazsalikomos vajjal",
        },
        price: "€ 9.30",
        labels: ["vegetarian"],
        image: siteImages.dishTomatoMozzarellaBread,
      },
      {
        name: {
          de: "Frankfurter",
          cs: "Frankfurtské párky",
          en: "Frankfurter sausages",
          pl: "Parówki frankfurterki", hr: "Hrenovke", ru: "Франкфуртские сосиски", hu: "Frankfurti virsli",
        },
        description: {
          de: "Mit Brot, Senf, Kren",
          cs: "S chlebem, hořčicí a křenem",
          en: "With bread, mustard and horseradish",
          pl: "Z chlebem, musztardą i chrzanem", hr: "S kruhom, senfom i hrenom", ru: "С хлебом, горчицей и хреном", hu: "Kenyérrel, mustárral és tormával",
        },
        price: "€ 8.00",
        allergens: ["A", "L", "M"],
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
      pl: "Dania główne", hr: "Glavna jela", ru: "Основные блюда", hu: "Főételek",
    },
    items: [
      {
        name: {
          de: "Käsekrainer mit Pommes",
          cs: "Käsekrainer – klobása se sýrem, s hranolky",
          en: "Käsekrainer – cheese-filled sausage with fries",
          pl: "Käsekrainer – kiełbasa z serem, z frytkami", hr: "Käsekrainer – kobasica sa sirom i pomfrit", ru: "Кезекрайнер — колбаска с сыром и картофелем фри", hu: "Käsekrainer – sajttal töltött kolbász, hasábburgonyával",
        },
        description: {
          de: "Mit Ketchup und Senf",
          cs: "S kečupem a hořčicí",
          en: "With ketchup and mustard",
          pl: "Z ketchupem i musztardą", hr: "S kečapom i senfom", ru: "С кетчупом и горчицей", hu: "Ketchuppal és mustárral",
        },
        price: "€ 14.30",
        allergens: ["G"],
        labels: ["local-specialty"],
        image: siteImages.dishKaesekrainer,
      },
      {
        name: "Spaghetti Bolognese",
        description: {
          de: "Mit frischem Parmesan",
          cs: "S čerstvým parmazánem",
          en: "With fresh parmesan",
          pl: "Ze świeżym parmezanem", hr: "Sa svježim parmezanom", ru: "Со свежим пармезаном", hu: "Frissen reszelt parmezánnal",
        },
        price: "€ 14.90",
        allergens: ["A", "C", "G", "L", "O"],
        image: siteImages.dishSeafoodRisotto,
      },
      {
        name: {
          de: "Wiener Schnitzel (XL)",
          cs: "Vídeňský řízek (XL)",
          en: "Wiener Schnitzel (XL)",
          pl: "Sznycel wiedeński (XL)", hr: "Bečki odrezak (XL)", ru: "Венский шницель (XL)", hu: "Bécsi szelet (XL)",
        },
        description: {
          de: "Vom Schwein mit Pommes und Preiselbeeren",
          cs: "Vepřový, s hranolky a brusinkami",
          en: "Pork, with fries and cranberries",
          pl: "Wieprzowy, z frytkami i borówkami", hr: "Svinjski, s pomfritom i brusnicama", ru: "Из свинины, с картофелем фри и брусникой", hu: "Sertésből, hasábburgonyával és vörösáfonyával",
        },
        price: "€ 17.50",
        allergens: ["A", "C", "G"],
        labels: ["local-specialty"],
        featured: true,
        image: siteImages.dishWienerSchnitzel,
      },
      {
        name: {
          de: "Cordon bleu mit Kartoffeln",
          cs: "Cordon bleu s bramborami",
          en: "Cordon bleu with potatoes",
          pl: "Cordon bleu z ziemniakami", hr: "Cordon bleu s krumpirom", ru: "Кордон блю с картофелем", hu: "Cordon bleu burgonyával",
        },
        description: {
          de: "Von Puten mit Preiselbeeren",
          cs: "Krůtí, s brusinkami",
          en: "Turkey, with cranberries",
          pl: "Z indyka, z borówkami", hr: "Pureći, s brusnicama", ru: "Из индейки, с брусникой", hu: "Pulykából, vörösáfonyával",
        },
        price: "€ 18.50",
        image: siteImages.dishCordonBleu,
      },
      {
        name: {
          de: "Hirschragout mit Spätzle",
          cs: "Jelení ragú se špeclemi",
          en: "Venison ragout with Spätzle",
          pl: "Ragout z jelenia ze szpeclami", hr: "Ragu od jelena sa špeclama", ru: "Рагу из оленины со шпецле", hu: "Szarvasragu nokedlivel",
        },
        description: {
          de: "Mit Preiselbeeren",
          cs: "S brusinkami",
          en: "With cranberries",
          pl: "Z borówkami", hr: "S brusnicama", ru: "С брусникой", hu: "Vörösáfonyával",
        },
        price: "€ 19.90",
        labels: ["local-specialty"],
      },
      {
        name: {
          de: "Gegrillter Camembert",
          cs: "Grilovaný camembert",
          en: "Grilled camembert",
          pl: "Grillowany camembert", hr: "Camembert s roštilja", ru: "Камамбер на гриле", hu: "Grillezett camembert",
        },
        description: {
          de: "Mit buntem Salat und Preiselbeeren",
          cs: "S míchaným salátem a brusinkami",
          en: "With mixed salad and cranberries",
          pl: "Z sałatką mieszaną i borówkami", hr: "S miješanom salatom i brusnicama", ru: "С салатным миксом и брусникой", hu: "Vegyes salátával és vörösáfonyával",
        },
        price: "€ 15.90",
        allergens: ["A", "C", "G", "M"],
        labels: ["vegetarian"],
        featured: true,
        image: siteImages.dishGrilledCheeseSalad,
      },
      {
        name: {
          de: "Gemüse Risotto",
          cs: "Zeleninové rizoto",
          en: "Vegetable risotto",
          pl: "Risotto warzywne", hr: "Rižoto od povrća", ru: "Овощное ризотто", hu: "Zöldséges rizottó",
        },
        description: {
          de: "Frisch gegrilltes Gemüse, Basmatireis und Parmesan",
          cs: "Čerstvě grilovaná zelenina, rýže basmati a parmazán",
          en: "Freshly grilled vegetables, basmati rice and parmesan",
          pl: "Świeżo grillowane warzywa, ryż basmati i parmezan", hr: "Svježe grilano povrće, basmati riža i parmezan", ru: "Свежие овощи гриль, рис басмати и пармезан", hu: "Frissen grillezett zöldségek, basmati rizs és parmezán",
        },
        price: "€ 15.00",
        labels: ["vegetarian"],
        image: siteImages.vegetablerisotto
      },
      {
        name: {
          de: "Risotto mit Meeresfrüchten",
          cs: "Rizoto s mořskými plody",
          en: "Risotto with seafood",
          pl: "Risotto z owocami morza", hr: "Rižoto s morskim plodovima", ru: "Ризотто с морепродуктами", hu: "Rizottó tenger gyümölcseivel",
        },
        price: "€ 18.90",
        allergens: ["A", "B", "D", "R"],
        image: siteImages.dishSpaghettiBolognese,
      },
      {
        name: {
          de: "Pazifischer Polardorsch paniert",
          cs: "Treska polární v trojobalu",
          en: "Breaded Pacific polar cod",
          pl: "Panierowany dorsz polarny", hr: "Pohani pacifički polarni bakalar", ru: "Тихоокеанская сайка в панировке", hu: "Rántott csendes-óceáni sarki tőkehal",
        },
        description: {
          de: "Mit Kartoffeln, Salat und Sauce Tartar",
          cs: "S bramborami, salátem a tatarskou omáčkou",
          en: "With potatoes, salad and tartar sauce",
          pl: "Z ziemniakami, sałatką i sosem tatarskim", hr: "S krumpirom, salatom i tartar umakom", ru: "С картофелем, салатом и соусом тартар", hu: "Burgonyával, salátával és tartármártással",
        },
        price: "€ 19.20",
        image: siteImages.dishPacificPolarCod,
      },
      {
        name: {
          de: "Gegrilltes Lachsfilet",
          cs: "Grilovaný filet z lososa",
          en: "Grilled salmon fillet",
          pl: "Grillowany filet z łososia", hr: "Filet lososa s roštilja", ru: "Филе лосося на гриле", hu: "Grillezett lazacfilé",
        },
        description: {
          de: "Mit Champignonrahmsauce und Reis",
          cs: "Se žampionovou smetanovou omáčkou a rýží",
          en: "With creamy mushroom sauce and rice",
          pl: "W sosie pieczarkowo-śmietanowym, z ryżem", hr: "S umakom od šampinjona i vrhnja te rižom", ru: "Со сливочно-грибным соусом и рисом", hu: "Gombás tejszínes mártással és rizzsel",
        },
        price: "€ 19.50",
      },
      {
        name: {
          de: "Flammkuchen",
          cs: "Flammkuchen",
          en: "Flammkuchen (tarte flambée)",
          pl: "Flammkuchen", hr: "Flammkuchen", ru: "Фламмкухен", hu: "Flammkuchen",
        },
        description: {
          de: "Mit Schafskäse und Grillgemüse",
          cs: "S ovčím sýrem a grilovanou zeleninou",
          en: "With sheep's cheese and grilled vegetables",
          pl: "Z serem owczym i grillowanymi warzywami", hr: "S ovčjim sirom i povrćem s roštilja", ru: "С овечьим сыром и овощами гриль", hu: "Juhsajttal és grillezett zöldségekkel",
        },
        price: "€ 15.50",
        allergens: ["A", "G"],
        labels: ["vegetarian"],
        featured: true,
        image: siteImages.flammkuchen,
      },
      {
        name: "Pizza Margaritha",
        price: "€ 12.00",
        allergens: ["A", "G"],
        labels: ["vegetarian"],
        image: siteImages.dishPizzaMargherita,
      },
      {
        name: {
          de: "Bauern Pizza",
          cs: "Selská pizza",
          en: "Farmer's pizza",
          pl: "Pizza wiejska", hr: "Seljačka pizza", ru: "Крестьянская пицца", hu: "Parasztpizza",
        },
        description: {
          de: "Drei verschiedene Käsesorten, Bauernspeck, Chilisalami und rote Zwiebeln",
          cs: "Tři druhy sýra, selská slanina, chilli salám a červená cibule",
          en: "Three kinds of cheese, farmer's bacon, chilli salami and red onions",
          pl: "Trzy rodzaje sera, boczek wiejski, salami chili i czerwona cebula", hr: "Tri vrste sira, seljačka slanina, chili salama i crveni luk", ru: "Три вида сыра, деревенский шпик, салями с чили и красный лук", hu: "Háromféle sajt, parasztszalonna, chilis szalámi és lilahagyma",
        },
        price: "€ 16.00",
        allergens: ["A", "G"],
        image: siteImages.dishBauernPizza,
      },
    ],
  },
  {
    id: "kids",
    title: {
      de: "Für unsere kleinen Gäste",
      cs: "Pro naše malé hosty",
      en: "For Our Little Guests",
      pl: "Dla naszych małych gości", hr: "Za naše male goste", ru: "Для наших маленьких гостей", hu: "Kis vendégeinknek",
    },
    items: [
      {
        name: {
          de: "Portion Pommes",
          cs: "Porce hranolek",
          en: "Portion of fries",
          pl: "Porcja frytek", hr: "Porcija pomfrita", ru: "Порция картофеля фри", hu: "Egy adag hasábburgonya",
        },
        description: {
          de: "Mit Ketchup",
          cs: "S kečupem",
          en: "With ketchup",
          pl: "Z ketchupem", hr: "S kečapom", ru: "С кетчупом", hu: "Ketchuppal",
        },
        price: "€ 6.80",
        labels: ["vegetarian"],
      },
      {
        name: "Spaghetti Bolognese",
        description: {
          de: "Mit frischem Parmesan",
          cs: "S čerstvým parmazánem",
          en: "With fresh parmesan",
          pl: "Ze świeżym parmezanem", hr: "Sa svježim parmezanom", ru: "Со свежим пармезаном", hu: "Frissen reszelt parmezánnal",
        },
        price: "€ 8.50",
      },
      {
        name: {
          de: "Schnitzel mit Pommes",
          cs: "Řízek s hranolky",
          en: "Schnitzel with fries",
          pl: "Sznycel z frytkami", hr: "Odrezak s pomfritom", ru: "Шницель с картофелем фри", hu: "Rántott hús hasábburgonyával",
        },
        description: {
          de: "Mit Ketchup",
          cs: "S kečupem",
          en: "With ketchup",
          pl: "Z ketchupem", hr: "S kečapom", ru: "С кетчупом", hu: "Ketchuppal",
        },
        price: "€ 9.80",
      },
    ],
  },
  {
    id: "desserts",
    title: { de: "Desserts", cs: "Dezerty", en: "Desserts", pl: "Desery", hr: "Deserti", ru: "Десерты", hu: "Desszertek" },
    items: [
      {
        name: {
          de: "Hauskuchen mit Schlag",
          cs: "Domácí koláč se šlehačkou",
          en: "Homemade cake with whipped cream",
          pl: "Domowe ciasto z bitą śmietaną", hr: "Domaći kolač sa šlagom", ru: "Домашний пирог со взбитыми сливками", hu: "Házi sütemény tejszínhabbal",
        },
        price: "€ 5.50",
        labels: ["vegetarian"],
        image: siteImages.dishHauskuchen,
      },
      {
        name: {
          de: "Apfel- oder Topfenstrudel",
          cs: "Jablečný nebo tvarohový závin",
          en: "Apple or curd cheese strudel",
          pl: "Strudel jabłkowy lub serowy", hr: "Štrudla od jabuka ili svježeg sira", ru: "Штрудель с яблоками или творогом", hu: "Almás vagy túrós rétes",
        },
        description: {
          de: "Mit Eis oder Vanillesauce",
          cs: "Se zmrzlinou nebo vanilkovou omáčkou",
          en: "With ice cream or vanilla sauce",
          pl: "Z lodami lub sosem waniliowym", hr: "Sa sladoledom ili umakom od vanilije", ru: "С мороженым или ванильным соусом", hu: "Fagylalttal vagy vaníliasodóval",
        },
        price: "€ 7.50",
        labels: ["vegetarian", "local-specialty"],
        image: siteImages.apfel
      },
      {
        name: {
          de: "Belgische Waffeln",
          cs: "Belgické vafle",
          en: "Belgian waffles",
          pl: "Gofry belgijskie", hr: "Belgijski vafli", ru: "Бельгийские вафли", hu: "Belga gofri",
        },
        description: {
          de: "Mit Beeren, Eis und Schokosauce",
          cs: "S lesním ovocem, zmrzlinou a čokoládovou omáčkou",
          en: "With berries, ice cream and chocolate sauce",
          pl: "Z owocami jagodowymi, lodami i sosem czekoladowym", hr: "S bobičastim voćem, sladoledom i čokoladnim umakom", ru: "С ягодами, мороженым и шоколадным соусом", hu: "Bogyós gyümölcsökkel, fagylalttal és csokoládészósszal",
        },
        price: "€ 10.00",
        labels: ["vegetarian"],
        image: siteImages.dishBelgianWaffles,
      },
      {
        name: {
          de: "Kaiserschmarren",
          cs: "Kaiserschmarren – trhaný lívanec",
          en: "Kaiserschmarren – shredded pancake",
          pl: "Kaiserschmarren – omlet cesarski", hr: "Kaiserschmarren – trgane palačinke", ru: "Кайзершмаррен — императорский омлет", hu: "Kaiserschmarren – császármorzsa",
        },
        description: {
          de: "Mit Apfelmus und Vanilleeis",
          cs: "S jablečným pyré a vanilkovou zmrzlinou",
          en: "With apple sauce and vanilla ice cream",
          pl: "Z musem jabłkowym i lodami waniliowymi", hr: "S umakom od jabuka i sladoledom od vanilije", ru: "С яблочным пюре и ванильным мороженым", hu: "Almaszósszal és vaníliafagylalttal",
        },
        price: "€ 15.50",
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
      pl: "Puchary lodowe", hr: "Sladoledni kupovi", ru: "Мороженое", hu: "Fagylaltkelyhek",
    },
    note: {
      de: "Nur im Sommer erhältlich – fragen Sie unser Team nach dem aktuellen Angebot.",
      cs: "K dispozici pouze v létě – na aktuální nabídku se zeptejte naší obsluhy.",
      en: "Available in summer only — ask our team for the current selection.",
      pl: "Dostępne tylko latem – o aktualną ofertę zapytaj naszą obsługę.", hr: "Dostupno samo ljeti – o aktualnoj ponudi raspitajte se kod našeg osoblja.", ru: "Только летом — об актуальном ассортименте спросите нашу команду.", hu: "Csak nyáron kapható – az aktuális kínálatról érdeklődjön csapatunknál.",
    },
    items: [
      {
        name: {
          de: "Bananensplit",
          cs: "Banánový pohár (banana split)",
          en: "Banana split",
          pl: "Deser bananowy (banana split)", hr: "Banana split", ru: "Банана-сплит", hu: "Banana split",
        },
        labels: ["vegetarian"],
        image: siteImages.iceBananaSplit,
        price: "€ 8.50",
      },
      {
        name: {
          de: "Früchteeisbecher",
          cs: "Ovocný zmrzlinový pohár",
          en: "Fruit sundae",
          pl: "Puchar lodowy z owocami", hr: "Voćni sladoledni kup", ru: "Мороженое с фруктами", hu: "Gyümölcsös fagylaltkehely",
        },
        labels: ["vegetarian"],
        image: siteImages.iceFruitSundae,
        price: "€ 9.00",
      },
      {
        name: {
          de: "Krokantbecher",
          cs: "Zmrzlinový pohár s krokantem",
          en: "Krokant sundae with brittle",
          pl: "Puchar lodowy z krokantem", hr: "Sladoledni kup s krokantom", ru: "Мороженое с грильяжем", hu: "Grillázsos fagylaltkehely",
        },
        labels: ["vegetarian"],
        image: siteImages.iceKrokant,
        price: "€ 8.50",
      },
      {
        name: "Heiße Liebe",
        description: {
          de: "Vanilleeis mit warmen Himbeeren",
          cs: "Vanilková zmrzlina s teplými malinami",
          en: "Vanilla ice cream with warm raspberries",
          pl: "Lody waniliowe z ciepłymi malinami",
          hu: "Vaníliafagylalt meleg málnával",
          hr: "Sladoled od vanilije s toplim malinama",
          ru: "Ванильное мороженое с тёплой малиной",
        },
        labels: ["vegetarian"],
        image: siteImages.iceHeisseLiebe,
        price: "€ 9.00",
      },
      {
        name: {
          de: "Eiskaffee / Eisschokolade",
          cs: "Ledová káva / ledová čokoláda",
          en: "Iced coffee / iced chocolate",
          pl: "Kawa mrożona / czekolada mrożona",
          hu: "Jegeskávé / jeges csokoládé",
          hr: "Ledena kava / ledena čokolada",
          ru: "Кофе гляссе / шоколад гляссе",
        },
        description: {
          de: "Eis mit Kaffee oder Kakao",
          cs: "Zmrzlina s kávou nebo kakaem",
          en: "Ice cream with coffee or cocoa",
          pl: "Lody z kawą lub kakao",
          hu: "Fagylalt kávéval vagy kakaóval",
          hr: "Sladoled s kavom ili kakaom",
          ru: "Мороженое с кофе или какао",
        },
        labels: ["vegetarian"],
        image: siteImages.iceEiskaffee,
        price: "€ 7.30",
      },
      {
        name: "Coupe Danemark",
        description: {
          de: "Vanilleeis mit heißer Schokolade und Schlag",
          cs: "Vanilková zmrzlina s horkou čokoládou a šlehačkou",
          en: "Vanilla ice cream with hot chocolate sauce and whipped cream",
          pl: "Lody waniliowe z gorącą czekoladą i bitą śmietaną",
          hu: "Vaníliafagylalt forró csokoládéval és tejszínhabbal",
          hr: "Sladoled od vanilije s vrućom čokoladom i šlagom",
          ru: "Ванильное мороженое с горячим шоколадом и взбитыми сливками",
        },
        labels: ["vegetarian"],
        image: siteImages.iceCoupeDanemark,
        price: "€ 8.50",
      },
      {
        name: {
          de: "Gemischtes Eis",
          cs: "Míchaná zmrzlina",
          en: "Mixed ice cream",
          pl: "Lody mieszane",
          hu: "Vegyes fagylalt",
          hr: "Miješani sladoled",
          ru: "Мороженое ассорти",
        },
        labels: ["vegetarian"],
        image: siteImages.iceGemischtesEis,
        price: "€ 6.50",
      },
      {
        name: {
          de: "Solo Eis",
          cs: "Kopeček zmrzliny",
          en: "Single scoop of ice cream",
          pl: "Gałka lodów",
          hu: "Egy gombóc fagylalt",
          hr: "Kuglica sladoleda",
          ru: "Шарик мороженого",
        },
        labels: ["vegetarian"],
        image: siteImages.iceSoloEis,
        price: "€ 3.00",
      },
      {
        name: {
          de: "Leckeres Duett",
          cs: "Lahodné duo",
          en: "Delicious duo",
          pl: "Pyszny duet",
          hu: "Finom duett",
          hr: "Slasni duet",
          ru: "Вкусный дуэт",
        },
        labels: ["vegetarian"],
        image: siteImages.iceLeckeresDuett,
        price: "€ 4.50",
      },
    ],
  },

  /* ---------------- Drinks (Getränke) ---------------- */

  {
    id: "beer",
    title: { de: "Bier", cs: "Pivo", en: "Beer", pl: "Piwo", hu: "Sörök", hr: "Pivo", ru: "Пиво" },
    items: [
      {
        name: "Schladminger Märzen",
        description: {
          de: "vom Fass · Stw. 11,7° / Alk. 5,1 %",
          cs: "Točené · Stw. 11,7° / alk. 5,1 %",
          en: "Draught · Stw. 11.7° / alc. 5.1 %",
          pl: "Z beczki · Stw. 11,7° / alk. 5,1 %",
          hu: "Csapolt · Stw. 11,7° / alk. 5,1 %",
          hr: "Točeno · Stw. 11,7° / alk. 5,1 %",
          ru: "Разливное · Stw. 11,7° / алк. 5,1 %",
        },
        price: "0,2 l 3,40 € / 0,3 l 4,50 € / 0,5 l 5,80 €",
      },
      {
        name: "Gösser NaturRadler",
        description: {
          de: "vom Fass · Stw. 8,5° / Alk. 2,0 %",
          cs: "Točené · Stw. 8,5° / alk. 2,0 %",
          en: "Draught · Stw. 8.5° / alc. 2.0 %",
          pl: "Z beczki · Stw. 8,5° / alk. 2,0 %",
          hu: "Csapolt · Stw. 8,5° / alk. 2,0 %",
          hr: "Točeno · Stw. 8,5° / alk. 2,0 %",
          ru: "Разливное · Stw. 8,5° / алк. 2,0 %",
        },
        price: "0,3 l 4,50 € / 0,5 l 5,80 €",
      },
      {
        name: "Gösser (Dunkel)",
        description: {
          de: "Flasche · Stw. 11,8° / Alk. 4,5 %",
          cs: "Láhev · Stw. 11,8° / alk. 4,5 %",
          en: "Bottle · Stw. 11.8° / alc. 4.5 %",
          pl: "Butelka · Stw. 11,8° / alk. 4,5 %",
          hu: "Üveges · Stw. 11,8° / alk. 4,5 %",
          hr: "Boca · Stw. 11,8° / alk. 4,5 %",
          ru: "Бутылка · Stw. 11,8° / алк. 4,5 %",
        },
        price: "0,5 l — 6,00 €",
      },
      {
        name: "Gösser Natur Gold",
        description: {
          de: "Flasche · alkoholfrei",
          cs: "Láhev · nealkoholické",
          en: "Bottle · non-alcoholic",
          pl: "Butelka · bezalkoholowe",
          hu: "Üveges · alkoholmentes",
          hr: "Boca · bezalkoholno",
          ru: "Бутылка · безалкогольное",
        },
        price: "0,5 l — 5,80 €",
      },
      {
        name: "Weihenstephaner Hefeweissbier Hefetrüb",
        description: {
          de: "Flasche · Stw. 12,5° / Alk. 5,0 %",
          cs: "Láhev · Stw. 12,5° / alk. 5,0 %",
          en: "Bottle · Stw. 12.5° / alc. 5.0 %",
          pl: "Butelka · Stw. 12,5° / alk. 5,0 %",
          hu: "Üveges · Stw. 12,5° / alk. 5,0 %",
          hr: "Boca · Stw. 12,5° / alk. 5,0 %",
          ru: "Бутылка · Stw. 12,5° / алк. 5,0 %",
        },
        price: "0,5 l — 6,00 €",
      },
      {
        name: "Weihenstephaner Alkoholfrei",
        description: {
          de: "Weizenbier, alkoholfrei · Flasche",
          cs: "Pšeničné pivo, nealkoholické · láhev",
          en: "Wheat beer, non-alcoholic · bottle",
          pl: "Piwo pszeniczne, bezalkoholowe · butelka",
          hu: "Búzasör, alkoholmentes · üveges",
          hr: "Pšenično pivo, bezalkoholno · boca",
          ru: "Пшеничное пиво, безалкогольное · бутылка",
        },
        price: "0,5 l — 6,00 €",
      },
    ],
  },
  {
    id: "water-juices",
    title: {
      de: "Wasser & Säfte",
      cs: "Voda a džusy",
      en: "Water & Juices",
      pl: "Woda i soki",
      hu: "Vizek és gyümölcslevek",
      hr: "Voda i sokovi",
      ru: "Вода и соки",
    },
    items: [
      {
        name: "Römerquelle",
        description: {
          de: "prickelnd oder still",
          cs: "perlivá nebo neperlivá",
          en: "sparkling or still",
          pl: "gazowana lub niegazowana",
          hu: "szénsavas vagy szénsavmentes",
          hr: "gazirana ili negazirana",
          ru: "газированная или негазированная",
        },
        price: "0,33 l 3,60 € / 0,75 l 5,70 €",
      },
      {
        name: {
          de: "Hauslimonade",
          cs: "Domácí limonáda",
          en: "House lemonade",
          pl: "Lemoniada domowa",
          hu: "Házi limonádé",
          hr: "Domaća limunada",
          ru: "Домашний лимонад",
        },
        price: "0,5 l — 5,70 €",
      },
      {
        name: {
          de: "Apfelsaft naturtrüb",
          cs: "Přírodně kalný jablečný džus",
          en: "Cloudy apple juice",
          pl: "Naturalnie mętny sok jabłkowy",
          hu: "Naturzavaros almalé",
          hr: "Prirodno mutni sok od jabuke",
          ru: "Яблочный сок неосветлённый",
        },
        price: "0,25 l 3,90 € / 0,5 l 6,00 €",
      },
      {
        name: {
          de: "Apfelsaft / Orangensaft mit Wasser",
          cs: "Jablečný / pomerančový džus s vodou",
          en: "Apple / orange juice with water",
          pl: "Sok jabłkowy / pomarańczowy z wodą",
          hu: "Almalé / narancslé vízzel",
          hr: "Sok od jabuke / naranče s vodom",
          ru: "Яблочный / апельсиновый сок с водой",
        },
        price: "0,25 l 3,10 € / 0,5 l 4,70 €",
      },
      {
        name: {
          de: "Apfelsaft / Orangensaft mit Soda",
          cs: "Jablečný / pomerančový džus se sodovkou",
          en: "Apple / orange juice with soda",
          pl: "Sok jabłkowy / pomarańczowy z wodą sodową",
          hu: "Almalé / narancslé szódával",
          hr: "Sok od jabuke / naranče sa soda vodom",
          ru: "Яблочный / апельсиновый сок с содовой",
        },
        price: "0,33 l 3,50 € / 0,5 l 5,30 €",
      },
      {
        name: {
          de: "Orangensaft (100 % Saft)",
          cs: "Pomerančový džus (100% šťáva)",
          en: "Orange juice (100 % juice)",
          pl: "Sok pomarańczowy (100 % soku)",
          hu: "Narancslé (100 % gyümölcslé)",
          hr: "Sok od naranče (100 % sok)",
          ru: "Апельсиновый сок (100 %)",
        },
        price: "0,25 l 3,90 € / 0,5 l 6,00 €",
      },
      {
        name: {
          de: "Marillensaft pur",
          cs: "Meruňkový džus",
          en: "Apricot juice (pure)",
          pl: "Sok morelowy",
          hu: "Sárgabaracklé",
          hr: "Sok od marelice",
          ru: "Абрикосовый сок",
        },
        price: "0,25 l — 4,00 €",
      },
      {
        name: {
          de: "Johannisbeerensaft pur",
          cs: "Rybízový džus",
          en: "Currant juice (pure)",
          pl: "Sok porzeczkowy",
          hu: "Ribizlilé",
          hr: "Sok od ribiza",
          ru: "Смородиновый сок",
        },
        price: "0,25 l — 4,00 €",
      },
      {
        name: {
          de: "Mangosaft pur",
          cs: "Mangový džus",
          en: "Mango juice (pure)",
          pl: "Sok z mango",
          hu: "Mangólé",
          hr: "Sok od manga",
          ru: "Манговый сок",
        },
        price: "0,25 l — 4,00 €",
      },
      {
        name: {
          de: "Fruchtsaft mit Soda",
          cs: "Ovocný džus se sodovkou",
          en: "Fruit juice with soda",
          pl: "Sok owocowy z wodą sodową",
          hu: "Gyümölcslé szódával",
          hr: "Voćni sok sa soda vodom",
          ru: "Фруктовый сок с содовой",
        },
        price: "0,33 l 4,20 € / 0,5 l 5,50 €",
      },
      {
        name: {
          de: "Fruchtsaft mit Wasser",
          cs: "Ovocný džus s vodou",
          en: "Fruit juice with water",
          pl: "Sok owocowy z wodą",
          hu: "Gyümölcslé vízzel",
          hr: "Voćni sok s vodom",
          ru: "Фруктовый сок с водой",
        },
        price: "0,33 l 4,00 € / 0,5 l 5,00 €",
      },
    ],
  },
  {
    id: "soft-drinks",
    title: {
      de: "Limonaden & Erfrischungsgetränke",
      cs: "Limonády a osvěžující nápoje",
      en: "Soft Drinks",
      pl: "Napoje bezalkoholowe",
      hu: "Üdítők",
      hr: "Osvježavajuća pića",
      ru: "Прохладительные напитки",
    },
    items: [
      { name: "Coca-Cola", price: "0,3 l 3,60 € / 0,5 l 5,40 €" },
      { name: "Fanta / Sprite", price: "0,3 l 3,60 € / 0,5 l 5,40 €" },
      { name: "Almdudler", price: "0,3 l 3,60 € / 0,5 l 5,40 €" },
      { name: "Coca-Cola Zero", price: "0,33 l — 4,10 €" },
      { name: "Red Bull", price: "0,2 l — 4,50 €" },
      {
        name: {
          de: "Eistee Pfirsich",
          cs: "Broskvový ledový čaj",
          en: "Peach iced tea",
          pl: "Mrożona herbata brzoskwiniowa",
          hu: "Őszibarackos jeges tea",
          hr: "Ledeni čaj od breskve",
          ru: "Холодный чай персиковый",
        },
        price: "0,33 l — 4,10 €",
      },
      { name: "Bitter Lemon / Tonic", price: "0,2 l — 4,00 €" },
    ],
  },
  {
    id: "wine",
    title: {
      de: "Wein & Aperitif",
      cs: "Víno a aperitivy",
      en: "Wine & Aperitifs",
      pl: "Wino i aperitify",
      hu: "Borok és aperitifek",
      hr: "Vino i aperitivi",
      ru: "Вино и аперитивы",
    },
    items: [
      {
        name: {
          de: "Weißwein – Grüner Veltliner",
          cs: "Bílé víno – Veltlínské zelené",
          en: "White wine – Grüner Veltliner",
          pl: "Wino białe – Grüner Veltliner",
          hu: "Fehérbor – Grüner Veltliner",
          hr: "Bijelo vino – Grüner Veltliner",
          ru: "Белое вино — Грюнер Вельтлинер",
        },
        description: {
          de: "Mit einem Glas Wasser",
          cs: "Se sklenicí vody",
          en: "Served with a glass of water",
          pl: "Ze szklanką wody",
          hu: "Egy pohár vízzel",
          hr: "S čašom vode",
          ru: "Со стаканом воды",
        },
        price: "1/8 l — 4,00 €",
      },
      {
        name: {
          de: "Grüner Veltliner gespritzt",
          cs: "Veltlínský střik",
          en: "Grüner Veltliner spritzer",
          pl: "Grüner Veltliner z wodą (szprycer)",
          hu: "Grüner Veltliner fröccs",
          hr: "Gemišt od Grüner Veltlinera",
          ru: "Шпритцер из Грюнер Вельтлинер",
        },
        price: "1/4 l — 4,40 €",
      },
      {
        name: {
          de: "Rotwein – Zweigelt",
          cs: "Červené víno – Zweigelt",
          en: "Red wine – Zweigelt",
          pl: "Wino czerwone – Zweigelt",
          hu: "Vörösbor – Zweigelt",
          hr: "Crno vino – Zweigelt",
          ru: "Красное вино — Цвайгельт",
        },
        description: {
          de: "Mit einem Glas Wasser",
          cs: "Se sklenicí vody",
          en: "Served with a glass of water",
          pl: "Ze szklanką wody",
          hu: "Egy pohár vízzel",
          hr: "S čašom vode",
          ru: "Со стаканом воды",
        },
        price: "1/8 l — 4,00 €",
      },
      {
        name: {
          de: "Zweigelt gespritzt",
          cs: "Zweigelt střik",
          en: "Zweigelt spritzer",
          pl: "Zweigelt z wodą (szprycer)",
          hu: "Zweigelt fröccs",
          hr: "Gemišt od Zweigelta",
          ru: "Шпритцер из Цвайгельта",
        },
        price: "1/4 l — 4,20 €",
      },
      {
        name: {
          de: "Aperol gespritzt",
          cs: "Aperol Spritz",
          en: "Aperol Spritz",
          pl: "Aperol Spritz",
          hu: "Aperol Spritz",
          hr: "Aperol Spritz",
          ru: "Апероль-шприц",
        },
        price: "7,40 €",
      },
      { name: "Hugo", price: "7,40 €" },
    ],
  },
  {
    id: "hot-drinks",
    title: {
      de: "Kaffee & Tee",
      cs: "Káva a čaj",
      en: "Coffee & Tea",
      pl: "Kawa i herbata",
      hu: "Kávé és tea",
      hr: "Kava i čaj",
      ru: "Кофе и чай",
    },
    items: [
      {
        name: {
          de: "Espresso / mit Milch",
          cs: "Espresso / s mlékem",
          en: "Espresso / with milk",
          pl: "Espresso / z mlekiem",
          hu: "Espresso / tejjel",
          hr: "Espresso / s mlijekom",
          ru: "Эспрессо / с молоком",
        },
        price: "3,30 € / 3,50 €",
      },
      {
        name: {
          de: "Doppelter Espresso / mit Milch",
          cs: "Dvojité espresso / s mlékem",
          en: "Double espresso / with milk",
          pl: "Podwójne espresso / z mlekiem",
          hu: "Dupla espresso / tejjel",
          hr: "Dupli espresso / s mlijekom",
          ru: "Двойной эспрессо / с молоком",
        },
        price: "4,60 € / 4,80 €",
      },
      { name: "Verlängerter", price: "3,80 €" },
      { name: "Melange", price: "4,00 €" },
      { name: "Cappuccino", price: "4,20 €" },
      {
        name: {
          de: "Milchkaffee",
          cs: "Mléčná káva",
          en: "Milk coffee",
          pl: "Kawa z mlekiem",
          hu: "Tejeskávé",
          hr: "Kava s mlijekom",
          ru: "Кофе с молоком",
        },
        price: "4,60 €",
      },
      { name: "Latte Macchiato", price: "4,70 €" },
      { name: "Häferl Kaffee", price: "5,00 €" },
      {
        name: "Affogato al Caffè",
        description: {
          de: "Espresso & kaltes Vanilleeis",
          cs: "Espresso a studená vanilková zmrzlina",
          en: "Espresso & cold vanilla ice cream",
          pl: "Espresso i zimne lody waniliowe",
          hu: "Espresso és hideg vaníliafagylalt",
          hr: "Espresso i hladni sladoled od vanilije",
          ru: "Эспрессо и холодное ванильное мороженое",
        },
        price: "5,80 €",
      },
      {
        name: {
          de: "Kakao / mit Schlag",
          cs: "Kakao / se šlehačkou",
          en: "Cocoa / with whipped cream",
          pl: "Kakao / z bitą śmietaną",
          hu: "Kakaó / tejszínhabbal",
          hr: "Kakao / sa šlagom",
          ru: "Какао / со взбитыми сливками",
        },
        price: "4,40 € / 4,70 €",
      },
      {
        name: {
          de: "Kakao mit Rum",
          cs: "Kakao s rumem",
          en: "Cocoa with rum",
          pl: "Kakao z rumem",
          hu: "Kakaó rummal",
          hr: "Kakao s rumom",
          ru: "Какао с ромом",
        },
        price: "6,40 €",
      },
      {
        name: {
          de: "Tee / mit Milch / Zitrone",
          cs: "Čaj / s mlékem / citronem",
          en: "Tea / with milk / lemon",
          pl: "Herbata / z mlekiem / cytryną",
          hu: "Tea / tejjel / citrommal",
          hr: "Čaj / s mlijekom / limunom",
          ru: "Чай / с молоком / с лимоном",
        },
        description: {
          de: "Grün, Schwarz, Früchte, Kräuter, Pfefferminz",
          cs: "zelený, černý, ovocný, bylinkový, mátový",
          en: "green, black, fruit, herbal, peppermint",
          pl: "zielona, czarna, owocowa, ziołowa, miętowa",
          hu: "zöld, fekete, gyümölcs, gyógynövény, borsmenta",
          hr: "zeleni, crni, voćni, biljni, metvica",
          ru: "зелёный, чёрный, фруктовый, травяной, мятный",
        },
        price: "3,80 € / 4,00 €",
      },
      {
        name: {
          de: "Tee mit Rum / Schnaps",
          cs: "Čaj s rumem / pálenkou",
          en: "Tea with rum / schnapps",
          pl: "Herbata z rumem / sznapsem",
          hu: "Tea rummal / pálinkával",
          hr: "Čaj s rumom / rakijom",
          ru: "Чай с ромом / шнапсом",
        },
        price: "6,00 €",
      },
      {
        name: {
          de: "Heiße Zitrone",
          cs: "Horký citron",
          en: "Hot lemon",
          pl: "Gorąca cytryna",
          hu: "Forró citrom",
          hr: "Topla limunada",
          ru: "Горячий лимон",
        },
        price: "3,20 €",
      },
      {
        name: {
          de: "Glühwein",
          cs: "Svařené víno",
          en: "Mulled wine (Glühwein)",
          pl: "Grzane wino",
          hu: "Forralt bor",
          hr: "Kuhano vino",
          ru: "Глинтвейн",
        },
        description: {
          de: "Mit Schuss Amaretto",
          cs: "S kapkou amaretta",
          en: "With a shot of Amaretto",
          pl: "Z dodatkiem amaretto",
          hu: "Egy adag amarettóval",
          hr: "S malo amaretta",
          ru: "С добавлением амаретто",
        },
        price: "5,50 €",
      },
      { name: "Jagertee", price: "6,90 €" },
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
