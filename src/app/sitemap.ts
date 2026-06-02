import type { MetadataRoute } from "next";
import { services } from "@/lib/site";
import { educationOrder } from "@/lib/patientEducation";
import { blogPosts } from "@/lib/blogPosts";
import { absoluteUrl } from "@/lib/seo";

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
  const imageMap: Record<string, string[]> = {
    "": ["/og-image.png", "/hero-doctor-wide.png", "/clinic/clinic-1.jpg"],
    "/about": [
      "/dr-patel.jpg",
      "/team-susan-autry.jpg",
      "/team-molly.jpg",
      "/team-victoria-zusmanovich.jpg",
      "/clinic/clinic-1.jpg",
      "/clinic/clinic-3.jpg",
      "/clinic/clinic-4.jpg",
    ],
    "/office-tour": [
      "/clinic/clinic-1.jpg",
      "/clinic/clinic-2.jpg",
      "/clinic/clinic-3.jpg",
      "/clinic/clinic-4.jpg",
      "/clinic/clinic-5.jpg",
      "/clinic/clinic-6.jpg",
    ],
    "/smile-gallery": [
      "/smile-gallery/case-1-before.jpg",
      "/smile-gallery/case-1-after.jpg",
      "/smile-gallery/case-2-before.jpg",
      "/smile-gallery/case-2-after.jpg",
      "/smile-gallery/case-3-before.jpg",
      "/smile-gallery/case-3-after.jpg",
    ],
    "/services/dental-crowns": ["/cerec-crown-technology.jpg"],
    "/services/implants": ["/dental-implants.jpg"],
  };

  return [...staticPaths, ...servicePaths, ...educationPaths, ...blogPaths].map(
    (path) => ({
      url: `${base}${path}`,
      lastModified: path.startsWith("/blog/")
        ? new Date(
            blogPosts.find((post) => `/blog/${post.slug}` === path)?.date ??
              now
          )
        : now,
      changeFrequency: path === "" || path === "/blog" ? "weekly" : "monthly",
      priority:
        path === ""
          ? 1
          : path.startsWith("/services/") ||
            path.startsWith("/patient-info/education/") ||
            path.startsWith("/blog/")
          ? 0.7
          : 0.8,
      images: (imageMap[path] ?? ["/og-image.png"]).map((image) =>
        absoluteUrl(image)
      ),
    })
  );
}
