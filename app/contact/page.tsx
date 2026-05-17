import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt – Kundenpilot Bielefeld",
  description:
    "Kontaktieren Sie Kundenpilot für KI-Chatbots, WhatsApp-Marketing und Prozessautomatisierung in Bielefeld & OWL. Kostenloses Erstgespräch – wir melden uns innerhalb von 24 Stunden.",
};

const contactItems = [
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
    label: "WhatsApp",
    value: "+49 176 87910568",
    href: "https://wa.me/4917687910568",
    highlight: true,
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: "E-Mail",
    value: "KundenPilot@gmail.com",
    href: "mailto:KundenPilot@gmail.com",
    highlight: false,
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
            Wir melden uns innerhalb von 24 Stunden – oder schreiben Sie uns direkt auf WhatsApp.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-14">
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Direkter Kontakt</h2>
            <p className="text-slate-500 mb-8 leading-relaxed">
              Wählen Sie den Weg, der für Sie am bequemsten ist. Wir antworten persönlich – kein Callcenter, kein Ticket-System.
            </p>
            <div className="space-y-4">
              {contactItems.map(({ icon, label, value, href, highlight }) => (
                <div
                  key={label}
                  className={`flex items-start gap-4 p-4 rounded-xl border transition-colors ${
                    highlight
                      ? "border-green-200 bg-green-50/50 hover:bg-green-50"
                      : "border-slate-100 hover:border-blue-100 hover:bg-blue-50/30"
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
                      highlight ? "bg-[#25D366]/10 text-[#25D366]" : "bg-blue-50 text-blue-700"
                    }`}
                  >
                    {icon}
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold mb-0.5">{label}</p>
                    <a
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className={`font-medium transition-colors ${
                        highlight ? "text-[#25D366] hover:text-green-700" : "text-slate-800 hover:text-blue-700"
                      }`}
                    >
                      {value}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/4917687910568"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 flex items-center gap-3 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-semibold px-6 py-4 rounded-xl transition-all duration-200 hover:-translate-y-0.5 shadow-md shadow-green-200"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Direkt auf WhatsApp schreiben
            </a>

            <div className="mt-6 p-4 bg-slate-50 rounded-xl border border-slate-100 text-sm text-slate-500 leading-relaxed">
              💡 <strong className="text-slate-700">Tipp:</strong> WhatsApp ist der schnellste Weg.
              Wir antworten meistens innerhalb weniger Stunden – persönlich, ohne automatische Antwort.
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Nachricht senden</h2>
            <p className="text-slate-500 mb-8">Wir antworten innerhalb von 24 Stunden.</p>
            <form
              action="mailto:KundenPilot@gmail.com"
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
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm bg-white"
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
                  Nachricht *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Beschreiben Sie kurz Ihr Anliegen..."
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm resize-none transition-shadow"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-700 hover:bg-blue-600 text-white font-semibold py-4 rounded-xl transition-all duration-200 shadow-md shadow-blue-100 hover:-translate-y-0.5"
              >
                Nachricht senden
              </button>
              <p className="text-xs text-slate-400 text-center">
                Mit dem Absenden stimmen Sie unserer{" "}
                <a href="/datenschutz" className="underline hover:text-slate-600">Datenschutzerklärung</a> zu.
              </p>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
