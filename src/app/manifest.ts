import type { MetadataRoute } from "next";
import { restaurantConfig } from "@/config/restaurant";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: restaurantConfig.name,
    short_name: restaurantConfig.shortName,
    description: restaurantConfig.description,
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
