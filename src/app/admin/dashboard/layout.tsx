"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface AdminUser {
  email: string;
  role: string;
}

export default function AdminDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState<AdminUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [currentTime, setCurrentTime] = useState<string>("");
  const router = useRouter();

  // Check authentication
  useEffect(() => {
    async function verifyAuth() {
      try {
        const res = await fetch("/api/admin/me");
        if (!res.ok) {
          router.push("/admin");
          return;
        }
        const data = await res.json();
        setUser(data.user);
      } catch {
        router.push("/admin");
      } finally {
        setLoading(false);
      }
    }
    verifyAuth();
  }, [router]);

  // Live time in Charlotte NC
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
          timeZone: "America/New_York",
        })
      );
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleLogout = async () => {
    try {
      await fetch("/api/admin/logout", { method: "POST" });
      router.push("/admin");
    } catch {
      router.push("/admin");
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-4">
        <div className="flex flex-col items-center gap-3">
          <div className="w-10 h-10 border-3 border-blue-500 border-t-transparent rounded-full animate-spin" />
          <p className="text-slate-400 text-sm font-medium">Opening Admin Dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col antialiased selection:bg-blue-600 selection:text-white">
      {/* Top Admin Navbar */}
      <header className="sticky top-0 z-30 h-16 bg-slate-900/90 backdrop-blur-xl border-b border-slate-800/80 flex items-center justify-between px-4 sm:px-6 lg:px-8 shadow-sm">
        <div className="flex items-center gap-4">
          <Link
            href="/admin/dashboard"
            className="flex items-center gap-3 group"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center text-white shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
              <svg
                className="w-5 h-5 text-white"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 2C9.5 2 7 3.5 7 7c0 3 1.5 6 3 11 0.5 1.5 1.2 4 2 4s1.5-2.5 2-4c1.5-5 3-8 3-11 0-3.5-2.5-5-5-5z"
                />
              </svg>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-display font-bold text-base text-white tracking-tight leading-tight">
                  Premier Dentistry
                </span>
                <span className="px-2 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-[10px] font-semibold text-blue-300 uppercase tracking-wider">
                  Admin Portal
                </span>
              </div>
              <p className="text-[11px] text-slate-400 font-medium">
                Form Submissions & Appointment Inquiries
              </p>
            </div>
          </Link>
        </div>

        <div className="flex items-center gap-3 sm:gap-4">
          {/* Live Clock / Location Pill */}
          <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800/60 border border-slate-700/60 text-xs text-slate-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Charlotte, NC</span>
            {currentTime && <span className="font-mono text-slate-400">· {currentTime}</span>}
          </div>

          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-medium text-slate-200 border border-slate-700/60 transition-colors"
          >
            <svg className="w-3.5 h-3.5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
            <span className="hidden sm:inline">View Live Site</span>
          </a>

          <div className="h-5 w-px bg-slate-800 hidden sm:block" />

          {/* User & Logout */}
          <div className="flex items-center gap-2.5">
            <div className="hidden sm:flex flex-col text-right">
              <span className="text-xs font-semibold text-slate-200">
                {user?.email || "admin@premierdentistrync.com"}
              </span>
              <span className="text-[10px] text-slate-400">Admin</span>
            </div>

            <button
              onClick={handleLogout}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold text-red-400 hover:text-red-300 hover:bg-red-500/10 border border-red-500/20 hover:border-red-500/40 transition-all"
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                />
              </svg>
              <span>Logout</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 lg:p-8">
        {children}
      </main>
    </div>
  );
}
