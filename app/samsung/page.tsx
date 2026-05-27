import Link from "next/link";
import { ManufacturerPage } from "../../components/ManufacturerPage";
import { Sources } from "../../components/Sources";

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
];

export default function SamsungHubPage() {
  return (
    <ManufacturerPage
      title="Samsung post-warranty reference"
      intro="Independent guidance for Samsung post-warranty questions, including support pathways, issue categories, repair costs, and repair-versus-replacement decisions."
      region="Global"
      manufacturer="Samsung"
    >
      <section className="section-stack">
        <div className="section-heading">
          <div className="eyebrow">Regional entry points</div>
          <h2>Choose a region, then jump to the question you need answered.</h2>
          <p>
            Regional pages are organized around the highest-intent ownership
            questions after warranty coverage ends.
          </p>
        </div>

        <div className="region-grid">
          {regions.map((region) => (
            <article key={region.code} className="region-card">
              <div className="region-card__top">
                <span className="region-card__label">{region.name}</span>
                <div className="region-card__title">
                  Samsung in {region.name}
                </div>
                <p>Open the most relevant post-warranty topic for this region.</p>
              </div>

              <div className="topic-list">
                {subPages.map((page) => (
                  <Link
                    key={`${region.code}-${page.slug}`}
                    href={`/samsung/${page.slug}/${region.code}`}
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
        <strong>Samsung section note.</strong>
        <p>
          This section is meant to clarify post-warranty decisions without
          sounding like an official support document or overclaiming what users
          should do.
        </p>
      </section>

      <Sources
        items={[
          { label: "Samsung Support", href: "https://www.samsung.com/support" },
          { label: "Samsung Warranty Information", href: "https://www.samsung.com/support/warranty/" },
        ]}
      />
    </ManufacturerPage>
  );
}
