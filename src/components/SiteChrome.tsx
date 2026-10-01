"use client";

import { usePathname } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BookingStrip } from "@/components/BookingStrip";
import { StructuredData } from "@/components/StructuredData";
import { StickyMobileCta } from "@/components/StickyMobileCta";

export function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith("/admin");

  if (isAdmin) {
    // For admin pages: do NOT render header, footer, booking strip, sticky mobile cta, or public structured data
    return <>{children}</>;
  }

  return (
    <>
      <StructuredData />
      <Header />
      <main className="flex-1">{children}</main>
      <BookingStrip />
      <Footer />
      <StickyMobileCta />
    </>
  );
}
