import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ManufacturerPage } from "./ManufacturerPage";
import { PolicyTable } from "./PolicyTable";
import {
  ActionChecklist,
  QuickAnswer,
  RelatedLinks,
} from "./ReferenceCallouts";
import { Sources } from "./Sources";

export const allowedRegions = ["usa", "uk", "canada", "australia"] as const;
export const regionLabels: Record<string, string> = {
  usa: "USA",
  uk: "UK",
  canada: "Canada",
  australia: "Australia",
};

export type BrandSlug =
  | "bosch"
  | "ge-appliances"
  | "haier"
  | "hotpoint"
  | "kitchenaid"
  | "lg"
  | "maytag"
  | "miele"
  | "samsung"
  | "whirlpool";

type PageKind =
  | "warranty-expired"
  | "cost-ranges"
  | "repair-options"
  | "replace-vs-repair"
  | "common-problems";

interface SourceItem {
  label: string;
  href: string;
}

interface BrandConfig {
  manufacturer: string;
  slug: BrandSlug;
  supportSource: SourceItem;
  warrantySource?: SourceItem;
  repairSource?: SourceItem;
  homeSource?: SourceItem;
  warrantyLens: string;
  warrantyShift: string;
  costLens: string;
  costJump: string;
  costContained: string;
}

const brandConfigs: Record<BrandSlug, BrandConfig> = {
  bosch: {
    manufacturer: "Bosch",
    slug: "bosch",
    supportSource: {
      label: "Bosch Service and Support",
      href: "https://www.bosch-home.com/service",
    },
    warrantySource: {
      label: "Bosch Warranty",
      href: "https://www.bosch-home.com/service/warranty",
    },
    repairSource: {
      label: "Bosch Repair Service",
      href: "https://www.bosch-home.com/us/owner-support/repair-service",
    },
    warrantyLens:
      "Bosch post-warranty questions often turn on the gap between a narrower part issue and a repair that has already moved into a larger kitchen-appliance assembly.",
    warrantyShift:
      "On Bosch products, the confusing part is often not whether coverage ended, but whether the problem now belongs in a parts conversation or a more expensive service call.",
    costLens:
      "Bosch cost questions usually hinge on whether the repair stays inside one pump, heater, or control-area issue, or grows into a larger assembly and service bill.",
    costJump:
      "On Bosch, the jump often happens when a tidy part-level problem turns into a larger assembly with service attached.",
    costContained:
      "Contained Bosch repairs usually stay inside one clear part or one bounded assembly.",
  },
  "ge-appliances": {
    manufacturer: "GE Appliances",
    slug: "ge-appliances",
    supportSource: {
      label: "GE Appliances Service and Support",
      href: "https://www.geappliances.com/ge/service-and-support/",
    },
    homeSource: {
      label: "GE Appliances Official Site",
      href: "https://www.geappliances.com/",
    },
    warrantyLens:
      "GE Appliances post-warranty decisions usually come down to whether the issue is still a straightforward household-appliance repair or the start of a bigger bill.",
    warrantyShift:
      "With GE Appliances, the practical question is often how fast a normal service issue turns into a paid visit plus a larger repair.",
    costLens:
      "GE Appliances cost questions are usually less about one headline number and more about whether the repair stays inside one common assembly or widens once diagnosis starts.",
    costJump:
      "The cost jump on GE Appliances usually shows up when the repair stops being one clear household fix and starts pulling in service time, follow-on parts, or both.",
    costContained:
      "Contained GE Appliances repairs are usually the ones that stay tied to one part or one easy-to-name assembly.",
  },
  haier: {
    manufacturer: "Haier",
    slug: "haier",
    supportSource: {
      label: "Haier Support",
      href: "https://www.haierappliances.com/support",
    },
    homeSource: {
      label: "Haier Global Service Support",
      href: "https://www.haier.com/global/service-support/",
    },
    warrantyLens:
      "Haier post-warranty questions usually turn on whether the appliance still looks worth a paid repair once service and parts are added.",
    warrantyShift:
      "With Haier, the real shift is often from a support question to a value question: is this still a repair worth paying for?",
    costLens:
      "Haier cost questions usually come down to whether the fix stays small or quickly starts competing with the value of the appliance.",
    costJump:
      "The jump on Haier repairs usually comes when the bill moves beyond one practical fix and starts stacking service and larger parts together.",
    costContained:
      "Contained Haier repairs are usually the ones that stay inside one small, clearly identified repair.",
  },
  hotpoint: {
    manufacturer: "Hotpoint",
    slug: "hotpoint",
    supportSource: {
      label: "Hotpoint Official Site",
      href: "https://www.hotpoint.com/",
    },
    warrantyLens:
      "Hotpoint post-warranty questions usually come down to whether the issue is still a routine appliance repair or already turning into a bigger out-of-pocket decision.",
    warrantyShift:
      "The hard part with Hotpoint is often not the warranty line itself, but how quickly a normal fault becomes a paid repair with visit and labour costs attached.",
    costLens:
      "Hotpoint cost questions usually hinge on whether the repair stays inside one common appliance part or widens into a larger service job.",
    costJump:
      "The jump on Hotpoint repairs usually happens when what looked like a normal fix starts pulling in more labour or a larger assembly.",
    costContained:
      "Contained Hotpoint repairs are usually the ones that stay inside one practical part replacement.",
  },
  kitchenaid: {
    manufacturer: "KitchenAid",
    slug: "kitchenaid",
    supportSource: {
      label: "KitchenAid Official Site",
      href: "https://www.kitchenaid.com/",
    },
    warrantyLens:
      "KitchenAid post-warranty decisions usually turn on whether the issue stays in a manageable appliance repair or moves into a bill that feels too large for the machine.",
    warrantyShift:
      "With KitchenAid, the question often changes quickly from coverage to whether the repair still makes sense once service and parts are added together.",
    costLens:
      "KitchenAid cost questions usually come down to whether the repair is one contained part issue or a larger kitchen-appliance repair that keeps growing.",
    costJump:
      "The jump on KitchenAid repairs usually comes when the fix moves beyond one part and into a bigger assembly or service-heavy repair.",
    costContained:
      "Contained KitchenAid repairs are usually the ones that stay tied to one clear repair point.",
  },
  lg: {
    manufacturer: "LG",
    slug: "lg",
    supportSource: {
      label: "LG Support",
      href: "https://www.lg.com/us/support",
    },
    warrantySource: {
      label: "LG Warranty Information",
      href: "https://www.lg.com/us/support/warranty",
    },
    repairSource: {
      label: "LG Repair Service",
      href: "https://www.lg.com/us/support/repair-service",
    },
    warrantyLens:
      "LG post-warranty questions usually turn on whether the fault is still a bounded repair or already pointing toward electronics, system-level parts, or repeat repair risk.",
    warrantyShift:
      "On LG products, the practical shift is often from one symptom to a more expensive repair path once controls, boards, or larger system parts enter the picture.",
    costLens:
      "LG cost questions usually hinge on whether the issue stays inside one board, one assembly, or one clear repair, or spreads into a larger system bill.",
    costJump:
      "The jump on LG repairs usually happens when the problem stops being one replaceable part and starts looking like electronics, system work, or multiple related parts.",
    costContained:
      "Contained LG repairs are usually the ones that stay tied to one clear component instead of a wider system problem.",
  },
  maytag: {
    manufacturer: "Maytag",
    slug: "maytag",
    supportSource: {
      label: "Maytag Official Site",
      href: "https://www.maytag.com/",
    },
    warrantyLens:
      "Maytag post-warranty questions usually come down to whether the repair still looks like a sturdy-machine fix or the start of a bigger bill.",
    warrantyShift:
      "With Maytag, the confusing part is often how fast a normal repair becomes a paid service call plus a larger assembly decision.",
    costLens:
      "Maytag cost questions usually turn on whether the issue stays in one practical repair or moves into a bigger labour-and-parts bill.",
    costJump:
      "The jump on Maytag repairs usually comes when a solid-looking repair starts bringing in larger parts, more labour, or repeat issues.",
    costContained:
      "Contained Maytag repairs are usually the ones that stay within one known repair area.",
  },
  miele: {
    manufacturer: "Miele",
    slug: "miele",
    supportSource: {
      label: "Miele Service and Support",
      href: "https://www.miele.com/en/c/service-support-23.htm",
    },
    homeSource: {
      label: "Miele Official Site",
      href: "https://www.miele.com/",
    },
    warrantyLens:
      "Miele post-warranty questions usually turn on whether the repair still fits the value of a premium appliance once parts and service are no longer covered.",
    warrantyShift:
      "With Miele, the real shift is often not just from covered to uncovered, but from premium product ownership to premium repair economics.",
    costLens:
      "Miele cost questions usually come down to whether the fault stays inside one premium-appliance repair or grows into a service-heavy bill that pushes a harder decision.",
    costJump:
      "The jump on Miele repairs usually happens when a premium part issue turns into a larger assembly plus formal service.",
    costContained:
      "Contained Miele repairs are usually the ones that stay inside one clear repair rather than a premium service path.",
  },
  samsung: {
    manufacturer: "Samsung",
    slug: "samsung",
    supportSource: {
      label: "Samsung Support",
      href: "https://www.samsung.com/support",
    },
    warrantySource: {
      label: "Samsung Warranty Information",
      href: "https://www.samsung.com/support/warranty/",
    },
    repairSource: {
      label: "Samsung Repair Service",
      href: "https://www.samsung.com/us/support/repair",
    },
    warrantyLens:
      "Samsung post-warranty questions usually turn on whether the issue is still one bounded appliance repair or the start of a more electronics-heavy bill.",
    warrantyShift:
      "On Samsung products, the shift often comes when a simple symptom stops looking simple and starts pointing toward boards, controls, or larger assemblies.",
    costLens:
      "Samsung cost questions usually hinge on whether the repair stays inside one practical replacement or grows into a broader control or system repair.",
    costJump:
      "The jump on Samsung repairs usually happens when the problem moves past one obvious part and into electronics, assemblies, or service time.",
    costContained:
      "Contained Samsung repairs are usually the ones that stay tied to one clear part instead of a wider control issue.",
  },
  whirlpool: {
    manufacturer: "Whirlpool",
    slug: "whirlpool",
    supportSource: {
      label: "Whirlpool Service and Support",
      href: "https://www.whirlpool.com/services",
    },
    homeSource: {
      label: "Whirlpool Official Site",
      href: "https://www.whirlpool.com/",
    },
    warrantyLens:
      "Whirlpool post-warranty questions usually come down to whether the issue stays in normal major-appliance repair territory or grows into a bigger service bill.",
    warrantyShift:
      "With Whirlpool, the practical change is often how fast a familiar appliance fault turns into a paid call plus a larger repair decision.",
    costLens:
      "Whirlpool cost questions usually turn on whether the repair stays contained to one common appliance part or widens into labour, diagnosis, and larger assemblies.",
    costJump:
      "The jump on Whirlpool repairs usually comes when the repair stops being one common part and starts including more service time or a broader assembly.",
    costContained:
      "Contained Whirlpool repairs are usually the ones that stay inside one common repair area.",
  },
};

