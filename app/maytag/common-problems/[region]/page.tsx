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
  return buildBrandMetadata("maytag", "common-problems", region);
}

export default async function MaytagCommonProblemsPage({
  params,
}: {
  params: Promise<{ region: string }>;
}) {
  const { region } = await params;
  return (
    <BrandLeafPage brand="maytag" page="common-problems" region={region} />
  );
}
