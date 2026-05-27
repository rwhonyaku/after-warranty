import Link from "next/link";
import { ManufacturerPage } from "../../components/ManufacturerPage";
import { Sources } from "../../components/Sources";

export const metadata = {
  title: "Dyson Warranty, Repair, and Post-Warranty Questions | After-Warranty.com",
  description:
    "Independent Dyson reference for warranty, expired-warranty, repair-cost, common-problem, and replace-vs-repair questions, with clear routing on what to check next.",
  alternates: {
    canonical: "/dyson",
  },
};

const regions = [
  { name: "USA", code: "usa" },
  { name: "UK", code: "uk" },
  { name: "Canada", code: "canada" },
  { name: "Australia", code: "australia" },
];

const subPages = [
  { name: "Warranty status and terms", slug: "warranty-expired" },
  { name: "Common problems", slug: "common-problems" },
  { name: "Repair options", slug: "repair-options" },
  { name: "Cost ranges", slug: "cost-ranges" },
  { name: "Replace vs. repair", slug: "replace-vs-repair" },
  { name: "Parts and support", slug: "parts-support" },
];

export default function DysonHubPage() {
  return (
    <ManufacturerPage
      title="Dyson post-warranty reference"
      intro="Independent reference for the Dyson questions people usually end up searching once warranty, repair, and support start overlapping: what the warranty actually means, what changes after it ends, and which page answers the next decision."
      region="Global"
      manufacturer="Dyson"
    >
      <section className="surface-card">
        <h3>Short answer</h3>
        <p>
          Most people searching for Dyson warranty or Dyson repair warranty are
          not looking for a full policy document. They are usually trying to
          work out one of a few things: whether Dyson coverage still applies,
          what changes once it expires, whether a repair claim has turned into a
          paid repair, or which page to read next if the machine is already
          showing common post-warranty problems.
        </p>
        <div className="topic-list" style={{ marginTop: "14px" }}>
          <Link href="/dyson/warranty-expired/usa">
            Dyson warranty expired: what changes now (USA)
          </Link>
          <Link href="/dyson/warranty-expired/uk">
            Dyson warranty expired: what changes now (UK)
          </Link>
          <Link href="/dyson/common-problems/usa">
            Dyson common problems after warranty
          </Link>
          <Link href="/dyson/cost-ranges/usa">
            Dyson repair cost ranges after warranty
          </Link>
          <Link href="/dyson/repair-options/usa">
            Dyson repair options after warranty
          </Link>
          <Link href="/dyson/replace-vs-repair/usa">
            Dyson replace vs repair framework
          </Link>
        </div>
      </section>

      <section className="section-stack">
        <div className="section-heading">
          <div className="eyebrow">How to use this section</div>
          <h2>Most Dyson post-warranty confusion falls into four buckets.</h2>
          <p>
            Most Dyson post-warranty searches come down to a small set of
            decisions: whether coverage has ended, whether the fault points to a
            simple part or a larger repair, what service path still exists, and
            whether the machine is worth further spend.
          </p>
        </div>

        <div className="grid-3">
          <article className="surface-card">
            <h3>Warranty expired and not sure what changes?</h3>
            <p>
              Start with the warranty page if the main confusion is whether the
              issue still belongs in a support conversation or has become an
              out-of-pocket repair question.
            </p>
          </article>

          <article className="surface-card">
            <h3>Trying to price a repair?</h3>
            <p>
              Read cost ranges with repair options. Price alone is not enough
              if the likely fix depends on service-only parts or bundled
              assemblies.
            </p>
          </article>

          <article className="surface-card">
            <h3>Deciding whether to replace it?</h3>
            <p>
              Use replace-vs-repair after identifying the likely fault. The
              decision changes once the issue looks bigger than a routine part
              swap.
            </p>
          </article>
        </div>
      </section>

      <section className="grid-2">
        <article className="info-section">
          <h3>Start here if the main problem is coverage, cost, or service access</h3>
          <div className="topic-list">
            <Link href="/dyson/out-of-warranty">
              Dyson out of warranty: what changes now
            </Link>
            <Link href="/dyson/warranty-expired/usa">
              Dyson warranty expired: what changes now (USA)
            </Link>
            <Link href="/dyson/warranty-expired/uk">
              Dyson warranty expired: what changes now (UK)
            </Link>
            <Link href="/dyson/cost-ranges/usa">
              Dyson repair cost ranges after warranty
            </Link>
            <Link href="/dyson/repair-options/usa">
              Dyson repair options after warranty
            </Link>
            <Link href="/dyson/parts-support/usa">
              Dyson parts and support options
            </Link>
          </div>
        </article>

        <article className="info-section">
          <h3>Use these when the first answer still leaves a harder decision</h3>
          <div className="topic-list">
            <Link href="/dyson/common-problems/usa">
              Common Dyson problems after warranty
            </Link>
            <Link href="/dyson/replace-vs-repair/usa">
              Dyson replace vs repair framework
            </Link>
            <Link href="/dyson/repair-options/usa">
              Dyson repair options after warranty
            </Link>
            <Link href="/dyson/parts-support/usa">
              Dyson spare parts and support help
            </Link>
          </div>
        </article>
      </section>

      <section className="section-stack">
        <div className="section-heading">
          <div className="eyebrow">Regional entry points</div>
          <h2>Live Dyson coverage by region</h2>
          <p>
            Choose the region most relevant to your support, pricing, and
            service-path context. Regional pages are only useful when support
            handling or product terms actually change.
          </p>
        </div>

        <div className="region-grid">
          {regions.map((region) => (
            <article key={region.code} className="region-card">
              <div className="region-card__top">
                <span className="region-card__label">{region.name}</span>
                <div className="region-card__title">
                  Dyson in {region.name}
                </div>
                <p>
                  Open the post-warranty page that matches the decision you are
                  actually trying to make.
                </p>
              </div>

              <div className="topic-list">
                {subPages.map((page) => (
                  <Link
                    key={`${region.code}-${page.slug}`}
                    href={`/dyson/${page.slug}/${region.code}`}
                  >
                    {page.name}
                  </Link>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="editorial-note">
        <strong>What makes Dyson different.</strong>
        <p>
          Dyson questions often stop being about the original symptom and turn
          into <Link href="/dyson/parts-support/usa">parts access</Link>,{" "}
          <Link href="/dyson/repair-options/usa">service handling</Link>, or
          whether the quoted fix is tied to a larger assembly. That is why this
          section is organized
          around post-warranty decisions rather than generic product copy.
        </p>
      </section>

      <Sources
        items={[
          { label: "Dyson Global Support", href: "https://www.dyson.com/support" },
          { label: "Dyson Spare Parts", href: "https://www.dyson.com/spare-parts" },
        ]}
      />
    </ManufacturerPage>
  );
}
