import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ChatWidget from "@/components/ChatWidget";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.kundenpilot.site"),
  title: "Kundenpilot – KI-Chatbot & WhatsApp-Automatisierung Bielefeld",
  description:
    "KI-Chatbots und WhatsApp-Marketing für lokale Unternehmen in Bielefeld & OWL. Mehr Anfragen. Weniger Aufwand. 24/7 automatisch Kunden gewinnen.",
  keywords:
    "KI-Chatbot Bielefeld, WhatsApp Bot OWL, Chatbot Ostwestfalen-Lippe, WhatsApp Automatisierung Bielefeld, KI-Automatisierung lokale Unternehmen",
  icons: {
    icon: "/logo.png",
  },
  openGraph: {
    title: "Kundenpilot – KI-Chatbot & WhatsApp-Automatisierung Bielefeld",
    description:
      "KI-Chatbots und WhatsApp-Marketing für lokale Unternehmen in Bielefeld & OWL. Mehr Anfragen. Weniger Aufwand.",
    url: "https://www.kundenpilot.site",
    siteName: "Kundenpilot",
    locale: "de_DE",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 512,
        height: 512,
        alt: "Kundenpilot Logo",
      },
    ],
  },
};

// Local Business JSON-LD Schema
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Kundenpilot",
  description:
    "KI-Chatbots, WhatsApp-Marketing und Prozessautomatisierung für lokale Unternehmen in Bielefeld und OWL.",
  url: "https://www.kundenpilot.site",
  telephone: "+4917687910568",
  email: "Rabi.19@icloud.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Büsumerstraße 31",
    addressLocality: "Bielefeld",
    postalCode: "33729",
    addressCountry: "DE",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 52.0302,
    longitude: 8.5325,
  },
  areaServed: [
    { "@type": "City", name: "Bielefeld" },
    { "@type": "AdministrativeArea", name: "Ostwestfalen-Lippe" },
  ],
  serviceType: [
    "KI-Chatbot",
    "WhatsApp-Marketing",
    "Prozessautomatisierung",
    "Lead-Generierung",
  ],
  priceRange: "€€",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "18:00",
  },
  sameAs: ["https://wa.me/4917687910568"],
};

// ── Replace with your real IDs ──────────────────────────────────────────────
// GA4:       process.env.NEXT_PUBLIC_GA4_ID       e.g. "G-XXXXXXXXXX"
// GTM:       process.env.NEXT_PUBLIC_GTM_ID       e.g. "GTM-XXXXXXX"
// Meta Pixel: process.env.NEXT_PUBLIC_META_PIXEL_ID e.g. "1234567890"
// ────────────────────────────────────────────────────────────────────────────
const GA4_ID = process.env.NEXT_PUBLIC_GA4_ID;
const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;
const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={inter.variable}>
      <head>
        {/* ── Local Business Schema ── */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />

        {/* ── Google Tag Manager (head) ── */}
        {GTM_ID && (
          <script
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`,
            }}
          />
        )}

        {/* ── Meta Pixel ── */}
        {META_PIXEL_ID && (
          <script
            dangerouslySetInnerHTML={{
              __html: `!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '${META_PIXEL_ID}');
fbq('track', 'PageView');`,
            }}
          />
        )}
      </head>
      <body className="bg-white text-slate-900 antialiased flex flex-col min-h-screen">
        {/* ── GTM noscript fallback ── */}
        {GTM_ID && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
        )}

        <Navigation />
        <div className="flex-1 pt-[68px]">{children}</div>
        <Footer />
        {/* WhatsApp – unten links */}
        <WhatsAppButton />
        {/* KI-Chat-Widget – unten rechts */}
        <ChatWidget />

        {/* ── GA4 ── */}
        {GA4_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA4_ID}', { page_path: window.location.pathname });`}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
