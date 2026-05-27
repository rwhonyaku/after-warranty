import Link from "next/link";
import { PolicyTable } from "@/components/PolicyTable";

export const metadata = {
  title: "How This Site Works | After-Warranty.com",
  description:
    "How After-Warranty.com handles sources, cost ranges, support pathways, and page scope.",
};

export default function HowThisSiteWorksPage() {
  const methodData = {
    headers: ["What you are reading", "How to use it", "Important limit"],
    rows: [
      ["Problem pages", "Use them to understand common issue categories and what they may imply.", "They are not diagnostics."],
      ["Cost ranges", "Use them for context before spending money or booking service.", "They are not quotes."],
      ["Repair options", "Use them to compare official and independent pathways.", "Availability varies by model and region."],
      ["Warranty pages", "Use them to see what coverage usually ends and what may still remain.", "Terms can change over time."],
    ],
  };

  return (
    <>
      <section className="page-hero">
        <div className="eyebrow">How to use this site</div>
        <h1>Read these pages as decision support, not official policy.</h1>
        <p className="lede">
          After-Warranty.com is meant to make post-warranty questions easier to
          understand. Pages summarize common patterns, compare support options,
          and highlight the details that often matter most.
        </p>
      </section>

      <PolicyTable headers={methodData.headers} rows={methodData.rows} />

      <section className="grid-2">
        <article className="info-section">
          <h3>What we prioritize</h3>
          <ul>
            <li>Clear answers first.</li>
            <li>Visible sourcing.</li>
            <li>Useful structure over filler.</li>
          </ul>
        </article>

        <article className="info-section">
          <h3>What you should still verify</h3>
          <ul>
            <li>Model-specific warranty terms.</li>
            <li>Current repair pricing.</li>
            <li>Local service availability.</li>
          </ul>
        </article>
      </section>

      <section className="meta-note">
        <strong>Need the legal version?</strong>
        <p>
          Read the <Link href="/disclaimer">disclaimer</Link> for the site&apos;s
          scope and limits in more formal terms.
        </p>
      </section>
    </>
  );
}

