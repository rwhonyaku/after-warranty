import Link from "next/link";
import { ManufacturerPage } from "../../../components/ManufacturerPage";
import {
  ActionChecklist,
  QuickAnswer,
  RelatedLinks,
} from "../../../components/ReferenceCallouts";
import { PolicyTable } from "../../../components/PolicyTable";
import { Sources } from "../../../components/Sources";

export const metadata = {
  title: "Dyson Out of Warranty: What Changes Now",
  description:
    "A direct Dyson out-of-warranty guide covering what actually changes once coverage ends, when repair still makes sense, when replacement starts entering the decision, and where to go next.",
  alternates: {
    canonical: "/dyson/out-of-warranty",
  },
};

const situationData = {
  headers: ["Situation", "What it usually turns into", "What changes the next step"],
  rows: [
    [
      "A simple replacement part",
      "Often still a parts lookup rather than a full repair decision.",
      "The main question is whether the exact part is easy to match and whether the issue is really limited to that part.",
    ],
    [
      "Battery or runtime issue",
      "Can stay fairly contained, but not always.",
      "The decision changes if the problem is clearly the battery versus a wider charging or machine fault.",
    ],
    [
      "Cleaner head or attachment problem",
      "Sometimes stays in one assembly, sometimes grows quickly.",
      "What matters is whether the fault is limited to the head itself or is tied to the main machine as well.",
    ],
    [
      "Main body or internal fault",
      "Usually becomes a bigger repair decision rather than a simple replacement-part question.",
      "This is where service handling, larger assemblies, and repair cost start to matter more than the original symptom.",
    ],
    [
      "An older machine with broader wear",
      "Usually turns into a repair-versus-replacement decision.",
      "The issue is no longer just today's fault, but whether another bill still makes sense on the same machine.",
    ],
  ],
};

const repairData = {
  headers: ["Repair still looks worth considering when...", "Why it still holds up"],
  rows: [
    [
      "The problem is narrow and clearly tied to one part or one assembly",
      "That keeps the decision closer to a contained repair instead of a wider service bill.",
    ],
    [
      "The rest of the machine still feels solid",
      "A repair makes more sense when it is fixing one real problem rather than propping up a machine that is already slipping in other ways.",
    ],
    [
      "The likely repair path still looks simpler than replacing the machine",
      "That is usually where the repair question still belongs in cost and parts context, not replacement pressure.",
    ],
  ],
};

const replacementData = {
  headers: ["Replacement starts to make more sense when...", "Why the decision changes"],
  rows: [
    [
      "The issue has moved beyond one practical part or one clear assembly",
      "That is usually where the bill stops being about a small fix and starts growing into a larger repair outcome.",
    ],
    [
      "The machine already has broader wear, weaker runtime, or more than one recurring issue",
      "The repair may solve the current problem without solving the fact that another bill may not be far behind.",
    ],
    [
      "Parts lookup no longer answers the real question",
      "Once the problem is bigger than model matching and replacement parts, the decision has usually shifted to repair-versus-replacement.",
    ],
  ],
};

const partsLookupData = {
  headers: ["When parts lookup still helps", "When it usually stops helping"],
  rows: [
    [
      "The issue is already narrowed down to a battery, filter, cleaner head, or another known replacement part.",
      "The symptom still needs diagnosis, or the problem sounds larger than one obvious part.",
    ],
    [
      "The exact model is clear and the replacement question is specific.",
      "The owner is searching for parts because the machine is failing, but the real issue may already be a larger repair decision.",
    ],
    [
      "The machine still looks worth spending on if the fix stays contained.",
      "The search for parts is starting to compete with the question of whether the machine should be replaced instead.",
    ],
  ],
};

