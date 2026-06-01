import { services, site } from "@/lib/site";
import { absoluteUrl, jsonLd } from "@/lib/seo";

export function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": absoluteUrl("/#website"),
        name: "Premier Dentistry of Charlotte",
        url: absoluteUrl("/"),
        inLanguage: "en-US",
        publisher: { "@id": absoluteUrl("/#dentist") },
      },
      {
        "@type": ["Dentist", "LocalBusiness", "MedicalBusiness"],
        "@id": absoluteUrl("/#dentist"),
        name: "Premier Dentistry",
        legalName: "Premier Dentistry of Charlotte",
        url: absoluteUrl("/"),
        telephone: site.phone,
        email: site.email,
        image: absoluteUrl("/og-image.png"),
        logo: absoluteUrl("/logo.png"),
        priceRange: "$$",
        description:
          "Premier Dentistry is a modern dental practice in Ballantyne, Charlotte NC led by Dr. Anand Patel, DDS. The practice provides family, cosmetic, restorative, emergency, implant, Invisalign, same-day crown, and sedation dentistry.",
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
        areaServed: site.serviceAreas.map((area) => ({
          "@type": "Place",
          name: area,
        })),
        medicalSpecialty: [
          "General Dentistry",
          "Cosmetic Dentistry",
          "Restorative Dentistry",
          "Emergency Dental Care",
          "Dental Implants",
          "Invisalign",
          "Sedation Dentistry",
        ],
        knowsAbout: [
          "Dental cleanings",
          "Same-day CEREC crowns",
          "Dental implants",
          "Invisalign clear aligners",
          "Porcelain veneers",
          "Root canal treatment",
          "Emergency dentistry",
          "Teeth whitening",
          "Sleep apnea oral appliances",
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Dental services at Premier Dentistry",
          itemListElement: services.map((service) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: service.title,
              description: service.blurb,
              url: absoluteUrl(`/services/${service.slug}`),
              provider: { "@id": absoluteUrl("/#dentist") },
              areaServed: site.address.city,
            },
          })),
        },
        sameAs: [site.social.facebook, site.social.google],
        founder: { "@id": absoluteUrl("/#dr-anand-patel") },
      },
      {
        "@type": "Person",
        "@id": absoluteUrl("/#dr-anand-patel"),
        name: site.doctor.name,
        honorificPrefix: "Dr.",
        jobTitle: "Dentist and Owner",
        worksFor: { "@id": absoluteUrl("/#dentist") },
        alumniOf: "NYU College of Dentistry",
        description:
          "Dr. Anand Patel, DDS is the dentist and owner of Premier Dentistry in Ballantyne, Charlotte NC.",
      },
    ],
  };
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: jsonLd(data) }}
    />
  );
}
