import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Portal | Premier Dentistry of Charlotte",
  description: "Secure management dashboard for Premier Dentistry of Charlotte",
  robots: {
    index: false,
    follow: false,
  },
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col font-sans antialiased selection:bg-brand selection:text-white">
      {children}
    </div>
  );
}