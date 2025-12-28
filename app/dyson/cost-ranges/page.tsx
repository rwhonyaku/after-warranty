import { DysonPage } from "@/components/DysonPage";
import { Sources } from "@/components/Sources";


export const metadata = {
  title: "Dyson cost ranges (illustrative) | After-Warranty.com",
  description:
    "Illustrative cost bands for common out-of-warranty Dyson repair categories. Ranges only, no pricing promises.",
  alternates: {
    canonical: "/dyson/cost-ranges",
  },
};




export default function CostRangesPage() {
  return (
    <DysonPage
      title="Typical Cost Ranges"
      intro="Ranges are illustrative bands commonly seen for out-of-warranty situations. They are not quotes or guarantees."
    >
      <table>
        <thead>
          <tr>
            <th>Category</th>
            <th>Typical band (USD)</th>
            <th>What drives the band</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Consumables / small parts</td>
            <td>$10–$80</td>
            <td>Filters, seals, small assemblies</td>
          </tr>
          <tr>
            <td>Battery / charger (cordless)</td>
            <td>$60–$200</td>
            <td>Model family, OEM vs compatible parts</td>
          </tr>
          <tr>
            <td>Head unit / brush components</td>
            <td>$80–$250</td>
            <td>Motorized head type, compatibility, supply</td>
          </tr>
          <tr>
            <td>Major assemblies</td>
            <td>$150–$400+</td>
            <td>Motor assemblies, control components, labor</td>
          </tr>
          <tr>
            <td>Replacement decision zone</td>
            <td>Varies</td>
            <td>Relative to remaining expected life and new unit price</td>
          </tr>
        </tbody>
      </table>

      <h3>How cost bands typically interact with product families</h3>
      <p className="lede">
        This table connects common out-of-warranty cost bands to product families at a high level.
        It is illustrative only and not a quote or guarantee.
      </p>

      <table>
        <thead>
          <tr>
            <th>Product family (neutral)</th>
            <th>Common cost drivers (typical)</th>
            <th>Where costs often concentrate</th>
            <th>Common constraints that affect totals</th>
            <th>How to use this table</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Cordless stick vacuums</td>
            <td>Battery pack; head unit assemblies; control components</td>
            <td>Mid-band parts + service labor (varies)</td>
            <td>Parts compatibility by generation; stock availability</td>
            <td>Map your symptom to the failure category table, then compare band drivers.</td>
          </tr>
          <tr>
            <td>Upright / canister vacuums</td>
            <td>Brush drive components; seals/hose assemblies; motor wear</td>
            <td>Low-to-mid band for parts; higher if major assemblies</td>
            <td>Wear in moving parts; age-related discontinuation</td>
            <td>Use as a “directional” guide only; confirm locally.</td>
          </tr>
          <tr>
            <td>Robot vacuums</td>
            <td>Battery; drive modules; sensors; dock components</td>
            <td>Parts plus diagnostics; totals vary widely by pathway</td>
            <td>Service availability; electronics vs replace-path decisions</td>
            <td>Expect variability; compare pathways rather than assume a single band.</td>
          </tr>
          <tr>
            <td>Air purifiers / fans</td>
            <td>Filter track (consumable); motor noise; control/sensor components</td>
            <td>Consumables are separate; repair bands depend on electronics</td>
            <td>Sensor/control availability; ongoing filter costs are not “repair” costs</td>
            <td>Separate consumable cost from repair cost in your comparison.</td>
          </tr>
          <tr>
            <td>Hair care devices</td>
            <td>Heating/airflow components; cord/connector issues; controls</td>
            <td>Often concentrated in internal assemblies when serviceable</td>
            <td>Service pathway availability; handling damage vs component wear</td>
            <td>Use the trade-off framework page for parallel-path comparison.</td>
          </tr>
        </tbody>
      </table>

      <Sources
        items={[
          { label: "Dyson spare parts (official)", href: "https://www.dyson.com/spare-parts" },
          { label: "Book a repair or service (official)", href: "https://www.dyson.com/support/repairs-and-servicing-information" },
          { label: "FTC: Extended warranties & service contracts (recognized authority)", href: "https://consumer.ftc.gov/node/77440" },
        ]}
      />

    </DysonPage>
  );
}
