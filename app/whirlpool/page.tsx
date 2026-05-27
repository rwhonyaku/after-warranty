import Link from "next/link";

export default function WhirlpoolHub() {
  const regions = [
    { id: "usa", name: "United States" },
    { id: "uk", name: "United Kingdom" },
    { id: "canada", name: "Canada" },
    { id: "australia", name: "Australia" },
  ];

  const sections = [
    { slug: "warranty-expired", label: "Warranty Expired: What's Next?" },
    { slug: "common-problems", label: "Common Failure Patterns" },
    { slug: "repair-options", label: "Service & Repair Pathways" },
    { slug: "cost-ranges", label: "Estimated Cost Bands" },
    { slug: "replace-vs-repair", label: "Repair vs. Replace Guidelines" },
  ];

  return (
    <div className="brand-hub">
      <h2>Whirlpool Out-of-Warranty Reference</h2>
      <p>Select your region to view specific post-warranty pathways and data.</p>
      
      <div className="region-grid">
        {regions.map((region) => (
          <div key={region.id} className="region-card">
            <h3>{region.name}</h3>
            <ul>
              {sections.map((section) => (
                <li key={section.slug}>
                  <Link href={`/whirlpool/${section.slug}/${region.id}`}>
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