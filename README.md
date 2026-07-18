# Zentrum Café Restaurant — Website

A premium, mobile-first informational website for **Zentrum Café Restaurant** in
**Ramsau am Dachstein, Austria**, built with Next.js (App Router), React,
TypeScript and Tailwind CSS.

The site presents the restaurant and its atmosphere, displays the menu, and
makes it easy for visitors to call, email or get directions. There is no
online ordering, no user accounts and no database — by design.

---

## Getting started

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

Production build:

```bash
npm run build
npm start
```

## Pages

| Route      | Purpose                                             |
| ---------- | --------------------------------------------------- |
| `/`        | Home — hero, featured dishes, atmosphere, location  |
| `/about`   | Editorial page about the restaurant                 |
| `/menu`    | Full menu with sticky category navigation           |
| `/contact` | Contact details, form, map, call/email/directions   |

A custom 404 page, `sitemap.xml`, `robots.txt`, a web app manifest and
JSON-LD structured data (schema.org `Restaurant`) are generated automatically.

---

## ✏️ Editing content — the three files that matter

### 1. Business details — `src/config/restaurant.ts`

The single source of truth for the name, phone, email, address, domain,
opening hours, price range, coordinates, Google Maps link and social media
URLs. **Replace every `[PLACEHOLDER]` value** (e.g. `[PHONE_NUMBER]`,
`[STREET_ADDRESS]`, `[OPENING_HOURS]`, `[DOMAIN]`…) with real information.

Important behaviors:

- Values still containing `[` brackets are treated as "not provided": they are
  **automatically excluded from SEO structured data**, so fake details are
  never published to search engines.
- **Social media links** left as empty strings (`instagram: ""`) are
  **automatically hidden** everywhere on the site. Paste a full profile URL to
  make the icon appear.
- Once `domain` is set, canonical URLs, Open Graph tags, `sitemap.xml` and
  `robots.txt` all use it automatically.

### 2. Menu — `src/data/menu.ts`

All categories and dishes live here — nothing is hard-coded in components.
The current menu is an **example with placeholder dishes and prices**.

- Add/remove dishes in any category's `items` array.
- Reorder categories by reordering the array (navigation follows).
- `price` is a display string — write it exactly as it should appear.
- Optional `labels`: `vegetarian`, `vegan`, `gluten-free`, `spicy`,
  `local-specialty`, `chefs-choice`.
- Set `featured: true` + an `image` to show a dish with a photo on the home
  page.

### 3. Copy / text — `src/content/site.ts`

Every user-facing sentence lives in this one file, organized by page. The
about-page story and team sections contain clearly marked
`[…]` placeholders — replace them with the restaurant's real story.

**Language preparation:** to add German later, duplicate this file as
`site.de.ts` and select the content object by locale — no component changes
needed.

---

## 🖼️ Replacing the placeholder images

⚠️ **All photography is temporary royalty-free Unsplash placeholder imagery.**
It does not show the actual restaurant, staff or dishes and **must be replaced
with real Zentrum Café Restaurant photos before launch**.

Every image is registered in **`src/data/images.ts`**:

1. Put real photos in `/public/images/` (or a CDN).
2. Change the `src` values (e.g. `src: "/images/hero.jpg"`).
3. Update each `alt` text to describe the real photo.

No component code needs to change. Also replace the Open Graph preview image
(`ogImage` in the same file — ideally 1200×630) and the favicon
(`src/app/icon.svg`).

---

## 📮 Connecting the contact form

The form in `src/components/contact/ContactForm.tsx` is a **frontend
demonstration** — it validates input and shows a success message but does not
send email. The file's header comment contains step-by-step instructions for
connecting **Formspree**, **Web3Forms** or **Resend** (one `fetch` call to
replace).

## 🗺️ Map

The contact page shows a lightweight placeholder and only loads the Google
Maps iframe after the visitor clicks "Load interactive map" (good for
performance and privacy). Set `mapUrl` in the config to a Google Maps link for
the "Get Directions" buttons; if you paste a Google Maps **embed** URL
(containing `/maps/embed`), the interactive map uses it directly.

---

## Architecture notes

- **Server Components by default** — client-side JavaScript is limited to the
  header/mobile navigation, the floating contact button, the menu category
  scroll-spy, the contact form and the map loader.
- **Animations** are lightweight CSS (plus a small IntersectionObserver
  reveal helper). Everything respects `prefers-reduced-motion`, and all
  content is fully visible without JavaScript.
- **SEO**: unique title/description/canonical/Open Graph/Twitter metadata per
  page, JSON-LD `Restaurant` + `BreadcrumbList` structured data, semantic
  HTML and a correct heading hierarchy.
- **Accessibility**: skip-to-content link, keyboard-operable navigation and
  contact panel (Escape/outside-click to close), visible focus states,
  labelled form fields, ≥44px touch targets, safe-area aware floating button.

### Project structure

```
src/
├── app/                 # Routes: /, /about, /menu, /contact, 404,
│                        # sitemap, robots, manifest, icon
├── components/
│   ├── layout/          # Header, DesktopNavigation, MobileNavigation, Footer
│   ├── home/            # Hero, FeaturedDishCard, LocationSection
│   ├── menu/            # MenuCategoryNavigation, MenuCategory, MenuItem
│   ├── contact/         # ContactDetails, ContactForm, MapSection
│   └── shared/          # Reveal, SectionHeading, ButtonLink, Gallery,
│                        # OpeningHours, SocialLinks, Breadcrumbs, PageHero,
│                        # CallToAction, FloatingContactButton, StructuredData
├── config/restaurant.ts # ⭐ Business configuration
├── content/site.ts      # ⭐ All copy (i18n-ready)
├── data/menu.ts         # ⭐ Menu data
├── data/images.ts       # ⭐ Placeholder image registry
└── lib/seo.ts           # Metadata helpers
```

## Pre-launch checklist

- [ ] Replace all `[PLACEHOLDER]` values in `src/config/restaurant.ts`
- [ ] Enter the real menu in `src/data/menu.ts`
- [ ] Replace the story/team placeholders in `src/content/site.ts`
- [ ] Replace all images in `src/data/images.ts` with real photography
- [ ] Connect the contact form to an email service
- [ ] Add social media profile URLs (they appear automatically)
- [ ] Set the real `domain` and deploy
