import type { MetadataRoute } from "next";
import { getAllContentPaths } from "@/lib/content";
import { CONTENT_TYPES } from "@/config/navigation";
import { routing } from "@/i18n/routing";

export const dynamic = "force-static";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://readventures.top";

  // Static pages that always exist (non-content routes)
  const staticPaths = ["/", "/privacy-policy", "/terms-of-service", "/copyright", "/about"];

  // Content-type listing pages are derived from CONTENT_TYPES so this list can never drift
  const contentTypePaths = CONTENT_TYPES.map((contentType) => `/${contentType}`);

  // Dynamic paths: scan actual MDX content files
  const contentPaths = await getAllContentPaths("en");
  const dynamicPaths = contentPaths.map((item) => `/${[item.contentType, ...item.slug].join("/")}`);

  const paths = [...staticPaths, ...contentTypePaths, ...dynamicPaths];

  return routing.locales.flatMap((locale) =>
    paths.map((path) => ({
      url: `${siteUrl}/${locale}${path === "/" ? "" : path}`,
      lastModified: new Date(),
      changeFrequency: path === "/" ? ("daily" as const) : ("weekly" as const),
      priority: path === "/" ? 1 : path === "/bosses" ? 0.8 : 0.6,
    })),
  );
}
