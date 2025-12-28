import { AdSlot } from "@/components/AdSlot";

export const metadata = {
  title: "After-Warranty.com | Out-of-warranty options (reference)",
  description:
    "Independent, neutral reference on typical out-of-warranty options and trade-offs. Not affiliated with manufacturers.",
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  return (
    <>
      <h2>Out-of-Warranty Reference</h2>

      <p>
        This site explains what typically happens after a manufacturer warranty
        expires, using neutral, structured summaries.
      </p>

      <p>
        It covers common options, trade-offs, and patterns — not advice or
        recommendations.
      </p>

      <h3>Coverage</h3>
      <table>
        <thead>
          <tr>
            <th>Brand</th>
            <th>Scope</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Dyson</td>
            <td>Out-of-warranty options and trade-offs (reference)</td>
            <td>
              <a href="/dyson">Available</a>
            </td>
          </tr>
        </tbody>
      </table>

      <h3>What this site does</h3>
      <table>
        <thead>
          <tr>
            <th>Included</th>
            <th>Not included</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Typical options and pathways</td>
            <td>Recommendations or “best” choices</td>
          </tr>
          <tr>
            <td>Failure categories (no fixes)</td>
            <td>DIY repair instructions</td>
          </tr>
          <tr>
            <td>Cost bands (ranges only)</td>
            <td>Quotes or pricing promises</td>
          </tr>
          <tr>
            <td>Official policy summaries</td>
            <td>Customer support or escalation</td>
          </tr>
        </tbody>
      </table>

      <p>
        Read <a href="/how-this-site-works">how this site works</a> and the{" "}
        <a href="/disclaimer">disclaimer</a>.
      </p>


      <AdSlot />
    </>
  );
}
