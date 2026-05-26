"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { label: "Home", href: "/" },
  { label: "The Plan", href: "/formats" },
  { label: "Simon", href: "/simon-sinek" },
  { label: "Mel", href: "/mel-robbins" },
  { label: "Peter", href: "/peter-crone" },
  { label: "Brene", href: "/brene-brown" },
];

export function Nav() {
  const path = usePathname();

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-border">
      <div className="max-w-5xl mx-auto px-6 h-14 flex items-center gap-1">
        <Link
          href="/"
          className="font-semibold text-sm mr-6 text-foreground hover:text-primary transition-colors"
        >
          Coach Study
        </Link>
        {links.map((l) => {
          const active = l.href === "/" ? path === "/" : path.startsWith(l.href);
          return (
            <Link
              key={l.href}
              href={l.href}
              className={`text-[13px] px-3 py-1.5 rounded-full transition-all ${
                active
                  ? "bg-primary text-primary-foreground font-medium"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary"
              }`}
            >
              {l.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
