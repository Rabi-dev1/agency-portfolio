"use client";

import { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Server error");

      setStatus("success");
      setForm({ name: "", company: "", email: "", subject: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center text-center py-16 px-6 bg-green-50 rounded-2xl border border-green-100">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-2">Nachricht gesendet! ✅</h3>
        <p className="text-slate-500 text-sm leading-relaxed max-w-sm">
          Wir haben Ihre Anfrage erhalten und melden uns innerhalb von 24 Stunden.
          Am schnellsten erreichen Sie uns auch direkt auf{" "}
          <a href="https://wa.me/4917687910568" className="text-[#25D366] font-medium hover:underline">
            WhatsApp
          </a>.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm text-slate-400 hover:text-slate-600 transition-colors"
        >
          Neue Nachricht senden
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5" htmlFor="name">
            Name *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Max Mustermann"
            className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm transition-shadow"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5" htmlFor="company">
            Unternehmen
          </label>
          <input
            id="company"
            name="company"
            type="text"
            value={form.company}
            onChange={handleChange}
            placeholder="Muster GmbH"
            className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm transition-shadow"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1.5" htmlFor="email">
          E-Mail *
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={form.email}
          onChange={handleChange}
          placeholder="max@beispiel.de"
          className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm transition-shadow"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1.5" htmlFor="subject">
          Ich interessiere mich für
        </label>
        <select
          id="subject"
          name="subject"
          value={form.subject}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm bg-white"
        >
          <option value="">Bitte wählen...</option>
          <option>Professionelle Website</option>
          <option>KI-Chatbot</option>
          <option>Komplett-Paket (Website + KI-Chatbot)</option>
          <option>WhatsApp-Marketing</option>
          <option>Prozessautomatisierung</option>
          <option>Allgemeine Anfrage</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1.5" htmlFor="message">
          Nachricht *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={form.message}
          onChange={handleChange}
          placeholder="Beschreiben Sie kurz Ihr Anliegen..."
          className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm resize-none transition-shadow"
        />
      </div>

      {status === "error" && (
        <div className="bg-red-50 border border-red-200 text-red-700 text-sm rounded-xl px-4 py-3">
          Fehler beim Senden. Bitte versuche es erneut oder schreib uns direkt auf{" "}
          <a href="https://wa.me/4917687910568" className="underline font-medium">WhatsApp</a>.
        </div>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full bg-blue-700 hover:bg-blue-600 disabled:bg-blue-400 text-white font-semibold py-4 rounded-xl transition-all duration-200 shadow-md shadow-blue-100 hover:-translate-y-0.5 disabled:translate-y-0 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {status === "loading" ? (
          <>
            <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Wird gesendet...
          </>
        ) : (
          "Nachricht senden"
        )}
      </button>

      <p className="text-xs text-slate-400 text-center">
        Mit dem Absenden stimmen Sie unserer{" "}
        <a href="/datenschutz" className="underline hover:text-slate-600">Datenschutzerklärung</a> zu.
      </p>
    </form>
  );
}
