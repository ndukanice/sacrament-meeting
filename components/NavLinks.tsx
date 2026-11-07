"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export interface NavLink {
  href: string;
  label: string;
}

interface NavLinksProps {
  links?: NavLink[];
  ariaLabel?: string;
  variant?: "header" | "section";
}

const mainLinks: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/meetings", label: "Meetings" },
  { href: "/meetings/current", label: "Current" },
];

const styles = {
  header: {
    nav: "flex gap-4 text-sm font-medium",
    active: "bg-white text-slate-900 shadow-sm",
    inactive: "text-slate-200 hover:bg-slate-700 hover:text-white",
  },
  section: {
    nav: "flex flex-wrap gap-2 text-sm font-medium",
    active: "bg-slate-900 text-white",
    inactive: "bg-white text-slate-700 hover:bg-slate-200",
  },
};

export function NavLinks({ links = mainLinks, ariaLabel = "Main navigation", variant = "header" }: NavLinksProps) {
  const pathname = usePathname();

  // Highlight only the most specific match, so /meetings/current
  // activates "Current" and not "Meetings" as well.
  const activeHref = links
    .filter(({ href }) => pathname === href || (href !== "/" && pathname.startsWith(`${href}/`)))
    .sort((a, b) => b.href.length - a.href.length)[0]?.href;

  return (
    <nav aria-label={ariaLabel} className={styles[variant].nav}>
      {links.map(({ href, label }) => {
        const isActive = href === activeHref;

        return (
          <Link
            key={href}
            href={href}
            aria-current={isActive ? "page" : undefined}
            className={[
              "rounded-full px-3 py-2 transition",
              isActive ? styles[variant].active : styles[variant].inactive,
            ].join(" ")}
          >
            {label}
          </Link>
        );
      })}
    </nav>
  );
}
