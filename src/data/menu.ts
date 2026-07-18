/**
 * MENU DATA — Zentrum Café Restaurant
 * ====================================
 * ⚠️  This is an EXAMPLE menu with realistic placeholder dishes and prices.
 * It is NOT the restaurant's real menu. Replace dishes, descriptions and
 * prices with the actual Zentrum Café Restaurant offering before launch.
 *
 * HOW TO EDIT:
 * - Add or remove dishes inside any category's `items` array.
 * - Change `price` strings freely (they are displayed exactly as written).
 * - Reorder categories by reordering this array — the menu page and its
 *   category navigation follow this order automatically.
 * - Add dietary labels from the `DietaryLabel` list to any dish.
 * - Set `featured: true` (and optionally an `image`) to highlight a dish
 *   with a photo — used on the home page and at the top of the menu.
 */

import { siteImages, type SiteImage } from "@/data/images";

export type DietaryLabel =
  | "vegetarian"
  | "vegan"
  | "gluten-free"
  | "spicy"
  | "local-specialty"
  | "chefs-choice";

export const dietaryLabelText: Record<DietaryLabel, string> = {
  vegetarian: "Vegetarian",
  vegan: "Vegan",
  "gluten-free": "Gluten-Free",
  spicy: "Spicy",
  "local-specialty": "Local Specialty",
  "chefs-choice": "Chef's Choice",
};

export interface MenuItemData {
  name: string;
  description: string;
  price: string;
  labels?: DietaryLabel[];
  featured?: boolean;
  image?: SiteImage;
}

export interface MenuCategoryData {
  /** Used for anchors (#breakfast) and the category navigation. */
  id: string;
  title: string;
  note?: string;
  items: MenuItemData[];
}

