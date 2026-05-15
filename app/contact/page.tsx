import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt – Kundenpilot",
  description:
    "Nehmen Sie Kontakt mit Kundenpilot auf. Kostenloses Erstgespräch für KI-Chatbots, WhatsApp-Marketing und Prozessautomatisierung.",
};

const contactItems = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: "E-Mail",
    value: "Rabi.19@icloud.com",
    href: "mailto:Rabi.19@icloud.com",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    label: "Telefon",
    value: "+49 ___ ________",
    href: "tel:+49",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: "Adresse",
    value: "Büsumerstraße 31, 33729 Bielefeld",
    href: null,
  },
];

export default function ContactPage() {
  return (
    <main>
      {/* Header */}
      <section className="bg-slate-900 text-white py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-blue-400 font-semibold text-sm uppercase tracking-widest mb-3">Sprechen wir</p>
          <h1 className="text-5xl font-extrabold mb-5">Kontakt aufnehmen</h1>
          <p className="text-slate-300 text-xl">
            Wir melden uns innerhalb von 24 Stunden bei Ihnen.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-14">
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Direkter Kontakt</h2>
            <p className="text-slate-500 mb-8">
              Kein langer Umweg – schreiben Sie uns direkt oder rufen Sie an.
            </p>
            <div className="space-y-6">
              {contactItems.map(({ icon, label, value, href }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-blue-700 flex-shrink-0">
                    {icon}
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold mb-0.5">{label}</p>
                    {href ? (
                      <a href={href} className="text-slate-800 font-medium hover:text-blue-700 transition-colors">
                        {value}
                      </a>
                    ) : (
                      <p className="text-slate-800 font-medium">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 bg-blue-50 rounded-2xl p-6 border border-blue-100">
              <p className="text-blue-900 font-semibold mb-1">Kostenloses Erstgespräch</p>
              <p className="text-blue-700 text-sm">
                In 30 Minuten zeigen wir Ihnen, wie Kundenpilot Ihre Kundengewinnung automatisiert.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Nachricht senden</h2>
            <p className="text-slate-500 mb-8">Füllen Sie das Formular aus – wir melden uns schnellstmöglich.</p>
            <form
              action="mailto:Rabi.19@icloud.com"
              method="GET"
              encType="text/plain"
              className="space-y-5"
            >
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
                    placeholder="Max Mustermann"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
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
                    placeholder="Muster GmbH"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5" htmlFor="email">
                  E-Mail-Adresse *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="max@beispiel.de"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5" htmlFor="subject">
                  Ich interessiere mich für
                </label>
                <select
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm bg-white"
                >
                  <option value="">Bitte wählen...</option>
                  <option>KI-Chatbot</option>
                  <option>WhatsApp-Marketing</option>
                  <option>Prozessautomatisierung</option>
                  <option>Allgemeine Anfrage</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5" htmlFor="message">
                  Ihre Nachricht *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Beschreiben Sie kurz Ihr Anliegen..."
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-700 hover:bg-blue-600 text-white font-semibold py-4 rounded-xl transition-colors shadow-md shadow-blue-200"
              >
                Nachricht senden
              </button>
              <p className="text-xs text-slate-400 text-center">
                Mit dem Absenden stimmen Sie unserer{" "}
                <a href="/datenschutz" className="underline hover:text-slate-600">
                  Datenschutzerklärung
                </a>{" "}
                zu.
              </p>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
