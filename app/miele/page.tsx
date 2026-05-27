"use client";

import { ManufacturerPage } from "../../components/ManufacturerPage";
import { Sources } from "../../components/Sources";
import Link from "next/link"; 

export default function MieleHubPage() {
  const regions = [
    { name: "USA", code: "usa" },
    { name: "UK", code: "uk" },
    { name: "Canada", code: "canada" },
    { name: "Australia", code: "australia" },
  ];

  return (
    <ManufacturerPage
      title="Miele — Out-of-Warranty Overview"
      intro="This section summarizes typical options and trade-offs after Miele warranty coverage ends. Please select your region to continue."
      region="usa" // Placeholder region for the hub page
      manufacturer="Miele"
    >
      <h3>Select Your Region</h3>
      <div className="region-selector">
        {regions.map((region) => (
          <Link 
            key={region.code} 
            href={`/miele/warranty-expired/${region.code}`} 
            className="region-button"
          >
            {region.name}
          </Link>
        ))}
      </div>

      <style jsx>{`
        .region-selector {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 15px;
          margin-top: 20px;
          margin-bottom: 30px;
        }
        .region-button {
          padding: 15px;
          text-align: center;
          border: 1px solid #ccc;
          text-decoration: none;
          color: #333;
          font-weight: bold;
          border-radius: 4px;
          transition: background-color 0.2s;
        }
        .region-button:hover {
          background-color: #f0f0f0;
        }
      `}</style>

      <Sources
        items={[
          { label: "Miele Support (official)", href: "https://www.miele.com/en/c/service-support-23.htm" },
          { label: "Miele Warranty Terms (official)", href: "https://www.miele.com" },
        ]}
      />
    </ManufacturerPage>
  );
}