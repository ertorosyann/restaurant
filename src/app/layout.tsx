import type { Metadata, Viewport } from "next";
import { Jost, Playfair_Display } from "next/font/google";
import "./globals.css";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { FloatingContactButton } from "@/components/shared/FloatingContactButton";
import { StructuredData } from "@/components/shared/StructuredData";
import { siteContent } from "@/content/site";
import { restaurantConfig } from "@/config/restaurant";
import { siteUrl } from "@/lib/seo";

/* Elegant serif for headings, clear geometric sans for body text. */
const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${restaurantConfig.name} | ${restaurantConfig.city}`,
    /* Pages define complete titles themselves for precise local SEO. */
    template: "%s",
  },
  description: restaurantConfig.description,
  applicationName: restaurantConfig.name,
  formatDetection: { telephone: true },
};

export const viewport: Viewport = {
  themeColor: "#fcfaf6",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
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
          {siteContent.common.skipToContent}
        </a>

        <Header />

        <main id="main-content" className="flex-1">
          {children}
        </main>

        <Footer />
        <FloatingContactButton />
        <StructuredData />
      </body>
    </html>
  );
}