function getRegionLabel(region: string) {
  return regionLabels[region] ?? region.toUpperCase();
}

function getSources(config: BrandConfig, page: PageKind): SourceItem[] {
  if (page === "warranty-expired") {
    return [config.warrantySource ?? config.supportSource, config.supportSource];
  }

  if (page === "repair-options" || page === "cost-ranges") {
    return [
      config.repairSource ?? config.supportSource,
      config.supportSource,
    ];
  }

  return [config.supportSource, config.homeSource ?? config.supportSource];
}

export function buildBrandMetadata(
  brand: BrandSlug,
  page: PageKind,
  region: string,
): Metadata {
  const config = brandConfigs[brand];
  const regionLabel = getRegionLabel(region);
  const pageMeta = {
    "warranty-expired": {
      title: `${config.manufacturer} warranty after expiration in ${regionLabel}`,
      description: `What ${config.manufacturer} owners in ${regionLabel} need to understand once warranty coverage ends, including when a support question turns into a paid repair decision.`,
    },
    "cost-ranges": {
      title: `${config.manufacturer} repair cost ranges in ${regionLabel}`,
      description: `${config.manufacturer} repair cost context for ${regionLabel}, focused on where repairs stay contained and where they jump into larger assembly or service work.`,
    },
    "repair-options": {
      title: `${config.manufacturer} repair options in ${regionLabel}`,
      description: `Compare ${config.manufacturer} repair paths in ${regionLabel}, including official service, local repair, and when a problem still looks smaller than a full repair case.`,
    },
    "replace-vs-repair": {
      title: `${config.manufacturer} replace vs. repair in ${regionLabel}`,
      description: `A ${config.manufacturer} replace-versus-repair guide for ${regionLabel}, focused on when repair still makes sense and when cost or repeat issues push the decision toward replacement.`,
    },
    "common-problems": {
      title: `Common ${config.manufacturer} problems after warranty in ${regionLabel}`,
      description: `A ${config.manufacturer} post-warranty problems guide for ${regionLabel}, focused on the symptoms owners search for and what those symptoms usually point to in real repair decisions.`,
    },
  }[page];

  return {
    title: pageMeta.title,
    description: pageMeta.description,
    alternates: {
      canonical: `/${config.slug}/${page}/${region}`,
    },
  };
}

