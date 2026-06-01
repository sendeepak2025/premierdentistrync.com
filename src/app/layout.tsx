import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BookingStrip } from "@/components/BookingStrip";
import { StructuredData } from "@/components/StructuredData";
import { StickyMobileCta } from "@/components/StickyMobileCta";

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
  metadataBase: new URL("https://premierdentistrync.com"),
  title: {
    default: "Premier Dentistry of Charlotte | Dr. Anand Patel, DDS",
    template: "%s | Premier Dentistry of Charlotte",
  },
  description:
    "Gentle, modern dentistry in Ballantyne, Charlotte NC. Cleanings, Invisalign, implants, veneers and sedation dentistry with Dr. Anand Patel, DDS.",
  keywords: [
    "Charlotte dentist",
    "Ballantyne dentist",
    "Invisalign Charlotte",
    "dental implants Charlotte",
    "cosmetic dentistry NC",
    "sedation dentistry",
    "Dr. Anand Patel",
  ],
  openGraph: {
    title: "Premier Dentistry of Charlotte",
    description:
      "Modern, gentle dentistry in Ballantyne. Same-day crowns, Invisalign, implants and sedation options.",
    type: "website",
    locale: "en_US",
    url: "https://premierdentistrync.com",
    siteName: "Premier Dentistry",
  },
  twitter: {
    card: "summary_large_image",
    title: "Premier Dentistry of Charlotte",
    description: "Modern, gentle dentistry in Ballantyne, Charlotte NC.",
  },
  alternates: { canonical: "/" },
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
