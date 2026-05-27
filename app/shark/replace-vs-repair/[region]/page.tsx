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
    title: `Shark Replace vs Repair in ${regionLabel}`,
    description:
      `A Shark replace-versus-repair guide for ${regionLabel}, focused on when a repair still makes sense and when the cost starts looking too high for the product.`,
    alternates: {
      canonical: `/shark/replace-vs-repair/${region}`,
    },
  };
}

export default function SharkReplacePage({
  params,
}: {
  params: Promise<{ region: string }>;
}) {
  const { region } = React.use(params);

  if (!allowedRegions.includes(region)) {
    notFound();
  }

  const decisionData = {
    headers: ["Decision factor", "Repair still makes sense when...", "Replacement starts to make more sense when..."],
    rows: [
      ["Fault scope", "The issue appears limited to a battery, floorhead, filter area, or another clearly bounded part", "The likely fix has expanded into the main body, internal drive, electronics, or another larger assembly."],
      ["Recent spend", "The product has not already needed repeated paid fixes", "The current repair looks like one more bill in a pattern instead of one isolated problem."],
      ["Product condition", "The rest of the product still feels solid and still fits the job it is meant to do", "The repair would fix one issue on a machine that is already showing age, weaker runtime, or broader wear."],
      ["Replacement comparison", "The repair remains clearly below the cost and hassle of moving on", "The repair starts competing with the value of replacing the product instead."],
    ],
  };

  const comparisonData = {
    headers: ["Older-product factor", "What a replacement changes", "What that does to the decision"],
    rows: [
      ["Shorter runtime, weaker suction, or broader wear", "A replacement can clear more than the one fault being looked at right now", "A repair that fixes only one problem looks weaker if the rest of the product is already slipping."],
      ["Older battery or accessory platform", "A replacement can reset the next parts-and-support cycle as well as the current problem", "The decision changes when the current fix does not look like the last bill."],
      ["A repair that has widened beyond one part", "Replacement removes the risk that the repair keeps expanding after the first quote", "This is where replacement starts to make more sense compared to the repair cost."],
    ],
  };

  return (
    <ManufacturerPage
      title={`Shark replace vs. repair (${region.toUpperCase()})`}
      intro="A simple way to judge when a Shark repair still makes sense and when it starts looking too expensive."
      region={region}
      manufacturer="Shark"
      extraNavItems={[{ name: "Parts", slug: "parts-support" }]}
    >
      <QuickAnswer
        title="Short answer"
        bullets={[
          "This is not a policy question. It is a judgment call about whether the repair still makes sense for the Shark product you have.",
          "Repair makes more sense when the fault is narrow and the rest of the product still feels solid.",
          "What makes this hard is that the quoted repair may fix the current problem without fixing the rest of the wear, weaker runtime, or the chance of another bill later.",
        ]}
      >
        <p>
          Most people land on replace-versus-repair after a quote or a likely
          fault has already made the product feel expensive. The real question
          is not repair versus replacement overall, but whether this repair
          still makes sense on this Shark product now. That usually depends on
          both the likely{" "}
          <Link href={`/shark/cost-ranges/${region}`}>repair cost</Link> and
          the kind of{" "}
          <Link href={`/shark/repair-options/${region}`}>repair path</Link>{" "}
          the product is now headed toward.
        </p>
      </QuickAnswer>

      <h3>What makes a repair still worth it or too expensive to ignore</h3>
      <PolicyTable headers={decisionData.headers} rows={decisionData.rows} />

      <h3>Why replacement can make sense before the product fully gives out</h3>
      <PolicyTable headers={comparisonData.headers} rows={comparisonData.rows} />

      <section className="editorial-note">
        <strong>Why this matters beyond the current quote.</strong>
        <p>
          What often pushes the decision toward replacement is not one bad
          quote by itself. It is the feeling that this repair is only the next
          bill on a product that is already getting weaker in other ways. If
          the issue still sounds more like parts access than a full repair,{" "}
          <Link href={`/shark/parts-support/${region}`}>
            parts and support options
          </Link>{" "}
          can help narrow that down first.
        </p>
      </section>

      <section className="grid-2">
        <ActionChecklist
          title="What makes this call harder than a simple price comparison"
          items={[
            "Start with the likely fault because a battery issue and a main-body fault are not the same kind of decision.",
            "Read cost ranges before making the repair-versus-replace call so the decision is tied to how big the repair is, not guesswork.",
            "Ask whether fixing this one problem is worth it if the rest of the product is already worn.",
          ]}
        />

        <RelatedLinks
          title="Next pages when the repair decision still feels unsettled"
          links={[
            {
              href: `/shark/cost-ranges/${region}`,
              label: "Shark repair cost ranges",
            },
            {
              href: `/shark/repair-options/${region}`,
              label: "Shark repair options and service paths",
            },
            {
              href: `/shark/warranty-expired/${region}`,
              label: "Shark warranty expired: what changes now",
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
          { label: "Shark Warranty Center", href: "https://support.sharkclean.com/hc/en-us/sections/4402873140370-Warranty" },
        ]}
      />
    </ManufacturerPage>
  );
}