function brandHref(brand: BrandSlug, page: PageKind, region: string) {
  return `/${brand}/${page}/${region}`;
}

export function BrandLeafPage({
  brand,
  page,
  region,
}: {
  brand: BrandSlug;
  page: PageKind;
  region: string;
}) {
  if (!allowedRegions.includes(region as (typeof allowedRegions)[number])) {
    notFound();
  }

  const config = brandConfigs[brand];

  if (page === "warranty-expired") {
    const coverageData = {
      headers: [
        "Coverage question",
        "What usually changes after the stated term ends",
        "Where people get stuck",
      ],
      rows: [
        [
          "Standard appliance coverage",
          "Parts and labour questions often move into paid repair once the main term ends.",
          "The surprise is often not that coverage ended, but that a familiar support issue now comes with service cost attached to it.",
        ],
        [
          "Select components with separate terms",
          "Some brands separate a major component from overall appliance coverage.",
          "A longer component term does not always mean the visit, labour, or related parts are covered in the same way.",
        ],
        [
          "Wear items and accessories",
          "These are often treated differently from faults in the core appliance.",
          "A part that wears out over time is not handled like a broader product defect.",
        ],
        [
          "Diagnostics and service visits",
          "A narrow part question can still turn into a paid visit or inspection.",
          "The cost can start before the full repair is approved.",
        ],
      ],
    };

    const nuanceData = {
      headers: [
        "Post-warranty friction point",
        "What it changes in a real repair decision",
      ],
      rows: [
        [
          "Labour and handling",
          "The issue can stop being about one part and start including travel, inspection, labour, or service handling.",
        ],
        [
          "Longer component terms",
          "A longer component term can still leave the owner comparing the rest of the bill against the value of the appliance.",
        ],
        [
          "Service-only parts",
          "Even when the failing part sounds specific, the repair path may still run through formal service rather than a simple parts order.",
        ],
      ],
    };

    return (
      <ManufacturerPage
        title={`${config.manufacturer} warranty after expiration (${region.toUpperCase()})`}
        intro={config.warrantyLens}
        region={region}
        manufacturer={config.manufacturer}
      >
        <QuickAnswer
          title="Short answer"
          bullets={[
            "Once the warranty ends, the big change is that a support question can turn into a paid repair decision.",
            "The hard part is separating normal wear, a smaller part issue, and a fault that already points to a larger repair.",
            "If the problem already sounds bigger than a routine part swap, the next useful pages are repair options and repair cost ranges.",
          ]}
        >
          <p>
            Most people searching for {config.manufacturer} warranty terms are
            not trying to read policy language. They are trying to work out
            whether this is still a normal support issue or whether it has
            already turned into a repair that will cost real money.{" "}
            {config.warrantyShift} Once it
            reaches that point, the next useful pages are usually{" "}
            <Link href={brandHref(brand, "repair-options", region)}>
              repair options
            </Link>{" "}
            and{" "}
            <Link href={brandHref(brand, "cost-ranges", region)}>
              repair cost ranges
            </Link>
            .
          </p>
        </QuickAnswer>

        <h3>What changes once the stated coverage ends</h3>
        <PolicyTable
          headers={coverageData.headers}
          rows={coverageData.rows}
        />

        <h3>Where post-warranty confusion usually starts</h3>
        <PolicyTable headers={nuanceData.headers} rows={nuanceData.rows} />

        <section className="editorial-note">
          <strong>Why this changes the decision so quickly.</strong>
          <p>
            A repair can look straightforward until labour, inspection, or a
            larger assembly gets added to the same bill. That is usually the
            point where the warranty page stops being enough and{" "}
            <Link href={brandHref(brand, "replace-vs-repair", region)}>
              replace-vs-repair
            </Link>{" "}
            becomes more useful than the warranty wording by itself.
          </p>
        </section>

        <section className="grid-2">
          <ActionChecklist
            title="What changes after warranty stops being the main question"
            items={[
              "Match the appliance and product line to the official terms instead of assuming one category works the same as another.",
              "Separate wear-item or maintenance issues from faults that point to a larger assembly or service case.",
              "Use repair options and cost ranges to see whether this still looks like a smaller repair or a bill that is already growing.",
            ]}
          />

          <RelatedLinks
            title="Where to go once coverage is no longer the whole issue"
            links={[
              {
                href: brandHref(brand, "repair-options", region),
                label: `${config.manufacturer} repair options`,
              },
              {
                href: brandHref(brand, "cost-ranges", region),
                label: `${config.manufacturer} repair cost ranges`,
              },
              {
                href: brandHref(brand, "replace-vs-repair", region),
                label: `${config.manufacturer} replace vs. repair`,
              },
            ]}
          />
        </section>

        <Sources items={getSources(config, page)} />
      </ManufacturerPage>
    );
  }

  if (page === "repair-options") {
    const repairPathways = {
      headers: [
        "Repair path",
        "What usually happens",
        "What changes the fit",
      ],
      rows: [
        [
          "Official brand service",
          "Handled through the manufacturer support process or its service network.",
          "This matters most when the issue may involve service-only parts, model-specific handling, or a larger assembly.",
        ],
        [
          "Authorized or support-linked repair",
          "Third-party service working inside the brand's wider support structure.",
          "The key question is whether the provider handles the same repair scope the official route would cover.",
        ],
        [
          "Independent repair shop",
          "Outside the brand's own support channel.",
          "This works best when the fault is narrower than a full factory-style repair and parts access is not the main barrier.",
        ],
        [
          "Parts-first or self-managed repair",
          "The owner starts from parts lookup or a known replacement part.",
          "This only fits when the problem is already narrowed down to a clearly bounded part or assembly.",
        ],
      ],
    };

    const serviceFormats = {
      headers: [
        "Service format",
        "Where it shows up",
        "What changes once it is involved",
      ],
      rows: [
        [
          "Carry-in or workshop repair",
          "Where there is a local service location or intake point.",
          "The repair may be easier to process, but the quote can still widen if the fault turns out to involve more than one part.",
        ],
        [
          "In-home service",
          "More common for larger appliances where moving the product is part of the problem.",
          "Travel, inspection, and labour start shaping the bill alongside the part itself.",
        ],
        [
          "Mail-in or centralized handling",
          "More common where support is routed through a central service flow.",
          "Transit and handling become part of the repair decision, not just the repair itself.",
        ],
      ],
    };

    return (
      <ManufacturerPage
        title={`${config.manufacturer} repair options (${region.toUpperCase()})`}
        intro={`A clearer look at the repair paths ${config.manufacturer} owners end up weighing once the problem moves past a simple warranty question and into paid service, local repair, or a part replacement.`}
        region={region}
        manufacturer={config.manufacturer}
      >
        <QuickAnswer
          title="Short answer"
          bullets={[
            "This page is not just about repair price. It is about whether the fault belongs with official service, a local repair shop, or a smaller parts-led fix.",
            "Official service matters most when the issue may involve a larger assembly, model-specific handling, or brand-controlled parts access.",
            "The same symptom can sound minor at first and then turn into a much bigger repair once service format and parts scope become clear.",
          ]}
        >
          <p>
            Most people looking at {config.manufacturer} repair options are
            already trying to keep the problem from getting more expensive. The
            hard part is that not every route is solving the same size of
            repair. If the issue still sounds smaller than a full service case,
            the next useful pages are usually{" "}
            <Link href={brandHref(brand, "common-problems", region)}>
              common problems
            </Link>{" "}
            and{" "}
            <Link href={brandHref(brand, "cost-ranges", region)}>
              repair cost ranges
            </Link>
            .
          </p>
        </QuickAnswer>

        <h3>Which repair routes solve which kind of problem</h3>
        <PolicyTable
          headers={repairPathways.headers}
          rows={repairPathways.rows}
        />

        <h3>Where the repair path changes the cost</h3>
        <PolicyTable headers={serviceFormats.headers} rows={serviceFormats.rows} />

        <section className="editorial-note">
          <strong>Why this matters before comparing quotes.</strong>
          <p>
            The mistake is comparing prices before working out what kind of
            repair is actually being quoted. A local fix, a service-led repair,
            and a parts-first repair can look similar at first, but they are
            not solving the same problem. That is also why{" "}
            <Link href={brandHref(brand, "replace-vs-repair", region)}>
              when repair stops making sense
            </Link>{" "}
            is closely tied to this page.
          </p>
        </section>

        <section className="grid-2">
          <ActionChecklist
            title="What makes the repair-path choice harder than it sounds"
            items={[
              "Start with the likely repair size: known part, uncertain symptom, or a fault that already sounds deeper than one component.",
              "Read cost ranges alongside this page if the issue already points toward formal service or a larger assembly.",
              "Use common problems first if the main question is still what the symptom is likely to turn into.",
            ]}
          />

          <RelatedLinks
            title="Next pages once the route starts affecting cost"
            links={[
              {
                href: brandHref(brand, "cost-ranges", region),
                label: `${config.manufacturer} repair cost ranges`,
              },
              {
                href: brandHref(brand, "replace-vs-repair", region),
                label: `${config.manufacturer} replace vs. repair`,
              },
              {
                href: brandHref(brand, "common-problems", region),
                label: `Common ${config.manufacturer} problems`,
              },
            ]}
          />
        </section>

        <Sources items={getSources(config, page)} />
      </ManufacturerPage>
    );
  }

  if (page === "cost-ranges") {
    const costData = {
      headers: [
        "Repair category",
        "Where the cost usually stays manageable",
        "What makes it jump",
      ],
      rows: [
        [
          "Single replacement part",
          "More likely when the issue is truly limited to one known part or accessory.",
          "The total jumps when the part is large, tied to nearby components, or no longer the only thing being replaced.",
        ],
        [
          "Larger removable assembly",
          "Still manageable if the repair stays inside one assembly and does not widen.",
          "The bill rises quickly when the quote includes the full assembly plus service rather than one failed piece inside it.",
        ],
        [
          "Control or electronic issue",
          "Can stay contained when the repair is isolated to one board or control point.",
          "The decision changes when diagnosis, repeat symptoms, or related components start getting added to the same repair.",
        ],
        [
          "Sealed, internal, or labour-heavy repair",
          "Less likely to stay in a smaller repair range once service handling is involved.",
          "This is where costs often move into a range where replacement becomes a serious option.",
        ],
        [
          "Premium or specialty product internals",
          "More manageable when the problem is clearly identified early.",
          "The cost grows when service handling, multiple parts, or limited access turn a narrow fault into a broader repair.",
        ],
      ],
    };

    const serviceData = {
      headers: [
        "Cost driver",
        "What it adds",
        "Why it changes the decision",
      ],
      rows: [
        [
          "Formal service handling",
          "Inspection, labour, travel, shipping, or service coordination on top of the repair itself.",
          "The part price becomes only one piece of the bill once the repair runs through a fuller service process.",
        ],
        [
          "Diagnosis before repair approval",
          "A visit or inspection cost before the full repair is even confirmed.",
          "A borderline repair can start getting expensive before any part is replaced.",
        ],
        [
          "More than one failing area",
          "A repair that starts with one symptom but does not end with one part.",
          "That is usually the point where the decision shifts from price checking to repair-versus-replacement.",
        ],
      ],
    };

    return (
      <ManufacturerPage
        title={`${config.manufacturer} cost ranges (${region.toUpperCase()})`}
        intro={config.costLens}
        region={region}
        manufacturer={config.manufacturer}
      >
        <QuickAnswer
          title="Short answer"
          bullets={[
            "This page is not a quote sheet. It is meant to show which repairs stay fairly contained and which ones get expensive fast.",
            "A single-part question is not priced the same way as a repair that already includes a larger assembly or full service handling.",
            "The jump is often not the part itself, but the moment the repair stops being a simple swap and starts carrying inspection, labour, or a broader assembly.",
          ]}
        >
          <p>
            Most people searching for {config.manufacturer} repair cost are
            trying to work out whether this still looks like normal upkeep or
            whether the repair is getting big enough that replacement starts to
            make more sense. {config.costContained} That usually gets clearer when this page is read
            alongside{" "}
            <Link href={brandHref(brand, "repair-options", region)}>
              repair options
            </Link>
            .
          </p>
        </QuickAnswer>

        <h3>Where costs stay more contained and where they jump</h3>
        <PolicyTable headers={costData.headers} rows={costData.rows} />

        <h3>What gets added once service is involved</h3>
        <PolicyTable headers={serviceData.headers} rows={serviceData.rows} />

        <section className="editorial-note">
          <strong>When the decision changes.</strong>
          <p>
            The decision usually changes when the cost is no longer about one
            failed part and starts including a larger assembly, formal service,
            or both. {config.costJump} That is usually the point where{" "}
            <Link href={brandHref(brand, "replace-vs-repair", region)}>
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
              "Separate formal service, local repair, and direct part pricing instead of treating them like versions of the same quote.",
              "Move to replace-vs-repair once the bill includes more than one part, a larger assembly, or formal service.",
            ]}
          />

          <RelatedLinks
            title="Next pages when cost stops being just a price question"
            links={[
              {
                href: brandHref(brand, "repair-options", region),
                label: `${config.manufacturer} repair options`,
              },
              {
                href: brandHref(brand, "replace-vs-repair", region),
                label: `${config.manufacturer} replace vs. repair`,
              },
              {
                href: brandHref(brand, "common-problems", region),
                label: `Common ${config.manufacturer} problems`,
              },
            ]}
          />
        </section>

        <Sources items={getSources(config, page)} />
      </ManufacturerPage>
    );
  }

  if (page === "replace-vs-repair") {
    const decisionData = {
      headers: [
        "Decision factor",
        "Repair still makes sense when...",
        "Replacement starts to make more sense when...",
      ],
      rows: [
        [
          "Fault scope",
          "The issue appears limited to one assembly, one clear part, or one bounded repair.",
          "The likely fix is spreading into a larger system, multiple parts, or a repair that no longer looks contained.",
        ],
        [
          "Recent spend",
          "The appliance has not already needed repeat paid repairs.",
          "The current repair looks like one more bill in a pattern instead of one isolated fix.",
        ],
        [
          "Overall condition",
          "The rest of the appliance still feels solid for its category.",
          "The repair would fix one issue on an appliance that is already showing age in other ways.",
        ],
        [
          "Replacement comparison",
          "The repair remains clearly below the cost, disruption, and uncertainty of replacing the appliance.",
          "The repair starts competing with the value of moving on instead.",
        ],
      ],
    };

    const comparisonData = {
      headers: [
        "Older-appliance factor",
        "What replacement changes",
        "Why that shifts the decision",
      ],
      rows: [
        [
          "Broader wear or repeat symptoms",
          "A replacement can clear more than the one fault being quoted right now.",
          "A repair that fixes only one problem looks weaker if the rest of the appliance is also slipping.",
        ],
        [
          "Harder parts access or service friction",
          "A replacement can reset the next repair cycle as well as the current one.",
          "The decision changes when the current fix does not look like the last bill.",
        ],
        [
          "A repair that has widened beyond one part",
          "Replacement removes the risk that the repair keeps expanding after the first quote.",
          "This is where replacement starts to make more sense compared to the repair cost.",
        ],
      ],
    };

    return (
      <ManufacturerPage
        title={`${config.manufacturer} replace vs. repair (${region.toUpperCase()})`}
        intro={`A simpler way to judge when a ${config.manufacturer} repair still makes sense and when the cost starts looking too high for the appliance.`}
        region={region}
        manufacturer={config.manufacturer}
      >
        <QuickAnswer
          title="Short answer"
          bullets={[
            "This is not a policy question. It is a decision about whether the repair still makes sense for the appliance you have.",
            "Repair makes more sense when the fault is narrow and the rest of the appliance still feels solid.",
            "The hard part is that the quoted repair may fix the current problem without fixing the rest of the wear or the chance of another bill later.",
          ]}
        >
          <p>
            Most people land here after a quote or a likely fault has already
            made the appliance feel expensive. The real question is not repair
            versus replacement in the abstract, but whether this repair still
            makes sense now. That usually depends on both the likely{" "}
            <Link href={brandHref(brand, "cost-ranges", region)}>
              repair cost
            </Link>{" "}
            and the kind of{" "}
            <Link href={brandHref(brand, "repair-options", region)}>
              repair path
            </Link>{" "}
            the appliance is now headed toward.
          </p>
        </QuickAnswer>

        <h3>What keeps repair reasonable and what pushes it toward replacement</h3>
        <PolicyTable headers={decisionData.headers} rows={decisionData.rows} />

        <h3>Why replacement can make sense before the appliance fully fails</h3>
        <PolicyTable
          headers={comparisonData.headers}
          rows={comparisonData.rows}
        />

        <section className="editorial-note">
          <strong>Why this matters beyond the current quote.</strong>
          <p>
            What often pushes the decision toward replacement is not one bad
            quote by itself. It is the feeling that this repair is only the
            next bill on an appliance that is already getting weaker in other
            ways. If the issue still sounds more like symptom-matching than a
            final diagnosis,{" "}
            <Link href={brandHref(brand, "common-problems", region)}>
              common problems
            </Link>{" "}
            can help narrow that down first.
          </p>
        </section>

        <section className="grid-2">
          <ActionChecklist
            title="What makes this call harder than a simple price comparison"
            items={[
              "Start with the likely fault because a bounded part issue and a larger system fault are not the same kind of decision.",
              "Read cost ranges before making the repair-versus-replace call so the decision is tied to how big the repair is, not guesswork.",
              "Ask whether fixing this one problem is worth it if the rest of the appliance is already showing broader wear.",
            ]}
          />

          <RelatedLinks
            title="Next pages when the repair decision still feels unsettled"
            links={[
              {
                href: brandHref(brand, "cost-ranges", region),
                label: `${config.manufacturer} repair cost ranges`,
              },
              {
                href: brandHref(brand, "repair-options", region),
                label: `${config.manufacturer} repair options`,
              },
              {
                href: brandHref(brand, "common-problems", region),
                label: `Common ${config.manufacturer} problems`,
              },
            ]}
          />
        </section>

        <Sources items={getSources(config, page)} />
      </ManufacturerPage>
    );
  }

  const commonProblems = {
    headers: [
      "Product line or symptom cluster",
      "What people usually notice",
      "What that often turns into",
    ],
    rows: [
      [
        "Refrigeration problems",
        "Poor cooling, erratic temperature, fan noise, or repeated thawing concerns.",
        "It can start as airflow or defrost trouble, but it may move into a bigger control or sealed-system conversation.",
      ],
      [
        "Laundry problems",
        "Will not spin, will not drain, shuts down mid-cycle, or shows repeated cycle problems.",
        "Some cases stay inside one assembly, while others widen into control, drive, or repeat-service repairs.",
      ],
      [
        "Dishwasher problems",
        "Not draining, poor cleaning, repeated beeping, or a wash cycle that never seems normal again.",
        "The issue can be a pump or sensor, but the bill grows if diagnosis widens into circulation or electronic repair.",
      ],
      [
        "Cooking appliance problems",
        "Weak heating, ignition trouble, uneven performance, or display and control issues.",
        "These can look small at first and then get more expensive once larger heating or control parts are involved.",
      ],
      [
        "Connected or specialty features",
        "Display, sensor, or smart-feature problems that are hard to pin to one obvious part.",
        "The diagnosis can become the hard part, not just the replacement part.",
      ],
    ],
  };

  const outlookData = {
    headers: [
      "Why similar symptoms split in different directions",
      "What changes the repair outlook",
    ],
    rows: [
      [
        "One symptom can point to more than one repair size",
        "What looks like one bad part at search level can still widen once the appliance is opened up or properly diagnosed.",
      ],
      [
        "Service path matters as much as the symptom",
        "The same problem can land differently depending on whether the repair stays local, needs formal service, or starts involving larger assemblies.",
      ],
      [
        "Age and repeat problems change the meaning",
        "A symptom on an otherwise solid appliance reads differently from the same symptom on a machine that has already needed repeated fixes.",
      ],
    ],
  };

  return (
    <ManufacturerPage
      title={`Common ${config.manufacturer} problems (${region.toUpperCase()})`}
      intro={`A quick guide to the ${config.manufacturer} symptoms people search for most often after warranty, focused on whether each one still looks like a smaller fix or the start of a bigger repair.`}
      region={region}
      manufacturer={config.manufacturer}
    >
      <QuickAnswer
        title="Short answer"
        bullets={[
          "This page is about what the symptom is likely to turn into: routine upkeep, a replacement part, or a bigger repair.",
          "Cooling, draining, heating, and control problems do not all belong in the same repair category.",
          "What makes it confusing is that similar symptoms can end very differently once diagnosis, service handling, or a larger assembly enters the picture.",
        ]}
      >
        <p>
          Most people searching for common {config.manufacturer} problems are
          already dealing with an appliance that is not cooling right, not
          draining, shutting down mid-cycle, or showing a fault that will not
          stay minor. What they want to know is whether this sounds like a
          smaller fix or the start of a more expensive repair. Once that begins
          to narrow down, the next useful pages are usually{" "}
          <Link href={brandHref(brand, "repair-options", region)}>
            repair options
          </Link>{" "}
          and{" "}
          <Link href={brandHref(brand, "cost-ranges", region)}>
            cost ranges
          </Link>
          .
        </p>
      </QuickAnswer>

      <h3>What common symptoms usually point to</h3>
      <PolicyTable headers={commonProblems.headers} rows={commonProblems.rows} />

      <h3>Why the same symptom can lead to very different repair bills</h3>
      <PolicyTable headers={outlookData.headers} rows={outlookData.rows} />

      <section className="editorial-note">
        <strong>Why this matters before the symptom gets priced.</strong>
        <p>
          A common mistake is to assume the symptom tells you how big the fix
          will be. In real cases, a small-sounding problem can still turn into
          a larger repair if it is not tied to one clear part. That is usually
          when{" "}
          <Link href={brandHref(brand, "replace-vs-repair", region)}>
            replace-vs-repair
          </Link>{" "}
          becomes the next useful page.
        </p>
      </section>

      <section className="grid-2">
        <ActionChecklist
          title="What makes symptom-matching harder than it first seems"
          items={[
            "Separate smaller maintenance-type symptoms from faults that point to controls, sealed systems, or larger assemblies.",
            "Use repair options and cost ranges once the symptom looks bigger than routine upkeep.",
            "Move to replace-vs-repair earlier if more than one symptom points to broader wear instead of one isolated fault.",
          ]}
        />

        <RelatedLinks
          title="Next pages once the symptom starts narrowing the real problem"
          links={[
            {
              href: brandHref(brand, "repair-options", region),
              label: `${config.manufacturer} repair options`,
            },
            {
              href: brandHref(brand, "cost-ranges", region),
              label: `${config.manufacturer} repair cost ranges`,
            },
            {
              href: brandHref(brand, "replace-vs-repair", region),
              label: `${config.manufacturer} replace vs. repair`,
            },
          ]}
        />
      </section>

      <Sources items={getSources(config, page)} />
    </ManufacturerPage>
  );
}
