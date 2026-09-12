"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/meetings", label: "Meetings" },
  { href: "/meetings/current", label: "Current" },
];

export function NavLinks() {
  const pathname = usePathname();

  return (
    <nav aria-label="Main navigation" className="flex gap-4 text-sm font-medium">
      {links.map(({ href, label }) => {
        const isActive = pathname === href || (href !== "/" && pathname.startsWith(href));

        return (
          <Link
            key={href}
            href={href}
            className={[
              "rounded-full px-3 py-2 transition",
              isActive
                ? "bg-white text-slate-900 shadow-sm"
                : "text-slate-200 hover:bg-slate-700 hover:text-white",
            ].join(" ")}
          >
            {label}
          </Link>
        );
      })}
    </nav>
  );
}
