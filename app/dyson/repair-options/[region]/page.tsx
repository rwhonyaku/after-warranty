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
    title: `Dyson Repair Options in ${regionLabel}`,
    description:
      `Compare Dyson repair options in ${regionLabel}, including official service, support-led repair handling, independent repair, and owner-managed parts replacement.`,
    alternates: {
      canonical: `/dyson/repair-options/${region}`,
    },
  };
}

export default function DysonRepairOptionsPage({ params }: { params: Promise<{ region: string }> }) {
  const { region } = React.use(params);

  if (!allowedRegions.includes(region)) {
    notFound();
  }

  const repairPathways = {
    headers: ["Pathway", "What usually happens", "What changes the decision"],
    rows: [
      ["Official Dyson service", "Handled through Dyson support and its repair process", "This route matters most when the fault may involve service-only parts, larger assemblies, or model-specific handling."],
      ["Authorized third-party providers", "Third-party service working within Dyson's wider support network", "The main questions are whether the provider is available for the product line and what repair scope they actually handle."],
      ["Independent repair shops", "Outside Dyson's own support channel", "This can suit faults that are narrower than a full factory-style repair, but parts access and repair scope are not the same as official service."],
      ["Owner-managed part replacement", "The owner sources a part and handles replacement directly", "This only fits when the fault is already narrowed down to a clear user-replaceable item."],
    ],
  };

  const serviceAvailability = {
    headers: ["Service format", "Where it shows up", "What changes once that format is involved"],
    rows: [
      ["Carry-in service", "Where there is a physical service location or intake point", "It can reduce shipping and coordination, but it still depends on the product line and the local service footprint."],
      ["Mail-in service", "Common where support is centralized", "Transit, packaging, delays, and handling become part of the total repair process, not just the repair itself."],
      ["Engineer or in-home formats", "Only on some products or in some markets", "What matters here is not convenience alone, but whether the service format changes the amount of coordination, waiting, or follow-up involved."],
    ],
  };

  return (
    <ManufacturerPage
      title={`Dyson repair options (${region.toUpperCase()})`}
      intro="A look at the repair paths Dyson owners end up weighing once the problem moves past a simple warranty question and into paid service, local repair, or a part replacement."
      region={region}
      manufacturer="Dyson"
      extraNavItems={[{ name: "Parts", slug: "parts-support" }]}
    >
      <QuickAnswer
        title="Short answer"
        bullets={[
          "This page is not just about repair price. It is about whether the fault belongs with official service, a local repair shop, or a simple replacement part.",
          "Official service matters most when the issue may involve internal assemblies or support-only parts access.",
          "The hard part is that the same symptom can sound minor at first and then turn into a much bigger repair once parts access, service format, or assembly scope become clear.",
        ]}
      >
        <p>
          Most people looking at Dyson repair options are already trying to
          keep the problem from getting more expensive. What makes it difficult
          is that not every route is solving the same size of repair. An
          obvious battery issue and an intermittent shutdown are not the same
          kind of repair decision, even if both start with the same search for
          help. If the issue still sounds more like a part than a full repair,{" "}
          <Link href={`/dyson/parts-support/${region}`}>
            parts and support options
          </Link>{" "}
          may be the better next stop.
        </p>
      </QuickAnswer>

      <h3>Why different repair routes solve different versions of the problem</h3>
      <PolicyTable headers={repairPathways.headers} rows={repairPathways.rows} />

      <h3>Where service format changes the decision</h3>
      <PolicyTable headers={serviceAvailability.headers} rows={serviceAvailability.rows} />

      <section className="editorial-note">
        <strong>Why this matters before comparing quotes.</strong>
        <p>
          The mistake is comparing quotes before working out what kind of repair
          is actually being quoted. A local fix, a service-led repair, and a
          parts-only replacement can look similar at first, but they are not
          solving the same problem. Official service may price the job as a
          larger assembly or full machine servicing, while an independent
          repair may be trying to fix a narrower fault. Parts access can also
          change the size of the repair itself. That is why the "same repair"
          often is not actually the same repair. That is also why{" "}
          <Link href={`/dyson/cost-ranges/${region}`}>cost ranges</Link> and{" "}
          <Link href={`/dyson/replace-vs-repair/${region}`}>
            when repair stops making sense
          </Link>{" "}
          are closely tied to this page.
        </p>
      </section>

      <section className="grid-2">
        <ActionChecklist
          title="What makes the repair-path choice harder than it sounds"
          items={[
            "Start with the likely repair type: replacement part, uncertain symptom, or internal fault.",
            "Read cost ranges alongside this page if the issue already points toward formal service or a larger assembly.",
            "Use parts support if the real question is still about finding the right part rather than booking a repair.",
          ]}
        />

        <RelatedLinks
          title="Next pages once the route starts affecting cost or replacement pressure"
          links={[
            {
              href: `/dyson/cost-ranges/${region}`,
              label: "Dyson repair cost ranges",
            },
            {
              href: `/dyson/common-problems/${region}`,
              label: "Common Dyson problems after warranty",
            },
            {
              href: `/dyson/replace-vs-repair/${region}`,
              label: "Dyson replace vs. repair",
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
          { label: `Dyson Service Information (${region.toUpperCase()})`, href: "https://www.dyson.com/support/repairs-and-servicing-information" },
          { label: "Dyson Spare Parts and Guides", href: "https://www.dyson.com/spare-parts" },
          { label: "Dyson Warranty Terms", href: "https://www.dyson.com/inside-dyson/terms/the-dyson-limited-warranty" },
        ]}
      />
    </ManufacturerPage>
  );
}
