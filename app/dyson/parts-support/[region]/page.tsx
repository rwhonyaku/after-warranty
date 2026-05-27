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
    title: `Dyson Parts and Support Options in ${regionLabel}`,
    description:
      `A Dyson spare-parts and support guide for ${regionLabel}, covering when a problem still looks like a parts lookup, when it becomes a support case, and when it turns into a repair decision.`,
    alternates: {
      canonical: `/dyson/parts-support/${region}`,
    },
  };
}

export default function DysonPartsSupportPage({ params }: { params: Promise<{ region: string }> }) {
  const { region } = React.use(params);

  if (!allowedRegions.includes(region)) {
    notFound();
  }

  const supportPathData = {
    headers: ["Starting point", "What usually happens next", "What changes the decision"],
    rows: [
      ["A clear replacement-part question", "Official spare-parts lookup", "This is the cleanest route when the issue is already narrowed down to a known part or accessory."],
      ["A symptom without a clear diagnosis", "Official support or troubleshooting", "Buying a part too early can miss a fault that belongs in a wider service conversation."],
      ["A likely internal or service-only fault", "Repair options and service booking", "The main issue is no longer parts availability alone. It is whether the repair path is practical and proportionate."],
      ["An older machine with uncertain parts access", "Replace-vs-repair context", "At that point the key question is whether continuing to search for parts is still worth it compared to moving on to a repair or replacement decision."],
    ],
  };

  const partsRealityData = {
    headers: ["Part type", "What usually happens", "Where it gets confusing"],
    rows: [
      ["User-replaceable parts and accessories", "More likely to appear in official parts lookup", "Model matching matters because similar-looking Dyson parts are not always interchangeable."],
      ["Internal assemblies", "More likely to sit behind service handling", "The cost issue often comes from the assembly and labour together, not from a small part by itself."],
      ["Older or less common parts", "Availability can tighten over time", "The friction is often part availability plus the remaining value of the machine."],
      ["Support-guided service cases", "Handled through support and repair channels rather than direct parts lookup", "The question becomes turnaround, total spend, and whether the fix still feels proportionate."],
    ],
  };

  return (
    <ManufacturerPage
      title={`Dyson parts and support options (${region.toUpperCase()})`}
      intro="A practical guide to the point where a Dyson problem stops being a simple warranty question and turns into parts lookup, support handling, or a bigger repair decision."
      region={region}
      manufacturer="Dyson"
      extraNavItems={[{ name: "Parts", slug: "parts-support" }]}
    >
      <QuickAnswer
        title="Short answer"
        bullets={[
          "This page is really about where the problem belongs: a simple parts lookup or a bigger repair question.",
          "A clear battery, filter, or accessory replacement is different from a machine fault that still needs diagnosis.",
          "What makes this confusing is that parts availability, model matching, and service-only handling can all sit underneath the same search for 'Dyson parts' or 'Dyson support.'",
        ]}
      >
        <p>
          Most people searching for Dyson parts or support are already past the
          warranty question. At that point, the real issue is whether this is a
          simple replacement part or something that could turn into a bigger
          repair with more cost attached to it. If it already sounds bigger
          than a straightforward part swap, the next useful pages are{" "}
          <Link href={`/dyson/repair-options/${region}`}>repair options</Link>{" "}
          and{" "}
          <Link href={`/dyson/cost-ranges/${region}`}>cost ranges</Link>.
        </p>
      </QuickAnswer>

      <h3>Which questions still belong in parts lookup and which do not</h3>
      <PolicyTable headers={supportPathData.headers} rows={supportPathData.rows} />

      <h3>Why parts access can stop being the real issue</h3>
      <PolicyTable headers={partsRealityData.headers} rows={partsRealityData.rows} />

      <section className="editorial-note">
        <strong>Why this matters before money gets spent.</strong>
        <p>
          A common mistake is treating every issue like it can be fixed with a
          simple part. In many cases, the problem is already bigger than that,
          and the cost comes from larger components or service, not just a
          small replacement part. When that happens,{" "}
          <Link href={`/dyson/replace-vs-repair/${region}`}>
            replace-vs-repair
          </Link>{" "}
          becomes more useful than continuing the parts search.
        </p>
      </section>

      <section className="grid-2">
        <ActionChecklist
          title="What makes this decision harder than it first looks"
          items={[
            "Match the exact model before assuming a part will fit across Dyson lines.",
            "Separate a known replacement part from a symptom that still needs troubleshooting.",
            "If the issue involves internal parts, treat it as a repair decision, not just a parts lookup.",
          ]}
        />

        <RelatedLinks
          title="Next pages when parts lookup stops answering the problem"
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
          ]}
        />
      </section>

      <Sources
        items={[
          { label: `Dyson Support (${regionLabels[region]})`, href: "https://www.dyson.com/support" },
          { label: "Dyson Spare Parts", href: "https://www.dyson.com/spare-parts" },
          { label: "Dyson Repairs and Servicing", href: "https://www.dyson.com/support/repairs-and-servicing-information" },
        ]}
      />
    </ManufacturerPage>
  );
}
