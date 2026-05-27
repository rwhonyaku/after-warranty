export const metadata = {
  title: "Privacy | After-Warranty.com",
  description:
    "Basic privacy information for After-Warranty.com, including how the site may handle technical data and what this site does not currently ask readers to submit.",
};

export default function PrivacyPage() {
  return (
    <>
      <section className="page-hero">
        <div className="eyebrow">Privacy</div>
        <h1>Basic privacy information for this site.</h1>
        <p className="lede">
          After-Warranty.com is an informational website. This page explains the
          basic privacy expectations that apply when readers browse the site.
        </p>
      </section>

      <section className="section-stack">
        <article className="info-section">
          <h3>What this site is for</h3>
          <p>
            After-Warranty.com publishes consumer-reference content about
            post-warranty support, repair costs, and replace-versus-repair
            decisions. It is not a storefront, account platform, or
            repair-booking service.
          </p>
        </article>

        <article className="info-section">
          <h3>Personal information</h3>
          <p>
            This site is not currently built around user accounts or reader
            submissions. If that changes later, this page should be updated so
            the privacy language matches the live features of the site.
          </p>
        </article>

        <article className="info-section">
          <h3>Analytics, logs, and third-party services</h3>
          <p>
            Like most websites, hosting providers and site tools may process
            basic technical data such as page requests, browser details,
            referring pages, and general usage patterns. Those services may
            have their own privacy terms.
          </p>
        </article>

        <article className="info-section">
          <h3>External links</h3>
          <p>
            This site links to manufacturer and support sources for verification
            and context. Once a reader leaves After-Warranty.com, the privacy
            and data practices of the external site apply instead.
          </p>
        </article>

        <article className="info-section">
          <h3>Future updates</h3>
          <p>
            If site features expand to include forms, newsletters, advertising,
            or other user-facing tools, this page should be revised so it stays
            aligned with the site as it actually works.
          </p>
        </article>
      </section>
    </>
  );
}