export default function DysonOutOfWarrantyPage() {
  return (
    <ManufacturerPage
      title="Dyson out of warranty: what changes now"
      intro="A direct guide to what usually changes once a Dyson is out of warranty, why the issue often shifts from coverage to cost or parts, and how to tell what kind of post-warranty problem you are actually dealing with."
      region="Global"
      manufacturer="Dyson"
    >
      <QuickAnswer
        title="Short answer"
        bullets={[
          "Once a Dyson is out of warranty, the main question usually stops being coverage and becomes cost, parts, service path, or replacement pressure.",
          "Some post-warranty problems still look like a simple battery, filter, or cleaner-head issue. Others widen fast into a bigger repair decision.",
          "The useful first step is not guessing the outcome. It is identifying which kind of out-of-warranty situation the machine has actually fallen into.",
        ]}
      >
        <p>
          Most people searching for &quot;Dyson out of warranty&quot; are not trying to
          read policy language. They are trying to work out what actually
          changed and whether the machine still looks fixable at a sensible
          cost. If the main question is still what the warranty line changed,
          the best next step is usually the{" "}
          <Link href="/dyson">Dyson regional section</Link>. If the main
          question is already whether the machine still looks worth fixing, the
          next useful pages are the repair-cost and replace-vs-repair pages in
          that section.
        </p>
      </QuickAnswer>

      <h3>The main situations Dyson owners usually fall into</h3>
      <PolicyTable headers={situationData.headers} rows={situationData.rows} />

      <h3>What still makes a Dyson repair worth considering</h3>
      <PolicyTable headers={repairData.headers} rows={repairData.rows} />

      <h3>What starts pushing the decision toward replacement</h3>
      <PolicyTable headers={replacementData.headers} rows={replacementData.rows} />

      <h3>When parts lookup still helps and when it stops helping</h3>
      <PolicyTable headers={partsLookupData.headers} rows={partsLookupData.rows} />

      <section className="editorial-note">
        <strong>Why this page exists.</strong>
        <p>
          Once a Dyson is out of warranty, owners often search broad terms
          because the machine is not working and they have not yet narrowed the
          problem down. The real value is not another policy summary. It is
          getting quickly from &quot;out of warranty&quot; to the right next decision:{" "}
          <Link href="/dyson/parts-support/usa">parts</Link>,{" "}
          <Link href="/dyson/repair-options/usa">repair</Link>,{" "}
          <Link href="/dyson/cost-ranges/usa">cost</Link>, or{" "}
          <Link href="/dyson/replace-vs-repair/usa">replacement</Link>.
        </p>
      </section>

      <section className="grid-2">
        <ActionChecklist
          title="Where to go next"
          items={[
            "Use warranty-expired if the main question is what coverage ending actually changed.",
            "Use common-problems if the symptom still needs to be framed before thinking about cost.",
            "Use parts-support if the issue still looks like a battery, filter, or cleaner-head replacement.",
            "Use repair-options and cost-ranges if the machine already sounds bigger than one straightforward part.",
            "Use replace-vs-repair if the real question is whether another bill still makes sense on this machine.",
          ]}
        />

        <RelatedLinks
          title="Best next pages (USA entry points)"
          links={[
            {
              href: "/dyson/warranty-expired/usa",
              label: "Dyson warranty expired: what changes now",
            },
            {
              href: "/dyson/common-problems/usa",
              label: "Common Dyson problems after warranty",
            },
            {
              href: "/dyson/parts-support/usa",
              label: "Dyson parts and support options",
            },
            {
              href: "/dyson/repair-options/usa",
              label: "Dyson repair options and service paths",
            },
            {
              href: "/dyson/cost-ranges/usa",
              label: "Dyson repair cost ranges",
            },
            {
              href: "/dyson/replace-vs-repair/usa",
              label: "Dyson replace vs. repair",
            },
          ]}
        />
      </section>

      <Sources
        items={[
          { label: "Dyson Global Support", href: "https://www.dyson.com/support" },
          { label: "Dyson Spare Parts", href: "https://www.dyson.com/spare-parts" },
          { label: "Dyson Repairs and Servicing", href: "https://www.dyson.com/support/repairs-and-servicing-information" },
          { label: "Dyson Limited Warranty Terms", href: "https://www.dyson.com/inside-dyson/terms/the-dyson-limited-warranty" },
        ]}
      />
    </ManufacturerPage>
  );
}
