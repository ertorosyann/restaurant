import { getOpeningHoursRows } from "@/lib/opening-hours";
import type { Locale } from "@/i18n/config";

interface OpeningHoursProps {
  locale: Locale;
  tone?: "light" | "dark";
  className?: string;
}

/**
 * Displays the opening hours: defaults from src/config/restaurant.ts,
 * overridden at runtime by whatever the admin saved on /changetimes.
 */
export function OpeningHours({ locale, tone = "light", className = "" }: OpeningHoursProps) {
  const isDark = tone === "dark";

  return (
    <dl className={`space-y-3 ${className}`}>
      {getOpeningHoursRows(locale).map((entry) => (
        <div
          key={entry.days}
          className={`flex items-baseline justify-between gap-6 border-b pb-3 ${
            isDark ? "border-cream-50/15" : "border-charcoal-900/10"
          }`}
        >
          <dt
            className={`text-sm font-medium uppercase tracking-[0.08em] ${
              isDark ? "text-cream-100/85" : "text-charcoal-700"
            }`}
          >
            {entry.days}
          </dt>
          <dd
            className={`font-display text-lg ${
              isDark ? "text-copper-300" : "text-copper-700"
            }`}
          >
            {entry.hours}
          </dd>
        </div>
      ))}
    </dl>
  );
}
