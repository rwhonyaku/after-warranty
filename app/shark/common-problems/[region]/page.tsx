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
    title: `Common Shark Problems After Warranty in ${regionLabel}`,
    description:
      `A Shark post-warranty problems guide for ${regionLabel}, focused on the symptoms owners search for most often and what those symptoms suggest about parts, repair scope, or replacement pressure.`,
    alternates: {
      canonical: `/shark/common-problems/${region}`,
    },
  };
}

export default function SharkCommonProblemsPage({
  params,
}: {
  params: Promise<{ region: string }>;
}) {
  const { region } = React.use(params);

  if (!allowedRegions.includes(region)) {
    notFound();
  }

  const commonProblems = {
    headers: ["Part or area", "Typical symptom", "What that usually points to"],
    rows: [
      ["Battery and charging system", "Short runtime, failure to charge, or a sharp drop in power", "This can point to the battery itself, but it can also push the decision toward a broader charging or electronics question."],
      ["Brushroll, floorhead, or nozzle area", "Brush not spinning, poor pickup, or a head that no longer works properly", "This often starts as a part question, but it can grow if the fault is not limited to the visible assembly."],
      ["Airflow and filter path", "Loss of suction, pulsing, or repeated cut-out", "Some symptoms that feel like motor trouble begin with blockages, filters, or airflow restriction instead."],
      ["Robot vacuum systems", "Docking trouble, navigation issues, or erratic cleaning behaviour", "A robot symptom can look simple at search-query level but lead to a much bigger repair decision once the root cause is less obvious."],
      ["Main body or controls", "Power problems, intermittent shutdown, or a machine that no longer behaves normally", "This can move the issue from routine upkeep into a broader product fault."],
    ],
  };

  const outlookData = {
    headers: ["Product line", "Repair pattern", "What changes the repair outlook"],
    rows: [
      ["Cordless vacuums", "A small symptom can still lead to a larger assembly discussion", "The gap between the symptom and the eventual repair decision is often what surprises owners after warranty."],
      ["Robot vacuums", "Power, docking, and navigation issues can overlap", "The main confusion is whether the issue still looks like one replaceable part or a wider system problem."],
      ["Floor and carpet cleaners", "Brush, pump, and fluid-path issues do not all mean the same repair size", "A simple-looking cleaning problem can still widen once the product is no longer just dealing with one replaceable part."],
    ],
  };

  return (
    <ManufacturerPage
      title={`Shark common problems (${region.toUpperCase()})`}
      intro="A quick guide to the Shark symptoms people search for most often after warranty, focused on whether each one still looks like a smaller fix or something more expensive."
      region={region}
      manufacturer="Shark"
      extraNavItems={[{ name: "Parts", slug: "parts-support" }]}
    >
      <QuickAnswer
        title="Short answer"
        bullets={[
          "This page is about what the symptom is likely to turn into: routine upkeep, a replacement part, or a bigger repair.",
          "Battery, airflow, brushroll, robot, and power-cut symptoms do not all belong in the same repair category.",
          "What makes it confusing is that similar Shark symptoms can end very differently: one replacement part, a larger internal fault, or a repair that no longer looks worth it.",
        ]}
      >
        <p>
          Most people searching for common Shark problems are already dealing
          with a product that is losing power, cutting out, not picking up
          properly, not charging, or not behaving normally. What they want to
          know is whether this sounds like a smaller fix or the start of a more
          expensive repair. Once that starts to narrow down, the next useful
          pages are usually{" "}
          <Link href={`/shark/repair-options/${region}`}>repair options</Link>{" "}
          and{" "}
          <Link href={`/shark/cost-ranges/${region}`}>cost ranges</Link>.
        </p>
      </QuickAnswer>

      <h3>What different Shark symptoms tend to signal</h3>
      <PolicyTable headers={commonProblems.headers} rows={commonProblems.rows} />

      <h3>Why the same symptom can lead to very different repair outcomes</h3>
      <PolicyTable headers={outlookData.headers} rows={outlookData.rows} />

      <section className="editorial-note">
        <strong>Why this matters before the symptom gets priced.</strong>
        <p>
          A common mistake is to assume the symptom tells you how big the fix
          will be. In real Shark cases, a small-sounding problem can still turn
          into a larger repair if it is not tied to a simple user-replaceable
          part. If the symptom still sounds like a known part issue,{" "}
          <Link href={`/shark/parts-support/${region}`}>
            parts and support options
          </Link>{" "}
          may be the better next step.
        </p>
      </section>

      <section className="grid-2">
        <ActionChecklist
          title="What makes symptom interpretation harder than it first seems"
          items={[
            "Separate airflow and maintenance symptoms from faults that point to batteries, controls, or the main body of the product.",
            "Use repair options and parts support once the symptom looks bigger than routine upkeep.",
            "Use replace-vs-repair earlier if more than one symptom points to broader wear instead of one isolated fault.",
          ]}
        />

        <RelatedLinks
          title="Next pages once the symptom starts narrowing the real problem"
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
          { label: "Shark Support", href: "https://support.sharkclean.com/hc/en-us" },
          { label: "Shark Parts and Accessories", href: "https://www.sharkclean.com/parts-and-accessories/" },
        ]}
      />
    </ManufacturerPage>
  );
}
