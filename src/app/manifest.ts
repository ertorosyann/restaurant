import type { MetadataRoute } from "next";
import { restaurantConfig } from "@/config/restaurant";
import { getSiteContent } from "@/content/site";
import { defaultLocale } from "@/i18n/config";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: restaurantConfig.name,
    short_name: restaurantConfig.shortName,
    /* The manifest is a single file — it uses the main language (German). */
    description: getSiteContent(defaultLocale).meta.siteDescription,
    start_url: "/",
    display: "standalone",
    background_color: "#fcfaf6",
    theme_color: "#1d3026",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
