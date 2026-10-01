"use client";

import { useEffect, useState, useMemo } from "react";
import { useRouter } from "next/navigation";

interface Submission {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  service?: string;
  time?: string;
  notes?: string;
  submittedAt: string;
  status: "new" | "contacted" | "scheduled" | "completed";
  ipAddress?: string;
}

export default function AdminDashboardPage() {
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<string>("all");
  const [search, setSearch] = useState("");
  const [selectedSubmission, setSelectedSubmission] = useState<Submission | null>(null);
  const [isDeleting, setIsDeleting] = useState<string | null>(null);
  const [toast, setToast] = useState<{ message: string; type: "success" | "error" } | null>(null);
  const router = useRouter();

  const showToast = (message: string, type: "success" | "error" = "success") => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3500);
  };

  const fetchSubmissions = async () => {
    try {
      setLoading(true);
      const res = await fetch(`/api/admin/submissions?status=all`);
      if (res.status === 401) {
        router.push("/admin");
        return;
      }
      const data = await res.json();
      if (data.success) {
        setSubmissions(data.data.submissions);
      }
    } catch (error) {
      console.error("Failed to fetch submissions:", error);
      showToast("Failed to fetch inquiries", "error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSubmissions();
  }, []);

  const updateStatus = async (id: string, newStatus: string) => {
    try {
      const res = await fetch("/api/admin/submissions", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, status: newStatus }),
      });

      if (res.ok) {
        setSubmissions((prev) =>
          prev.map((sub) => (sub._id === id ? { ...sub, status: newStatus as any } : sub))
        );
        if (selectedSubmission?._id === id) {
          setSelectedSubmission((prev) => (prev ? { ...prev, status: newStatus as any } : null));
        }
        showToast(`Status updated to "${newStatus}"`);
      } else {
        showToast("Failed to update status", "error");
      }
    } catch {
      showToast("Network error while updating status", "error");
    }
  };

  const deleteSubmission = async (id: string) => {
    if (!confirm("Are you sure you want to permanently delete this submission?")) {
      return;
    }

    try {
      setIsDeleting(id);
      const res = await fetch(`/api/admin/submissions?id=${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        setSubmissions((prev) => prev.filter((sub) => sub._id !== id));
        if (selectedSubmission?._id === id) {
          setSelectedSubmission(null);
        }
        showToast("Inquiry deleted successfully");
      } else {
        showToast("Failed to delete inquiry", "error");
      }
    } catch {
      showToast("Error deleting inquiry", "error");
    } finally {
      setIsDeleting(null);
    }
  };

  // Export to CSV
  const exportToCSV = () => {
    if (submissions.length === 0) {
      showToast("No data to export", "error");
      return;
    }

    const headers = ["Date", "First Name", "Last Name", "Email", "Phone", "Service", "Preferred Time", "Status", "Notes"];
    const rows = filteredSubmissions.map((s) => [
      `"${new Date(s.submittedAt).toLocaleString()}"`,
      `"${s.firstName}"`,
      `"${s.lastName}"`,
      `"${s.email}"`,
      `"${s.phone}"`,
      `"${s.service || "N/A"}"`,
      `"${s.time || "N/A"}"`,
      `"${s.status}"`,
      `"${(s.notes || "").replace(/"/g, '""')}"`,
    ]);

    const csvContent = "data:text/csv;charset=utf-8," + [headers.join(","), ...rows.map((e) => e.join(","))].join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `premier_dentistry_leads_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showToast("Downloaded inquiries as CSV");
  };

  // Filter and search
  const filteredSubmissions = useMemo(() => {
    return submissions.filter((item) => {
      const matchesFilter = filter === "all" || item.status === filter;
      if (!matchesFilter) return false;

      if (!search.trim()) return true;
      const q = search.toLowerCase();
      const fullName = `${item.firstName} ${item.lastName}`.toLowerCase();
      return (
        fullName.includes(q) ||
        item.email.toLowerCase().includes(q) ||
        item.phone.toLowerCase().includes(q) ||
        (item.service && item.service.toLowerCase().includes(q)) ||
        (item.notes && item.notes.toLowerCase().includes(q))
      );
    });
  }, [submissions, filter, search]);

  // Statistics
  const stats = useMemo(() => {
    return {
      total: submissions.length,
      new: submissions.filter((s) => s.status === "new").length,
      contacted: submissions.filter((s) => s.status === "contacted").length,
      scheduled: submissions.filter((s) => s.status === "scheduled").length,
      completed: submissions.filter((s) => s.status === "completed").length,
    };
  }, [submissions]);

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "new":
        return "bg-blue-500/15 text-blue-300 border-blue-500/30";
      case "contacted":
        return "bg-amber-500/15 text-amber-300 border-amber-500/30";
      case "scheduled":
        return "bg-emerald-500/15 text-emerald-300 border-emerald-500/30";
      case "completed":
        return "bg-slate-700/50 text-slate-300 border-slate-600";
      default:
        return "bg-slate-800 text-slate-400 border-slate-700";
    }
  };

  return (
    <div className="space-y-6">
      {/* Toast Notification */}
      {toast && (
        <div
          className={`fixed bottom-5 right-5 z-50 flex items-center gap-2.5 px-4 py-3 rounded-2xl shadow-2xl text-xs font-semibold backdrop-blur-lg border transition-all ${
            toast.type === "success"
              ? "bg-emerald-950/90 text-emerald-200 border-emerald-700/60 shadow-emerald-950/50"
              : "bg-red-950/90 text-red-200 border-red-700/60 shadow-red-950/50"
          }`}
        >
          {toast.type === "success" ? (
            <svg className="w-4 h-4 text-emerald-400 shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg className="w-4 h-4 text-red-400 shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                clipRule="evenodd"
              />
            </svg>
          )}
          <span>{toast.message}</span>
        </div>
      )}

      {/* Header section with titles and actions */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Patient Inquiries & Appointments
          </h1>
          <p className="mt-1 text-sm text-slate-400">
            Review online appointment bookings and contact form submissions from the website
          </p>
        </div>

        <div className="flex items-center gap-2.5">
          <button
            onClick={fetchSubmissions}
            disabled={loading}
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs font-semibold text-slate-200 hover:bg-slate-800 active:scale-95 transition-all"
            title="Refresh Inquiries"
          >
            <svg
              className={`w-3.5 h-3.5 text-slate-400 ${loading ? "animate-spin" : ""}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
            Refresh
          </button>

          <button
            onClick={exportToCSV}
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-xs font-semibold text-white shadow-lg shadow-blue-600/20 active:scale-95 transition-all"
          >
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
            Export CSV
          </button>
        </div>
      </div>

      {/* KPI Stats Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-3.5 sm:gap-4">
        {/* Total Inquiries */}
        <div
          onClick={() => setFilter("all")}
          className={`cursor-pointer p-4 rounded-2xl border transition-all ${
            filter === "all"
              ? "bg-slate-900 border-blue-500/50 shadow-lg shadow-blue-500/10"
              : "bg-slate-900/60 border-slate-800/80 hover:border-slate-700"
          }`}
        >
          <div className="flex items-center justify-between text-slate-400 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider">Total Leads</span>
            <div className="w-7 h-7 rounded-lg bg-slate-800 flex items-center justify-center text-slate-300">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
          </div>
          <p className="text-2xl font-bold text-white tracking-tight">{stats.total}</p>
          <p className="text-[11px] text-slate-400 mt-1">All patient inquiries</p>
        </div>

        {/* New Leads */}
        <div
          onClick={() => setFilter("new")}
          className={`cursor-pointer p-4 rounded-2xl border transition-all ${
            filter === "new"
              ? "bg-blue-950/40 border-blue-500 shadow-lg shadow-blue-500/20"
              : "bg-slate-900/60 border-slate-800/80 hover:border-blue-900/60"
          }`}
        >
          <div className="flex items-center justify-between text-blue-400 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              New Requests
            </span>
            <div className="w-7 h-7 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
            </div>
          </div>
          <p className="text-2xl font-bold text-blue-200 tracking-tight">{stats.new}</p>
          <p className="text-[11px] text-blue-400/80 mt-1">Requires follow-up</p>
        </div>

        {/* Contacted */}
        <div
          onClick={() => setFilter("contacted")}
          className={`cursor-pointer p-4 rounded-2xl border transition-all ${
            filter === "contacted"
              ? "bg-amber-950/40 border-amber-500 shadow-lg shadow-amber-500/20"
              : "bg-slate-900/60 border-slate-800/80 hover:border-amber-900/60"
          }`}
        >
          <div className="flex items-center justify-between text-amber-400 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider">In Contact</span>
            <div className="w-7 h-7 rounded-lg bg-amber-500/20 flex items-center justify-center text-amber-400">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </div>
          </div>
          <p className="text-2xl font-bold text-amber-200 tracking-tight">{stats.contacted}</p>
          <p className="text-[11px] text-amber-400/80 mt-1">Communicated with patient</p>
        </div>

        {/* Scheduled */}
        <div
          onClick={() => setFilter("scheduled")}
          className={`cursor-pointer p-4 rounded-2xl border transition-all ${
            filter === "scheduled"
              ? "bg-emerald-950/40 border-emerald-500 shadow-lg shadow-emerald-500/20"
              : "bg-slate-900/60 border-slate-800/80 hover:border-emerald-900/60"
          }`}
        >
          <div className="flex items-center justify-between text-emerald-400 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider">Scheduled</span>
            <div className="w-7 h-7 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
          </div>
          <p className="text-2xl font-bold text-emerald-200 tracking-tight">{stats.scheduled}</p>
          <p className="text-[11px] text-emerald-400/80 mt-1">Confirmed appointments</p>
        </div>

        {/* Completed */}
        <div
          onClick={() => setFilter("completed")}
          className={`cursor-pointer p-4 rounded-2xl border transition-all col-span-2 lg:col-span-1 ${
            filter === "completed"
              ? "bg-slate-800 border-slate-500 shadow-lg"
              : "bg-slate-900/60 border-slate-800/80 hover:border-slate-700"
          }`}
        >
          <div className="flex items-center justify-between text-slate-400 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider">Completed</span>
            <div className="w-7 h-7 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>
          <p className="text-2xl font-bold text-slate-200 tracking-tight">{stats.completed}</p>
          <p className="text-[11px] text-slate-400 mt-1">Visit completed</p>
        </div>
      </div>

      {/* Filter Tabs and Search Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
        {/* Status Filters */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0">
          {[
            { key: "all", label: "All", count: stats.total },
            { key: "new", label: "New", count: stats.new },
            { key: "contacted", label: "Contacted", count: stats.contacted },
            { key: "scheduled", label: "Scheduled", count: stats.scheduled },
            { key: "completed", label: "Completed", count: stats.completed },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setFilter(tab.key)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-2 ${
                filter === tab.key
                  ? "bg-blue-600 text-white shadow-md shadow-blue-600/30"
                  : "text-slate-400 hover:text-white hover:bg-slate-800"
              }`}
            >
              <span>{tab.label}</span>
              <span
                className={`px-1.5 py-0.2 rounded-full text-[10px] ${
                  filter === tab.key ? "bg-white/20 text-white" : "bg-slate-800 text-slate-400"
                }`}
              >
                {tab.count}
              </span>
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative min-w-[260px]">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <input
            type="text"
            placeholder="Search patient, phone, notes..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-8 py-2 bg-slate-950/70 border border-slate-700/70 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 transition-all"
          />
          {search && (
            <button
              onClick={() => setSearch("")}
              className="absolute inset-y-0 right-0 pr-2.5 flex items-center text-slate-400 hover:text-white"
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>
      </div>

      {/* Submissions List / Table */}
      {loading ? (
        <div className="flex flex-col items-center justify-center p-16 rounded-2xl bg-slate-900/60 border border-slate-800">
          <div className="w-10 h-10 border-3 border-blue-500 border-t-transparent rounded-full animate-spin" />
          <p className="mt-3 text-sm text-slate-400 font-medium">Fetching patient submissions...</p>
        </div>
      ) : filteredSubmissions.length === 0 ? (
        <div className="text-center py-16 px-4 rounded-2xl bg-slate-900/60 border border-slate-800">
          <div className="mx-auto w-12 h-12 rounded-2xl bg-slate-800/80 flex items-center justify-center text-slate-400 mb-3">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
          </div>
          <h3 className="text-base font-semibold text-white">No inquiries found</h3>
          <p className="mt-1 text-xs text-slate-400 max-w-sm mx-auto">
            {search
              ? `No inquiries matching "${search}". Try clearing search keywords.`
              : filter !== "all"
              ? `No inquiries currently marked as "${filter}".`
              : "No patient appointment requests or contact messages yet."}
          </p>
          {(search || filter !== "all") && (
            <button
              onClick={() => {
                setSearch("");
                setFilter("all");
              }}
              className="mt-4 px-3.5 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200 transition-colors"
            >
              Reset Filters
            </button>
          )}
        </div>
      ) : (
        <div className="rounded-2xl bg-slate-900/90 border border-slate-800 overflow-hidden shadow-xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-800 bg-slate-950/60 text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  <th className="py-3.5 px-4 sm:px-6">Patient</th>
                  <th className="py-3.5 px-4">Contact</th>
                  <th className="py-3.5 px-4">Service & Timing</th>
                  <th className="py-3.5 px-4">Notes</th>
                  <th className="py-3.5 px-4">Status</th>
                  <th className="py-3.5 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/80 text-xs">
                {filteredSubmissions.map((sub) => {
                  const initial = `${sub.firstName?.[0] || ""}${sub.lastName?.[0] || ""}`.toUpperCase();
                  const dateObj = new Date(sub.submittedAt);
                  const isNew = sub.status === "new";

                  return (
                    <tr
                      key={sub._id}
                      className={`hover:bg-slate-800/40 transition-colors group ${
                        isNew ? "bg-blue-950/10" : ""
                      }`}
                    >
                      {/* Patient Name */}
                      <td className="py-4 px-4 sm:px-6">
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-9 h-9 rounded-xl flex items-center justify-center font-bold text-xs shrink-0 shadow ${
                              isNew
                                ? "bg-blue-600 text-white ring-2 ring-blue-400/40"
                                : "bg-slate-800 text-slate-300"
                            }`}
                          >
                            {initial || "P"}
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="font-semibold text-white text-sm">
                                {sub.firstName} {sub.lastName}
                              </span>
                              {isNew && (
                                <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-blue-500/20 text-blue-300 border border-blue-500/30">
                                  NEW
                                </span>
                              )}
                            </div>
                            <div className="text-[11px] text-slate-400 mt-0.5">
                              {dateObj.toLocaleDateString("en-US", {
                                month: "short",
                                day: "numeric",
                                year: "numeric",
                              })}{" "}
                              at{" "}
                              {dateObj.toLocaleTimeString("en-US", {
                                hour: "2-digit",
                                minute: "2-digit",
                              })}
                            </div>
                          </div>
                        </div>
                      </td>

                      {/* Contact Info */}
                      <td className="py-4 px-4">
                        <div className="space-y-1">
                          <a
                            href={`mailto:${sub.email}`}
                            className="flex items-center gap-1.5 text-blue-400 hover:text-blue-300 transition-colors group-hover:underline"
                          >
                            <svg className="w-3.5 h-3.5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                              />
                            </svg>
                            <span>{sub.email}</span>
                          </a>
                          <a
                            href={`tel:${sub.phone}`}
                            className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
                          >
                            <svg className="w-3.5 h-3.5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                              />
                            </svg>
                            <span>{sub.phone}</span>
                          </a>
                        </div>
                      </td>

                      {/* Service & Time */}
                      <td className="py-4 px-4">
                        <div className="space-y-1">
                          <span className="inline-block px-2.5 py-0.5 rounded-lg bg-slate-800 border border-slate-700 font-medium text-slate-200">
                            {sub.service || "General Inquiry"}
                          </span>
                          {sub.time && (
                            <div className="text-[11px] text-slate-400 flex items-center gap-1">
                              <svg className="w-3 h-3 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              Pref: {sub.time}
                            </div>
                          )}
                        </div>
                      </td>

                      {/* Notes snippet */}
                      <td className="py-4 px-4 max-w-[200px]">
                        {sub.notes ? (
                          <p className="text-slate-300 truncate text-[11px]" title={sub.notes}>
                            {sub.notes}
                          </p>
                        ) : (
                          <span className="text-slate-500 italic text-[11px]">No notes</span>
                        )}
                      </td>

                      {/* Status Selector */}
                      <td className="py-4 px-4">
                        <select
                          value={sub.status}
                          onChange={(e) => updateStatus(sub._id, e.target.value)}
                          className={`px-2.5 py-1.5 rounded-xl border text-xs font-semibold cursor-pointer focus:outline-none transition-all ${getStatusBadge(
                            sub.status
                          )}`}
                        >
                          <option value="new" className="bg-slate-900 text-blue-300">
                            ● New
                          </option>
                          <option value="contacted" className="bg-slate-900 text-amber-300">
                            ● Contacted
                          </option>
                          <option value="scheduled" className="bg-slate-900 text-emerald-300">
                            ● Scheduled
                          </option>
                          <option value="completed" className="bg-slate-900 text-slate-300">
                            ● Completed
                          </option>
                        </select>
                      </td>

                      {/* Actions */}
                      <td className="py-4 px-4 text-right">
                        <div className="flex items-center justify-end gap-1.5">
                          <button
                            onClick={() => setSelectedSubmission(sub)}
                            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
                            title="View Full Details"
                          >
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                              />
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                              />
                            </svg>
                          </button>

                          <button
                            onClick={() => deleteSubmission(sub._id)}
                            disabled={isDeleting === sub._id}
                            className="p-1.5 text-slate-400 hover:text-red-400 rounded-lg hover:bg-slate-800 transition-colors"
                            title="Delete Inquiry"
                          >
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                              />
                            </svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Full Details Modal / Drawer */}
      {selectedSubmission && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
          <div className="relative w-full max-w-xl bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-7 shadow-2xl max-h-[90vh] overflow-y-auto">
            {/* Header */}
            <div className="flex items-start justify-between pb-4 border-b border-slate-800">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold text-base shadow">
                  {selectedSubmission.firstName[0]}
                  {selectedSubmission.lastName[0]}
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-white">
                    {selectedSubmission.firstName} {selectedSubmission.lastName}
                  </h3>
                  <p className="text-xs text-slate-400">
                    Submitted on {new Date(selectedSubmission.submittedAt).toLocaleString()}
                  </p>
                </div>
              </div>

              <button
                onClick={() => setSelectedSubmission(null)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Content Details */}
            <div className="py-5 space-y-4">
              <div className="grid grid-cols-2 gap-3.5">
                <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400 mb-1">
                    Email Address
                  </p>
                  <a
                    href={`mailto:${selectedSubmission.email}`}
                    className="text-xs text-blue-400 hover:underline font-medium break-all"
                  >
                    {selectedSubmission.email}
                  </a>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400 mb-1">
                    Phone Number
                  </p>
                  <a
                    href={`tel:${selectedSubmission.phone}`}
                    className="text-xs text-slate-200 hover:text-white font-medium"
                  >
                    {selectedSubmission.phone}
                  </a>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3.5">
                <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400 mb-1">
                    Reason / Service
                  </p>
                  <p className="text-xs text-white font-medium">
                    {selectedSubmission.service || "Not specified"}
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400 mb-1">
                    Preferred Time
                  </p>
                  <p className="text-xs text-white font-medium">
                    {selectedSubmission.time || "No preference"}
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80">
                <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400 mb-2">
                  Patient Notes & Questions
                </p>
                <div className="p-3 bg-slate-900/90 rounded-lg text-xs text-slate-200 leading-relaxed font-sans border border-slate-800 whitespace-pre-wrap">
                  {selectedSubmission.notes || "No notes were provided by the patient."}
                </div>
              </div>

              <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400 mb-1">
                    Update Workflow Status
                  </p>
                  <p className="text-xs text-slate-300">Change inquiry progression</p>
                </div>
                <select
                  value={selectedSubmission.status}
                  onChange={(e) => updateStatus(selectedSubmission._id, e.target.value)}
                  className={`px-3 py-1.5 rounded-xl border text-xs font-semibold cursor-pointer ${getStatusBadge(
                    selectedSubmission.status
                  )}`}
                >
                  <option value="new" className="bg-slate-900 text-blue-300">
                    New
                  </option>
                  <option value="contacted" className="bg-slate-900 text-amber-300">
                    Contacted
                  </option>
                  <option value="scheduled" className="bg-slate-900 text-emerald-300">
                    Scheduled
                  </option>
                  <option value="completed" className="bg-slate-900 text-slate-300">
                    Completed
                  </option>
                </select>
              </div>

              {selectedSubmission.ipAddress && (
                <div className="text-[11px] text-slate-400 font-mono">
                  Recorded IP: {selectedSubmission.ipAddress}
                </div>
              )}
            </div>

            {/* Footer with quick action buttons */}
            <div className="pt-4 border-t border-slate-800 flex items-center justify-between gap-3">
              <button
                onClick={() => deleteSubmission(selectedSubmission._id)}
                className="px-3.5 py-2 rounded-xl text-xs font-semibold text-red-400 hover:text-red-300 hover:bg-red-500/10 border border-red-500/20 transition-colors"
              >
                Delete Inquiry
              </button>

              <div className="flex items-center gap-2">
                <a
                  href={`tel:${selectedSubmission.phone}`}
                  className="px-4 py-2 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-white transition-colors flex items-center gap-1.5"
                >
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  Call Patient
                </a>

                <a
                  href={`mailto:${selectedSubmission.email}`}
                  className="px-4 py-2 rounded-xl text-xs font-semibold bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/30 transition-colors flex items-center gap-1.5"
                >
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  Send Email
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}