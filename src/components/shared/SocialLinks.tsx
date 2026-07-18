import {
  getActiveSocialLinks,
  type SocialPlatform,
} from "@/config/restaurant";

const platformNames: Record<SocialPlatform, string> = {
  instagram: "Instagram",
  facebook: "Facebook",
  tiktok: "TikTok",
  tripadvisor: "Tripadvisor",
};

/** Simple inline icons — no icon library needed. */
function SocialIcon({ platform }: { platform: SocialPlatform }) {
  const common = {
    width: 20,
    height: 20,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
  } as const;

  switch (platform) {
    case "instagram":
      return (
        <svg {...common}>
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
        </svg>
      );
    case "facebook":
      return (
        <svg {...common}>
          <path d="M14.5 8.5h3V5h-3A3.5 3.5 0 0 0 11 8.5V11H8v3.5h3V21h3.5v-6.5h3l.5-3.5h-3.5V9a1 1 0 0 1 1-0.5Z" />
        </svg>
      );
    case "tiktok":
      return (
        <svg {...common}>
          <path d="M15 4v9.5a4.5 4.5 0 1 1-4.5-4.5" />
          <path d="M15 4c.5 2.6 2.2 4.3 5 4.6" />
        </svg>
      );
    case "tripadvisor":
      return (
        <svg {...common}>
          <circle cx="7.5" cy="13" r="3" />
          <circle cx="16.5" cy="13" r="3" />
          <circle cx="7.5" cy="13" r="0.8" fill="currentColor" stroke="none" />
          <circle cx="16.5" cy="13" r="0.8" fill="currentColor" stroke="none" />
          <path d="M2.5 9.5C5 7.5 8.5 6.5 12 6.5s7 1 9.5 3" />
        </svg>
      );
  }
}

interface SocialLinksProps {
  className?: string;
  /** Shown when no profiles are configured yet (e.g. in the footer). */
  emptyNote?: string;
  tone?: "light" | "dark";
}

/**
 * Renders the restaurant's social media profiles.
 * Links are configured in src/config/restaurant.ts — any platform whose
 * URL is an empty string is automatically hidden.
 */
export function SocialLinks({ className = "", emptyNote, tone = "light" }: SocialLinksProps) {
  const links = getActiveSocialLinks();

  if (links.length === 0) {
    if (!emptyNote) return null;
    return (
      <p
        className={`text-sm ${
          tone === "dark" ? "text-cream-100/60" : "text-charcoal-500"
        } ${className}`}
      >
        {emptyNote}
      </p>
    );
  }

  return (
    <ul className={`flex flex-wrap items-center gap-3 ${className}`}>
      {links.map(({ platform, url }) => (
        <li key={platform}>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${platformNames[platform]} (opens in a new tab)`}
            className={`flex h-11 w-11 items-center justify-center rounded-full border transition-colors ${
              tone === "dark"
                ? "border-cream-50/25 text-cream-100 hover:border-copper-300 hover:text-copper-300"
                : "border-charcoal-900/15 text-charcoal-700 hover:border-copper-600 hover:text-copper-700"
            }`}
          >
            <SocialIcon platform={platform} />
          </a>
        </li>
      ))}
    </ul>
  );
}
