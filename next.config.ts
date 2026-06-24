import type { NextConfig } from "next";

const securityHeaders = [
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "X-Frame-Options",
    value: "SAMEORIGIN",
  },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(self), payment=()",
  },
];

const legacyRedirects = [
  { source: "/about-us", destination: "/about" },
  { source: "/meet-the-team", destination: "/about#team" },
  { source: "/team", destination: "/about#team" },
  { source: "/contact-us", destination: "/contact" },
  { source: "/appointment", destination: "/contact" },
  { source: "/appointments", destination: "/contact" },
  { source: "/book-appointment", destination: "/contact" },
  { source: "/reviews", destination: "/smile-gallery" },
  { source: "/gallery", destination: "/smile-gallery" },
  { source: "/before-after", destination: "/smile-gallery" },
  { source: "/before-and-after", destination: "/smile-gallery" },
  { source: "/photo-gallery", destination: "/office-tour" },
  { source: "/office", destination: "/office-tour" },
  { source: "/office-tour-gallery", destination: "/office-tour" },
  { source: "/new-patients", destination: "/patient-info" },
  { source: "/patient-forms", destination: "/patient-info#registration" },
  { source: "/forms", destination: "/patient-info#registration" },
  { source: "/insurance", destination: "/patient-info#insurance" },
  { source: "/premiercare", destination: "/patient-info#premiercare" },
  { source: "/premiercare-savings-plan", destination: "/patient-info#premiercare" },
  { source: "/financial-policy", destination: "/patient-info#financial-policy" },
  { source: "/dental-services", destination: "/services" },
  { source: "/services/sedation", destination: "/services/nitrous" },
  { source: "/sedation-dentistry", destination: "/services/nitrous" },
  { source: "/nitrous-oxide", destination: "/services/nitrous" },
  { source: "/services/general-dentistry", destination: "/services/cleanings" },
  { source: "/general-dentistry", destination: "/services/cleanings" },
  { source: "/dental-cleanings", destination: "/services/cleanings" },
  { source: "/teeth-cleaning", destination: "/services/cleanings" },
  { source: "/same-day-crowns", destination: "/services/dental-crowns" },
  { source: "/same-day-dental-crowns", destination: "/services/dental-crowns" },
  { source: "/dental-crowns", destination: "/services/dental-crowns" },
  { source: "/cerec-crowns", destination: "/services/dental-crowns" },
  { source: "/root-canal", destination: "/services/root-canal" },
  { source: "/root-canal-therapy", destination: "/services/root-canal" },
  { source: "/emergency-dentist", destination: "/services/emergency" },
  { source: "/emergency-dental-care", destination: "/services/emergency" },
  { source: "/porcelain-veneers", destination: "/services/veneers" },
  { source: "/veneers", destination: "/services/veneers" },
  { source: "/dental-fillings", destination: "/services/fillings" },
  { source: "/fillings", destination: "/services/fillings" },
  { source: "/bonding", destination: "/services/fillings" },
  { source: "/tooth-extractions", destination: "/services/extractions" },
  { source: "/extractions", destination: "/services/extractions" },
  { source: "/clear-aligners", destination: "/services/invisalign" },
  { source: "/invisalign", destination: "/services/invisalign" },
  { source: "/dentures", destination: "/services/dentures" },
  { source: "/teeth-whitening", destination: "/services/whitening" },
  { source: "/whitening", destination: "/services/whitening" },
  { source: "/sleep-apnea", destination: "/services/sleep-apnea" },
  { source: "/snoring", destination: "/services/sleep-apnea" },
  { source: "/dental-implants", destination: "/services/implants" },
  { source: "/implants", destination: "/services/implants" },
  { source: "/:year(\\d{4})/:month(\\d{1,2})/:day(\\d{1,2})/:slug", destination: "/blog/:slug" },
  { source: "/:year(\\d{4})/:month(\\d{1,2})/:slug", destination: "/blog/:slug" },
  { source: "/category/:path*", destination: "/blog" },
  { source: "/tag/:path*", destination: "/blog" },
  { source: "/author/:path*", destination: "/blog" },
  { source: "/feed", destination: "/blog" },
  { source: "/comments/feed", destination: "/blog" },
];

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
  async redirects() {
    return legacyRedirects.map((redirect) => ({
      ...redirect,
      permanent: true,
    }));
  },
};

export default nextConfig;
