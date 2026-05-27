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
  return buildBrandMetadata("kitchenaid", "warranty-expired", region);
}

export default async function KitchenAidWarrantyExpiredPage({
  params,
}: {
  params: Promise<{ region: string }>;
}) {
  const { region } = await params;
  return (
    <BrandLeafPage brand="kitchenaid" page="warranty-expired" region={region} />
  );
}
