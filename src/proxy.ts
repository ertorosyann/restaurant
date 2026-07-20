import { NextResponse, type NextRequest } from "next/server";
import {
  LOCALE_COOKIE,
  defaultLocale,
  isLocale,
  locales,
  type Locale,
} from "@/i18n/config";

/**
 * Locale routing (Next 16 proxy, formerly middleware).
 *
 * Every page lives under a language prefix (/de, /cs, /en, /pl). Requests
 * without one — "/", "/menu", old bookmarks — are redirected to the best
 * language for the visitor:
 *
 *   1. their explicit choice from the language switcher (cookie), else
 *   2. their browser's Accept-Language preference, else
 *   3. German, the site's main language.
 */
function detectLocale(request: NextRequest): Locale {
  const cookie = request.cookies.get(LOCALE_COOKIE)?.value;
  if (cookie && isLocale(cookie)) return cookie;

  const header = request.headers.get("accept-language");
  if (header) {
    const preferences = header
      .split(",")
      .map((part) => {
        const [tag, ...params] = part.trim().split(";");
        const q = params.find((param) => param.trim().startsWith("q="));
        return {
          language: tag.trim().toLowerCase().split("-")[0],
          quality: q ? Number.parseFloat(q.split("=")[1]) || 0 : 1,
        };
      })
      .sort((a, b) => b.quality - a.quality);

    for (const { language } of preferences) {
      if (isLocale(language)) return language;
    }
  }

  return defaultLocale;
}

export default function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const hasLocale = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  );
  if (hasLocale) return NextResponse.next();

  const url = request.nextUrl.clone();
  const locale = detectLocale(request);
  url.pathname = pathname === "/" ? `/${locale}` : `/${locale}${pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  /* Skip Next internals, API routes and files with an extension
     (sitemap.xml, robots.txt, icon.svg, images, …). */
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
