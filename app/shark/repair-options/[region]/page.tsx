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
    title: `Shark Repair Options in ${regionLabel}`,
    description:
      `Compare Shark repair options in ${regionLabel}, including official support, parts-led fixes, independent repair, and when a problem is bigger than a simple replacement part.`,
    alternates: {
      canonical: `/shark/repair-options/${region}`,
    },
  };
}

export default function SharkRepairOptionsPage({
  params,
}: {
  params: Promise<{ region: string }>;
}) {
  const { region } = React.use(params);

  if (!allowedRegions.includes(region)) {
    notFound();
  }

  const repairPathways = {
    headers: ["Pathway", "What usually happens", "What changes the decision"],
    rows: [
      ["Official Shark support", "Handled through Shark support, troubleshooting, and brand-led service outcomes", "This route matters most when the issue may still be resolved through official support, replacement handling, or model-specific help."],
      ["Parts-led replacement", "The owner starts with a known battery, filter, brushroll, floorhead, or accessory need", "This only fits when the issue is already narrow enough that the fix still looks like one clear replacement part."],
      ["Independent repair shop", "Outside Shark's own support channel", "This can suit some vacuum or floor-care repairs, but the fit changes quickly if the issue depends on model-specific parts or broader internal work."],
      ["Replace-versus-repair path", "The problem is treated as a value decision rather than a straightforward fix", "This becomes more relevant once the repair looks bigger than one practical part or one clean service outcome."],
    ],
  };

  const serviceAvailability = {
    headers: ["Support format", "Where it shows up", "What changes once that format is involved"],
    rows: [
      ["Self-help and troubleshooting", "Often the first stop for Shark products", "This helps most when the issue still looks like maintenance, setup, or one bounded part problem."],
      ["Replacement-part route", "More useful when the exact part is already clear", "The decision changes if the problem turns out to be bigger than the part you started looking for."],
      ["Service or outside repair handling", "More relevant when the product fault no longer looks simple", "Once the fix widens into internal parts or a larger assembly, the path matters as much as the part itself."],
    ],
  };

  return (
    <ManufacturerPage
      title={`Shark repair options (${region.toUpperCase()})`}
      intro="A look at the repair paths Shark owners end up weighing once the problem moves past a simple warranty question and into support, parts replacement, local repair, or replacement."
      region={region}
      manufacturer="Shark"
      extraNavItems={[{ name: "Parts", slug: "parts-support" }]}
    >
      <QuickAnswer
        title="Short answer"
        bullets={[
          "This page is not just about repair price. It is about whether the fault belongs with Shark support, a parts-led fix, outside repair, or a replace-versus-repair decision.",
          "Official support matters most when the issue still needs model-specific help or a brand-led resolution path.",
          "The hard part is that a Shark symptom can sound small at first and then turn into a much bigger repair once the fix is no longer just one battery, filter, or floorhead.",
        ]}
      >
        <p>
          Most people looking at Shark repair options are already trying to
          keep the problem from getting more expensive. What makes it difficult
          is that not every route is solving the same size of problem. If the
          issue still sounds more like a known part than a full repair,{" "}
          <Link href={`/shark/parts-support/${region}`}>
            parts and support options
          </Link>{" "}
          may be the better next stop.
        </p>
      </QuickAnswer>

      <h3>Why different repair routes solve different versions of the problem</h3>
      <PolicyTable headers={repairPathways.headers} rows={repairPathways.rows} />

      <h3>Where the support path changes the decision</h3>
      <PolicyTable headers={serviceAvailability.headers} rows={serviceAvailability.rows} />

      <section className="editorial-note">
        <strong>Why this matters before comparing outcomes.</strong>
        <p>
          The mistake is comparing routes before working out what kind of fix
          is actually being discussed. A battery swap, a floorhead replacement,
          and a deeper internal fault can all start from the same complaint,
          but they do not stay in the same repair path. That is also why{" "}
          <Link href={`/shark/cost-ranges/${region}`}>cost ranges</Link> and{" "}
          <Link href={`/shark/replace-vs-repair/${region}`}>
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
            "Read cost ranges alongside this page if the issue already points beyond one practical replacement part.",
            "Use parts support if the real question is still about finding the exact Shark part rather than choosing a bigger repair path.",
          ]}
        />

        <RelatedLinks
          title="Next pages once the route starts affecting cost or replacement pressure"
          links={[
            {
              href: `/shark/cost-ranges/${region}`,
              label: "Shark repair cost ranges",
            },
            {
              href: `/shark/common-problems/${region}`,
              label: "Common Shark problems after warranty",
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
          { label: "Shark Contact and Product Support", href: "https://support.sharkclean.com/hc/en-us/articles/12106914584220-Contact-Us" },
          { label: "Shark Parts and Accessories", href: "https://www.sharkclean.com/parts-and-accessories/" },
        ]}
      />
    </ManufacturerPage>
  );
}
