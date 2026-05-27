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

export default function LgHubPage() {
  return (
    <ManufacturerPage
      title="LG post-warranty reference"
      intro="Independent guidance for LG post-warranty questions, including common issues, repair options, cost ranges, and replace-versus-repair decisions."
      region="Global"
      manufacturer="LG"
    >
      <section className="section-stack">
        <div className="section-heading">
          <div className="eyebrow">Regional entry points</div>
          <h2>Choose a region, then open the question you need answered.</h2>
          <p>
            Each page is organized around the ownership questions users usually
            have once standard coverage has ended.
          </p>
        </div>

        <div className="region-grid">
          {regions.map((region) => (
            <article key={region.code} className="region-card">
              <div className="region-card__top">
                <span className="region-card__label">{region.name}</span>
                <div className="region-card__title">LG in {region.name}</div>
                <p>Open the most relevant post-warranty topic for this region.</p>
              </div>

              <div className="topic-list">
                {subPages.map((page) => (
                  <Link
                    key={`${region.code}-${page.slug}`}
                    href={`/lg/${page.slug}/${region.code}`}
                  >
                    {page.name}
                  </Link>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <Sources
        items={[
          { label: "LG Repair Service", href: "https://www.lg.com/us/support/repair-service" },
          { label: "LG Support", href: "https://www.lg.com" },
        ]}
      />
    </ManufacturerPage>
  );
}
