
export const metadata = {
  title: "How this site works | After-Warranty.com",
  description:
    "How to read this site’s tables and ranges: static reference, no predictions, no recommendations, and source discipline.",
};

export default function HowThisSiteWorksPage() {
  return (
    <>
      <h2>How This Site Works</h2>

      <p>
        Pages use tables and ranges to summarize typical patterns seen after
        warranties expire.
      </p>

      <p>
        Ranges reflect common bands, not guarantees. Individual situations vary.
      </p>

      <p>
        Repair and replacement are presented as parallel paths without
        recommendations.
      </p>

      <h3>How to read the tables</h3>
      <table>
        <thead>
          <tr>
            <th>Element</th>
            <th>Meaning</th>
            <th>Limits</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Categories</td>
            <td>Symptom groupings used to discuss options</td>
            <td>Not a diagnosis</td>
          </tr>
          <tr>
            <td>Cost ranges</td>
            <td>Illustrative bands commonly encountered</td>
            <td>Not quotes; varies by model, region, and pathway</td>
          </tr>
          <tr>
            <td>Repair paths</td>
            <td>Official vs independent pathways described in parallel</td>
            <td>No ranking or recommendation</td>
          </tr>
          <tr>
            <td>Sources</td>
            <td>Official manufacturer and recognized consumer authorities</td>
            <td>No forums used as sources</td>
          </tr>
        </tbody>
      </table>

      <p>
        For boundaries and verification requirements, see the{" "}
        <a href="/disclaimer">disclaimer</a>.
      </p>
      
    </>
  );
}
