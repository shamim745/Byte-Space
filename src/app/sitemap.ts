import { infoSlugs } from "@/db/pages";
import { categorySlugs } from "@/db/categories";
import type { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

const staticPaths = [
  "",
  "/courses",
  "/categories",
  "/course-details",
  "/creator",
  "/login",
  "/register",
  ...infoSlugs.map((slug) => `/${slug}`),
  ...categorySlugs.map((slug) => `/categories/${slug}`),
];

const sitemap = (): MetadataRoute.Sitemap =>
  staticPaths.map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: path === "" ? 1 : 0.7,
  }));

export default sitemap;
