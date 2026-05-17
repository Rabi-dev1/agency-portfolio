import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "KI-Chatbot & WhatsApp-Automatisierung Bielefeld | Kundenpilot",
  description:
    "KI-Chatbots und WhatsApp-Marketing für Fahrschulen, Handwerker und lokale Unternehmen in Bielefeld & OWL. 24/7 automatisch Kunden gewinnen – ab 500 €.",
  keywords:
    "KI-Chatbot Bielefeld, WhatsApp Bot OWL, Chatbot Ostwestfalen, WhatsApp Marketing Bielefeld, Automatisierung lokale Unternehmen",
  openGraph: {
    title: "KI-Chatbot & WhatsApp-Automatisierung Bielefeld | Kundenpilot",
    description:
      "KI-Chatbots und WhatsApp-Marketing für Fahrschulen, Handwerker und lokale Unternehmen in Bielefeld & OWL. 24/7 automatisch Kunden gewinnen.",
  },
};

const stats = [
  { value: "24/7", label: "Automatisch erreichbar" },
  { value: ">90%", label: "WhatsApp-Öffnungsrate" },
  { value: "48h", label: "Integration in bestehende Systeme" },
  { value: "100%", label: "DSGVO-konform" },
];

const valueProps = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Persönlich vor Ort in OWL",
    desc: "Als lokales Unternehmen aus Bielefeld kennen wir Ihre Region und sind immer direkt für Sie erreichbar – kein anonymes Ticket-System.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Schnelle Einrichtung in 48h",
    desc: "Kein monatelanger Rollout. Wir integrieren Ihren Chatbot in bestehende Systeme – in der Regel innerhalb von 48 Stunden einsatzbereit.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "DSGVO-konform & sicher",
    desc: "Alle Lösungen laufen über die offizielle WhatsApp Business API und sind vollständig DSGVO-konform. Ihre Kundendaten bleiben sicher.",
  },
];

