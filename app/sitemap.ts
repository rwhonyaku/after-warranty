import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://after-warranty.com";
  
  // Updated brand list
  const brands = ['dyson', 'miele', 'samsung', 'lg', 'bosch', 'whirlpool', 'kitchenaid', 'maytag', 'shark', 'ge-appliances', 'haier', 'hotpoint'];
  const regions = ['usa', 'uk', 'canada', 'australia'];
  const subPages = [
    'warranty-expired', 
    'common-problems', 
    'repair-options', 
    'cost-ranges', 
    'replace-vs-repair'
  ];

  const corePages = [
    "/",
    "/about",
    "/disclaimer",
    "/how-this-site-works",
    "/privacy",
  ];

  const dynamicUrls = brands.flatMap((brand) => [
    `/${brand}`,
    ...regions.flatMap((region) =>
      subPages.map((page) => `/${brand}/${page}/${region}`)
    ),
    ...((brand === "dyson" || brand === "shark")
      ? [
          ...(brand === "dyson" ? [`/${brand}/out-of-warranty`] : []),
          ...regions.map((region) => `/${brand}/parts-support/${region}`),
        ]
      : []),
  ]);

  const allPaths = [...corePages, ...dynamicUrls];

  return allPaths.map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: path === "/" ? 1.0 : brands.includes(path.slice(1)) ? 0.9 : 0.7,
  }));
}
