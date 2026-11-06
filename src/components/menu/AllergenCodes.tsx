import { getAllergenNames, type AllergenCode } from "@/data/menu";
import { localize, type Locale, type LocalizedText } from "@/i18n/config";

const allergensLabel: LocalizedText = {
  de: "Allergene",
  cs: "Alergeny",
  en: "Allergens",
  pl: "Alergeny",
  hu: "Allergének",
  hr: "Alergeni",
  ru: "Аллергены",
};

/** Shared look of one allergen letter — used next to dishes and in the legend. */
export const allergenBadgeClassName =
  "inline-flex h-[1.125rem] min-w-[1.125rem] items-center justify-center rounded-[0.25rem] bg-copper-100 px-1 font-sans text-[0.6875rem] font-semibold leading-none tracking-[0.04em] text-copper-800 ring-1 ring-inset ring-copper-300/70";

interface AllergenCodesProps {
  allergens: AllergenCode[];
  locale: Locale;
  /** Must include a display class (`inline-flex`, `flex`, `hidden sm:inline-flex` …). */
  className?: string;
}

/**
 * The allergen letters of one dish (e.g. A · C · G), each with the full
 * allergen name as a tooltip and as screen-reader text. The letters are
 * explained in the legend at the bottom of the menu page.
 */
export function AllergenCodes({ allergens, locale, className = "inline-flex" }: AllergenCodesProps) {
  if (allergens.length === 0) return null;
  const names = getAllergenNames(locale);

  return (
    <ul
      aria-label={localize(allergensLabel, locale)}
      className={`flex-wrap items-center gap-1 ${className}`}
    >
      {allergens.map((code) => (
        <li key={code} title={names[code]} className={allergenBadgeClassName}>
          {code}
          <span className="sr-only">: {names[code]}</span>
        </li>
      ))}
    </ul>
  );
}
