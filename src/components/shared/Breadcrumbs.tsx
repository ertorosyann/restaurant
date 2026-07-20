import Link from "next/link";
import { siteUrl } from "@/lib/seo";
import { getSiteContent } from "@/content/site";
import { localeHref, type Locale } from "@/i18n/config";

export interface BreadcrumbItem {
  name: string;
  /** Route path beginning with "/" — omit for the current page. */
  href?: string;
}

interface BreadcrumbsProps {
  locale: Locale;
  items: BreadcrumbItem[];
  className?: string;
}

/**
 * Accessible breadcrumb trail with matching schema.org BreadcrumbList
 * structured data. The localized "Home" crumb is added automatically.
 */
export function Breadcrumbs({ locale, items, className = "" }: BreadcrumbsProps) {
  const content = getSiteContent(locale);
  const allItems: BreadcrumbItem[] = [
    { name: content.common.breadcrumbHome, href: localeHref(locale) },
    ...items,
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: allItems.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      ...(item.href ? { item: `${siteUrl}${item.href}` } : {}),
    })),
  };

  return (
    <nav aria-label="Breadcrumb" className={className}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ol className="flex flex-wrap items-center gap-2 text-sm text-charcoal-500">
        {allItems.map((item, index) => {
          const isLast = index === allItems.length - 1;
          return (
            <li key={item.name} className="flex items-center gap-2">
              {index > 0 && (
                <span aria-hidden="true" className="text-copper-500">
                  /
                </span>
              )}
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className="transition-colors hover:text-charcoal-800"
                >
                  {item.name}
                </Link>
              ) : (
                <span aria-current="page" className="text-charcoal-800">
                  {item.name}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
