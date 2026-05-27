import Link from "next/link";
import { ManufacturerPage } from "../../components/ManufacturerPage";
import { Sources } from "../../components/Sources";

export const metadata = {
  title: "Shark | After-Warranty.com",
  description:
    "Independent Shark help after warranty expiration, including repair options, cost ranges, support pathways, parts questions, and replace-versus-repair context.",
  alternates: {
    canonical: "/shark",
  },
};

const regions = [
  { name: "USA", code: "usa" },
  { name: "UK", code: "uk" },
  { name: "Canada", code: "canada" },
  { name: "Australia", code: "australia" },
];

const subPages = [
  { name: "Warranty status and terms", slug: "warranty-expired" },
  { name: "Common problems", slug: "common-problems" },
  { name: "Repair options", slug: "repair-options" },
  { name: "Cost ranges", slug: "cost-ranges" },
  { name: "Replace vs. repair", slug: "replace-vs-repair" },
  { name: "Parts and support", slug: "parts-support" },
];

export default function SharkHubPage() {
  return (
    <ManufacturerPage
      title="Shark post-warranty reference"
      intro="Independent reference for the questions Shark owners usually have after coverage ends: what changes once the warranty is over, when a repair still looks manageable, and when the issue has moved beyond a simple part replacement."
      region="Global"
      manufacturer="Shark"
    >
      <section className="section-stack">
        <div className="section-heading">
          <div className="eyebrow">How to use this section</div>
          <h2>Most Shark post-warranty questions fall into a few clear buckets.</h2>
          <p>
            Shark owners usually end up sorting out the same decisions: whether
            the product is truly out of coverage, whether the issue points to a
            simple replacement part or a bigger repair, what support path still
            exists, and when the product no longer looks worth more spend.
          </p>
        </div>

        <div className="grid-3">
          <article className="surface-card">
            <h3>Warranty over and not sure what changes?</h3>
            <p>
              Start with the warranty page if the main question is whether this
              is still a support issue or has already become a paid repair.
            </p>
          </article>

          <article className="surface-card">
            <h3>Trying to figure out repair cost?</h3>
            <p>
              Read cost ranges with repair options. A small part question and a
              larger assembly problem do not stay in the same cost band.
            </p>
          </article>

          <article className="surface-card">
            <h3>Not sure whether to replace it?</h3>
            <p>
              Use replace-vs-repair after narrowing down the fault. That is
              usually where the real decision starts.
            </p>
          </article>
        </div>
      </section>

      <section className="grid-2">
        <article className="info-section">
          <h3>Start here if the main problem is coverage, cost, or parts access</h3>
          <div className="topic-list">
            <Link href="/shark/warranty-expired/usa">
              Shark warranty expired: what changes now
            </Link>
            <Link href="/shark/cost-ranges/usa">
              Shark repair cost ranges
            </Link>
            <Link href="/shark/repair-options/usa">
              Shark repair options and service paths
            </Link>
            <Link href="/shark/parts-support/usa">
              Shark parts and support options
            </Link>
          </div>
        </article>

        <article className="info-section">
          <h3>Use these when the first answer still leaves a harder call</h3>
          <div className="topic-list">
            <Link href="/shark/common-problems/usa">
              Common Shark problems after warranty
            </Link>
            <Link href="/shark/replace-vs-repair/usa">
              Shark replace vs. repair
            </Link>
            <Link href="/shark/parts-support/usa">
              Shark spare parts and support help
            </Link>
          </div>
        </article>
      </section>

      <section className="section-stack">
        <div className="section-heading">
          <div className="eyebrow">Regional entry points</div>
          <h2>Live Shark coverage by region</h2>
          <p>
            Choose the region most relevant to your support and service
            context. Regional pages should only differ when the support answer
            actually changes.
          </p>
        </div>

        <div className="region-grid">
          {regions.map((region) => (
            <article key={region.code} className="region-card">
              <div className="region-card__top">
                <span className="region-card__label">{region.name}</span>
                <div className="region-card__title">Shark in {region.name}</div>
                <p>
                  Open the post-warranty page that matches the decision you are
                  trying to make.
                </p>
              </div>

              <div className="topic-list">
                {subPages.map((page) => (
                  <Link
                    key={`${region.code}-${page.slug}`}
                    href={`/shark/${page.slug}/${region.code}`}
                  >
                    {page.name}
                  </Link>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="editorial-note">
        <strong>What makes Shark different.</strong>
        <p>
          Shark questions often turn on model matching, batteries,
          floorheads, filters, and whether the issue still belongs in a
          replaceable-parts conversation or has already become a bigger repair
          decision.
        </p>
      </section>

      <Sources
        items={[
          { label: "Shark Support", href: "https://support.sharkclean.com/hc/en-us" },
          { label: "Shark Warranty Center", href: "https://support.sharkclean.com/hc/en-us/sections/4402873140370-Warranty" },
          { label: "Shark Parts and Accessories", href: "https://www.sharkclean.com/parts-and-accessories/" },
        ]}
      />
    </ManufacturerPage>
  );
}
