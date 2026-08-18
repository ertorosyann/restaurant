import type { Metadata } from "next";
import { cookies } from "next/headers";
import { ADMIN_COOKIE, isValidAdminSession } from "@/lib/admin-auth";
import { restaurantConfig } from "@/config/restaurant";
import { getEditableRows } from "@/lib/opening-hours";
import { defaultLocale, isLocale, localize, type Locale } from "@/i18n/config";
import { loginAction, logoutAction, saveHoursAction } from "./actions";

interface PageProps {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ error?: string; saved?: string }>;
}

/** Hidden admin page — must never appear in search results. */
export const metadata: Metadata = {
  title: "Change opening hours",
  robots: { index: false, follow: false },
};

const inputClasses =
  "w-full rounded-md border border-charcoal-900/15 bg-white px-3.5 py-2.5 text-base text-charcoal-900 focus:outline-2 focus:outline-copper-500";

/**
 * /changetimes — lets the restaurant admin update the opening hours
 * without touching code. Protected by the ADMIN_PASSWORD environment
 * variable; times are stored in data/opening-hours.json on the server.
 * The admin UI is English-only by design.
 */
export default async function ChangeTimesPage({ params, searchParams }: PageProps) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : defaultLocale;
  const { error, saved } = await searchParams;

  const passwordConfigured = !!process.env.ADMIN_PASSWORD;
  const session = (await cookies()).get(ADMIN_COOKIE)?.value;
  const authenticated = isValidAdminSession(session);

  return (
    <div className="mx-auto max-w-xl px-4 py-28 sm:px-6">
      <p className="text-xs font-medium uppercase tracking-[0.22em] text-copper-700">
        Admin area
      </p>
      <h1 className="mt-3 font-display text-3xl text-charcoal-950">
        Change opening hours
      </h1>

      {!passwordConfigured && (
        <div className="mt-8 rounded-lg border border-copper-500/40 bg-copper-500/10 p-5 text-sm leading-relaxed text-charcoal-800">
          <p className="font-medium">Not set up yet.</p>
          <p className="mt-2">
            The environment variable{" "}
            <code className="rounded bg-charcoal-900/10 px-1.5 py-0.5">
              ADMIN_PASSWORD
            </code>{" "}
            must be set on the server (e.g. in a <code>.env.local</code> file
            next to package.json), then restart the server.
          </p>
        </div>
      )}

      {passwordConfigured && !authenticated && (
        <form action={loginAction} className="mt-8 space-y-4">
          <input type="hidden" name="locale" value={locale} />
          {error && (
            <p className="rounded-md bg-red-50 px-4 py-3 text-sm text-red-800">
              Wrong password.
            </p>
          )}
          <label className="block">
            <span className="mb-1.5 block text-sm font-medium text-charcoal-700">
              Password
            </span>
            <input
              type="password"
              name="password"
              required
              autoFocus
              className={inputClasses}
            />
          </label>
          <button
            type="submit"
            className="w-full cursor-pointer rounded-md bg-pine-900 px-6 py-3 text-sm font-medium uppercase tracking-[0.12em] text-cream-50 transition-colors hover:bg-pine-800"
          >
            Log in
          </button>
        </form>
      )}

      {passwordConfigured && authenticated && (
        <>
          {saved && (
            <p className="mt-8 rounded-md bg-pine-50 px-4 py-3 text-sm text-pine-800">
              Saved — the new times are live on the website immediately.
            </p>
          )}
          <form action={saveHoursAction} className="mt-8 space-y-6">
            <input type="hidden" name="locale" value={locale} />
            {restaurantConfig.openingHours.map((entry, index) => {
              const current = getEditableRows()[index];
              return (
                <fieldset
                  key={index}
                  className="rounded-lg border border-charcoal-900/10 bg-white p-5"
                >
                  <legend className="px-1.5 text-sm font-medium uppercase tracking-[0.08em] text-charcoal-700">
                    {localize(entry.days, "en")}
                  </legend>
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                    <input
                      type="text"
                      name={`hours-${index}`}
                      defaultValue={current.hours}
                      placeholder="e.g. 11:00 – 19:00"
                      className={inputClasses}
                    />
                    <label className="flex shrink-0 cursor-pointer items-center gap-2 text-sm text-charcoal-700">
                      <input
                        type="checkbox"
                        name={`closed-${index}`}
                        defaultChecked={current.closed}
                        className="h-4 w-4 accent-pine-800"
                      />
                      Closed (rest day)
                    </label>
                  </div>
                </fieldset>
              );
            })}
            <p className="text-xs leading-relaxed text-charcoal-500">
              When “Closed” is ticked, the time field is ignored and the
              website automatically shows “Closed” translated into each
              visitor’s language.
            </p>
            <button
              type="submit"
              className="w-full cursor-pointer rounded-md bg-pine-900 px-6 py-3 text-sm font-medium uppercase tracking-[0.12em] text-cream-50 transition-colors hover:bg-pine-800"
            >
              Save
            </button>
          </form>
          <form action={logoutAction} className="mt-6 text-center">
            <input type="hidden" name="locale" value={locale} />
            <button
              type="submit"
              className="cursor-pointer text-sm text-charcoal-500 underline-offset-4 hover:underline"
            >
              Log out
            </button>
          </form>
        </>
      )}
    </div>
  );
}
