export const metadata = {
  title: "Disclaimer | After-Warranty.com",
  description:
    "Important scope and liability information for After-Warranty.com.",
};

export default function DisclaimerPage() {
  return (
    <>
      <section className="page-hero">
        <div className="eyebrow">Disclaimer</div>
        <h1>Important limits on the information provided here.</h1>
        <p className="lede">
          After-Warranty.com is an independent reference website. Information is
          provided to help readers understand post-warranty issues more clearly,
          but it should not be treated as a substitute for official support,
          local service advice, or professional judgment.
        </p>
      </section>

      <section className="section-stack">
        <article className="info-section">
          <h3>Not professional advice</h3>
          <p>
            Site content is informational only. It is not legal, financial,
            safety, or repair advice, and it should not be the only basis for a
            repair or replacement decision.
          </p>
        </article>

        <article className="info-section">
          <h3>No manufacturer affiliation</h3>
          <p>
            After-Warranty.com is not affiliated with the manufacturers named on
            this site. Brand names and trademarks belong to their respective
            owners.
          </p>
        </article>

        <article className="info-section">
          <h3>Verify current details</h3>
          <p>
            Coverage terms, pricing, parts availability, and service options can
            change. Readers should confirm current details directly with official
            manufacturer or local service sources.
          </p>
        </article>
      </section>
    </>
  );
}
