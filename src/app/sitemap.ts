import type { MetadataRoute } from "next";
import { services } from "@/lib/site";
import { educationOrder } from "@/lib/patientEducation";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://premierdentistrync.com";
  const now = new Date();
  const staticPaths = [
    "",
    "/services",
    "/about",
    "/patient-info",
    "/patient-info/education",
    "/smile-gallery",
    "/office-tour",
    "/contact",
  ];
  const servicePaths = services.map((s) => `/services/${s.slug}`);
  const educationPaths = educationOrder.map(
    (t) => `/patient-info/education/${t}`
  );
  return [...staticPaths, ...servicePaths, ...educationPaths].map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority:
      path === ""
        ? 1
        : path.startsWith("/services/") || path.startsWith("/patient-info/education/")
        ? 0.7
        : 0.8,
  }));
}
