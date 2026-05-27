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
  return buildBrandMetadata("lg", "warranty-expired", region);
}

export default async function LgWarrantyExpiredPage({
  params,
}: {
  params: Promise<{ region: string }>;
}) {
  const { region } = await params;
  return <BrandLeafPage brand="lg" page="warranty-expired" region={region} />;
}
