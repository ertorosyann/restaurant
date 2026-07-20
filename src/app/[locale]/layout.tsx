import type { Metadata, Viewport } from "next";
import { Jost, Playfair_Display } from "next/font/google";
import "../globals.css";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { FloatingContactButton } from "@/components/shared/FloatingContactButton";
import { StructuredData } from "@/components/shared/StructuredData";
import { getSiteContent } from "@/content/site";
import { restaurantConfig } from "@/config/restaurant";
import { defaultLocale, isLocale, locales, type Locale } from "@/i18n/config";
import { siteUrl } from "@/lib/seo";

/* Elegant serif for headings, clear geometric sans for body text.
   latin-ext covers the Czech and Polish alphabets. */
const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

/** One statically generated tree per language: /de, /cs, /en, /pl. */
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

interface LayoutParams {
  params: Promise<{ locale: string }>;
}

/**
 * Unknown locales never reach the router in practice (src/proxy.ts
 * prefixes every locale-less URL), but fall back to German defensively.
 */
function resolveLocale(value: string): Locale {
  return isLocale(value) ? value : defaultLocale;
}

export async function generateMetadata({ params }: LayoutParams): Promise<Metadata> {
  const locale = resolveLocale((await params).locale);
  const content = getSiteContent(locale);

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: `${restaurantConfig.name} | ${restaurantConfig.city}`,
      /* Pages define complete titles themselves for precise local SEO. */
      template: "%s",
    },
    description: content.meta.siteDescription,
    applicationName: restaurantConfig.name,
    formatDetection: { telephone: true },
  };
}

export const viewport: Viewport = {
  themeColor: "#fcfaf6",
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const locale = resolveLocale((await params).locale);
  const content = getSiteContent(locale);

  return (
    <html
      lang={locale}
      /* Tells Next.js to suspend CSS smooth scrolling during route
         transitions (it stays active for in-page anchor links). */
      data-scroll-behavior="smooth"
      className={`${playfair.variable} ${jost.variable} antialiased`}
    >
      <body className="flex min-h-svh flex-col">
        <a
          href="#main-content"
          className="fixed left-4 top-4 z-[60] -translate-y-24 rounded-md bg-pine-800 px-5 py-3 text-sm font-medium text-cream-50 shadow-lifted transition-transform focus:translate-y-0"
        >
          {content.common.skipToContent}
        </a>

        <Header locale={locale} />

        <main id="main-content" className="flex-1">
          {children}
        </main>

        <Footer locale={locale} />
        <FloatingContactButton locale={locale} />
        <StructuredData locale={locale} />
      </body>
    </html>
  );
}
