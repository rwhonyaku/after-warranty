import Link from "next/link";
import { ManufacturerPage } from "../../components/ManufacturerPage";

export default function GEHub() {
  const regions = [
    { id: "usa", name: "United States" },
    { id: "uk", name: "United Kingdom" },
    { id: "canada", name: "Canada" },
    { id: "australia", name: "Australia" },
  ];

  const sections = [
    { slug: "warranty-expired", label: "Warranty status and terms" },
    { slug: "common-problems", label: "Common problems" },
    { slug: "repair-options", label: "Repair options" },
    { slug: "cost-ranges", label: "Cost ranges" },
    { slug: "replace-vs-repair", label: "Replace vs. repair" },
  ];

  return (
    <ManufacturerPage
      title="GE Appliances post-warranty reference"
      intro="Independent guidance for GE, GE Profile, and Cafe post-warranty questions, including support pathways, repair costs, and replace-versus-repair decisions."
      region="Global"
      manufacturer="GE Appliances"
    >
      <section className="section-stack">
        <div className="section-heading">
          <div className="eyebrow">Regional entry points</div>
          <h2>Choose a region, then open the topic you need.</h2>
          <p>Pages are organized around the main questions users tend to have after coverage ends.</p>
        </div>

        <div className="region-grid">
          {regions.map((region) => (
            <article key={region.id} className="region-card">
              <div className="region-card__top">
                <span className="region-card__label">{region.name}</span>
                <div className="region-card__title">GE Appliances in {region.name}</div>
                <p>Open the most relevant post-warranty topic for this region.</p>
              </div>

              <div className="topic-list">
                {sections.map((section) => (
                  <Link key={section.slug} href={`/ge-appliances/${section.slug}/${region.id}`}>
                    {section.label}
                  </Link>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </ManufacturerPage>
  );
}
