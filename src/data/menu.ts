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
    title: { de: "Suppen", cs: "Polévky", en: "Soups", pl: "Zupy", hr: "Juhe", ru: "Супы", hu: "Levesek" },
    items: [
      {
        name: {
          de: "Frittatensuppe",
          cs: "Frittatensuppe – vývar s palačinkovými nudlemi",
          en: "Frittatensuppe – clear broth with pancake strips",
          pl: "Frittatensuppe – bulion z kluskami naleśnikowymi", hr: "Frittatensuppe – bistra juha s rezancima od palačinki", ru: "Фриттатензуппе — бульон с блинной лапшой", hu: "Frittatensuppe – erőleves palacsintametélttel",
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
          pl: "Krem z warzyw z grzankami", hr: "Krem juha od povrća s krutonima", ru: "Овощной крем-суп с гренками", hu: "Zöldségkrémleves krutonnal",
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
          pl: "Zupa gulaszowa z chlebem", hr: "Gulaš juha s kruhom", ru: "Суп-гуляш с хлебом", hu: "Gulyásleves kenyérrel",
        },
        price: "€ 8.70",
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
        price: "€ 7.00",
        labels: ["vegetarian"],
        image: siteImages.dishMixedSalad,
      },
      {
        name: {
          de: "Putenstreifensalat mit Brot",
          cs: "Salát s krůtími nudličkami a chlebem",
          en: "Turkey strip salad with bread",
          pl: "Sałatka z paskami indyka i chlebem", hr: "Salata s trakicama puretine i kruhom", ru: "Салат с полосками индейки и хлебом", hu: "Saláta pulykacsíkokkal, kenyérrel",
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
      pl: "Przekąski i pieczywo", hr: "Zalogaji i kruh", ru: "Закуски и хлеб", hu: "Snackek és kenyerek",
    },
    items: [
      {
        name: {
          de: "Schinken-Käse Toast mit Salatschüssel",
          cs: "Toast se šunkou a sýrem a miskou salátu",
          en: "Ham and cheese toast with a salad bowl",
          pl: "Tost z szynką i serem z miską sałatki", hr: "Tost sa šunkom i sirom uz zdjelu salate", ru: "Тост с ветчиной и сыром с миской салата", hu: "Sonkás-sajtos melegszendvics salátástállal",
        },
        price: "€ 9.50",
        image: siteImages.hamandcheese
      },
      {
        name: {
          de: "Holzfällerbrot",
          cs: "Holzfällerbrot – „dřevorubecký“ chléb",
          en: "Holzfällerbrot – hearty lumberjack bread",
          pl: "Holzfällerbrot – chleb „drwala”", hr: "Holzfällerbrot – „drvosječin” kruh", ru: "Хольцфеллерброт — сытный «хлеб дровосека»", hu: "Holzfällerbrot – „favágókenyér”",
        },
        price: "€ 9.20",
        image: siteImages.dishLumberjackBread,
      },
      {
        name: {
          de: "Thunfisch auf Ciabatta Brot mit Salat",
          cs: "Tuňák na ciabattě se salátem",
          en: "Tuna on ciabatta bread with salad",
          pl: "Tuńczyk na pieczywie ciabatta z sałatką", hr: "Tuna na ciabatta kruhu sa salatom", ru: "Тунец на чиабатте с салатом", hu: "Tonhal ciabatta kenyéren, salátával",
        },
        price: "€ 10.50",
        image: siteImages.dishTunaCiabatta,
      },
      {
        name: {
          de: "Tomaten-Mozzarella-Brot",
          cs: "Chléb s rajčaty a mozzarellou",
          en: "Tomato and mozzarella bread",
          pl: "Pieczywo z pomidorami i mozzarellą", hr: "Kruh s rajčicom i mozzarellom", ru: "Хлеб с томатами и моцареллой", hu: "Paradicsomos-mozzarellás kenyér",
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
          pl: "Parówki frankfurterki z chlebem, musztardą i chrzanem", hr: "Hrenovke s kruhom, senfom i hrenom", ru: "Франкфуртские сосиски с хлебом, горчицей и хреном", hu: "Frankfurti virsli kenyérrel, mustárral és tormával",
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
        price: "€ 14.00",
        labels: ["local-specialty"],
        image: siteImages.dishKaesekrainer,
      },
      {
        name: {
          de: "Spaghetti Bolognese mit frischem Parmesan",
          cs: "Spaghetti Bolognese s čerstvým parmazánem",
          en: "Spaghetti Bolognese with fresh parmesan",
          pl: "Spaghetti Bolognese ze świeżym parmezanem", hr: "Špageti bolognese sa svježim parmezanom", ru: "Спагетти болоньезе со свежим пармезаном", hu: "Spaghetti Bolognese frissen reszelt parmezánnal",
        },
        price: "€ 14.50",
        image: siteImages.dishSeafoodRisotto,
      },
      {
        name: {
          de: "Wiener Schnitzel mit Pommes und Preiselbeeren",
          cs: "Vídeňský řízek s hranolky a brusinkami",
          en: "Wiener Schnitzel with fries and cranberries",
          pl: "Sznycel wiedeński z frytkami i borówkami", hr: "Bečki odrezak s pomfritom i brusnicama", ru: "Венский шницель с картофелем фри и брусникой", hu: "Bécsi szelet hasábburgonyával és vörösáfonyával",
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
          pl: "Cordon bleu z ziemniakami i borówkami", hr: "Cordon bleu s krumpirom i brusnicama", ru: "Кордон блю с картофелем и брусникой", hu: "Cordon bleu burgonyával és vörösáfonyával",
        },
        price: "€ 17.90",
        image: siteImages.dishCordonBleu,
      },
      {
        name: {
          de: "Gegrillter Camembert mit Salat und Preiselbeeren",
          cs: "Grilovaný camembert se salátem a brusinkami",
          en: "Grilled camembert with salad and cranberries",
          pl: "Grillowany camembert z sałatką i borówkami", hr: "Camembert s roštilja sa salatom i brusnicama", ru: "Камамбер на гриле с салатом и брусникой", hu: "Grillezett camembert salátával és vörösáfonyával",
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
          pl: "Risotto warzywne", hr: "Rižoto od povrća", ru: "Овощное ризотто", hu: "Zöldséges rizottó",
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
          pl: "Risotto z owocami morza", hr: "Rižoto s morskim plodovima", ru: "Ризотто с морепродуктами", hu: "Rizottó tenger gyümölcseivel",
        },
        price: "€ 18.50",    
        image: siteImages.dishSpaghettiBolognese,
      },
      {
        name: {
          de: "Pazifischer Polardorsch paniert",
          cs: "Treska polární v trojobalu",
          en: "Breaded Pacific polar cod",
          pl: "Panierowany dorsz polarny", hr: "Pohani pacifički polarni bakalar", ru: "Тихоокеанская сайка в панировке", hu: "Rántott csendes-óceáni sarki tőkehal",
        },
        price: "€ 18.80",
        image: siteImages.dishPacificPolarCod,
      },
      {
        name: {
          de: "Flammkuchen mit Schafskäse und Grillgemüse",
          cs: "Flammkuchen s ovčím sýrem a grilovanou zeleninou",
          en: "Flammkuchen (tarte flambée) with sheep's cheese and grilled vegetables",
          pl: "Flammkuchen z serem owczym i grillowanymi warzywami", hr: "Flammkuchen s ovčjim sirom i povrćem s roštilja", ru: "Фламмкухен с овечьим сыром и овощами гриль", hu: "Flammkuchen juhsajttal és grillezett zöldségekkel",
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
          pl: "Pizza wiejska", hr: "Seljačka pizza", ru: "Крестьянская пицца", hu: "Parasztpizza",
        },
        price: "€ 15.50",
        image: siteImages.dishBauernPizza,
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
        price: "€ 5.00",
        labels: ["vegetarian"],
        image: siteImages.dishHauskuchen,
      },
      {
        name: {
          de: "Apfel- oder Topfenstrudel mit Eis oder Vanillesauce",
          cs: "Jablečný nebo tvarohový závin se zmrzlinou nebo vanilkovou omáčkou",
          en: "Apple or curd cheese strudel with ice cream or vanilla sauce",
          pl: "Strudel jabłkowy lub serowy z lodami lub sosem waniliowym", hr: "Štrudla od jabuka ili svježeg sira sa sladoledom ili umakom od vanilije", ru: "Штрудель с яблоками или творогом, с мороженым или ванильным соусом", hu: "Almás vagy túrós rétes fagylalttal vagy vaníliasodóval",
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
          pl: "Gofry belgijskie z lodami i sosem czekoladowym", hr: "Belgijski vafli sa sladoledom i čokoladnim umakom", ru: "Бельгийские вафли с мороженым и шоколадным соусом", hu: "Belga gofri fagylalttal és csokoládészósszal",
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
          pl: "Kaiserschmarren – omlet cesarski z musem jabłkowym", hr: "Kaiserschmarren – trgane palačinke s umakom od jabuka", ru: "Кайзершмаррен — императорский омлет с яблочным пюре", hu: "Kaiserschmarren – császármorzsa almaszósszal",
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
        price: "€ 8.50",
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
      }
    ],
  },

  /* ---------------- Drinks (Getränke) ---------------- */

  {
    id: "beer",
    title: { de: "Bier", cs: "Pivo", en: "Beer", pl: "Piwo", hu: "Sörök", hr: "Pivo", ru: "Пиво" },
    items: [
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
        price: "0,5 l — 5,50 €",
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
        price: "0,5 l — 5,50 €",
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
        price: "0,5 l — 5,70 €",
      },
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
        price: "0,2 l 3,20 € / 0,3 l 4,20 € / 0,5 l 5,50 €",
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
        price: "0,3 l 4,20 € / 0,5 l 5,40 €",
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
        price: "0,5 l — 5,70 €",
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
        price: "0,33 l 3,50 € / 0,75 l 5,60 €",
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
        price: "0,25 l 3,80 € / 0,5 l 5,80 €",
      },
      {
        name: {
          de: "Apfelsaft mit Wasser",
          cs: "Jablečný džus s vodou",
          en: "Apple juice with water",
          pl: "Sok jabłkowy z wodą",
          hu: "Almalé vízzel",
          hr: "Sok od jabuke s vodom",
          ru: "Яблочный сок с водой",
        },
        price: "0,25 l 3,00 € / 0,5 l 4,50 €",
      },
      {
        name: {
          de: "Apfelsaft mit Soda",
          cs: "Jablečný džus se sodovkou",
          en: "Apple juice with soda",
          pl: "Sok jabłkowy z wodą sodową",
          hu: "Almalé szódával",
          hr: "Sok od jabuke sa soda vodom",
          ru: "Яблочный сок с содовой",
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
        price: "0,25 l 3,80 € / 0,5 l 5,80 €",
      },
      {
        name: {
          de: "Orangensaft mit Wasser",
          cs: "Pomerančový džus s vodou",
          en: "Orange juice with water",
          pl: "Sok pomarańczowy z wodą",
          hu: "Narancslé vízzel",
          hr: "Sok od naranče s vodom",
          ru: "Апельсиновый сок с водой",
        },
        price: "0,25 l 3,00 € / 0,5 l 4,50 €",
      },
      {
        name: {
          de: "Orangensaft mit Soda",
          cs: "Pomerančový džus se sodovkou",
          en: "Orange juice with soda",
          pl: "Sok pomarańczowy z wodą sodową",
          hu: "Narancslé szódával",
          hr: "Sok od naranče sa soda vodom",
          ru: "Апельсиновый сок с содовой",
        },
        price: "0,33 l 3,50 € / 0,5 l 5,30 €",
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
        price: "0,33 l 4,20 € / 0,5 l 5,40 €",
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
        price: "0,33 l 4,00 € / 0,5 l 4,90 €",
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
      { name: "Coca-Cola", price: "0,3 l 3,50 € / 0,5 l 5,30 €" },
      { name: "Fanta / Sprite", price: "0,3 l 3,50 € / 0,5 l 5,30 €" },
      { name: "Almdudler", price: "0,3 l 3,50 € / 0,5 l 5,30 €" },
      { name: "Coca-Cola Zero", price: "0,33 l — 3,90 €" },
      { name: "Red Bull", price: "0,2 l — 4,30 €" },
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
        price: "0,33 l — 3,90 €",
      },
      { name: "Bitter Lemon", price: "0,2 l — 3,80 €" },
      { name: "Tonic Water", price: "0,2 l — 3,80 €" },
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
        price: "1/8 l — 3,70 €",
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
        price: "1/4 l — 4,20 €",
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
        price: "1/8 l — 3,70 €",
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
        price: "6,80 €",
      },
      { name: "Hugo", price: "6,80 €" },
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
        price: "3,20 € / 3,40 €",
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
        price: "4,50 € / 4,70 €",
      },
      { name: "Verlängerter", price: "3,70 €" },
      { name: "Melange", price: "3,90 €" },
      { name: "Cappuccino", price: "4,10 €" },
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
        price: "4,50 €",
      },
      { name: "Latte Macchiato", price: "4,60 €" },
      { name: "Haferl Kaffee", price: "5,00 €" },
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
        price: "4,30 € / 4,60 €",
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
        price: "6,30 €",
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
        price: "3,70 € / 3,90 €",
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
        price: "3,00 €",
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
        price: "5,50 €",
      },
      { name: "Jagertee", price: "6,80 €" },
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
