import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kundenpilot – KI-Automatisierung für lokale Unternehmen",
  description:
    "Wir helfen lokalen Unternehmen mit KI-Chatbots, WhatsApp-Marketing und Prozessautomatisierung mehr Kunden zu gewinnen – automatisch.",
};

const services = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    title: "KI-Chatbots",
    desc: "Rund um die Uhr automatisch auf Kundenanfragen antworten – ohne Personalaufwand.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2v-1a7 7 0 00-14 0v1a2 2 0 002 2zm4-10a4 4 0 100-8 4 4 0 000 8z" />
      </svg>
    ),
    title: "WhatsApp-Marketing",
    desc: "Erreichen Sie Ihre Kunden dort, wo sie täglich aktiv sind – direkt im Messenger.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Prozessautomatisierung",
    desc: "Wiederkehrende Aufgaben automatisieren und wertvolle Zeit für das Wesentliche gewinnen.",
  },
];

export default function Home() {
  return (
    <main>
      {/* ── Hero ── */}
      <section className="relative bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_#1e3a8a_0%,_transparent_60%)] opacity-60" />
        <div className="relative max-w-6xl mx-auto px-6 py-28 lg:py-36 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-700/30 text-blue-300 text-xs font-semibold px-4 py-1.5 rounded-full mb-6 border border-blue-700/40">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              KI-Automatisierung · WhatsApp · Chatbots
            </div>
            <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              Mehr Anfragen.<br />
              <span className="text-blue-400">Weniger Aufwand.</span>
            </h1>
            <p className="text-slate-300 text-xl leading-relaxed mb-10 max-w-lg">
              Kundenpilot automatisiert Ihre Kundengewinnung mit intelligenten
              KI-Lösungen – damit Sie sich auf Ihr Kerngeschäft konzentrieren können.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-4 rounded-xl transition-colors shadow-lg shadow-blue-900/40"
              >
                Kostenlos beraten lassen
              </Link>
              <Link
                href="/services"
                className="text-slate-300 hover:text-white font-semibold px-8 py-4 rounded-xl border border-slate-700 hover:border-slate-500 transition-colors"
              >
                Leistungen entdecken
              </Link>
            </div>
          </div>

          <div className="hidden lg:flex justify-center">
            <div className="relative">
              <div className="w-72 h-72 bg-blue-700/20 rounded-full flex items-center justify-center border border-blue-700/30">
                <Image
                  src="/logo.png"
                  alt="Kundenpilot"
                  width={220}
                  height={220}
                  className="rounded-full"
                  priority
                />
              </div>
              <div className="absolute -bottom-4 -right-8 bg-slate-800 rounded-2xl px-5 py-3 border border-slate-700 shadow-xl">
                <p className="text-blue-400 font-bold text-xl">24/7</p>
                <p className="text-slate-400 text-xs">Automatisch aktiv</p>
              </div>
              <div className="absolute -top-4 -left-8 bg-slate-800 rounded-2xl px-5 py-3 border border-slate-700 shadow-xl">
                <p className="text-green-400 font-bold text-xl">+300%</p>
                <p className="text-slate-400 text-xs">Mehr Anfragen</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Trust bar ── */}
      <section className="bg-slate-50 border-y border-slate-100 py-8 px-6">
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-10 text-center">
          {[
            { v: "50+", l: "Betreute Kunden" },
            { v: "98%", l: "Zufriedenheitsrate" },
            { v: "< 48h", l: "Reaktionszeit" },
            { v: "24/7", l: "Bot-Verfügbarkeit" },
          ].map(({ v, l }) => (
            <div key={l}>
              <p className="text-3xl font-extrabold text-slate-900">{v}</p>
              <p className="text-slate-500 text-sm mt-1">{l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Leistungen Teaser ── */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-blue-700 font-semibold text-sm uppercase tracking-widest mb-3">Was wir tun</p>
            <h2 className="text-4xl font-extrabold text-slate-900 mb-4">Unsere Kernleistungen</h2>
            <p className="text-slate-500 text-lg max-w-xl mx-auto">
              Drei fokussierte Lösungen, die Ihr Unternehmen automatisch wachsen lassen.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map(({ icon, title, desc }) => (
              <div
                key={title}
                className="group bg-white border border-slate-100 rounded-2xl p-8 hover:shadow-xl hover:border-blue-100 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-blue-50 group-hover:bg-blue-700 rounded-xl flex items-center justify-center mb-5 transition-colors duration-300 text-blue-700 group-hover:text-white">
                  {icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-blue-700 font-semibold hover:text-blue-900 transition-colors"
            >
              Alle Leistungen ansehen
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 px-6 bg-slate-900">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-white mb-4">
            Bereit, mehr Kunden zu gewinnen?
          </h2>
          <p className="text-slate-400 text-lg mb-8">
            Lassen Sie uns in einem kostenlosen Erstgespräch herausfinden, wie Kundenpilot Ihr Unternehmen voranbringt.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-blue-600 hover:bg-blue-500 text-white font-semibold px-10 py-4 rounded-xl transition-colors shadow-lg shadow-blue-900/40 text-lg"
          >
            Jetzt kostenlos anfragen
          </Link>
        </div>
      </section>
    </main>
  );
}
