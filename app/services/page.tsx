import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Leistungen & Pakete – KI-Chatbot & SEO-Website Bielefeld | Kundenpilot",
  description:
    "KI-Chatbots, professionelle SEO-Websites und WhatsApp-Marketing für lokale Unternehmen in Bielefeld & OWL. Individuelles Angebot auf Anfrage.",
  keywords:
    "KI-Chatbot Bielefeld, SEO Website OWL, WhatsApp Bot Ostwestfalen, Chatbot Fahrschule, Website Handwerker Bielefeld",
};

const packages = [
  {
    id: "website",
    label: "Paket 1",
    title: "Professionelle Website",
    subtitle: "SEO-optimiert & modern",
    desc: "Eine schnelle, mobiloptimierte Website, die bei Google gefunden wird – maßgeschneidert für Ihr Unternehmen in Bielefeld & OWL.",
    features: [
      "Individuelles Design – kein Template",
      "SEO-Optimierung für lokale Suche",
      "Mobile-first & schnell ladend",
      "Kontaktformular & WhatsApp-Button",
      "DSGVO-konform (Impressum, Datenschutz)",
      "Hosting & Domain auf Wunsch",
    ],
    highlight: false,
    badge: null,
    accentBorder: "border-slate-200",
    accentHeader: "bg-slate-800",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    id: "chatbot",
    label: "Paket 2",
    title: "KI-Chatbot",
    subtitle: "24/7 automatisch Kunden gewinnen",
    desc: "Ein intelligenter Bot auf Ihrer Website und/oder in WhatsApp – beantwortet Anfragen, qualifiziert Leads und bucht Termine, ohne dass Sie eingreifen müssen.",
    features: [
      "Integration auf Website + WhatsApp",
      "Automatische FAQ-Beantwortung 24/7",
      "Lead-Qualifizierung & Terminbuchung",
      "Übergabe an echten Menschen möglich",
      "Mehrsprachig konfigurierbar",
      "Einrichtung meist in 48 Stunden",
    ],
    highlight: false,
    badge: null,
    accentBorder: "border-blue-200",
    accentHeader: "bg-blue-700",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
  {
    id: "komplett",
    label: "Paket 3",
    title: "Komplett-Paket",
    subtitle: "Website + KI-Chatbot + WhatsApp",
    desc: "Alles aus einer Hand: professionelle SEO-Website mit integriertem KI-Chatbot und WhatsApp-Automatisierung. Das beste Preis-Leistungs-Verhältnis für Ihr Unternehmen.",
    features: [
      "Professionelle SEO-Website",
      "KI-Chatbot auf Website & WhatsApp",
      "WhatsApp-Marketing & Automatisierung",
      "Lead-Qualifizierung & Terminbuchung",
      "Persönliche Betreuung & Support",
      "Alles DSGVO-konform aus einer Hand",
    ],
    highlight: true,
    badge: "Empfohlen",
    accentBorder: "border-blue-500",
    accentHeader: "bg-gradient-to-r from-blue-700 to-blue-500",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
];

const additionalServices = [
  {
    number: "04",
    title: "WhatsApp-Marketing",
    subtitle: "Direktkanal zu Ihren Kunden mit >90% Öffnungsrate",
    desc: "WhatsApp hat eine Öffnungsrate von über 90 % – E-Mail liegt bei ~20 %. Wir nutzen diesen Kanal für gezielte Kampagnen, automatisierte Nachfass-Nachrichten und persönlichen Kundensupport. Alles DSGVO-konform über die offizielle WhatsApp Business API.",
    features: [
      "Broadcast-Kampagnen an Opt-in-Listen",
      "Automatisierte Follow-up-Sequenzen",
      "Kundensupport via WhatsApp Business API",
      "Personalisierte Nachrichten & Erinnerungen",
      "Analytics und Öffnungsraten-Tracking",
      "DSGVO-konforme Implementierung",
    ],
    targets: ["Fahrschulen", "Einzelhandel", "Dienstleister", "Coaches & Berater", "Gastronomie"],
    accent: "bg-green-700",
    accentLight: "bg-green-50 text-green-700 border-green-200",
  },
  {
    number: "05",
    title: "Prozessautomatisierung",
    subtitle: "Zeit sparen, Fehler reduzieren, skalieren",
    desc: "Wiederkehrende manuelle Aufgaben kosten Sie täglich wertvolle Stunden. Wir analysieren Ihre Workflows und automatisieren alles, was automatisierbar ist – von der Angebotserstellung bis zur Rechnungsversendung.",
    features: [
      "Workflow-Analyse und Optimierung",
      "CRM-Automatisierung",
      "Automatische Angebots- und Rechnungserstellung",
      "E-Mail und Benachrichtigungs-Automationen",
      "Daten-Synchronisation zwischen Tools",
      "Reporting und Dashboards",
    ],
    targets: ["Handwerker", "Immobilienmakler", "Berater & Coaches", "Agenturen", "Dienstleister"],
    accent: "bg-indigo-700",
    accentLight: "bg-indigo-50 text-indigo-700 border-indigo-200",
  },
];

const faq = [
  {
    q: "Wie lange dauert die Einrichtung?",
    a: "Eine Standard-Website ist in der Regel in 5–7 Werktagen fertig. Ein Chatbot ist meist innerhalb von 48 Stunden nach Freigabe der Inhalte einsatzbereit. Das Komplett-Paket planen wir gemeinsam.",
  },
  {
    q: "Warum gibt es keine festen Preise?",
    a: "Weil jedes Unternehmen andere Anforderungen hat. Ein Chatbot für eine 2-Personen-Fahrschule ist anders als einer für ein 20-köpfiges Handwerksunternehmen. Im kurzen Erstgespräch sagen wir Ihnen genau, was Sinn macht – und was es kostet.",
  },
  {
    q: "Ist das DSGVO-konform?",
    a: "Ja. Alle Lösungen sind DSGVO-konform. WhatsApp-Lösungen laufen über die offizielle Business API, wir stellen einen AVV bereit.",
  },
  {
    q: "Was passiert, wenn ein Kunde eine Frage stellt, die der Bot nicht beantworten kann?",
    a: "Der Bot erkennt das und leitet die Anfrage nahtlos an Sie weiter – per WhatsApp, E-Mail oder direkte Benachrichtigung. Kein Kunde bleibt unbeantwortet.",
  },
];

export default function ServicesPage() {
  return (
    <main>
      {/* Header */}
      <section className="bg-slate-900 text-white py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-blue-400 font-semibold text-sm uppercase tracking-widest mb-3">Was wir bieten</p>
          <h1 className="text-5xl font-extrabold mb-5">Unsere Leistungen</h1>
          <p className="text-slate-300 text-xl leading-relaxed mb-4">
            Maßgeschneiderte Lösungen für lokale Unternehmen in Bielefeld & OWL.<br />
            Individuelles Angebot – kein Einheitspaket.
          </p>
          <p className="text-slate-500 text-sm">
            KI-Chatbot Bielefeld · SEO-Website OWL · WhatsApp-Automatisierung
          </p>
        </div>
      </section>

      {/* ── 3 Pakete ── */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-blue-700 font-semibold text-sm uppercase tracking-widest mb-3">Wählen Sie Ihr Paket</p>
            <h2 className="text-4xl font-extrabold text-slate-900 mb-4">3 Optionen – eine passt zu Ihnen</h2>
            <p className="text-slate-500 text-lg max-w-xl mx-auto">
              Ob Sie eine neue Website, einen smarten Chatbot oder beides wollen –
              wir erstellen Ihnen ein persönliches Angebot.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 items-stretch">
            {packages.map(({ id, label, title, subtitle, desc, features, highlight, badge, accentBorder, accentHeader, icon }) => (
              <div
                key={id}
                className={`relative flex flex-col rounded-2xl border-2 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${accentBorder} ${highlight ? "shadow-xl shadow-blue-100 scale-[1.02]" : "shadow-sm"}`}
              >
                {badge && (
                  <div className="absolute top-4 right-4 z-10">
                    <span className="bg-blue-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                      {badge}
                    </span>
                  </div>
                )}

                {/* Card header */}
                <div className={`${accentHeader} text-white px-7 py-6`}>
                  <p className="text-white/60 text-xs font-semibold uppercase tracking-widest mb-3">{label}</p>
                  <div className="mb-3 opacity-90">{icon}</div>
                  <h3 className="text-xl font-extrabold leading-tight">{title}</h3>
                  <p className="text-white/70 text-sm mt-1">{subtitle}</p>
                </div>

                {/* Card body */}
                <div className="flex flex-col flex-1 bg-white px-7 py-6">
                  <p className="text-slate-500 text-sm leading-relaxed mb-6">{desc}</p>

                  <ul className="space-y-2.5 flex-1 mb-8">
                    {features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-slate-700 text-sm">
                        <span className={`mt-0.5 w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 ${highlight ? "bg-blue-100 text-blue-700" : "bg-slate-100 text-slate-500"}`}>
                          <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>

                  {/* Price + CTA */}
                  <div className={`rounded-xl p-4 mb-5 ${highlight ? "bg-blue-50 border border-blue-100" : "bg-slate-50 border border-slate-100"}`}>
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-1">Investition</p>
                    <p className={`text-xl font-extrabold ${highlight ? "text-blue-700" : "text-slate-900"}`}>
                      Preis auf Anfrage
                    </p>
                    <p className="text-slate-500 text-xs mt-1">Individuelles Angebot nach kurzem Gespräch</p>
                  </div>

                  <a
                    href="https://wa.me/4917687910568"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full flex items-center justify-center gap-2 font-semibold py-3.5 rounded-xl transition-all duration-200 hover:-translate-y-0.5 text-sm ${
                      highlight
                        ? "bg-blue-700 hover:bg-blue-600 text-white shadow-md shadow-blue-200"
                        : "bg-slate-900 hover:bg-slate-700 text-white"
                    }`}
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Angebot anfragen
                  </a>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-slate-400 text-sm mt-10">
            💬 Nicht sicher, welches Paket passt? Unser Chatbot <strong className="text-slate-600">Pilo</strong> hilft direkt unten rechts – oder schreiben Sie uns auf{" "}
            <a href="https://wa.me/4917687910568" target="_blank" rel="noopener noreferrer" className="text-[#25D366] font-medium hover:underline">WhatsApp</a>.
          </p>
        </div>
      </section>

      {/* ── Weitere Leistungen ── */}
      <section className="py-20 px-6 bg-slate-50 border-t border-slate-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-blue-700 font-semibold text-sm uppercase tracking-widest mb-3">Weitere Leistungen</p>
            <h2 className="text-3xl font-extrabold text-slate-900">Als Ergänzung oder eigenständig</h2>
          </div>
          <div className="space-y-10">
            {additionalServices.map(({ number, title, subtitle, desc, features, targets, accent, accentLight }) => (
              <div
                key={title}
                className="grid lg:grid-cols-2 gap-10 items-start bg-white rounded-3xl p-10 border border-slate-100 shadow-sm"
              >
                <div>
                  <span className={`inline-block text-white text-xs font-bold px-3 py-1 rounded-full mb-4 ${accent}`}>
                    {number}
                  </span>
                  <h2 className="text-2xl font-extrabold text-slate-900 mb-2">{title}</h2>
                  <p className="text-blue-700 font-semibold mb-4">{subtitle}</p>
                  <p className="text-slate-600 leading-relaxed mb-6">{desc}</p>
                  <div className="bg-slate-50 rounded-xl p-4 border border-slate-100 mb-6">
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-1">Investition</p>
                    <p className="text-xl font-extrabold text-slate-900">Auf Anfrage</p>
                    <p className="text-slate-500 text-xs mt-1">Individuelles Angebot nach kurzem Gespräch</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">Besonders geeignet für</p>
                    <div className="flex flex-wrap gap-2">
                      {targets.map((t) => (
                        <span key={t} className={`text-xs font-semibold px-3 py-1 rounded-full border ${accentLight}`}>
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4">Enthaltene Funktionen</h3>
                  <ul className="space-y-3">
                    {features.map((f) => (
                      <li key={f} className="flex items-center gap-3 text-slate-700">
                        <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center flex-shrink-0">
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 bg-white border-t border-slate-100">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-blue-700 font-semibold text-sm uppercase tracking-widest mb-3">FAQ</p>
            <h2 className="text-3xl font-extrabold text-slate-900">Häufige Fragen</h2>
          </div>
          <div className="space-y-5">
            {faq.map(({ q, a }) => (
              <div key={q} className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                <h3 className="font-bold text-slate-900 mb-2">{q}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-slate-900">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-white mb-4">
            Welches Paket passt zu Ihnen?
          </h2>
          <p className="text-slate-400 mb-8">
            In einem kostenlosen 15-Minuten-Gespräch analysieren wir Ihren Bedarf
            und erstellen Ihnen ein persönliches Angebot – ohne Verpflichtung.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block bg-blue-600 hover:bg-blue-500 text-white font-semibold px-10 py-4 rounded-xl transition-colors"
            >
              Kostenloses Erstgespräch buchen
            </Link>
            <a
              href="https://wa.me/4917687910568"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-semibold px-10 py-4 rounded-xl transition-colors"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Direkt per WhatsApp anfragen
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
