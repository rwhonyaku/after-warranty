import { DysonPage } from "@/components/DysonPage";
import { Sources } from "@/components/Sources";

export const metadata = {
  title: "Dyson after warranty expiration | After-Warranty.com",
  description:
    "What typically changes after Dyson warranty coverage ends: responsibility, service pathways, and constraints. Not affiliated with Dyson.",
    alternates: {
    canonical: "/dyson/warranty-expired",
    },
};

export default function WarrantyExpiredPage() {
  return (
    <DysonPage
      title="What Changes After Warranty Expiration"
      intro="This page summarizes typical changes in responsibility, service pathways, and cost exposure once manufacturer coverage ends."
    >
      <h3>Typical changes</h3>
      <table>
        <thead>
          <tr>
            <th>Area</th>
            <th>What typically changes</th>
            <th>What usually stays the same</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Repair responsibility</td>
            <td>Costs shift to the owner</td>
            <td>Troubleshooting and documentation may remain available</td>
          </tr>
          <tr>
            <td>Service pathways</td>
            <td>Official service may be fee-based</td>
            <td>Independent repair may exist (varies by area)</td>
          </tr>
          <tr>
            <td>Parts availability</td>
            <td>Some parts may be out of stock or discontinued</td>
            <td>Common consumables may still be sold</td>
          </tr>
        </tbody>
      </table>

      <h3>What users typically do next</h3>
      <table>
        <thead>
          <tr>
            <th>Next step</th>
            <th>Purpose</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Identify product and serial details</td>
            <td>Confirm eligibility and parts compatibility</td>
            <td>Model naming can vary by region and generation</td>
          </tr>
          <tr>
            <td>Classify the problem category</td>
            <td>Map symptoms to typical repair pathways</td>
            <td>This site lists categories, not fixes</td>
          </tr>
          <tr>
            <td>Compare service paths</td>
            <td>Understand the differences between official and independent routes</td>
            <td>Costs and timelines vary</td>
          </tr>
        </tbody>
      </table>

      <h3>Dyson warranty snapshot (official, high-level)</h3>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>What Dyson states (summary)</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Standard limited warranty length</td>
            <td>Many Dyson product categories are listed under a 2-year limited warranty.</td>
            <td>Coverage details depend on the specific product and terms page.</td>
          </tr>
          <tr>
            <td>Proof of purchase</td>
            <td>If proof of purchase is unavailable, Dyson states the warranty may start 90 days after the date of manufacture (per Dyson records).</td>
            <td>This affects eligibility timing; confirm for your product.</td>
          </tr>
          <tr>
            <td>Refurbished (Dyson Renewed)</td>
            <td>Dyson Renewed items are listed with either a 6-month or 1-year limited warranty depending on category.</td>
            <td>Confirm category-specific duration on the official terms page.</td>
          </tr>
        </tbody>
      </table>


      <Sources
        items={[
          { label: "Dyson Support (official)", href: "https://www.dyson.com/support" },
          { label: "Dyson Limited Warranty (official)", href: "https://www.dyson.com/inside-dyson/terms/the-dyson-limited-warranty" },
          { label: "FTC: Warranties (recognized authority)", href: "https://consumer.ftc.gov/articles/warranties" },
        ]}
      />

      <p className="lede">Verified against official sources on: 2025-12-27.</p>

    </DysonPage>
  );
}
