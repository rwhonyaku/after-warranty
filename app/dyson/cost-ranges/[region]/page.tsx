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
    title: `Dyson Repair Cost Ranges in ${regionLabel}`,
    description:
      `Dyson repair-cost context for ${regionLabel}, focused on which kinds of faults stay limited and which ones tend to move into larger service or replacement decisions.`,
    alternates: {
      canonical: `/dyson/cost-ranges/${region}`,
    },
  };
}

export default function DysonCostRangesPage({ params }: { params: Promise<{ region: string }> }) {
  const { region } = React.use(params);

  if (!allowedRegions.includes(region)) {
    notFound();
  }

  const partsData = {
    headers: ["Fault or part category", "How big the cost can feel", "What makes it grow"],
    rows: [
      ["Battery replacement", "Often lower than a major internal repair, but still meaningful", "The cost depends on the model, battery design, and whether the issue is truly isolated to the battery."],
      ["Cleaner head or attachment replacement", "Can stay manageable when limited to one part, but increases quickly when the component is large or tied to other parts", "Product line and attachment design matter, especially when the head is a large share of the total replacement cost."],
      ["Filter and smaller consumable parts", "Lower-cost than assembly work in many cases", "The total can still stack up if the machine has more than one worn or restricted component."],
      ["Main body or internal assembly faults", "Often where costs move into a range where replacement becomes a serious option", "The quote often includes a full assembly and service, not just one failed part."],
      ["Hair-care or specialty product internals", "More dependent on service handling than public parts pricing", "A direct parts price may not tell the full story if the repair is routed through formal service."],
    ],
  };

  const serviceData = {
    headers: ["Service element", "What it does to the bill", "What changes once it is involved"],
    rows: [
      ["Formal service handling", "Can combine labour, diagnostics, shipping, and replacement assemblies", "The part price is only one part of the total once service, labour, or shipping are included."],
      ["Diagnostics or inspection", "May be included, charged separately, or folded into a repair quote", "This changes how expensive a borderline repair feels before any part is replaced."],
      ["Independent repair", "Can look lighter than a formal service quote on some faults", "That comparison only holds if the repair scope is genuinely the same and parts access is not the limiting factor."],
    ],
  };

  return (
    <ManufacturerPage
      title={`Dyson cost ranges (${region.toUpperCase()})`}
      intro="A clearer look at which Dyson repairs stay manageable and which ones start moving into replacement-level cost."
      region={region}
      manufacturer="Dyson"
      extraNavItems={[{ name: "Parts", slug: "parts-support" }]}
    >
      <QuickAnswer
        title="Short answer"
        bullets={[
          "This page is not a quote sheet. It is meant to show which Dyson repairs stay fairly contained and which ones get expensive fast.",
          "A battery or accessory question is not priced the same way as a main-body or service-only repair.",
          "The surprise is often not the part itself, but the point where the repair stops being a simple swap and starts carrying service or assembly cost.",
        ]}
      >
        <p>
          Most people searching for Dyson repair cost are trying to work out
          whether this still looks like normal upkeep or whether the repair is
          getting big enough that replacing the machine starts to make more
          sense. That usually gets clearer when this page is read alongside{" "}
          <Link href={`/dyson/repair-options/${region}`}>repair options</Link>.
        </p>
      </QuickAnswer>

      <h3>Which repair categories stay contained and which ones expand</h3>
      <PolicyTable headers={partsData.headers} rows={partsData.rows} />

      <h3>Where service handling changes the number people expect to pay</h3>
      <PolicyTable headers={serviceData.headers} rows={serviceData.rows} />

      <section className="editorial-note">
        <strong>Why Dyson repair costs are hard to estimate from a search.</strong>
        <p>
          Most repair cost searches assume there is one price for one fault,
          but that is not how these repairs usually work.
        </p>
        <p>
          A &quot;Dyson repair cost&quot; can mean very different situations: replacing
          one external part such as a battery or cleaner head, fixing an
          internal issue that requires disassembly or a full assembly
          replacement, or sending the machine through a formal service process
          that includes inspection, handling, and parts together.
        </p>
        <p>
          That difference is what creates the gap between lower, contained
          costs and much higher totals. The visible symptom is often smaller
          than the repair behind it. What looks like one failed part can turn into a
          larger repair if the problem affects connected components or internal
          assemblies.
        </p>
        <p>
          That is why two people searching for &quot;Dyson repair cost&quot; can end up
          with very different outcomes even when the machines seem to have
          similar issues at the start. Official service may price the job as a
          larger assembly or full service process, while an independent repair
          may be trying to fix a narrower fault. Those are not directly
          comparable approaches. See{" "}
          <Link href="/dyson/repair-options/usa">
            how different service paths affect total cost
          </Link>
          .
        </p>
      </section>

      <section className="editorial-note">
        <strong>When the decision changes.</strong>
        <p>
          The decision usually changes when the cost is no longer about one
          failed part and starts including a larger assembly, formal service,
          or both. That is usually the point where{" "}
          <Link href={`/dyson/replace-vs-repair/${region}`}>
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
            "Separate formal service, local repair, and direct parts pricing instead of treating them like versions of the same quote.",
            "Move to replace-vs-repair once the bill includes more than one part, a larger assembly, or formal service.",
          ]}
        />

        <RelatedLinks
          title="Next pages when cost stops being just a price question"
          links={[
            {
              href: `/dyson/repair-options/${region}`,
              label: "Dyson repair options and service paths",
            },
            {
              href: `/dyson/replace-vs-repair/${region}`,
              label: "Dyson replace vs. repair",
            },
            {
              href: `/dyson/common-problems/${region}`,
              label: "Common Dyson problems after warranty",
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
          { label: `Dyson Spare Parts (${region.toUpperCase()})`, href: "https://www.dyson.com/spare-parts" },
          { label: "Dyson Repairs and Servicing", href: "https://www.dyson.com/support/repairs-and-servicing-information" },
        ]}
      />
    </ManufacturerPage>
  );
}
