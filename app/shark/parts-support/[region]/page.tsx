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
    title: `Shark Parts and Support Options in ${regionLabel}`,
    description:
      `A Shark spare-parts and support guide for ${regionLabel}, covering when a problem still looks like a parts lookup, when it becomes a support case, and when it turns into a repair decision.`,
    alternates: {
      canonical: `/shark/parts-support/${region}`,
    },
  };
}

export default function SharkPartsSupportPage({
  params,
}: {
  params: Promise<{ region: string }>;
}) {
  const { region } = React.use(params);

  if (!allowedRegions.includes(region)) {
    notFound();
  }

  const supportPathData = {
    headers: ["Starting point", "What usually happens next", "What changes the decision"],
    rows: [
      ["A clear replacement-part question", "Official parts and accessories lookup", "This is the cleanest route when the issue is already narrowed down to a battery, filter, floorhead, brushroll, or accessory."],
      ["A symptom without a clear diagnosis", "Official support or troubleshooting", "Buying a part too early can miss a fault that belongs in a wider service or replace-versus-repair conversation."],
      ["A likely internal or service-heavy fault", "Repair options and support handling", "The main issue is no longer just whether the part exists. It is whether the product still has a repair path that makes sense."],
      ["An older product with uncertain parts access", "Replace-vs-repair context", "At that point the question becomes whether continuing to search for parts is still worth it compared to moving on to a repair or replacement decision."],
    ],
  };

  const partsRealityData = {
    headers: ["Part type", "What usually happens", "Where it gets confusing"],
    rows: [
      ["User-replaceable parts and accessories", "More likely to appear in official parts lookup", "Model matching matters because similar-looking Shark parts are not always interchangeable."],
      ["Batteries and charging-related parts", "Often one of the first post-warranty decisions people look at", "A battery symptom can still be confused with a broader charging or electronics issue."],
      ["Internal assemblies", "More likely to move beyond a simple parts search", "The cost issue often comes from the wider repair, not just the small part people start looking for."],
      ["Older or less common parts", "Can get harder to find over time", "The real question becomes whether the product still justifies the search once parts friction and remaining value are both in play."],
    ],
  };

  return (
    <ManufacturerPage
      title={`Shark parts and support options (${region.toUpperCase()})`}
      intro="A practical guide to the point where a Shark problem stops being a simple warranty question and turns into parts lookup, support handling, or a bigger repair decision."
      region={region}
      manufacturer="Shark"
      extraNavItems={[{ name: "Parts", slug: "parts-support" }]}
    >
      <QuickAnswer
        title="Short answer"
        bullets={[
          "This page is really about where the problem belongs: a simple parts lookup or a bigger repair question.",
          "A clear battery, filter, brushroll, or floorhead replacement is different from a product fault that still needs diagnosis.",
          "What makes this confusing is that parts availability, model matching, and a larger repair issue can all sit underneath the same search for 'Shark parts' or 'Shark support.'",
        ]}
      >
        <p>
          Most people searching for Shark parts or support are already past the
          warranty question. At that point, the real issue is whether this is a
          simple replacement part or something that could turn into a bigger
          repair. If it already sounds bigger than a straightforward part
          swap,{" "}
          <Link href={`/shark/repair-options/${region}`}>repair options</Link>{" "}
          and{" "}
          <Link href={`/shark/cost-ranges/${region}`}>cost ranges</Link>.
        </p>
      </QuickAnswer>

      <h3>Which questions still belong in parts lookup and which do not</h3>
      <PolicyTable headers={supportPathData.headers} rows={supportPathData.rows} />

      <h3>Why parts access can stop being the real issue</h3>
      <PolicyTable headers={partsRealityData.headers} rows={partsRealityData.rows} />

      <section className="editorial-note">
        <strong>Why this matters before money gets spent.</strong>
        <p>
          A common mistake is treating every Shark issue like it can be fixed
          with one simple part. In many cases, the problem is already bigger
          than that, and the cost comes from a larger assembly or the fact that
          the product no longer looks worth more time and money. When that
          happens,{" "}
          <Link href={`/shark/replace-vs-repair/${region}`}>
            replace-vs-repair
          </Link>{" "}
          becomes more useful than continuing the parts search.
        </p>
      </section>

      <section className="grid-2">
        <ActionChecklist
          title="What makes this decision harder than it first looks"
          items={[
            "Match the exact model before assuming a part will fit across Shark lines.",
            "Separate a known replacement part from a symptom that still needs troubleshooting.",
            "If the issue involves internal parts, treat it as a repair decision, not just a parts lookup.",
          ]}
        />

        <RelatedLinks
          title="Next pages when parts lookup stops answering the problem"
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
          ]}
        />
      </section>

      <Sources
        items={[
          { label: "Shark Support", href: "https://support.sharkclean.com/hc/en-us" },
          { label: "Shark Parts and Accessories", href: "https://www.sharkclean.com/parts-and-accessories/" },
          { label: "Shark Contact and Product Support", href: "https://support.sharkclean.com/hc/en-us/articles/12106914584220-Contact-Us" },
        ]}
      />
    </ManufacturerPage>
  );
}
