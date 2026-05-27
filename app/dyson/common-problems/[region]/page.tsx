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
    title: `Common Dyson Problems After Warranty in ${regionLabel}`,
    description:
      `A Dyson post-warranty problems guide for ${regionLabel}, focused on the symptoms owners search for most often and what those symptoms suggest about parts, repair scope, or replacement pressure.`,
    alternates: {
      canonical: `/dyson/common-problems/${region}`,
    },
  };
}

export default function DysonCommonProblemsPage({ params }: { params: Promise<{ region: string }> }) {
  const { region } = React.use(params);

  if (!allowedRegions.includes(region)) {
    notFound();
  }

  const commonProblems = {
    headers: ["Part or area", "Typical symptom", "What that usually points to"],
    rows: [
      ["Trigger or power-control area", "Power cuts in and out or fails to stay on", "This can point to a switch or control issue rather than a simple consumable part."],
      ["Motor or airflow system", "Pulsing, shutdown, or warning-light behaviour", "The distinction matters because the problem may be a blockage or filter issue, but it can also point to a deeper machine fault."],
      ["Cyclone, seals, or body", "Loss of suction, unusual air noise, or leakage", "This can move the question from routine maintenance into body or seal-related repair scope."],
      ["Filter and maintenance path", "Restricted airflow or repeated cut-out under load", "Some symptoms that look like motor failure begin with airflow restriction instead."],
      ["Battery system", "Short runtime, failure to charge, or sharp performance drop", "Battery-related symptoms often create a clearer parts decision than a broader internal fault."],
    ],
  };

  const outlookData = {
    headers: ["Product line", "Repair pattern", "What changes the repair outlook"],
    rows: [
      ["Cordless vacuums", "A small symptom can still lead to a larger assembly discussion", "The gap between the symptom and the eventual quote is often what surprises owners after warranty."],
      ["Purifiers and air treatment", "Sensor, airflow, and maintenance issues can overlap", "The main confusion is whether the problem still looks like routine upkeep or has moved into paid service."],
      ["Hair care", "Cords, attachments, and body faults create different support paths", "Parts access and service handling can matter as much as the original symptom."],
    ],
  };

  return (
    <ManufacturerPage
      title={`Dyson common problems (${region.toUpperCase()})`}
      intro="A quick guide to the Dyson symptoms people search for most often after warranty, focused on whether each one still looks like a smaller fix or something more expensive."
      region={region}
      manufacturer="Dyson"
      extraNavItems={[{ name: "Parts", slug: "parts-support" }]}
    >
      <QuickAnswer
        title="Short answer"
        bullets={[
          "This page is about what the symptom is likely to turn into: routine upkeep, a replacement part, or a bigger repair.",
          "Battery, filter, airflow, and power-cut symptoms do not all belong in the same repair category.",
          "What makes it confusing is that symptom severity and repair severity are not the same thing: a blocked airflow path, a replacement part, or a repair that gets much bigger once the machine is opened up can all start from similar signs.",
        ]}
      >
        <p>
          Most people searching for common Dyson problems are already dealing
          with a machine that is pulsing, cutting out, losing suction, or not
          holding charge. What they want to know is whether this sounds like a
          smaller fix or the start of a more expensive repair. Once that starts
          to narrow down, the next useful pages are usually{" "}
          <Link href={`/dyson/repair-options/${region}`}>repair options</Link>{" "}
          and{" "}
          <Link href={`/dyson/cost-ranges/${region}`}>cost ranges</Link>. If
          the symptom already makes the machine feel older or harder to justify,
          <Link href={`/dyson/replace-vs-repair/${region}`}>
            {" "}replace-vs-repair
          </Link>{" "}
          is usually the next decision page.
        </p>
      </QuickAnswer>

      <h3>What different Dyson symptoms tend to signal</h3>
      <PolicyTable headers={commonProblems.headers} rows={commonProblems.rows} />

      <h3>Why the same symptom can lead to very different repair outcomes</h3>
      <PolicyTable headers={outlookData.headers} rows={outlookData.rows} />

      <section className="editorial-note">
        <strong>Why this matters before the symptom gets priced.</strong>
        <p>
          A common mistake is to assume the symptom tells you how big the fix
          will be. In real cases, a small-sounding problem can still turn into
          a larger repair if it is not tied to a simple user-replaceable part.
          Pulsing may still be airflow restriction, weak suction may still
          widen into a body or seal repair, and intermittent shutdown may
          move into control-system territory. If the symptom still sounds like
          a known part issue,{" "}
          <Link href={`/dyson/parts-support/${region}`}>
            parts and support options
          </Link>{" "}
          may be the better next step.
        </p>
      </section>

      <section className="grid-2">
        <ActionChecklist
          title="Why the symptom does not always match the repair"
          items={[
            "Separate airflow and maintenance symptoms from faults that point to controls, battery, or the main body of the machine.",
            "Treat uncertainty itself as part of the problem, because owners are often trying to tell maintenance issues from battery trouble, motor trouble, or a larger internal fault.",
            "Use repair options and parts support once the symptom looks bigger than routine upkeep.",
            "Use replace-vs-repair earlier if wear is showing up in several parts of the machine instead of one isolated fault.",
          ]}
        />

        <RelatedLinks
          title="Next pages once the symptom starts narrowing the real problem"
          links={[
            {
              href: `/dyson/repair-options/${region}`,
              label: "Dyson repair options and service paths",
            },
            {
              href: `/dyson/cost-ranges/${region}`,
              label: "Dyson repair cost ranges",
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
          { label: `Dyson Support (${region.toUpperCase()})`, href: "https://www.dyson.com/support" },
          { label: "Dyson Spare Parts", href: "https://www.dyson.com/support/journey/spare-parts" },
        ]}
      />
    </ManufacturerPage>
  );
}
