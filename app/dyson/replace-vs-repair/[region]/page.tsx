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
    title: `Dyson Replace vs Repair in ${regionLabel}`,
    description:
      `A Dyson replace-versus-repair guide for ${regionLabel}, focused on when a repair still makes sense and when the cost starts to feel too high for the machine.`,
    alternates: {
      canonical: `/dyson/replace-vs-repair/${region}`,
    },
  };
}

export default function DysonReplacePage({ params }: { params: Promise<{ region: string }> }) {
  const { region } = React.use(params);

  if (!allowedRegions.includes(region)) {
    notFound();
  }

  const decisionData = {
    headers: ["Decision factor", "Repair still makes sense when...", "Replacement starts to make more sense when..."],
    rows: [
      ["Fault scope", "The issue appears limited to a battery, attachment, or another clearly bounded part.", "The likely fix has expanded into the main body, motor area, or another larger assembly."],
      ["Recent spend", "This is not the second or third paid repair in a short period.", "The current repair would add to a pattern of ongoing spend rather than solve one isolated problem."],
      ["Product age and wear", "The product is still in strong overall condition for its category.", "General wear makes another repair feel more likely, even if the current one is technically possible."],
      ["Replacement benchmark", "The repair remains clearly below the cost and hassle of replacing the machine.", "The repair starts to compete with the value of moving to a replacement instead."],
    ],
  };

  const comparisonData = {
    headers: ["Older-machine factor", "What a replacement changes", "What that does to the decision"],
    rows: [
      ["Shorter runtime, lower suction, or broader wear", "A replacement may reset several small frustrations at once", "A repair that fixes only one fault can feel weaker when the rest of the machine is also aging."],
      ["Older battery or attachment platform", "A newer model may have a cleaner parts and support path", "Platform age can matter when the next repair depends on parts access as much as the current fault."],
      ["Multiple worn areas", "A replacement may reduce the chance of another near-term spend", "The calculation changes when the current repair is unlikely to be the last one."],
    ],
  };

  return (
    <ManufacturerPage
      title={`Dyson replace vs. repair (${region.toUpperCase()})`}
      intro="A simple way to judge when a repair still makes sense and when it starts competing with replacement-level cost."
      region={region}
      manufacturer="Dyson"
      extraNavItems={[{ name: "Parts", slug: "parts-support" }]}
    >
      <QuickAnswer
        title="Short answer"
        bullets={[
          "This is not a policy question. It is a judgment call about whether the repair still makes sense for the machine you have.",
          "Repair makes more sense when the fault is narrow and the rest of the machine still feels solid.",
          "What makes this hard is that the quoted repair may fix the current problem without fixing the rest of the wear, weaker runtime, or the chance of another bill later.",
        ]}
      >
        <p>
          Most people land on replace-versus-repair after a quote or a likely
          fault has already made the machine feel expensive. The real question
          is not repair versus replacement overall, but whether this repair
          still makes sense on this machine now. That usually depends on both
          the likely{" "}
          <Link href={`/dyson/cost-ranges/${region}`}>repair cost</Link> and
          the kind of{" "}
          <Link href={`/dyson/repair-options/${region}`}>repair path</Link> the
          machine is now headed toward. If the situation still feels broader
          than one repair quote,{" "}
          <Link href="/dyson/out-of-warranty">Dyson out of warranty</Link>{" "}
          gives the bigger picture first.
        </p>
      </QuickAnswer>

      <h3>What makes a repair still worth it or too expensive to ignore</h3>
      <PolicyTable headers={decisionData.headers} rows={decisionData.rows} />

      <h3>Why replacement can make sense before the machine fully gives out</h3>
      <PolicyTable headers={comparisonData.headers} rows={comparisonData.rows} />

      <section className="editorial-note">
        <strong>Why this matters beyond the current quote.</strong>
        <p>
          What often pushes the decision toward replacement is not one bad
          quote by itself. It is the feeling that this repair is only the next
          bill on a machine that is already getting weaker in other ways. In
          some cases, the bigger issue is not just cost but confidence in the
          machine after intermittent faults, recurring battery concerns, or
          unclear internal problems. If the issue still sounds more like parts
          access than a full repair,{" "}
          <Link href={`/dyson/parts-support/${region}`}>
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
            "Ask whether fixing this one problem is worth it if the rest of the machine is already worn.",
          ]}
        />

        <RelatedLinks
          title="Next pages when the repair decision still feels unsettled"
          links={[
            {
              href: `/dyson/cost-ranges/${region}`,
              label: "Dyson repair cost ranges",
            },
            {
              href: `/dyson/repair-options/${region}`,
              label: "Dyson repair options and service paths",
            },
            {
              href: `/dyson/warranty-expired/${region}`,
              label: "Dyson warranty expired: what changes now",
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
          { label: "Dyson Sustainability", href: "https://www.dyson.com/newsroom/overview/sustainability" },
          { label: "Dyson Recycling and Support", href: "https://www.dyson.com/support/recycling" },
        ]}
      />
    </ManufacturerPage>
  );
}