export const menuCategories: MenuCategoryData[] = [
  {
    id: "breakfast",
    title: "Breakfast",
    note: "Served every morning — the perfect start before a day in the mountains.",
    items: [
      {
        name: "Alpine Farmer's Breakfast",
        description:
          "Farmhouse bread, mountain cheese, ham, butter, homemade jam and a free-range egg.",
        price: "€ 13.50",
        labels: ["local-specialty"],
      },
      {
        name: "Zentrum Breakfast",
        description:
          "Basket of fresh breads and pastries with butter, honey, jam and a soft-boiled egg.",
        price: "€ 11.90",
        labels: ["vegetarian"],
      },
      {
        name: "Bircher Muesli",
        description:
          "Oats soaked overnight with apple, yoghurt, toasted nuts and seasonal berries.",
        price: "€ 8.50",
        labels: ["vegetarian"],
      },
      {
        name: "Avocado & Egg Toast",
        description:
          "Sourdough toast with crushed avocado, poached eggs, radish and cress.",
        price: "€ 12.50",
        labels: ["vegetarian"],
      },
      {
        name: "Ham & Cheese Omelette",
        description: "Three-egg omelette with alpine cheese, ham and chives, served with bread.",
        price: "€ 11.50",
      },
    ],
  },
  {
    id: "starters",
    title: "Starters",
    items: [
      {
        name: "Beef Carpaccio",
        description:
          "Thinly sliced beef with rocket, parmesan shavings, capers and lemon-olive oil.",
        price: "€ 14.90",
        labels: ["gluten-free"],
      },
      {
        name: "Alpine Cheese Board",
        description:
          "Selection of regional cheeses with fig mustard, walnuts and farmhouse bread.",
        price: "€ 12.90",
        labels: ["vegetarian", "local-specialty"],
      },
      {
        name: "Smoked Trout Fillet",
        description: "Locally smoked trout with horseradish cream, apple and dark bread.",
        price: "€ 13.50",
        labels: ["local-specialty"],
      },
      {
        name: "Garlic Butter Mushrooms",
        description: "Pan-fried forest mushrooms in herb-garlic butter on toasted sourdough.",
        price: "€ 10.90",
        labels: ["vegetarian"],
      },
    ],
  },
  {
    id: "soups",
    title: "Soups",
    items: [
      {
        name: "Frittatensuppe",
        description: "Clear beef broth with traditional sliced herb pancakes and chives.",
        price: "€ 6.50",
        labels: ["local-specialty"],
      },
      {
        name: "Kaspressknödel Soup",
        description:
          "Hearty broth with a crisp, pan-fried cheese dumpling — an Alpine classic.",
        price: "€ 7.90",
        labels: ["vegetarian", "local-specialty"],
        featured: true,
        image: siteImages.featuredDishThree,
      },
      {
        name: "Creamy Pumpkin Soup",
        description: "Silky pumpkin soup with Styrian pumpkin seed oil and roasted seeds.",
        price: "€ 6.90",
        labels: ["vegetarian", "gluten-free", "local-specialty"],
      },
      {
        name: "Garlic Cream Soup",
        description: "Velvety garlic soup topped with crunchy herb croutons.",
        price: "€ 6.50",
        labels: ["vegetarian"],
      },
    ],
  },
  {
    id: "salads",
    title: "Salads",
    items: [
      {
        name: "Mixed Alpine Salad",
        description:
          "Crisp seasonal leaves and garden vegetables with house dressing.",
        price: "€ 7.90",
        labels: ["vegan", "gluten-free"],
      },
      {
        name: "Styrian Fried Chicken Salad",
        description:
          "Warm strips of crispy chicken on leaf salad with pumpkin seed oil dressing.",
        price: "€ 15.90",
        labels: ["local-specialty"],
      },
      {
        name: "Grilled Goat Cheese Salad",
        description: "Warm goat cheese with honey and walnuts on marinated leaves.",
        price: "€ 14.50",
        labels: ["vegetarian", "gluten-free"],
      },
      {
        name: "Mountain Herb Bowl",
        description:
          "Quinoa, roasted vegetables, herbs and toasted seeds with lemon vinaigrette.",
        price: "€ 13.90",
        labels: ["vegan", "gluten-free"],
      },
    ],
  },
  {
    id: "main-courses",
    title: "Main Courses",
    items: [
      {
        name: "Roast Pork with Dumplings",
        description:
          "Slow-roasted pork in dark beer sauce with bread dumplings and warm cabbage salad.",
        price: "€ 17.90",
      },
      {
        name: "Grilled Alpine Char",
        description:
          "Fillet of local char with parsley potatoes, brown butter and lemon.",
        price: "€ 21.50",
        labels: ["gluten-free", "local-specialty"],
      },
      {
        name: "Beef Filet Steak",
        description:
          "Grilled beef filet with pepper sauce, seasonal vegetables and rosemary potatoes.",
        price: "€ 28.90",
        labels: ["gluten-free", "chefs-choice"],
      },
      {
        name: "Herb Chicken Breast",
        description:
          "Corn-fed chicken breast with grilled vegetables and creamy polenta.",
        price: "€ 18.50",
        labels: ["gluten-free"],
      },
    ],
  },
  {
    id: "austrian-specialties",
    title: "Austrian Specialties",
    note: "Traditional recipes prepared with care — the taste of the region.",
    items: [
      {
        name: "Wiener Schnitzel",
        description:
          "Golden-fried veal schnitzel with parsley potatoes, cranberries and lemon.",
        price: "€ 22.90",
        labels: ["chefs-choice"],
        featured: true,
        image: siteImages.featuredDishTwo,
      },
      {
        name: "Tafelspitz",
        description:
          "Gently simmered prime boiled beef with root vegetables, apple-horseradish and chive sauce.",
        price: "€ 23.50",
      },
      {
        name: "Kasnocken",
        description:
          "Pan-fried spaetzle with melted mountain cheese, crispy onions and green salad.",
        price: "€ 14.90",
        labels: ["vegetarian", "local-specialty"],
        featured: true,
        image: siteImages.featuredDishOne,
      },
      {
        name: "Beef Goulash",
        description: "Rich paprika goulash, slowly braised, served with bread dumpling.",
        price: "€ 16.90",
        labels: ["spicy"],
      },
      {
        name: "Brettljause",
        description:
          "Rustic wooden board with regional ham, speck, cheese, spreads and farmhouse bread.",
        price: "€ 15.90",
        labels: ["local-specialty"],
      },
    ],
  },
  {
    id: "international-dishes",
    title: "International Dishes",
    items: [
      {
        name: "Spaghetti al Pomodoro",
        description: "Spaghetti in slow-cooked tomato sauce with basil and parmesan.",
        price: "€ 12.90",
        labels: ["vegetarian"],
      },
      {
        name: "Penne Arrabbiata",
        description: "Penne in spicy tomato-chili sauce with garlic and fresh parsley.",
        price: "€ 12.50",
        labels: ["vegan", "spicy"],
      },
      {
        name: "Zentrum Burger",
        description:
          "Beef burger with alpine cheese, bacon, house sauce and rosemary fries.",
        price: "€ 16.90",
      },
      {
        name: "Grilled Salmon Bowl",
        description:
          "Salmon fillet on herbed rice with avocado, edamame and sesame-soy dressing.",
        price: "€ 19.50",
      },
    ],
  },
  {
    id: "vegetarian-dishes",
    title: "Vegetarian Dishes",
    items: [
      {
        name: "Wild Mushroom Risotto",
        description:
          "Creamy risotto with forest mushrooms, parmesan and fresh thyme.",
        price: "€ 15.90",
        labels: ["vegetarian", "gluten-free"],
      },
      {
        name: "Vegetable Curry",
        description:
          "Seasonal vegetables in mild coconut curry with fragrant basmati rice.",
        price: "€ 14.50",
        labels: ["vegan", "gluten-free"],
      },
      {
        name: "Spinach & Cheese Dumplings",
        description:
          "Spinach dumplings with brown butter, parmesan and crisp salad.",
        price: "€ 13.90",
        labels: ["vegetarian"],
      },
      {
        name: "Grilled Vegetable Plate",
        description:
          "Marinated grilled vegetables with herb polenta and basil pesto.",
        price: "€ 13.50",
        labels: ["vegan", "gluten-free"],
      },
    ],
  },
  {
    id: "desserts",
    title: "Desserts & Cakes",
    note: "Homemade every day — best enjoyed slowly, with a good coffee.",
    items: [
      {
        name: "Apfelstrudel",
        description:
          "Warm apple strudel in crisp pastry with vanilla sauce or whipped cream.",
        price: "€ 6.90",
        labels: ["vegetarian", "local-specialty"],
      },
      {
        name: "Kaiserschmarrn",
        description:
          "Fluffy shredded pancake with raisins, icing sugar and plum compote.",
        price: "€ 12.50",
        labels: ["vegetarian", "chefs-choice"],
      },
      {
        name: "Sachertorte",
        description: "Classic chocolate cake with apricot jam and whipped cream.",
        price: "€ 5.90",
        labels: ["vegetarian"],
      },
      {
        name: "Cake of the Day",
        description:
          "A daily changing homemade cake from our pastry counter — ask our team.",
        price: "€ 4.90",
        labels: ["vegetarian"],
      },
      {
        name: "Vanilla Panna Cotta",
        description: "Silky vanilla cream with warm berry compote.",
        price: "€ 6.50",
        labels: ["vegetarian", "gluten-free"],
      },
    ],
  },
  {
    id: "coffee",
    title: "Coffee",
    note: "Carefully prepared from quality beans — the heart of every good café.",
    items: [
      {
        name: "Wiener Melange",
        description: "Espresso with steamed milk and a soft cap of milk foam.",
        price: "€ 4.20",
      },
      {
        name: "Espresso",
        description: "A short, intense classic — also available as doppio.",
        price: "€ 2.90",
      },
      {
        name: "Cappuccino",
        description: "Espresso with velvety milk foam.",
        price: "€ 4.10",
      },
      {
        name: "Einspänner",
        description: "Double espresso in a glass, crowned with whipped cream.",
        price: "€ 4.50",
        labels: ["local-specialty"],
      },
      {
        name: "Café Latte",
        description: "Mild espresso with plenty of steamed milk.",
        price: "€ 4.30",
      },
      {
        name: "Hot Chocolate",
        description: "Rich hot chocolate with whipped cream.",
        price: "€ 4.20",
      },
    ],
  },
  {
    id: "tea",
    title: "Tea",
    items: [
      {
        name: "Alpine Herb Tea",
        description: "Soothing blend of mountain herbs from the region.",
        price: "€ 3.60",
        labels: ["local-specialty"],
      },
      {
        name: "Earl Grey",
        description: "Classic black tea with bergamot.",
        price: "€ 3.40",
      },
      {
        name: "Fresh Mint Tea",
        description: "Fresh mint leaves infused with honey on the side.",
        price: "€ 3.90",
      },
      {
        name: "Fruit Infusion",
        description: "Fruity blend of berries and hibiscus, naturally caffeine-free.",
        price: "€ 3.40",
      },
    ],
  },
  {
    id: "cold-drinks",
    title: "Cold Drinks",
    items: [
      {
        name: "Almdudler",
        description: "Austria's beloved alpine herb lemonade.",
        price: "€ 3.60",
        labels: ["local-specialty"],
      },
      {
        name: "Elderflower Spritzer",
        description: "Homemade elderflower syrup with sparkling water and lemon.",
        price: "€ 3.90",
      },
      {
        name: "Fresh Orange Juice",
        description: "Freshly squeezed to order.",
        price: "€ 4.50",
      },
      {
        name: "Apple Juice Spritzer",
        description: "Regional apple juice with sparkling mineral water.",
        price: "€ 3.40",
      },
      {
        name: "Mineral Water",
        description: "Still or sparkling, 0.33 l.",
        price: "€ 2.90",
      },
    ],
  },
];

/** Dishes highlighted with photos on the home page and menu. */
export const featuredDishes: MenuItemData[] = menuCategories
  .flatMap((category) => category.items)
  .filter((item) => item.featured);
