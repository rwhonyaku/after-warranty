import { DysonPage } from "@/components/DysonPage";
import { Sources } from "@/components/Sources";

export const metadata = {
  title: "Dyson | After-Warranty.com",
  description:
    "Dyson out-of-warranty reference hub: typical options, pathways, and trade-offs. Not affiliated with Dyson.",
  alternates: {
    canonical: "/dyson",
  },
};


export default function DysonHubPage() {
  return (
    <DysonPage
      title="Dyson — Out-of-Warranty Overview"
      intro="This section summarizes typical options and trade-offs after Dyson warranty coverage ends."
    >
      <ul>
        <li><a href="/dyson/warranty-expired">After warranty expiration</a></li>
        <li><a href="/dyson/common-problems">Common problem categories</a></li>
        <li><a href="/dyson/repair-options">Repair options</a></li>
        <li><a href="/dyson/cost-ranges">Typical cost ranges</a></li>
        <li><a href="/dyson/replace-vs-repair">Repair vs replacement</a></li>
      </ul>

      <Sources
        items={[
          { label: "Dyson Support (official)", href: "https://www.dyson.com/support" },
          { label: "Dyson Limited Warranty (official)", href: "https://www.dyson.com/inside-dyson/terms/the-dyson-limited-warranty" },
          { label: "Book a repair or service (official)", href: "https://www.dyson.com/support/repairs-and-servicing-information" },
        ]}
      />
    </DysonPage>
  );
}
