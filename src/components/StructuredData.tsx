import { site } from "@/lib/site";

export function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    name: "Premier Dentistry",
    url: "https://premierdentistrync.com",
    telephone: site.phone,
    email: site.email,
    image: "https://premierdentistrync.com/og.png",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: `${site.address.line1}, ${site.address.line2}`,
      addressLocality: site.address.city,
      addressRegion: site.address.state,
      postalCode: site.address.zip,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 35.0656,
      longitude: -80.8473,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
        opens: "09:00",
        closes: "17:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Friday"],
        opens: "09:00",
        closes: "14:00",
        description: "1st and 3rd Friday of the month only.",
      },
    ],
    sameAs: [site.social.facebook, site.social.google],
    founder: {
      "@type": "Person",
      name: site.doctor.name,
      jobTitle: "Dentist",
    },
  };
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
