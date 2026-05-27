import Link from "next/link";

export default function HotpointHub() {
  const regions = [
    { id: "usa", name: "United States" },
    { id: "uk", name: "United Kingdom" },
  ]; // Hotpoint has limited presence in AUS/CAN compared to UK/USA

  const sections = [
    { slug: "warranty-expired", label: "Essential Coverage Status" },
    { slug: "common-problems", label: "Mechanical Wear Patterns" },
    { slug: "repair-options", label: "Local Service Pathways" },
    { slug: "cost-ranges", label: "Budget-Tier Cost Bands" },
    { slug: "replace-vs-repair", label: "Value-Based Decision Matrix" },
  ];

  return (
    <div className="brand-hub">
      <h2>Hotpoint Out-of-Warranty Reference</h2>
      <p>Data for Hotpoint "Essential" line appliances (managed by GE in US / Whirlpool in UK).</p>
      
      <div className="region-grid">
        {regions.map((region) => (
          <div key={region.id} className="region-card">
            <h3>{region.name}</h3>
            <ul>
              {sections.map((section) => (
                <li key={section.slug}>
                  <Link href={`/hotpoint/${section.slug}/${region.id}`}>
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