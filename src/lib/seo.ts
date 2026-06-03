export const siteUrl = "https://premierdentistrync.com";

export const primarySeoKeywords = [
  "Ballantyne dentist",
  "dentist in Ballantyne Charlotte NC",
  "Charlotte NC dentist",
  "Premier Dentistry Charlotte",
  "Dr. Anand Patel DDS",
  "family dentist Charlotte NC",
  "cosmetic dentist Ballantyne",
  "emergency dentist Ballantyne",
  "same-day dental crowns Charlotte",
  "CEREC crowns Charlotte NC",
  "dental implants Charlotte NC",
  "Invisalign Ballantyne",
  "teeth whitening Charlotte NC",
  "root canal Ballantyne",
  "nitrous oxide dentist Charlotte",
  "dental office near Ballantyne",
  "dentist near Marvin NC",
];

export const localSearchAreas = [
  "Ballantyne",
  "South Charlotte",
  "Pineville",
  "Matthews",
  "Indian Land SC",
  "Fort Mill SC",
  "Waxhaw",
  "Blakeney",
  "Ardrey Kell",
  "Waverly",
  "Marvin",
];

export function absoluteUrl(path = "/") {
  if (path.startsWith("http")) return path;
  return `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
}

export function jsonLd(data: unknown) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
