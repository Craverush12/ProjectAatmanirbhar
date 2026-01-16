"use client";

import { useState } from "react";

const initialState = {
  name: "",
  email: "",
  phone: "",
  interest: "",
  availability: "",
};

const VolunteerForm = () => {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.name || !form.email) {
      setStatus("error");
      return;
    }
    // In production, send to /api/volunteer
    setStatus("success");
    setForm(initialState);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="soft-card space-y-4 rounded-2xl border border-emerald-100 bg-white p-6"
    >
      <div className="grid gap-4 md:grid-cols-2">
        <label className="space-y-2 text-sm font-semibold text-emerald-900">
          Full name
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full rounded-xl border border-emerald-100 px-4 py-3 text-sm text-emerald-900 outline-none transition focus:border-emerald-400"
            placeholder="Ananya Sharma"
            required
          />
        </label>
        <label className="space-y-2 text-sm font-semibold text-emerald-900">
          Email
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="w-full rounded-xl border border-emerald-100 px-4 py-3 text-sm text-emerald-900 outline-none transition focus:border-emerald-400"
            placeholder="you@example.com"
            required
          />
        </label>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <label className="space-y-2 text-sm font-semibold text-emerald-900">
          Phone
          <input
            name="phone"
            value={form.phone}
            onChange={handleChange}
            className="w-full rounded-xl border border-emerald-100 px-4 py-3 text-sm text-emerald-900 outline-none transition focus:border-emerald-400"
            placeholder="+91 ..."
          />
        </label>
        <label className="space-y-2 text-sm font-semibold text-emerald-900">
          Areas of interest
          <input
            name="interest"
            value={form.interest}
            onChange={handleChange}
            className="w-full rounded-xl border border-emerald-100 px-4 py-3 text-sm text-emerald-900 outline-none transition focus:border-emerald-400"
            placeholder="Forests, Rivers, Education..."
          />
        </label>
      </div>
      <label className="space-y-2 text-sm font-semibold text-emerald-900">
        Availability
        <textarea
          name="availability"
          value={form.availability}
          onChange={handleChange}
          className="min-h-[120px] w-full rounded-xl border border-emerald-100 px-4 py-3 text-sm text-emerald-900 outline-none transition focus:border-emerald-400"
          placeholder="Weekends, 5-8 hours per week..."
        />
      </label>
      <button
        type="submit"
        className="w-full rounded-full bg-emerald-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-800"
      >
        Submit application
      </button>
      {status === "success" && (
        <p className="text-sm font-semibold text-emerald-700">
          Thank you! We received your interest. Our team will reach out soon.
        </p>
      )}
      {status === "error" && (
        <p className="text-sm font-semibold text-red-600">
          Please add your name and email so we can reach you.
        </p>
      )}
    </form>
  );
};

export default VolunteerForm;
