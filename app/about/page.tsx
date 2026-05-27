export const metadata = {
  title: "About | After-Warranty.com",
  description:
    "About After-Warranty.com, an independent website covering post-warranty repair options, cost context, and support pathways.",
};

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="eyebrow">About the site</div>
        <h1>Independent help for post-warranty questions.</h1>
        <p className="lede">
          After-Warranty.com is a consumer-reference website focused on what
          happens after manufacturer coverage ends. The goal is to make repair
          options, support pathways, and cost tradeoffs easier to understand.
        </p>
      </section>

      <section className="section-stack">
        <article className="info-section">
          <h3>What we do</h3>
          <p>
            We organize brand-specific information around the questions people
            usually have after purchase: what support still exists, what repair
            options are realistic, and when replacement may make more sense.
          </p>
        </article>

        <article className="info-section">
          <h3>What we do not do</h3>
          <ul>
            <li>We do not act as a manufacturer, repair shop, or diagnostic service.</li>
            <li>We do not provide binding quotes, legal advice, or safety-critical instructions.</li>
            <li>We do not claim hands-on experience we do not have.</li>
          </ul>
        </article>

        <article className="info-section">
          <h3>How pages are built</h3>
          <p>
            Pages are grounded in official support and warranty materials where
            possible, then edited into plain-English guidance that is easier to
            scan and use.
          </p>
        </article>
      </section>
    </>
  );
}
