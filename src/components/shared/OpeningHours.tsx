import { restaurantConfig } from "@/config/restaurant";
import { localize, type Locale } from "@/i18n/config";

interface OpeningHoursProps {
  locale: Locale;
  tone?: "light" | "dark";
  className?: string;
}

/**
 * Displays the opening hours configured in src/config/restaurant.ts.
 * Replace the "[OPENING_HOURS]" placeholders there with the real times.
 */
export function OpeningHours({ locale, tone = "light", className = "" }: OpeningHoursProps) {
  const isDark = tone === "dark";

  return (
    <dl className={`space-y-3 ${className}`}>
      {restaurantConfig.openingHours.map((entry) => {
        const days = localize(entry.days, locale);
        return (
          <div
            key={days}
            className={`flex items-baseline justify-between gap-6 border-b pb-3 ${
              isDark ? "border-cream-50/15" : "border-charcoal-900/10"
            }`}
          >
            <dt
              className={`text-sm font-medium uppercase tracking-[0.08em] ${
                isDark ? "text-cream-100/85" : "text-charcoal-700"
              }`}
            >
              {days}
            </dt>
            <dd
              className={`font-display text-lg ${
                isDark ? "text-copper-300" : "text-copper-700"
              }`}
            >
              {localize(entry.hours, locale)}
            </dd>
          </div>
        );
      })}
    </dl>
  );
}
