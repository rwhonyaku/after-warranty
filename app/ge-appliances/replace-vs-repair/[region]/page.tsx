import type { Metadata } from "next";
import {
  BrandLeafPage,
  buildBrandMetadata,
} from "../../../../components/BrandLeafPage";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ region: string }>;
}): Promise<Metadata> {
  const { region } = await params;
  return buildBrandMetadata("ge-appliances", "replace-vs-repair", region);
}

export default async function GeAppliancesReplaceVsRepairPage({
  params,
}: {
  params: Promise<{ region: string }>;
}) {
  const { region } = await params;
  return (
    <BrandLeafPage
      brand="ge-appliances"
      page="replace-vs-repair"
      region={region}
    />
  );
}
