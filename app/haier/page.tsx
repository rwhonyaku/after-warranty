import Link from "next/link";
import { ManufacturerPage } from "../../components/ManufacturerPage";
import { Sources } from "../../components/Sources";

const regions = [
  { name: "United States", code: "usa" },
  { name: "United Kingdom", code: "uk" },
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

export default function HaierHubPage() {
  return (
    <ManufacturerPage
      title="Haier post-warranty reference"
      intro="Independent guidance for common post-warranty questions around Haier appliances, including support pathways, repair cost context, and repair-versus-replacement tradeoffs."
      region="Global"
      manufacturer="Haier"
    >
      <section className="section-stack">
        <div className="section-heading">
          <div className="eyebrow">Regional entry points</div>
          <h2>Choose the region that matches your support context.</h2>
          <p>
            Use the region most relevant to your warranty terms, service access,
            and pricing assumptions.
          </p>
        </div>

        <div className="region-grid">
          {regions.map((region) => (
            <article key={region.code} className="region-card">
              <div className="region-card__top">
                <span className="region-card__label">{region.name}</span>
                <div className="region-card__title">Haier in {region.name}</div>
                <p>Open the most relevant post-warranty topic for this region.</p>
              </div>

              <div className="topic-list">
                {subPages.map((page) => (
                  <Link
                    key={`${region.code}-${page.slug}`}
                    href={`/haier/${page.slug}/${region.code}`}
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
          { label: "Haier Support", href: "https://www.haierappliances.com/support" },
          { label: "Haier Owner Support", href: "https://www.haier.com/global/service-support/" },
        ]}
      />
    </ManufacturerPage>
  );
}
