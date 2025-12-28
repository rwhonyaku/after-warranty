import { DysonPage } from "@/components/DysonPage";
import { Sources } from "@/components/Sources";


export const metadata = {
  title: "Dyson repair vs replacement | After-Warranty.com",
  description:
    "A non-directive framework for comparing repair and replacement trade-offs for out-of-warranty Dyson products.",
  alternates: {
    canonical: "/dyson/replace-vs-repair",
  },
};


export default function ReplaceVsRepairPage() {
  return (
    <DysonPage
      title="Repair vs Replacement"
      intro="This framework summarizes common trade-offs users compare. It does not rank choices or recommend outcomes."
    >
      <table>
        <thead>
          <tr>
            <th>Consideration</th>
            <th>Repair path (typical trade-off)</th>
            <th>Replacement path (typical trade-off)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Up-front cost</td>
            <td>Often lower to moderate, depending on failure category</td>
            <td>Often higher, tied to current retail pricing</td>
          </tr>
          <tr>
            <td>Time to restore function</td>
            <td>May depend on parts and service availability</td>
            <td>Often immediate after purchase</td>
          </tr>
          <tr>
            <td>Uncertainty</td>
            <td>Outcomes vary by root cause and parts quality</td>
            <td>Lower uncertainty for initial period</td>
          </tr>
          <tr>
            <td>Warranty coverage</td>
            <td>May be limited or provider-specific</td>
            <td>New warranty period typically starts</td>
          </tr>
        </tbody>
      </table>

      <h3>Common comparison inputs</h3>
      <table>
        <thead>
          <tr>
            <th>Input</th>
            <th>Why it matters</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Product age and usage intensity</td>
            <td>Correlates with expected remaining life</td>
          </tr>
          <tr>
            <td>Failure category</td>
            <td>Maps to typical cost band and recurrence risk</td>
          </tr>
          <tr>
            <td>Parts availability</td>
            <td>Constrains timelines and feasible repair paths</td>
          </tr>
        </tbody>
      </table>

      <Sources
        items={[
          { label: "Dyson Support (official)", href: "https://www.dyson.com/support" },
          { label: "FTC: Extended warranties & service contracts (recognized authority)", href: "https://consumer.ftc.gov/node/77440" },
          { label: "FTC: Warranties (recognized authority)", href: "https://consumer.ftc.gov/articles/warranties" },
        ]}
      />

    </DysonPage>
  );
}
