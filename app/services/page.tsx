import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Leistungen & Preise – KI-Chatbot & WhatsApp Bielefeld | Kundenpilot",
  description:
    "KI-Chatbots ab 500 €, WhatsApp-Marketing ab 150 €/Monat und Prozessautomatisierung für Fahrschulen, Handwerker und lokale Unternehmen in Bielefeld & OWL.",
  keywords:
    "KI-Chatbot Preise Bielefeld, WhatsApp Bot Kosten OWL, Chatbot Fahrschule, Chatbot Handwerker, WhatsApp Marketing Preis",
};

const services = [
  {
    number: "01",
    title: "KI-Chatbots",
    subtitle: "Automatischer Kundendialog rund um die Uhr",
    desc: "Unser KI-Chatbot beantwortet Kundenanfragen sofort, qualifiziert Leads und bucht Termine – ohne dass Sie eingreifen müssen. Er läuft auf Ihrer Website und/oder in WhatsApp und ist in der Regel innerhalb von 48 Stunden einsatzbereit.",
    features: [
      "Automatische Beantwortung von FAQs",
      "Lead-Qualifizierung und -Weiterleitung",
      "Terminbuchung direkt im Chat",
      "Nahtlose Übergabe an menschliche Mitarbeiter",
      "Mehrsprachig konfigurierbar",
      "Integration in bestehende Systeme",
    ],
    targets: ["Fahrschulen", "Handwerker", "Berater & Coaches", "Immobilienmakler", "Gastronomie"],
    price: "ab 500 €",
    priceNote: "Einrichtung + ab 150 €/Monat Betreuung",
    accent: "bg-blue-700",
    accentLight: "bg-blue-50 text-blue-700 border-blue-200",
  },
  {
    number: "02",
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
    price: "ab 150 €/Monat",
    priceNote: "Inkl. API-Einrichtung & Betreuung",
    accent: "bg-green-700",
    accentLight: "bg-green-50 text-green-700 border-green-200",
  },
  {
    number: "03",
    title: "Prozessautomatisierung",
    subtitle: "Zeit sparen, Fehler reduzieren, skalieren",
    desc: "Wiederkehrende manuelle Aufgaben kosten Sie täglich wertvolle Stunden. Wir analysieren Ihre Workflows und automatisieren alles, was automatisierbar ist – von der Angebotserstellung bis zur Rechnungsversendung. Integration in bestehende Systeme meist in 48h.",
    features: [
      "Workflow-Analyse und Optimierung",
      "CRM-Automatisierung",
      "Automatische Angebots- und Rechnungserstellung",
      "E-Mail und Benachrichtigungs-Automationen",
      "Daten-Synchronisation zwischen Tools",
      "Reporting und Dashboards",
    ],
    targets: ["Handwerker", "Immobilienmakler", "Berater & Coaches", "Agenturen", "Dienstleister"],
    price: "Auf Anfrage",
    priceNote: "Je nach Umfang – kostenloses Erstgespräch",
    accent: "bg-indigo-700",
    accentLight: "bg-indigo-50 text-indigo-700 border-indigo-200",
  },
];

const faq = [
  {
    q: "Wie lange dauert die Einrichtung?",
    a: "Für einen Standard-Chatbot benötigen wir in der Regel 48 Stunden nach Freigabe der Inhalte. Komplexere Integrationen planen wir gemeinsam in einem Erstgespräch.",
  },
  {
    q: "Ist das DSGVO-konform?",
    a: "Ja. Alle Lösungen laufen über die offizielle WhatsApp Business API. Wir stellen einen Auftragsverarbeitungsvertrag (AVV) bereit und beachten alle datenschutzrechtlichen Anforderungen.",
  },
  {
    q: "Was passiert, wenn ein Kunde eine Frage stellt, die der Bot nicht beantworten kann?",
    a: "Der Bot erkennt das und leitet die Anfrage nahtlos an Sie weiter – per WhatsApp, E-Mail oder direkte Benachrichtigung. Kein Kunde bleibt unbeantwortet.",
  },
  {
    q: "Gibt es eine Mindestlaufzeit?",
    a: "Wir bieten flexible Laufzeiten ab 3 Monaten an. Details besprechen wir gerne im kostenlosen Erstgespräch.",
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
            Drei fokussierte Lösungen für lokale Unternehmen in Bielefeld & OWL.
          </p>
          <p className="text-slate-500 text-sm">
            KI-Chatbot Bielefeld · WhatsApp Bot OWL · Prozessautomatisierung Ostwestfalen
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto space-y-16">
          {services.map(({ number, title, subtitle, desc, features, targets, price, priceNote, accent, accentLight }) => (
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
                <p className="text-slate-600 leading-relaxed mb-6">{desc}</p>

                {/* Pricing */}
                <div className="bg-white rounded-xl p-5 border border-slate-200 mb-6">
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-1">Investition</p>
                  <p className="text-2xl font-extrabold text-slate-900">{price}</p>
                  <p className="text-slate-500 text-sm mt-1">{priceNote}</p>
                </div>

                {/* Target audience */}
                <div>
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">Besonders geeignet für</p>
                  <div className="flex flex-wrap gap-2">
                    {targets.map((t) => (
                      <span
                        key={t}
                        className={`text-xs font-semibold px-3 py-1 rounded-full border ${accentLight}`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
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

      {/* FAQ */}
      <section className="py-20 px-6 bg-slate-50 border-t border-slate-100">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-blue-700 font-semibold text-sm uppercase tracking-widest mb-3">FAQ</p>
            <h2 className="text-3xl font-extrabold text-slate-900">Häufige Fragen</h2>
          </div>
          <div className="space-y-6">
            {faq.map(({ q, a }) => (
              <div key={q} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
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
            Welche Lösung passt zu Ihnen?
          </h2>
          <p className="text-slate-400 mb-8">
            In einem kostenlosen 15-Minuten-Gespräch analysieren wir Ihren Bedarf
            und zeigen Ihnen, was für Ihr Unternehmen in Bielefeld & OWL möglich ist.
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
