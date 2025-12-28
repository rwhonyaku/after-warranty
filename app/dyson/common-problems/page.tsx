import { DysonPage } from "@/components/DysonPage";
import { Sources } from "@/components/Sources";


export const metadata = {
  title: "Dyson common problem categories | After-Warranty.com",
  description:
    "Neutral categories for common Dyson out-of-warranty issues. Classification only, no fixes. Not affiliated with Dyson.",
  alternates: {
    canonical: "/dyson/common-problems",
  },
};


export default function CommonProblemsPage() {
  return (
    <DysonPage
      title="Common Problem Categories"
      intro="These categories help users classify symptoms into typical failure areas. This page does not provide repair instructions."
    >
      <table>
        <thead>
          <tr>
            <th>Category</th>
            <th>Typical symptom examples</th>
            <th>Typical next classification</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Power</td>
            <td>Does not turn on; intermittent shutdown</td>
            <td>Power delivery / control</td>
          </tr>
          <tr>
            <td>Battery (cordless)</td>
            <td>Short runtime; will not charge</td>
            <td>Battery pack / charger</td>
          </tr>
          <tr>
            <td>Airflow / suction</td>
            <td>Reduced pickup; unusual pitch</td>
            <td>Blockage / seals / motor airflow path</td>
          </tr>
          <tr>
            <td>Brush / head unit</td>
            <td>Brush not spinning; head stops</td>
            <td>Head motor / drive / sensors</td>
          </tr>
          <tr>
            <td>Filtration / odor</td>
            <td>Persistent odor; visible dust bypass</td>
            <td>Filter / seals / bin assembly</td>
          </tr>
        </tbody>
      </table>

      <h3>Model-family context (neutral)</h3>
      <p className="lede">
        Model families have different typical failure patterns and parts availability characteristics.
        This table stays at the family level and does not list individual SKUs.
      </p>

      <table>
        <thead>
          <tr>
            <th>Product family (neutral)</th>
            <th>Typical use context</th>
            <th>Common failure categories seen out of warranty</th>
            <th>Parts availability pattern (typical)</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Cordless stick vacuums</td>
            <td>Frequent short sessions; battery-dependent</td>
            <td>Battery / charging; trigger / control; airflow path; head unit / brush</td>
            <td>Consumables often available; major assemblies vary by generation</td>
            <td>Symptoms can overlap (power vs battery vs control).</td>
          </tr>
          <tr>
            <td>Upright / canister vacuums</td>
            <td>Longer sessions; corded power</td>
            <td>Airflow / suction; brush drive; hose / seals; motor wear</td>
            <td>Common parts may remain available; some assemblies discontinue over time</td>
            <td>Weight and mechanical wear can accumulate in moving parts.</td>
          </tr>
          <tr>
            <td>Robot vacuums</td>
            <td>Daily automated runs; sensors + navigation</td>
            <td>Battery; drive wheels; sensors; charging dock; software-related service pathways</td>
            <td>Accessory parts often available; core electronics may be limited</td>
            <td>Service pathways differ from traditional vacuums.</td>
          </tr>
          <tr>
            <td>Air purifiers / fans</td>
            <td>Continuous or long daily runtime</td>
            <td>Motor / bearing noise; controls; sensor behavior; power</td>
            <td>Filters commonly available; electronics availability varies by model age</td>
            <td>Filter replacement is a separate consumable track.</td>
          </tr>
          <tr>
            <td>Hair care devices</td>
            <td>Heat + airflow; travel/storage handling</td>
            <td>Power; heating elements; controls; cord/connector wear</td>
            <td>Some accessories available; internal component service varies</td>
            <td>Heat exposure can change long-term failure patterns.</td>
          </tr>
        </tbody>
      </table>


      <h3>Notes</h3>
      <ul>
        <li>Symptoms can overlap categories.</li>
        <li>Model families differ in parts availability and service patterns.</li>
      </ul>

      <Sources
        items={[
          { label: "Dyson Support (official)", href: "https://www.dyson.com/support" },
          { label: "Contact Dyson Support (official)", href: "https://www.dyson.com/support/contact-us" },
        ]}
      />
    </DysonPage>
  );
}
