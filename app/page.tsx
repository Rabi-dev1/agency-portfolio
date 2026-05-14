export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* ── Navigation ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <span className="text-lg font-bold tracking-tight text-slate-900">
            Rabi<span className="text-blue-600">Digital</span>
          </span>
          <a
            href="#kontakt"
            className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-colors duration-200"
          >
            Kontakt aufnehmen
          </a>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className="pt-32 pb-24 px-6 bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              KI-Automatisierung für lokale Unternehmen
            </div>
            <h1 className="text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
              Rabi Digital{" "}
              <span className="text-blue-600">Solutions</span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed mb-10 max-w-lg">
              Wir helfen lokalen Unternehmen dabei, durch moderne Webseiten,
              intelligente KI-Chatbots und gezielte SEO-Maßnahmen mehr Kunden
              zu gewinnen und Prozesse zu automatisieren.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#kontakt"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-xl transition-colors duration-200 shadow-lg shadow-blue-200"
              >
                Kostenlos beraten lassen
              </a>
              <a
                href="#leistungen"
                className="text-slate-700 hover:text-blue-600 font-semibold px-8 py-4 rounded-xl border border-slate-200 hover:border-blue-200 transition-colors duration-200"
              >
                Leistungen ansehen
              </a>
            </div>
          </div>

          {/* Floating stats (visible on large screens) */}
          <div className="relative hidden lg:flex justify-center items-center">
            <div className="w-96 h-72 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl shadow-2xl flex items-center justify-center">
              <div className="text-center text-white px-10">
                <p className="text-6xl font-extrabold mb-2">KI</p>
                <p className="text-blue-200 text-lg">powered by Rabi Digital</p>
              </div>
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-xl px-5 py-4 border border-slate-100">
              <p className="text-2xl font-bold text-slate-900">50+</p>
              <p className="text-sm text-slate-500">Zufriedene Kunden</p>
            </div>
            <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-xl px-5 py-4 border border-slate-100">
              <p className="text-2xl font-bold text-blue-600">24/7</p>
              <p className="text-sm text-slate-500">Bot-Verfügbarkeit</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Leistungen ── */}
      <section id="leistungen" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">
              Was wir bieten
            </p>
            <h2 className="text-4xl font-extrabold text-slate-900 mb-4">
              Unsere Leistungen
            </h2>
            <p className="text-slate-500 text-lg max-w-xl mx-auto">
              Alles aus einer Hand – von der professionellen Website bis zum
              vollautomatisierten Kundendialog.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Webdesign */}
            <div className="group bg-white border border-slate-100 rounded-2xl p-8 hover:shadow-xl hover:border-blue-100 transition-all duration-300">
              <div className="w-14 h-14 bg-blue-50 group-hover:bg-blue-600 rounded-xl flex items-center justify-center mb-6 transition-colors duration-300">
                <svg
                  className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17H3a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2h-2" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Webdesign & Entwicklung</h3>
              <p className="text-slate-500 leading-relaxed mb-6">
                Moderne, schnelle und mobiloptimierte Websites, die Vertrauen aufbauen und Besucher in Kunden verwandeln.
              </p>
              <ul className="space-y-2 text-sm text-slate-600">
                {["Responsive Design", "Next.js / React", "SEO-optimiert"].map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            {/* WhatsApp Bot – highlighted */}
            <div className="group bg-blue-600 rounded-2xl p-8 hover:shadow-xl hover:shadow-blue-200 transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/30 rounded-full -translate-y-8 translate-x-8" />
              <div className="relative">
                <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">WhatsApp KI-Chatbots</h3>
                <p className="text-blue-100 leading-relaxed mb-6">
                  Automatisieren Sie Kundenanfragen rund um die Uhr mit intelligenten Chatbots direkt in WhatsApp.
                </p>
                <ul className="space-y-2 text-sm text-blue-100">
                  {["24/7 Kundensupport", "Terminbuchung", "Lead-Generierung"].map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-white" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* SEO */}
            <div className="group bg-white border border-slate-100 rounded-2xl p-8 hover:shadow-xl hover:border-blue-100 transition-all duration-300">
              <div className="w-14 h-14 bg-blue-50 group-hover:bg-blue-600 rounded-xl flex items-center justify-center mb-6 transition-colors duration-300">
                <svg
                  className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">SEO & Sichtbarkeit</h3>
              <p className="text-slate-500 leading-relaxed mb-6">
                Werden Sie bei Google gefunden, bevor Ihre Konkurrenz es tut. Lokales SEO für mehr organischen Traffic.
              </p>
              <ul className="space-y-2 text-sm text-slate-600">
                {["Lokales SEO", "Google Business", "Content-Strategie"].map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Kennzahlen ── */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { value: "50+", label: "Abgeschlossene Projekte", desc: "Erfolgreich umgesetzte Websites und Chatbot-Lösungen" },
              { value: "98%", label: "Kundenzufriedenheit", desc: "Unsere Kunden empfehlen uns aktiv weiter" },
              { value: "< 48h", label: "Reaktionszeit", desc: "Schnelle Umsetzung und direkte Kommunikation" },
            ].map(({ value, label, desc }) => (
              <div key={label} className="py-8">
                <p className="text-4xl font-extrabold text-blue-600 mb-2">{value}</p>
                <p className="text-lg font-semibold text-slate-900 mb-2">{label}</p>
                <p className="text-slate-500 text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Kontakt ── */}
      <section id="kontakt" className="py-24 px-6 bg-white">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">
            Jetzt starten
          </p>
          <h2 className="text-4xl font-extrabold text-slate-900 mb-4">
            Sprechen wir über Ihr Projekt
          </h2>
          <p className="text-slate-500 text-lg mb-12">
            Schreiben Sie uns eine E-Mail oder rufen Sie uns an. Wir melden uns innerhalb von 24 Stunden bei Ihnen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:tv9rw7d6gc@privaterelay.appleid.com"
              className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-xl transition-colors duration-200 shadow-lg shadow-blue-200"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              E-Mail schreiben
            </a>
            <a
              href="tel:+4915253642439"
              className="inline-flex items-center gap-3 text-slate-700 hover:text-blue-600 font-semibold px-8 py-4 rounded-xl border border-slate-200 hover:border-blue-200 transition-colors duration-200"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              +49 152 53642439
            </a>
          </div>
        </div>
      </section>

      {/* ── Footer / Impressum ── */}
      <footer className="bg-slate-900 text-slate-400 py-12 px-6 mt-auto">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
          <div>
            <span className="text-white text-lg font-bold">
              Rabi<span className="text-blue-400">Digital</span>
            </span>
            <p className="mt-3 text-sm leading-relaxed">
              Professionelle Webentwicklung & KI-Automatisierung für lokale Unternehmen in Deutschland.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#leistungen" className="hover:text-white transition-colors">Leistungen</a></li>
              <li><a href="#kontakt" className="hover:text-white transition-colors">Kontakt</a></li>
              <li><a href="#impressum" className="hover:text-white transition-colors">Impressum</a></li>
            </ul>
          </div>

          <div id="impressum">
            <h4 className="text-white font-semibold mb-4">Impressum</h4>
            <address className="text-sm not-italic space-y-1 leading-relaxed">
              <p className="text-white font-medium">Fouad Rabi</p>
              <p>Rabi Digital Solutions</p>
              <p>Musterstraße 1</p>
              <p>33330 Gütersloh</p>
              <p>Deutschland</p>
              <p className="pt-2">
                <a href="mailto:tv9rw7d6gc@privaterelay.appleid.com" className="hover:text-white transition-colors">
                  tv9rw7d6gc@privaterelay.appleid.com
                </a>
              </p>
              <p>
                <a href="tel:+4915253642439" className="hover:text-white transition-colors">
                  +49 152 53642439
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="max-w-6xl mx-auto mt-10 pt-8 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs">
          <p>© {new Date().getFullYear()} Rabi Digital Solutions. Alle Rechte vorbehalten.</p>
          <p>Verantwortlich für den Inhalt gemäß § 55 Abs. 2 RStV: Fouad Rabi</p>
        </div>
      </footer>
    </main>
  );
}
