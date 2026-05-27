import Link from "next/link";
import { AdSlot } from "@/components/AdSlot";

const brandCoverage = [
  {
    name: "Dyson",
    href: "/dyson",
    summary:
      "Warranty end points, repair options, cost ranges, and repair-versus-replacement context.",
  },
  {
    name: "Miele",
    href: "/miele",
    summary: "Service pathways and cost context for premium appliance ownership.",
  },
  {
    name: "Samsung",
    href: "/samsung",
    summary: "Support pathways, common issues, and post-warranty decision context.",
  },
  {
    name: "LG",
    href: "/lg",
    summary: "Repair tradeoffs, issue framing, and support context after coverage ends.",
  },
  {
    name: "Bosch",
    href: "/bosch",
    summary: "Repair logistics and common ownership questions after warranty expiration.",
  },
  {
    name: "GE Appliances",
    href: "/ge-appliances",
    summary: "Support pathways, repair costs, and replace-versus-repair context for major household appliances.",
  },
  {
    name: "Haier",
    href: "/haier",
    summary: "Post-warranty repair value, service-path questions, and cost pressure after coverage ends.",
  },
  {
    name: "Hotpoint",
    href: "/hotpoint",
    summary: "Routine repair versus bigger service-bill context for high-volume home appliances.",
  },
  {
    name: "KitchenAid",
    href: "/kitchenaid",
    summary: "Repair cost, service handling, and replace-versus-repair context for KitchenAid ownership after warranty.",
  },
  {
    name: "Maytag",
    href: "/maytag",
    summary: "Repair durability questions, service-path tradeoffs, and broader cost context after coverage ends.",
  },
  {
    name: "Whirlpool",
    href: "/whirlpool",
    summary: "High-volume service and replacement decisions for major appliances.",
  },
  {
    name: "Shark",
    href: "/shark",
    summary: "Parts, battery, and repair-versus-replacement context for post-warranty Shark ownership.",
  },
];

export const metadata = {
  title: "After-Warranty.com | Independent out-of-warranty consumer reference",
  description:
    "Independent guidance on repair options, cost ranges, and brand-specific support pathways after warranty expiration.",
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  return (
    <>
      <section className="page-hero">
        <div className="eyebrow">After-warranty guidance</div>
        <h1>Help for the questions that start after coverage ends.</h1>
        <p className="lede">
          After-Warranty.com explains what usually matters once a manufacturer
          warranty expires: what support options still exist, what repair costs
          can look like, and when replacement may make more sense than repair.
        </p>

        <div className="hero-actions">
          <Link href="/dyson" className="button-link">
            Start with Dyson
          </Link>
          <Link href="/how-this-site-works" className="button-link--secondary">
            How this site works
          </Link>
        </div>
      </section>

      <section className="grid-3">
        <article className="surface-card">
          <h3>Understand your options</h3>
          <p>
            See the difference between official support, independent repair, and
            replacement decisions without digging through policy language first.
          </p>
        </article>

        <article className="surface-card">
          <h3>Get cost context</h3>
          <p>
            Review realistic cost ranges and the factors that tend to change the
            economics of a repair.
          </p>
        </article>

        <article className="surface-card">
          <h3>Move quickly</h3>
          <p>
            Use brand hubs and topic pages built around common post-purchase
            questions, not generic marketing content.
          </p>
        </article>
      </section>

      <section className="section-stack">
        <div className="section-heading">
          <div className="eyebrow">Current brand coverage</div>
          <h2>Browse by brand</h2>
          <p>
            Each section is organized around the questions people usually have
            after warranty coverage ends.
          </p>
        </div>

        <div className="brand-grid">
          {brandCoverage.map((brand) => (
            <article key={brand.name} className="brand-card">
              <div className="brand-card__top">
                <div className="brand-card__title">{brand.name}</div>
                <p>{brand.summary}</p>
              </div>
              <div className="brand-card__links">
                <Link href={brand.href}>Open {brand.name}</Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="grid-2">
        <article className="info-section">
          <h3>What you will find here</h3>
          <ul>
            <li>Warranty and support context after coverage expires.</li>
            <li>Repair options and service-path comparisons.</li>
            <li>Cost ranges and replace-versus-repair guidance.</li>
          </ul>
        </article>

        <article className="info-section">
          <h3>What you will not find here</h3>
          <ul>
            <li>Repair instructions or diagnostics.</li>
            <li>Binding price quotes or service promises.</li>
            <li>Manufacturer affiliation or product recommendations.</li>
          </ul>
        </article>
      </section>

      <section className="meta-note">
        <strong>Looking for the live section right now?</strong>
        <p>
          Go straight to <Link href="/dyson">Dyson</Link>, or read{" "}
          <Link href="/how-this-site-works">how this site works</Link> for more
          on scope, sourcing, and limitations.
        </p>
      </section>

      <AdSlot />
    </>
  );
}
