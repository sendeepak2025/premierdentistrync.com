import type { MetadataRoute } from "next";
import { services } from "@/lib/site";
import { educationOrder } from "@/lib/patientEducation";
import { blogPosts } from "@/lib/blogPosts";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://premierdentistrync.com";
  const now = new Date();
  const staticPaths = [
    "",
    "/services",
    "/about",
    "/patient-info",
    "/patient-info/education",
    "/blog",
    "/smile-gallery",
    "/office-tour",
    "/contact",
  ];
  const servicePaths = services.map((s) => `/services/${s.slug}`);
  const educationPaths = educationOrder.map(
    (t) => `/patient-info/education/${t}`
  );
  const blogPaths = blogPosts.map((post) => `/blog/${post.slug}`);
  return [...staticPaths, ...servicePaths, ...educationPaths, ...blogPaths].map((path) => ({
    url: `${base}${path}`,
    lastModified: path.startsWith("/blog/")
      ? new Date(blogPosts.find((post) => `/blog/${post.slug}` === path)?.date ?? now)
      : now,
    changeFrequency: "monthly",
    priority:
      path === ""
        ? 1
        : path.startsWith("/services/") ||
          path.startsWith("/patient-info/education/") ||
          path.startsWith("/blog/")
        ? 0.7
        : 0.8,
  }));
}
