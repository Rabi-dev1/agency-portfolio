import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kundenpilot – KI-Automatisierung für lokale Unternehmen",
  description:
    "Kundenpilot hilft lokalen Unternehmen mit KI-Chatbots, WhatsApp-Marketing und Prozessautomatisierung mehr Kunden zu gewinnen – automatisch und effizient.",
};

const valueProps = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0m-4 0a2 2 0 104 0m-4 0v16m0 0H7a2 2 0 01-2-2V10a2 2 0 012-2h2m4 12h4a2 2 0 002-2V10a2 2 0 00-2-2h-2" />
      </svg>
    ),
    title: "Individuelle Chatbot-Lösungen",
    desc: "Jede Lösung wird exakt auf Ihr Unternehmen, Ihre Branche und Ihre Kunden zugeschnitten.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Maximale Effizienz durch KI",
    desc: "Moderne KI-Technologie übernimmt repetitive Aufgaben, damit Sie sich auf Ihr Kerngeschäft fokussieren.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
      </svg>
    ),
    title: "Persönliche Betreuung & Direkter Support",
    desc: "Sie haben immer einen direkten Ansprechpartner. Keine Ticket-Systeme, kein Callcenter.",
  },
];

const services = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    title: "KI-Chatbots",
    desc: "Automatisch auf Kundenanfragen antworten – rund um die Uhr, ohne Personalaufwand.",
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
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
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
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_#1e3a8a_0%,_transparent_65%)]" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-900/20 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />

        <div className="relative max-w-6xl mx-auto px-6 py-28 lg:py-36 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-700/30 text-blue-300 text-xs font-semibold px-4 py-1.5 rounded-full mb-6 border border-blue-700/40 animate-fade-up">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              KI-Automatisierung · WhatsApp · Chatbots
            </div>
            {/* Pilo Hinweis */}
            <div className="inline-flex items-center gap-2 bg-green-900/30 text-green-300 text-xs font-medium px-3 py-1.5 rounded-full mb-4 border border-green-700/30 animate-fade-up cursor-pointer" onClick={() => {}}>
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              💬 Pilo ist online – frag ihn direkt unten rechts!
            </div>
            <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight mb-6 animate-fade-up-delay-1">
              Mehr Anfragen.<br />
              <span className="text-blue-400">Weniger Aufwand.</span>
            </h1>
            <p className="text-slate-300 text-xl leading-relaxed mb-10 max-w-lg animate-fade-up-delay-2">
              Kundenpilot automatisiert Ihre Kundengewinnung mit intelligenten
              KI-Lösungen – damit Sie sich auf Ihr Kerngeschäft konzentrieren können.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-up-delay-3">
              <Link
                href="/contact"
                className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 shadow-lg shadow-blue-900/50 hover:shadow-blue-700/40 hover:-translate-y-0.5"
              >
                Kostenlos beraten lassen
              </Link>
              <a
                href="https://wa.me/4917687910568"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#25D366]/20 hover:bg-[#25D366]/30 text-[#4ade80] border border-[#25D366]/30 font-semibold px-8 py-4 rounded-xl transition-all duration-200 hover:-translate-y-0.5"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp schreiben
              </a>
            </div>
          </div>

          {/* Hero visual */}
          <div className="hidden lg:flex justify-center animate-fade-up-delay-2">
            <div className="relative">
              <div className="w-72 h-72 bg-blue-700/10 rounded-full flex items-center justify-center border border-blue-700/20 ring-8 ring-blue-900/10">
                <Image
                  src="/logo.png"
                  alt="Kundenpilot"
                  width={230}
                  height={230}
                  className="rounded-full"
                  priority
                />
              </div>
              <div className="absolute -bottom-5 -right-10 bg-slate-800 rounded-2xl px-5 py-3 border border-slate-700 shadow-xl">
                <p className="text-green-400 font-bold text-lg">24/7 aktiv</p>
                <p className="text-slate-400 text-xs">Automatisch für Sie</p>
              </div>
              <div className="absolute -top-5 -left-10 bg-slate-800 rounded-2xl px-5 py-3 border border-slate-700 shadow-xl">
                <p className="text-blue-400 font-bold text-lg">KI-Powered</p>
                <p className="text-slate-400 text-xs">Intelligente Bots</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Nutzenversprechen ── */}
      <section className="py-20 px-6 bg-slate-50 border-y border-slate-100">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
          {valueProps.map(({ icon, title, desc }) => (
            <div key={title} className="flex flex-col items-center text-center px-4">
              <div className="w-12 h-12 bg-blue-100 text-blue-700 rounded-2xl flex items-center justify-center mb-4">
                {icon}
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">{title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
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
                className="group bg-white border border-slate-100 rounded-2xl p-8 hover:shadow-xl hover:border-blue-100 hover:-translate-y-1 transition-all duration-300"
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

      {/* ── WhatsApp Sektion ── */}
      <section className="py-20 px-6 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-16 h-16 bg-[#25D366]/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-[#25D366]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          </div>
          <h2 className="text-3xl font-extrabold text-white mb-4">
            Lieber direkt schreiben?
          </h2>
          <p className="text-slate-400 text-lg mb-8 max-w-lg mx-auto">
            Kein Formular, kein Umweg. Schreiben Sie uns direkt auf WhatsApp –
            wir antworten persönlich und schnell.
          </p>
          <a
            href="https://wa.me/4917687910568"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-10 py-4 rounded-xl transition-all duration-200 shadow-lg shadow-green-900/30 hover:-translate-y-0.5 text-lg"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Jetzt auf WhatsApp schreiben
          </a>
          <p className="text-slate-500 text-sm mt-4">+49 176 87910568</p>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-slate-900 mb-4">
            Bereit, mehr Kunden zu gewinnen?
          </h2>
          <p className="text-slate-500 text-lg mb-8">
            Lassen Sie uns in einem kostenlosen Erstgespräch herausfinden,
            wie Kundenpilot Ihr Unternehmen voranbringt.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-blue-700 hover:bg-blue-600 text-white font-semibold px-10 py-4 rounded-xl transition-all duration-200 shadow-lg shadow-blue-200 hover:-translate-y-0.5 text-lg"
          >
            Jetzt kostenlos anfragen
          </Link>
        </div>
      </section>
    </main>
  );
}
