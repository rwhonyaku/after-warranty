import { DysonPage } from "@/components/DysonPage";
import { Sources } from "@/components/Sources";


export const metadata = {
  title: "Dyson repair options | After-Warranty.com",
  description:
    "Official and independent repair pathways for out-of-warranty Dyson products, summarized neutrally. Not affiliated with Dyson.",
  alternates: {
    canonical: "/dyson/repair-options",
  },
};


export default function RepairOptionsPage() {
  return (
    <DysonPage
      title="Repair Options"
      intro="This page compares typical characteristics of official and independent service pathways without recommending one."
    >
      <table>
        <thead>
          <tr>
            <th>Path</th>
            <th>What it typically includes</th>
            <th>Common constraints</th>
            <th>Typical fit</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Official service</td>
            <td>Manufacturer parts and procedures</td>
            <td>Coverage limits; availability varies; fee-based out of warranty</td>
            <td>Users prioritizing OEM process consistency</td>
          </tr>
          <tr>
            <td>Independent repair</td>
            <td>Varies by provider; parts sourcing may vary</td>
            <td>Quality and warranty vary; not available everywhere</td>
            <td>Users comparing timelines, cost bands, and local access</td>
          </tr>
          <tr>
            <td>Self-service parts (where available)</td>
            <td>Purchase parts directly; user installs</td>
            <td>Requires user capability; risk of incompatibility</td>
            <td>Users comfortable with parts matching and handling</td>
          </tr>
        </tbody>
      </table>

      <h3>Official service pathway (what Dyson describes)</h3>
      <table>
        <thead>
          <tr>
            <th>Topic</th>
            <th>What Dyson states (summary)</th>
            <th>Why it matters out of warranty</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Eligibility for under-warranty repair</td>
            <td>Dyson describes repairs under warranty terms when eligibility is established (including proof of purchase requirements).</td>
            <td>If warranty is expired (or eligibility cannot be established), service is typically fee-based.</td>
          </tr>
          <tr>
            <td>No proof of purchase</td>
            <td>Dyson states warranty may start 90 days after date of manufacture if proof of purchase is not available.</td>
            <td>This can shift whether a case is treated as in-warranty vs out-of-warranty.</td>
          </tr>
          <tr>
            <td>Parts/tools warranty (where applicable)</td>
            <td>Dyson terms indicate parts/tools may have a 1-year limited warranty.</td>
            <td>This can matter when comparing repair pathways that involve parts purchases.</td>
          </tr>
        </tbody>
      </table>

      <Sources
        items={[
          { label: "Book a repair or service (official)", href: "https://www.dyson.com/support/repairs-and-servicing-information" },
          { label: "Dyson Support (official)", href: "https://www.dyson.com/support" },
          { label: "FTC: Warranties (recognized authority)", href: "https://consumer.ftc.gov/articles/warranties" },
        ]}
      />

      <p className="lede">Verified against official sources on: 2025-12-27.</p>


    </DysonPage>
  );
}
