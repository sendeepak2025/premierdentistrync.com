import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BookingStrip } from "@/components/BookingStrip";
import { StructuredData } from "@/components/StructuredData";
import { StickyMobileCta } from "@/components/StickyMobileCta";
import { absoluteUrl, primarySeoKeywords, siteUrl } from "@/lib/seo";

const sans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const display = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "Premier Dentistry of Charlotte | Ballantyne Dentist Dr. Anand Patel, DDS",
    template: "%s | Premier Dentistry of Charlotte",
  },
  description:
    "Premier Dentistry is a Ballantyne dentist in Charlotte NC led by Dr. Anand Patel, DDS. Book cleanings, Invisalign, implants, veneers, same-day crowns, emergency dental care, and nitrous oxide options.",
  keywords: primarySeoKeywords,
  authors: [{ name: "Premier Dentistry of Charlotte", url: siteUrl }],
  creator: "Premier Dentistry of Charlotte",
  publisher: "Premier Dentistry of Charlotte",
  category: "Dental clinic",
  applicationName: "Premier Dentistry of Charlotte",
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
    types: {
      "text/plain": [
        { url: "/llms.txt", title: "Premier Dentistry AI summary" },
        { url: "/ai.txt", title: "Premier Dentistry AI crawler guide" },
      ],
    },
  },
  openGraph: {
    title: "Premier Dentistry of Charlotte | Ballantyne Dentist",
    description:
      "Modern, gentle dentistry in Ballantyne, Charlotte NC. Same-day crowns, Invisalign, implants, emergency dental care, and nitrous oxide options.",
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Premier Dentistry",
    images: [
      {
        url: absoluteUrl("/og-image.png"),
        width: 1200,
        height: 630,
        alt: "Premier Dentistry of Charlotte - Ballantyne dentist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Premier Dentistry of Charlotte | Ballantyne Dentist",
    description:
      "Modern, gentle dentistry in Ballantyne, Charlotte NC with Dr. Anand Patel, DDS.",
    images: [absoluteUrl("/og-image.png")],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  other: {
    "geo.region": "US-NC",
    "geo.placename": "Charlotte",
    "geo.position": "35.0656;-80.8473",
    ICBM: "35.0656, -80.8473",
    "business:contact_data:locality": "Charlotte",
    "business:contact_data:region": "NC",
    "business:contact_data:postal_code": "28277",
    "business:contact_data:country_name": "United States",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${display.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bg text-ink">
        <StructuredData />
        <Header />
        <main className="flex-1">{children}</main>
        <BookingStrip />
        <Footer />
        <StickyMobileCta />
      </body>
    </html>
  );
}
