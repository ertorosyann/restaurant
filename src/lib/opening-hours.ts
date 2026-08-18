import fs from "node:fs";
import path from "node:path";
import { restaurantConfig } from "@/config/restaurant";
import { localize, type Locale, type LocalizedText } from "@/i18n/config";

/**
 * OPENING HOURS WITH ADMIN OVERRIDE
 * ==================================
 * The default hours live in src/config/restaurant.ts. The admin page
 * (/changetimes) can override the times at runtime; the override is
 * persisted to data/opening-hours.json on the server, so no redeploy
 * is needed. Day-group labels always come from the config — only the
 * times and the closed flags are editable.
 */

const OVERRIDE_FILE = path.join(process.cwd(), "data", "opening-hours.json");

const closedText: LocalizedText = {
  de: "Ruhetag",
  cs: "Zavřeno",
  en: "Closed",
  pl: "Nieczynne",
  hu: "Zárva",
  hr: "Zatvoreno",
  ru: "Выходной",
};

export interface HoursOverrideRow {
  closed: boolean;
  /** Language-neutral time string, e.g. "11:00 – 19:00". */
  hours: string;
}

export interface HoursOverride {
  rows: HoursOverrideRow[];
  updatedAt?: string;
}

export function readHoursOverride(): HoursOverride | null {
  try {
    const parsed = JSON.parse(fs.readFileSync(OVERRIDE_FILE, "utf8"));
    return Array.isArray(parsed?.rows) ? (parsed as HoursOverride) : null;
  } catch {
    return null; // No override saved yet (or unreadable) — use the config.
  }
}

export function writeHoursOverride(override: HoursOverride): void {
  fs.mkdirSync(path.dirname(OVERRIDE_FILE), { recursive: true });
  fs.writeFileSync(OVERRIDE_FILE, JSON.stringify(override, null, 2));
}

/** Current values for the admin form (override applied, else config). */
export function getEditableRows(): HoursOverrideRow[] {
  const override = readHoursOverride();
  return restaurantConfig.openingHours.map((entry, index) => {
    const saved = override?.rows[index];
    if (saved) return { closed: !!saved.closed, hours: saved.hours ?? "" };
    // In the config, closed days carry a localized text instead of a
    // plain time string.
    const isClosed = typeof entry.hours !== "string";
    return { closed: isClosed, hours: isClosed ? "" : (entry.hours as string) };
  });
}

/** Display rows for one language, admin override applied. */
export function getOpeningHoursRows(
  locale: Locale
): { days: string; hours: string }[] {
  const override = readHoursOverride();
  return restaurantConfig.openingHours.map((entry, index) => {
    const days = localize(entry.days, locale);
    const saved = override?.rows[index];
    if (!saved) return { days, hours: localize(entry.hours, locale) };
    return {
      days,
      hours: saved.closed ? localize(closedText, locale) : saved.hours,
    };
  });
}
