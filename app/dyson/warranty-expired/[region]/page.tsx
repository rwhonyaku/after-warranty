import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ManufacturerPage } from "../../../../components/ManufacturerPage";
import { PolicyTable } from "../../../../components/PolicyTable";
import {
  ActionChecklist,
  QuickAnswer,
  RelatedLinks,
} from "../../../../components/ReferenceCallouts";
import { Sources } from "../../../../components/Sources";

const allowedRegions = ["usa", "uk", "canada", "australia"];
const regionLabels: Record<string, string> = {
  usa: "USA",
  uk: "UK",
  canada: "Canada",
  australia: "Australia",
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ region: string }>;
}): Promise<Metadata> {
  const { region } = await params;
  const regionLabel = regionLabels[region] ?? region.toUpperCase();

  return {
    title: `Dyson Warranty Expired: What Changes in ${regionLabel}`,
    description:
      `What Dyson owners in ${regionLabel} need to understand once warranty coverage has ended, including what support questions often turn into paid repair decisions.`,
    alternates: {
      canonical: `/dyson/warranty-expired/${region}`,
    },
  };
}

export default function DysonExpiredPage({ params }: { params: Promise<{ region: string }> }) {
  const { region } = React.use(params);

  if (!allowedRegions.includes(region)) {
    notFound();
  }

  const coverageData = {
    headers: ["Product category", "Warranty handling", "Why the distinction matters after expiry"],
    rows: [
      ["Cordless vacuums", "Often sold with a standard limited warranty", "Battery, cleaner head, and main-body questions can move into paid repair or paid parts once the warranty term ends."],
      ["Corded vacuums", "Coverage can differ from cordless ranges", "A user should confirm the exact product line before assuming the same warranty terms apply."],
      ["Air treatment", "Warranty and exclusions are still product-specific", "Filter-related or maintenance-related questions are not the same as a covered fault in the main unit."],
      ["Hair care", "Coverage may differ by model and market", "Cord, body, and accessory questions can fall into different support paths once the warranty period is over."],
      ["Other Dyson categories", "Terms may differ by product family", "The key check is not the brand alone but the exact category and official warranty page for that model."],
    ],
  };

  const nuanceData = {
    headers: ["Detail", "Why it matters once warranty has ended"],
    rows: [
      ["Battery wear", "Battery performance is one of the clearest examples of a fault that can become a paid parts decision rather than a warranty claim."],
      ["Consumables and wear items", "Filters, attachments, and similar items are not the same as a defect in the core machine, so the support outcome can be very different."],
      ["Blockages and maintenance issues", "Support content may still help identify the issue, but any hands-on service can become chargeable once the warranty term is over."],
    ],
  };

  return (
    <ManufacturerPage
      title={`Dyson warranty expired: what changes now (${region.toUpperCase()})`}
      intro="A clear look at what changes once a Dyson warranty has ended, and why the next question often becomes parts, service, or repair cost."
      region={region}
      manufacturer="Dyson"
      extraNavItems={[{ name: "Parts", slug: "parts-support" }]}
    >
      <QuickAnswer
        title="Short answer"
        bullets={[
          "Once the warranty ends, the main change is not the loss of all support. It is that the discussion can shift from coverage to paid parts, paid labour, or full service handling.",
          "The important distinction is whether the issue is a worn battery or filter-type problem, a user-replaceable part, or a fault in the machine itself.",
          "What catches people off guard is how fast a small-sounding issue can turn into a paid repair once labour, parts handling, or a larger assembly get involved.",
        ]}
      >
        <p>
          Most people searching for "Dyson warranty expired" are not trying to
          read policy language. They are trying to work out whether this is
          still a normal support issue or whether it has already turned into a
          repair that will cost real money. If the question still feels broader
          than one warranty detail,{" "}
          <Link href="/dyson/out-of-warranty">Dyson out of warranty</Link>{" "}
          gives the bigger picture first. Once it reaches that point, the next
          useful pages are usually{" "}
          <Link href={`/dyson/repair-options/${region}`}>
            Dyson repair options after warranty
          </Link>{" "}
          and{" "}
          <Link href={`/dyson/cost-ranges/${region}`}>
            Dyson repair cost ranges after warranty
          </Link>.
        </p>
      </QuickAnswer>

      <section className="surface-card">
        <h3>Quick warranty clarification</h3>
        <p>
          This is not a lifetime warranty page. Dyson products are generally
          sold with limited warranty terms tied to the product category, market,
          and sales condition, not a lifetime coverage promise.
        </p>
        <p>
          That matters because searches like &quot;Dyson warranty claim&quot; or
          &quot;Dyson repair warranty&quot; often mix together different questions:
          whether the original warranty still applies, whether the issue looks
          like a covered defect, and whether the claim has already turned into a
          paid repair discussion.
        </p>
        <p>
          The practical split is between official warranty facts such as product
          type, proof of purchase, and sales condition, and post-warranty
          questions such as repair cost, service handling, or whether the
          machine is still worth further spend.
        </p>
      </section>

      <h3>Why warranty terms stop answering the whole question</h3>
      <PolicyTable headers={coverageData.headers} rows={coverageData.rows} />

      <h3>Where warranty questions usually turn into repair questions</h3>
      <PolicyTable headers={nuanceData.headers} rows={nuanceData.rows} />

      <section className="surface-card">
        <h3>What the warranty actually covers (and what it doesn&apos;t)</h3>
        <p>
          Dyson warranties are mainly about defects in the product itself, not
          every problem that shows up during normal use. Two products with the
          same symptom can end up with different outcomes depending on whether
          Dyson treats the issue as a defect, normal wear, maintenance, or
          damage.
        </p>

        <p>What is usually covered:</p>
        <ul>
          <li>
            Faults in the main machine that point to a defect rather than
            normal use over time
          </li>
          <li>
            Manufacturing-related problems in the core product during the
            stated warranty term
          </li>
          <li>
            Product failures that fit Dyson&apos;s warranty terms for the exact
            category and model
          </li>
        </ul>

        <p>What is usually not covered:</p>
        <ul>
          <li>Normal wear from regular use</li>
          <li>
            Consumables and maintenance-related items such as filters and
            similar replaceable parts
          </li>
          <li>
            Damage linked to misuse, neglect, improper handling, unauthorized
            repair, or use outside the intended purpose
          </li>
          <li>Cosmetic issues that do not affect normal function</li>
        </ul>

        <p>
          Batteries are one of the most confusing areas. On cordless models
          like V7 or V8, battery issues are often seen as product failure, but
          in practice they are often handled as a replacement part rather than
          a full warranty claim.
        </p>

        <p>
          Proof of purchase can change the outcome quickly. Even when the
          product and symptom sound like they belong in warranty, the claim can
          stall if the purchase date cannot be tied clearly to the unit.
        </p>

        <p>
          Refurbished products can follow different warranty terms from new
          products. That matters because owners often assume the model name
          tells the whole warranty story, when the product condition at sale
          can change the coverage terms as well.
        </p>
      </section>

      <section className="surface-card">
        <h3>Why warranty questions become confusing after purchase</h3>
        <p>
          A lot of Dyson warranty confusion starts after purchase, when owners
          realize the model name on the box is only part of the picture.
          Similar-sounding names across cordless vacuums, air treatment
          products, and hair care products can make people assume the warranty
          terms are the same when the product category or sales condition may
          change the coverage language.
        </p>

        <p>
          Refurbished products add another layer because the same machine name
          does not always mean the same warranty setup as a new product. The
          confusion is not just about the unit itself, but about whether the
          product was sold as new, refurbished, or through a sales channel that
          frames coverage differently.
        </p>

        <p>
          Retailer expectations also get mixed into manufacturer expectations.
          Owners may think the store return process, an extended protection
          plan, and Dyson&apos;s own warranty handling are all part of the same
          process, when they can lead to different outcomes depending on who is
          actually handling the claim.
        </p>

        <p>
          Accessories and the main unit are another common split. A problem
          with a cleaner head, attachment, filter, or similar item does not
          always land the same way as a fault in the core machine body. That is
          why battery and wear-item questions so often sit in a grey area
          between what owners think of as warranty trouble and what gets
          treated more like{" "}
          <Link href={`/dyson/parts-support/${region}`}>replacement parts</Link>{" "}
          or maintenance territory.
        </p>

        <p>
          Regional terminology can make all of this harder to read. The same
          basic coverage idea may be described with different wording across
          the USA, UK, Canada, or Australia, even when the owner thinks they
          are searching for one simple answer about &quot;the Dyson warranty.&quot;
        </p>
      </section>

      <section className="editorial-note">
        <strong>Why this changes the decision so quickly.</strong>
        <p>
          A fault that sounded minor under warranty can look very different once
          labour, shipping, diagnostics, or a bigger internal repair are part
          of the same quote. That is usually the point where the problem stops
          being one replacement part and becomes full service handling. That is
          usually the point where{" "}
          <Link href={`/dyson/parts-support/${region}`}>
            parts and support options
          </Link>{" "}
          matter more than the warranty wording.
        </p>
      </section>

      <section className="grid-2">
        <ActionChecklist
          title="What actually changes after the warranty line is crossed"
          items={[
            "Match the exact model and product family to the official warranty terms instead of assuming one Dyson category matches another.",
            "Separate wear-item or maintenance issues from faults that point to a battery, cleaner head, or internal assembly.",
            "Use repair options and parts support to see whether this still looks like a small parts issue or a bigger service case.",
          ]}
        />

        <RelatedLinks
          title="Where to go once coverage is no longer the main question"
          links={[
            {
              href: `/dyson/repair-options/${region}`,
              label: "Dyson repair options after warranty",
            },
            {
              href: `/dyson/cost-ranges/${region}`,
              label: "Dyson repair cost ranges after warranty",
            },
            {
              href: `/dyson/replace-vs-repair/${region}`,
              label: "Dyson replace vs repair framework",
            },
            {
              href: `/dyson/parts-support/${region}`,
              label: "Dyson parts and support options",
            },
          ]}
        />
      </section>

      <Sources
        items={[
          { label: "Dyson Limited Warranty Terms", href: "https://www.dyson.com/inside-dyson/terms/the-dyson-limited-warranty" },
          { label: "Dyson Commercial Lighting Terms", href: "https://www.dyson.com/commercial/lighting" },
        ]}
      />
    </ManufacturerPage>
  );
}


