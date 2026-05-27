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
    title: `Shark Warranty Expired: What Changes in ${regionLabel}`,
    description:
      `What Shark owners in ${regionLabel} need to understand once warranty coverage has ended, including when a parts or support question turns into a paid repair decision.`,
    alternates: {
      canonical: `/shark/warranty-expired/${region}`,
    },
  };
}

export default function SharkWarrantyExpiredPage({
  params,
}: {
  params: Promise<{ region: string }>;
}) {
  const { region } = React.use(params);

  if (!allowedRegions.includes(region)) {
    notFound();
  }

  const coverageData = {
    headers: ["Product category", "Warranty handling", "Why the distinction matters after expiry"],
    rows: [
      ["Cordless vacuums", "Coverage can differ between the main unit and the battery", "A battery question and a main-body fault can stop following the same support path once the warranty term ends."],
      ["Robot vacuums", "Coverage stays product-specific", "Docking, navigation, and battery issues can feel like one problem to the owner but lead to very different repair decisions."],
      ["Floor and carpet cleaners", "Warranty handling remains product-specific", "Consumables, pumps, and larger internal faults are not treated as the same kind of support issue."],
      ["Air and beauty products", "Coverage may differ by category and model", "Attachments, filters, batteries, and the main unit can fall into different post-warranty decisions."],
      ["Other Shark categories", "Always verify the exact product line", "The key check is not just the brand but the specific category and the official warranty page for that model."],
    ],
  };

  const nuanceData = {
    headers: ["Detail", "Why it matters once warranty has ended"],
    rows: [
      ["Battery coverage questions", "Shark owners often run into separate battery questions, which can turn into a parts decision faster than a broader product claim."],
      ["Wear items and maintenance parts", "Filters, pads, and similar consumables are not the same as a fault in the main machine, so the support outcome can be very different."],
      ["Model-specific parts and attachments", "A simple-sounding replacement can still stall if the exact model match matters more than the symptom itself."],
    ],
  };

  return (
    <ManufacturerPage
      title={`Shark warranty expired: what changes now (${region.toUpperCase()})`}
      intro="A clear look at what changes once a Shark warranty has ended, and why the next question often becomes parts, service, or repair cost."
      region={region}
      manufacturer="Shark"
      extraNavItems={[{ name: "Parts", slug: "parts-support" }]}
    >
      <QuickAnswer
        title="Short answer"
        bullets={[
          "Once the warranty ends, the main change is that a support question can turn into a paid parts or paid repair decision.",
          "The important distinction is whether the issue still looks like a battery, filter, or attachment question, or whether it points to a bigger fault in the product.",
          "What catches people off guard is how quickly a small Shark problem can stop being a support lookup and start becoming a cost decision.",
        ]}
      >
        <p>
          Most people searching for "Shark warranty expired" are not trying to
          read policy language. They are trying to work out whether this is
          still a normal support issue or whether it has already turned into a
          repair that will cost real money. Once it reaches that point, the
          next useful pages are usually{" "}
          <Link href={`/shark/repair-options/${region}`}>repair options</Link>{" "}
          and{" "}
          <Link href={`/shark/cost-ranges/${region}`}>repair cost ranges</Link>.
        </p>
      </QuickAnswer>

      <h3>Why warranty terms stop answering the whole question</h3>
      <PolicyTable headers={coverageData.headers} rows={coverageData.rows} />

      <h3>Where post-warranty friction usually starts</h3>
      <PolicyTable headers={nuanceData.headers} rows={nuanceData.rows} />

      <section className="editorial-note">
        <strong>Why this changes the decision so quickly.</strong>
        <p>
          A Shark issue can sound minor until the conversation shifts from one
          replacement part to batteries, model matching, or a bigger assembly.
          That is usually the point where{" "}
          <Link href={`/shark/parts-support/${region}`}>
            parts and support options
          </Link>{" "}
          matter more than the warranty wording.
        </p>
      </section>

      <section className="grid-2">
        <ActionChecklist
          title="What actually changes after the warranty line is crossed"
          items={[
            "Match the exact model and product category to the official warranty terms instead of assuming one Shark line matches another.",
            "Separate filters, batteries, and attachments from faults that point to a larger internal issue.",
            "Use repair options and parts support to see whether this still looks like a smaller parts issue or a bigger service case.",
          ]}
        />

        <RelatedLinks
          title="Where to go once coverage is no longer the main question"
          links={[
            {
              href: `/shark/repair-options/${region}`,
              label: "Shark repair options and service paths",
            },
            {
              href: `/shark/cost-ranges/${region}`,
              label: "Shark repair cost ranges",
            },
            {
              href: `/shark/replace-vs-repair/${region}`,
              label: "Shark replace vs. repair",
            },
            {
              href: `/shark/parts-support/${region}`,
              label: "Shark parts and support options",
            },
          ]}
        />
      </section>

      <Sources
        items={[
          { label: "Shark Warranty Center", href: "https://support.sharkclean.com/hc/en-us/sections/4402873140370-Warranty" },
          { label: "Shark Support", href: "https://support.sharkclean.com/hc/en-us" },
        ]}
      />
    </ManufacturerPage>
  );
}
