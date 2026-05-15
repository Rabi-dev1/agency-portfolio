import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400">
      <div className="max-w-6xl mx-auto px-6 py-14 grid md:grid-cols-3 gap-10">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <Image
              src="/logo.png"
              alt="Kundenpilot Logo"
              width={36}
              height={36}
              className="rounded-full"
            />
            <span className="text-white font-bold tracking-tight">KUNDENPILOT</span>
          </div>
          <p className="text-sm leading-relaxed">
            Mehr Anfragen. Weniger Aufwand.<br />
            KI-Automatisierung für lokale Unternehmen.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Navigation</h4>
          <ul className="space-y-2 text-sm">
            {[
              { href: "/", label: "Home" },
              { href: "/services", label: "Leistungen" },
              { href: "/contact", label: "Kontakt" },
            ].map(({ href, label }) => (
              <li key={href}>
                <Link href={href} className="hover:text-white transition-colors">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Legal & Contact */}
        <div>
          <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Rechtliches</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/impressum" className="hover:text-white transition-colors">
                Impressum
              </Link>
            </li>
            <li>
              <Link href="/datenschutz" className="hover:text-white transition-colors">
                Datenschutzerklärung
              </Link>
            </li>
          </ul>
          <div className="mt-4 text-sm space-y-1">
            <p>Gharbi Mshko</p>
            <p>Büsumerstraße 31, 33729 Bielefeld</p>
            <a href="mailto:Rabi.19@icloud.com" className="hover:text-white transition-colors block">
              Rabi.19@icloud.com
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs">
          <p>© {new Date().getFullYear()} Kundenpilot – Gharbi Mshko. Alle Rechte vorbehalten.</p>
          <div className="flex gap-4">
            <Link href="/impressum" className="hover:text-white transition-colors">Impressum</Link>
            <Link href="/datenschutz" className="hover:text-white transition-colors">Datenschutz</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
