import { siteContent } from "@/content/site";

export interface NavLink {
  href: string;
  label: string;
}

export const navLinks: NavLink[] = [
  { href: "/", label: siteContent.nav.home },
  { href: "/about", label: siteContent.nav.about },
  { href: "/menu", label: siteContent.nav.menu },
  { href: "/contact", label: siteContent.nav.contact },
];
