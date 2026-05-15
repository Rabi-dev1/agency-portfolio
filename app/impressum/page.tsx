import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum – Kundenpilot",
  description: "Impressum und Anbieterkennzeichnung gemäß § 5 TMG für Kundenpilot.",
};

export default function ImpressumPage() {
  return (
    <main className="py-20 px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-2">Impressum</h1>
        <p className="text-slate-500 mb-10">Angaben gemäß § 5 TMG</p>

        <div className="prose prose-slate max-w-none space-y-10">

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">Anbieter</h2>
            <address className="not-italic text-slate-700 leading-relaxed">
              <strong>Gharbi Mshko</strong><br />
              Kundenpilot<br />
              Büsumerstraße 31<br />
              33729 Bielefeld<br />
              Deutschland
            </address>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">Kontakt</h2>
            <div className="text-slate-700 space-y-1">
              <p>
                <strong>E-Mail:</strong>{" "}
                <a href="mailto:Rabi.19@icloud.com" className="text-blue-700 hover:underline">
                  Rabi.19@icloud.com
                </a>
              </p>
              <p>
                <strong>Telefon:</strong>{" "}
                <a href="tel:+49" className="text-blue-700 hover:underline">
                  +49 ___ ________ (Platzhalter – bitte ergänzen)
                </a>
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">
              Verantwortlich für den Inhalt gemäß § 55 Abs. 2 RStV
            </h2>
            <address className="not-italic text-slate-700 leading-relaxed">
              Gharbi Mshko<br />
              Büsumerstraße 31<br />
              33729 Bielefeld
            </address>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">Berufsrechtliche Regelungen</h2>
            <p className="text-slate-700 leading-relaxed">
              Das Unternehmen ist ein Einzelunternehmen und unterliegt keiner besonderen gesetzlichen
              Zulassungspflicht.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">Haftungsausschluss</h2>
            <h3 className="font-semibold text-slate-800 mb-2">Haftung für Inhalte</h3>
            <p className="text-slate-700 leading-relaxed mb-4">
              Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit,
              Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
              Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten
              nach den allgemeinen Gesetzen verantwortlich.
            </p>
            <h3 className="font-semibold text-slate-800 mb-2">Haftung für Links</h3>
            <p className="text-slate-700 leading-relaxed">
              Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen
              Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen.
              Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der
              Seiten verantwortlich.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">Urheberrecht</h2>
            <p className="text-slate-700 leading-relaxed">
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen
              dem deutschen Urheberrecht. Beiträge Dritter sind als solche gekennzeichnet. Die
              Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
              Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors
              bzw. Erstellers.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">Online-Streitbeilegung</h2>
            <p className="text-slate-700 leading-relaxed">
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
              <a
                href="https://ec.europa.eu/consumers/odr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 hover:underline"
              >
                https://ec.europa.eu/consumers/odr
              </a>
              . Wir sind nicht verpflichtet und nicht bereit, an Streitbeilegungsverfahren vor einer
              Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
