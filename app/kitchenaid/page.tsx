import Link from "next/link";

export default function KitchenAidHub() {
  const regions = [
    { id: "usa", name: "United States" },
    { id: "uk", name: "United Kingdom" },
    { id: "canada", name: "Canada" },
    { id: "australia", name: "Australia" },
  ];

  const sections = [
    { slug: "warranty-expired", label: "Warranty Expired: Status & Options" },
    { slug: "common-problems", label: "Premium Component Patterns" },
    { slug: "repair-options", label: "Certified Service Pathways" },
    { slug: "cost-ranges", label: "Estimated Premium Cost Bands" },
    { slug: "replace-vs-repair", label: "Investment vs. Replacement Guide" },
  ];

  return (
    <div className="brand-hub">
      <h2>KitchenAid Out-of-Warranty Reference</h2>
      <p>Select your region for technical reference on KitchenAid post-warranty logistics.</p>
      
      <div className="region-grid">
        {regions.map((region) => (
          <div key={region.id} className="region-card">
            <h3>{region.name}</h3>
            <ul>
              {sections.map((section) => (
                <li key={section.slug}>
                  <Link href={`/kitchenaid/${section.slug}/${region.id}`}>
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