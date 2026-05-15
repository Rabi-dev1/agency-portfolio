import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Leistungen – Kundenpilot",
  description:
    "KI-Chatbots, WhatsApp-Marketing und Prozessautomatisierung für lokale Unternehmen. Entdecken Sie unsere Lösungen.",
};

const services = [
  {
    number: "01",
    title: "KI-Chatbots",
    subtitle: "Automatischer Kundendialog rund um die Uhr",
    desc: "Unser KI-Chatbot beantwortet Kundenanfragen sofort, qualifiziert Leads und bucht Termine – ohne dass Sie eingreifen müssen. Er lernt aus jeder Interaktion und wird mit der Zeit immer präziser.",
    features: [
      "Automatische Beantwortung von FAQs",
      "Lead-Qualifizierung und -Weiterleitung",
      "Terminbuchung direkt im Chat",
      "Nahtlose Übergabe an menschliche Mitarbeiter",
      "Mehrsprachig konfigurierbar",
      "Integration in bestehende Systeme",
    ],
    accent: "bg-blue-700",
  },
  {
    number: "02",
    title: "WhatsApp-Marketing",
    subtitle: "Direktkanal zu Ihren Kunden",
    desc: "WhatsApp hat eine Öffnungsrate von über 90 %. Wir nutzen diesen Kanal für gezielte Kampagnen, automatisierte Nachfass-Nachrichten und persönlichen Kundensupport – alles DSGVO-konform.",
    features: [
      "Broadcast-Kampagnen an Opt-in-Listen",
      "Automatisierte Follow-up-Sequenzen",
      "Kundensupport via WhatsApp Business API",
      "Personalisierte Nachrichten",
      "Analytics und Öffnungsraten-Tracking",
      "DSGVO-konforme Implementierung",
    ],
    accent: "bg-green-700",
  },
  {
    number: "03",
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
    accent: "bg-indigo-700",
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
          <p className="text-slate-300 text-xl leading-relaxed">
            Drei fokussierte Lösungen, die Ihr Unternehmen messbar voranbringen.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto space-y-16">
          {services.map(({ number, title, subtitle, desc, features, accent }) => (
            <div
              key={title}
              className="grid lg:grid-cols-2 gap-12 items-start bg-slate-50 rounded-3xl p-10 border border-slate-100"
            >
              <div>
                <span className={`inline-block text-white text-xs font-bold px-3 py-1 rounded-full mb-4 ${accent}`}>
                  {number}
                </span>
                <h2 className="text-3xl font-extrabold text-slate-900 mb-2">{title}</h2>
                <p className="text-blue-700 font-semibold mb-4">{subtitle}</p>
                <p className="text-slate-600 leading-relaxed">{desc}</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4">
                  Enthaltene Funktionen
                </h3>
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
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-slate-900">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-white mb-4">
            Welche Lösung passt zu Ihnen?
          </h2>
          <p className="text-slate-400 mb-8">
            In einem kostenlosen Erstgespräch analysieren wir Ihren Bedarf und zeigen Ihnen die beste Lösung.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-blue-600 hover:bg-blue-500 text-white font-semibold px-10 py-4 rounded-xl transition-colors"
          >
            Kostenloses Erstgespräch buchen
          </Link>
        </div>
      </section>
    </main>
  );
}
