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
    title: `Shark Repair Cost Ranges in ${regionLabel}`,
    description:
      `Shark repair-cost context for ${regionLabel}, focused on where repairs stay manageable and where they jump into larger assembly or service decisions.`,
    alternates: {
      canonical: `/shark/cost-ranges/${region}`,
    },
  };
}

export default function SharkCostRangesPage({
  params,
}: {
  params: Promise<{ region: string }>;
}) {
  const { region } = React.use(params);

  if (!allowedRegions.includes(region)) {
    notFound();
  }

  const partsData = {
    headers: ["Fault or part category", "How big the cost can feel", "What makes it grow"],
    rows: [
      ["Battery replacement", "Often lower than a larger internal repair, but not always minor", "The cost depends on the exact model, battery design, and whether the issue is really isolated to the battery."],
      ["Brushroll, floorhead, or cleaner-head replacement", "Can stay manageable when limited to one assembly, but grows quickly when the affected area is large", "The jump happens when the problem is no longer one head or nozzle but part of a bigger fault in the product body or drive system."],
      ["Filters and smaller wear parts", "Lower-cost than internal repairs in many cases", "The total still stacks up if the machine has more than one worn or restricted part at the same time."],
      ["Main body or internal assembly faults", "Often where costs move into a range where replacement becomes a serious option", "The bill can stop being about one failed part and start including a larger assembly or more involved repair handling."],
      ["Robot or specialty-product internals", "Can become much larger once the problem turns out to involve electronics, docking, or internal assemblies", "A direct part price may not be the real number if the issue involves docking, navigation, electronics, or a larger internal section."],
    ],
  };

  const serviceData = {
    headers: ["Service element", "What it does to the bill", "What changes once it is involved"],
    rows: [
      ["Formal support or service handling", "Can add inspection, shipping, labour, or replacement-unit handling", "The part price is only one part of the total once the problem no longer stays inside a simple replacement."],
      ["Diagnosis before a clear fix", "Adds time and uncertainty before the real repair is even priced", "A borderline repair can start getting expensive before one part is confirmed as the fix."],
      ["More than one failing area", "Turns one part question into a broader repair bill", "That is usually the point where a contained Shark repair starts becoming a replace-versus-repair decision."],
    ],
  };

  return (
    <ManufacturerPage
      title={`Shark cost ranges (${region.toUpperCase()})`}
      intro="A clearer look at which Shark repairs stay manageable and which ones start becoming expensive enough to change the decision."
      region={region}
      manufacturer="Shark"
      extraNavItems={[{ name: "Parts", slug: "parts-support" }]}
    >
      <QuickAnswer
        title="Short answer"
        bullets={[
          "This page is not a quote sheet. It is meant to show which Shark repairs stay fairly contained and which ones get expensive fast.",
          "A battery, filter, or attachment question is not priced the same way as a main-body or service-heavy repair.",
          "The jump is often not the part itself, but the point where the repair stops being one replacement part and starts carrying a larger assembly or support cost.",
        ]}
      >
        <p>
          Most people searching for Shark repair cost are trying to work out
          whether this still looks like normal upkeep or whether the repair is
          getting big enough that replacement starts to make more sense. That
          usually gets clearer when this page is read alongside{" "}
          <Link href={`/shark/repair-options/${region}`}>repair options</Link>.
        </p>
      </QuickAnswer>

      <h3>Which repair categories stay contained and which ones expand</h3>
      <PolicyTable headers={partsData.headers} rows={partsData.rows} />

      <h3>Where service handling changes the number people expect to pay</h3>
      <PolicyTable headers={serviceData.headers} rows={serviceData.rows} />

      <section className="editorial-note">
        <strong>When the decision changes.</strong>
        <p>
          The decision usually changes when the cost is no longer about one
          failed part and starts including a larger assembly, formal support,
          or both. That is usually the point where{" "}
          <Link href={`/shark/replace-vs-repair/${region}`}>
            replace-vs-repair
          </Link>{" "}
          becomes the more useful question.
        </p>
      </section>

      <section className="grid-2">
        <ActionChecklist
          title="What makes repair cost hard to judge from a search result"
          items={[
            "Identify whether the issue is a single part or a larger assembly before comparing costs.",
            "Separate formal support handling, local repair, and direct parts pricing instead of treating them like versions of the same quote.",
            "Move to replace-vs-repair once the bill includes more than one part, a larger assembly, or a wider service path.",
          ]}
        />

        <RelatedLinks
          title="Next pages when cost stops being just a price question"
          links={[
            {
              href: `/shark/repair-options/${region}`,
              label: "Shark repair options and service paths",
            },
            {
              href: `/shark/replace-vs-repair/${region}`,
              label: "Shark replace vs. repair",
            },
            {
              href: `/shark/common-problems/${region}`,
              label: "Common Shark problems after warranty",
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
          { label: "Shark Parts and Accessories", href: "https://www.sharkclean.com/parts-and-accessories/" },
          { label: "Shark Support", href: "https://support.sharkclean.com/hc/en-us" },
        ]}
      />
    </ManufacturerPage>
  );
}
