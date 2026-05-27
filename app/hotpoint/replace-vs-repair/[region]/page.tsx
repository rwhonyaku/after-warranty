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
  return buildBrandMetadata("hotpoint", "replace-vs-repair", region);
}

export default async function HotpointReplaceVsRepairPage({
  params,
}: {
  params: Promise<{ region: string }>;
}) {
  const { region } = await params;
  return (
    <BrandLeafPage brand="hotpoint" page="replace-vs-repair" region={region} />
  );
}
