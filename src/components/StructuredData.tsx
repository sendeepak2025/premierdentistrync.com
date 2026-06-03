import { services, site } from "@/lib/site";
import { absoluteUrl, jsonLd, localSearchAreas } from "@/lib/seo";

export function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": absoluteUrl("/#website"),
        name: "Premier Dentistry of Charlotte",
        alternateName: [
          "Premier Dentistry",
          "Premier Dentistry NC",
          "Premier Dentistry Ballantyne",
        ],
        url: absoluteUrl("/"),
        inLanguage: "en-US",
        publisher: { "@id": absoluteUrl("/#dentist") },
        about: { "@id": absoluteUrl("/#dentist") },
      },
      {
        "@type": ["Dentist", "LocalBusiness", "MedicalBusiness"],
        "@id": absoluteUrl("/#dentist"),
        name: "Premier Dentistry",
        legalName: "Premier Dentistry of Charlotte",
        alternateName: [
          "Premier Dentistry NC",
          "Premier Dentistry Ballantyne",
          "Premier Dentistry of Charlotte",
        ],
        url: absoluteUrl("/"),
        telephone: site.phone,
        email: site.email,
        image: absoluteUrl("/og-image.png"),
        logo: absoluteUrl("/logo.png"),
        hasMap: site.social.google,
        currenciesAccepted: "USD",
        paymentAccepted: "Cash, credit card, dental insurance, financing",
        priceRange: "$$",
        slogan: "Your Smile, Our Passion",
        description:
          "Premier Dentistry is a modern dental practice in Ballantyne, Charlotte NC led by Dr. Anand Patel, DDS. The practice provides family, cosmetic, restorative, emergency, implant, Invisalign, same-day crown, and nitrous oxide dental care.",
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
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: site.phone,
            contactType: "appointments and patient questions",
            areaServed: "US-NC",
            availableLanguage: "English",
          },
        ],
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
            opens: "08:00",
            closes: "13:00",
            description: "1st, 2nd, and 3rd Friday of the month only.",
          },
        ],
        areaServed: localSearchAreas.map((area) => ({
          "@type": "Place",
          name: area,
        })),
        knowsLanguage: "English",
        medicalSpecialty: [
          "General Dentistry",
          "Cosmetic Dentistry",
          "Restorative Dentistry",
          "Emergency Dental Care",
          "Dental Implants",
          "Invisalign",
          "Nitrous Oxide Dentistry",
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
        potentialAction: {
          "@type": "ReserveAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: absoluteUrl("/contact"),
            actionPlatform: [
              "https://schema.org/DesktopWebPlatform",
              "https://schema.org/MobileWebPlatform",
            ],
          },
          result: {
            "@type": "Reservation",
            name: "Dental appointment request",
          },
        },
      },
      {
        "@type": "Person",
        "@id": absoluteUrl("/#dr-anand-patel"),
        name: site.doctor.name,
        honorificPrefix: "Dr.",
        jobTitle: "Dentist and Owner",
        image: absoluteUrl("/dr-patel.jpg"),
        worksFor: { "@id": absoluteUrl("/#dentist") },
        alumniOf: "NYU College of Dentistry",
        knowsAbout: [
          "General dentistry",
          "Cosmetic dentistry",
          "Dental implants",
          "Same-day CEREC crowns",
          "Root canal therapy",
          "Invisalign",
        ],
        description:
          "Dr. Anand Patel, DDS is the dentist and owner of Premier Dentistry in Ballantyne, Charlotte NC.",
      },
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: jsonLd(data) }}
    />
  );
}
