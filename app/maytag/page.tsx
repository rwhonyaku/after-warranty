import Link from "next/link";

export default function MaytagHub() {
  const regions = [
    { id: "usa", name: "United States" },
    { id: "uk", name: "United Kingdom" },
    { id: "canada", name: "Canada" },
    { id: "australia", name: "Australia" },
  ];

  const sections = [
    { slug: "warranty-expired", label: "10-Year Limited Parts Status" },
    { slug: "common-problems", label: "Mechanical & Wear Patterns" },
    { slug: "repair-options", label: "W Service & DIY Pathways" },
    { slug: "cost-ranges", label: "Estimated Service Cost Bands" },
    { slug: "replace-vs-repair", label: "Longevity vs. Replacement" },
  ];

  return (
    <div className="brand-hub">
      <h2>Maytag Out-of-Warranty Reference</h2>
      <p>Technical summaries for Maytag appliances outside the initial labor period.</p>
      
      <div className="region-grid">
        {regions.map((region) => (
          <div key={region.id} className="region-card">
            <h3>{region.name}</h3>
            <ul>
              {sections.map((section) => (
                <li key={section.slug}>
                  <Link href={`/maytag/${section.slug}/${region.id}`}>
                    {section.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}