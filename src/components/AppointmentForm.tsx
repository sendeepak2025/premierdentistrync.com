"use client";

import { useState } from "react";
import { Button } from "./Button";
import { Icon } from "./Icon";
import { services } from "@/lib/site";

type Status = "idle" | "submitting" | "success" | "error";

export function AppointmentForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.target as HTMLFormElement;
    const data = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: data.get("firstName"),
          lastName:  data.get("lastName"),
          email:     data.get("email"),
          phone:     data.get("phone"),
          service:   data.get("service"),
          time:      data.get("time"),
          notes:     data.get("notes"),
        }),
      });

      if (!res.ok) throw new Error("Failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl bg-brand-soft border border-brand/20 p-8 text-center">
        <div className="mx-auto w-14 h-14 rounded-full bg-white flex items-center justify-center text-brand">
          <Icon name="check" className="h-7 w-7" />
        </div>
        <h3 className="mt-4 font-display text-2xl text-ink">
          Thanks — request received.
        </h3>
        <p className="mt-2 text-ink-2 max-w-md mx-auto">
          A team member will reach out the next business day to confirm a time.
          If your visit is urgent, please call us directly.
        </p>
        <button
          type="button"
          className="mt-5 text-sm text-brand hover:text-brand-2 font-medium"
          onClick={() => setStatus("idle")}
        >
          Send another request
        </button>
      </div>
    );
  }

  if (status === "error") {
    return (
      <div className="rounded-2xl bg-red-50 border border-red-200 p-8 text-center">
        <div className="mx-auto w-14 h-14 rounded-full bg-white flex items-center justify-center text-red-500">
          <Icon name="close" className="h-7 w-7" />
        </div>
        <h3 className="mt-4 font-display text-2xl text-ink">
          Something went wrong.
        </h3>
        <p className="mt-2 text-ink-2 max-w-md mx-auto">
          We couldn&apos;t send your message. Please call us directly at{" "}
          <a href="tel:+17045448860" className="font-semibold text-brand">(704) 544-8860</a>.
        </p>
        <button
          type="button"
          className="mt-5 text-sm text-brand hover:text-brand-2 font-medium"
          onClick={() => setStatus("idle")}
        >
          Try again
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid sm:grid-cols-2 gap-4">
      <Field label="First name" name="firstName" required />
      <Field label="Last name" name="lastName" required />
      <Field label="Email" type="email" name="email" required />
      <Field label="Phone" type="tel" name="phone" required />

      <Select label="Reason for visit" name="service" required>
        <option value="">Select a treatment…</option>
        <option value="new-patient">New patient exam &amp; cleaning</option>
        {services.map((s) => (
          <option key={s.slug} value={s.slug}>
            {s.title}
          </option>
        ))}
        <option value="other">Something else</option>
      </Select>

      <Select label="Preferred time" name="time">
        <option value="">No preference</option>
        <option value="morning">Mornings (9–11)</option>
        <option value="midday">Mid-day (11–2)</option>
        <option value="afternoon">Afternoons (2–5)</option>
      </Select>

      <div className="sm:col-span-2">
        <Field label="Notes (optional)" name="notes" textarea />
      </div>

      <div className="sm:col-span-2 flex items-start gap-2 text-sm text-muted">
        <input
          type="checkbox"
          id="consent"
          name="consent"
          required
          className="mt-1 h-4 w-4 rounded border-line text-brand focus:ring-brand/30"
        />
        <label htmlFor="consent" className="leading-snug">
          I agree to be contacted by Premier Dentistry by phone, text, or email
          about scheduling. Standard rates may apply.
        </label>
      </div>

      <div className="sm:col-span-2 flex items-center justify-between gap-4 pt-2">
        <p className="text-xs text-muted">
          We respond within 1 business day.
        </p>
        <Button type="submit" size="lg">
          {status === "submitting" ? "Sending…" : "Request appointment"}
          {status !== "submitting" && (
            <Icon name="arrow-right" className="h-4 w-4" />
          )}
        </Button>
      </div>
    </form>
  );
}

type FieldProps = {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  textarea?: boolean;
};

function Field({ label, name, type = "text", required, textarea }: FieldProps) {
  const base =
    "mt-1.5 block w-full rounded-xl border border-line bg-white px-3.5 py-2.5 text-[15px] text-ink placeholder:text-muted focus:border-brand focus:ring-2 focus:ring-brand/20 focus:outline-none transition";
  return (
    <label className="block">
      <span className="text-sm font-medium text-ink-2">
        {label}
        {required && <span className="text-brand"> *</span>}
      </span>
      {textarea ? (
        <textarea name={name} rows={4} className={base} required={required} />
      ) : (
        <input type={type} name={name} className={base} required={required} />
      )}
    </label>
  );
}

function Select({
  label,
  name,
  required,
  children,
}: {
  label: string;
  name: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-ink-2">
        {label}
        {required && <span className="text-brand"> *</span>}
      </span>
      <select
        name={name}
        required={required}
        defaultValue=""
        className="mt-1.5 block w-full rounded-xl border border-line bg-white px-3.5 py-2.5 text-[15px] text-ink focus:border-brand focus:ring-2 focus:ring-brand/20 focus:outline-none transition appearance-none"
      >
        {children}
      </select>
    </label>
  );
}