const projects = [
  {
    src: "/akanjuwelier.jpg",
    name: "Akan Juwelier",
    category: "Einzelhandel",
    result: "Moderne Website mit automatischer Anfragebeantwortung via WhatsApp",
  },
  {
    src: "/kenjujuwelier.jpg",
    name: "Kenju Juwelier",
    category: "Juwelier",
    result: "Moderne Website mit Terminbuchung & Produktberatung",
  },
  {
    src: "/lokispasta.jpg",
    name: "Loki's Pasta",
    category: "Gastronomie",
    result: "Moderne Website für Gastronomie mit Reservierungsfunktion",
  },
  {
    src: "/luzdeluna.jpg",
    name: "Luz de Luna",
    category: "Dienstleistung",
    result: "Moderne Website mit integriertem Chatbot",
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
    price: "ab 500 €",
  },
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
    title: "WhatsApp-Marketing",
    desc: "Über 90 % Öffnungsrate – erreichen Sie Kunden direkt im Messenger, DSGVO-konform.",
    price: "ab 150 €/Monat",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: "Prozessautomatisierung",
    desc: "CRM, Angebote, Rechnungen – automatisiert. Integration in bestehende Systeme meist in 48h.",
    price: "Auf Anfrage",
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
            <div className="inline-flex items-center gap-2 bg-blue-700/30 text-blue-300 text-xs font-semibold px-4 py-1.5 rounded-full mb-4 border border-blue-700/40 animate-fade-up">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              Bielefeld & OWL · KI-Automatisierung · WhatsApp
            </div>
            <div className="inline-flex items-center gap-2 bg-green-900/30 text-green-300 text-xs font-medium px-3 py-1.5 rounded-full mb-6 border border-green-700/30 animate-fade-up">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              💬 Pilo ist online – frag ihn direkt unten rechts!
            </div>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight mb-5 animate-fade-up-delay-1">
              WhatsApp & KI-Chatbots,<br />
              <span className="text-blue-400">die rund um die Uhr neue Kunden gewinnen</span>
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed mb-10 max-w-lg animate-fade-up-delay-2">
              Für Fahrschulen, Handwerker, Berater und lokale Dienstleister in{" "}
              <strong className="text-white">Bielefeld & OWL</strong>. Mehr Termine.
              Weniger Telefonstress. 24/7 erreichbar.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-up-delay-3">
              <Link
                href="/contact"
                className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-4 rounded-xl transition-all duration-200 shadow-lg shadow-blue-900/50 hover:shadow-blue-700/40 hover:-translate-y-0.5"
              >
                Kostenloses Potenzial-Gespräch buchen
              </Link>
              <a
                href="https://wa.me/4917687910568"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-xl transition-all duration-200 hover:-translate-y-0.5 shadow-lg shadow-green-900/40"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Jetzt auf WhatsApp schreiben
              </a>
            </div>
            <p className="text-slate-500 text-xs mt-5 animate-fade-up-delay-3">
              ✓ Kostenlos & unverbindlich &nbsp;·&nbsp; ✓ Persönlicher Ansprechpartner in OWL &nbsp;·&nbsp; ✓ DSGVO-konform
            </p>
          </div>

          {/* Hero visual */}
          <div className="hidden lg:flex justify-center animate-fade-up-delay-2">
            <div className="relative">
              <div className="w-72 h-72 bg-blue-700/10 rounded-full flex items-center justify-center border border-blue-700/20 ring-8 ring-blue-900/10">
                <Image
                  src="/logo.png"
                  alt="Kundenpilot – KI-Chatbot Bielefeld"
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
                <p className="text-blue-400 font-bold text-base">Bielefeld & OWL</p>
                <p className="text-slate-400 text-xs">Ihr lokaler Partner</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats Bar ── */}
      <section className="bg-blue-700 py-6 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map(({ value, label }) => (
            <div key={label} className="text-center">
              <p className="text-white font-extrabold text-2xl md:text-3xl">{value}</p>
              <p className="text-blue-200 text-xs mt-1">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Nutzenversprechen ── */}
      <section className="py-20 px-6 bg-slate-50 border-y border-slate-100">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-blue-700 font-semibold text-sm uppercase tracking-widest mb-3">Warum Kundenpilot?</p>
            <h2 className="text-3xl font-extrabold text-slate-900">Ihr lokaler Partner für KI-Automatisierung</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
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
        </div>
      </section>

      {/* ── Referenzen / Social Proof ── */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-blue-700 font-semibold text-sm uppercase tracking-widest mb-3">Referenzen</p>
            <h2 className="text-4xl font-extrabold text-slate-900 mb-4">Lokale Unternehmen, die uns vertrauen</h2>
            <p className="text-slate-500 text-lg max-w-xl mx-auto">
              Moderne Websites erfolgreich umgesetzt in Bielefeld und OWL.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.map(({ src, name, category, result }) => (
              <div
                key={name}
                className="group bg-white border border-slate-100 rounded-2xl overflow-hidden hover:shadow-xl hover:border-blue-100 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="relative h-48 bg-slate-100 overflow-hidden">
                  <Image
                    src={src}
                    alt={`${name} – Referenz Kundenpilot`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <span className="absolute top-3 left-3 bg-blue-700 text-white text-[10px] font-bold px-2 py-1 rounded-full">
                    {category}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-slate-900 text-base mb-1">{name}</h3>
                  <p className="text-slate-500 text-xs leading-relaxed">{result}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-slate-400 text-sm mt-8">
            Weitere Referenzen & Details im persönlichen Gespräch.
          </p>
        </div>
      </section>

      {/* ── Leistungen Teaser ── */}
      <section className="py-24 px-6 bg-slate-50 border-t border-slate-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-blue-700 font-semibold text-sm uppercase tracking-widest mb-3">Was wir tun</p>
            <h2 className="text-4xl font-extrabold text-slate-900 mb-4">Unsere Kernleistungen</h2>
            <p className="text-slate-500 text-lg max-w-xl mx-auto">
              Drei fokussierte Lösungen, die Ihr Unternehmen automatisch wachsen lassen.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map(({ icon, title, desc, price }) => (
              <div
                key={title}
                className="group bg-white border border-slate-100 rounded-2xl p-8 hover:shadow-xl hover:border-blue-100 hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                <div className="w-12 h-12 bg-blue-50 group-hover:bg-blue-700 rounded-xl flex items-center justify-center mb-5 transition-colors duration-300 text-blue-700 group-hover:text-white">
                  {icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed flex-1">{desc}</p>
                <div className="mt-5 pt-5 border-t border-slate-100">
                  <span className="text-blue-700 font-semibold text-sm">{price}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-blue-700 font-semibold hover:text-blue-900 transition-colors"
            >
              Alle Leistungen & Preise ansehen
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
            wir antworten persönlich, schnell und auf Deutsch.
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
          <p className="text-slate-500 text-sm mt-4">KundenPilot@gmail.com · Bielefeld & OWL</p>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-slate-900 mb-4">
            Bereit, mehr Kunden zu gewinnen?
          </h2>
          <p className="text-slate-500 text-lg mb-8">
            In einem kostenlosen 15-Minuten-Gespräch zeigen wir Ihnen, wie viel
            Zeit und Anfragen Sie mit einem KI-Chatbot gewinnen können.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block bg-blue-700 hover:bg-blue-600 text-white font-semibold px-10 py-4 rounded-xl transition-all duration-200 shadow-lg shadow-blue-200 hover:-translate-y-0.5 text-lg"
            >
              Kostenloses Gespräch buchen
            </Link>
            <a
              href="https://wa.me/4917687910568"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border-2 border-slate-200 hover:border-slate-300 text-slate-700 font-semibold px-10 py-4 rounded-xl transition-all duration-200 hover:-translate-y-0.5 text-lg"
            >
              Oder per WhatsApp anfragen
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
