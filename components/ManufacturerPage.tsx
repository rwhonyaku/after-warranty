'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

interface ManufacturerPageProps {
  children: ReactNode;
  title: string;
  intro: string;
  region: string;
  manufacturer: string;
  extraNavItems?: Array<{
    name: string;
    slug: string;
  }>;
}

export function ManufacturerPage({
  children,
  title,
  intro,
  region,
  manufacturer,
  extraNavItems = [],
}: ManufacturerPageProps) {
  const pathname = usePathname();
  const brandSlug = pathname.split("/")[1] ?? manufacturer.toLowerCase();
  const isHub = region.toLowerCase() === "global";
  const currentSection = pathname.split("/")[2] ?? "";

  const navItems = [
    { name: "Warranty", slug: "warranty-expired" },
    { name: "Problems", slug: "common-problems" },
    { name: "Repair", slug: "repair-options" },
    { name: "Costs", slug: "cost-ranges" },
    { name: "Replace", slug: "replace-vs-repair" },
    ...extraNavItems,
  ];

  return (
    <article className="brand-shell">
      <header className="page-hero">
        <div className="hero-kicker">
          <span>{manufacturer} reference</span>
          <span className="hero-kicker__dot" />
          <span>{isHub ? "Brand hub" : `Region: ${region.toUpperCase()}`}</span>
        </div>

        <h1>{title}</h1>
        <p className="lede">{intro}</p>

        <div className="summary-strip">
          <div>
            <strong>Independent</strong>
            <span>Built to explain post-warranty questions without copying manufacturer language.</span>
          </div>
          <div>
            <strong>Source-aware</strong>
            <span>Uses official support material as the factual base, then adds plain-English context.</span>
          </div>
          <div>
            <strong>Decision-oriented</strong>
            <span>Focuses on the distinctions that change cost, support path, or replacement pressure.</span>
          </div>
        </div>

        {!isHub && (
          <nav className="subnav" aria-label={`${manufacturer} page sections`}>
            {navItems.map((item) => (
              <Link
                key={item.slug}
                href={`/${brandSlug}/${item.slug}/${region}`}
                className={currentSection === item.slug ? "active" : undefined}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        )}
      </header>

      <div className="brand-shell__content">{children}</div>
    </article>
  );
}
