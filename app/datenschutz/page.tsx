import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutzerklärung – Kundenpilot",
  description: "Datenschutzerklärung gemäß DSGVO für kundenpilot.site",
};

export default function DatenschutzPage() {
  return (
    <main className="py-20 px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-2">Datenschutzerklärung</h1>
        <p className="text-slate-500 mb-10">Stand: Mai 2026 · gemäß DSGVO & BDSG</p>

        <div className="space-y-10 text-slate-700">

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">1. Verantwortlicher</h2>
            <address className="not-italic leading-relaxed">
              <strong>Gharbi Mshko</strong><br />
              Kundenpilot<br />
              Büsumerstraße 31, 33729 Bielefeld<br />
              E-Mail:{" "}
              <a href="mailto:Rabi.19@icloud.com" className="text-blue-700 hover:underline">
                Rabi.19@icloud.com
              </a>
            </address>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">2. Erhebung und Verarbeitung personenbezogener Daten</h2>
            <p className="leading-relaxed">
              Personenbezogene Daten werden auf dieser Website nur im technisch notwendigen Umfang
              erhoben. In keinem Fall werden die erhobenen Daten verkauft oder aus anderen Gründen
              an Dritte weitergegeben.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">3. Server-Log-Dateien</h2>
            <p className="leading-relaxed">
              Der Hosting-Anbieter dieser Website erhebt und speichert automatisch Informationen in
              sogenannten Server-Log-Dateien, die Ihr Browser automatisch übermittelt. Dies sind:
              Browsertyp und -version, verwendetes Betriebssystem, Referrer-URL, Hostname des
              zugreifenden Rechners, Uhrzeit der Serveranfrage sowie IP-Adresse. Diese Daten sind
              nicht bestimmten Personen zuordenbar. Eine Zusammenführung dieser Daten mit anderen
              Datenquellen wird nicht vorgenommen.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">4. Kontaktformular</h2>
            <p className="leading-relaxed">
              Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem
              Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung
              der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben
              wir nicht ohne Ihre Einwilligung weiter. Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO
              (Vertragsanbahnung) bzw. Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">5. Cookies</h2>
            <p className="leading-relaxed">
              Diese Website verwendet ausschließlich technisch notwendige Cookies, die für den Betrieb
              der Website erforderlich sind. Es werden keine Marketing- oder Tracking-Cookies gesetzt.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">6. Ihre Rechte</h2>
            <p className="leading-relaxed mb-3">
              Sie haben gegenüber uns folgende Rechte hinsichtlich der Sie betreffenden
              personenbezogenen Daten:
            </p>
            <ul className="list-disc list-inside space-y-1 leading-relaxed">
              <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
              <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
              <li>Recht auf Löschung (Art. 17 DSGVO)</li>
              <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
              <li>Recht auf Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
              <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
            </ul>
            <p className="mt-3 leading-relaxed">
              Sie haben zudem das Recht, sich bei einer Datenschutz-Aufsichtsbehörde über die
              Verarbeitung Ihrer personenbezogenen Daten durch uns zu beschweren.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">7. Hosting</h2>
            <p className="leading-relaxed">
              Diese Website wird bei Vercel Inc., 340 Pine Street, Suite 900, San Francisco,
              California 94104, USA gehostet. Vercel ist EU-Standard-Contractual-Clauses-konform.
              Weitere Informationen finden Sie unter{" "}
              <a
                href="https://vercel.com/legal/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 hover:underline"
              >
                vercel.com/legal/privacy-policy
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">8. Aktualität dieser Datenschutzerklärung</h2>
            <p className="leading-relaxed">
              Wir behalten uns vor, diese Datenschutzerklärung gelegentlich anzupassen, damit sie
              stets den aktuellen rechtlichen Anforderungen entspricht oder um Änderungen unserer
              Leistungen in der Datenschutzerklärung umzusetzen.
            </p>
          </section>

        </div>
      </div>
    </main>
  );
}
