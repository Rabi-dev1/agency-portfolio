import type { Metadata } from "next";
import { Inter } from "next/font/google";
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
  title: "Kundenpilot – Mehr Anfragen. Weniger Aufwand.",
  description:
    "Kundenpilot automatisiert Ihre Kundengewinnung mit KI-Chatbots, WhatsApp-Marketing und intelligenter Prozessautomatisierung für lokale Unternehmen.",
  icons: {
    icon: "/logo.png",
  },
  openGraph: {
    title: "Kundenpilot – Mehr Anfragen. Weniger Aufwand.",
    description:
      "Kundenpilot automatisiert Ihre Kundengewinnung mit KI-Chatbots, WhatsApp-Marketing und intelligenter Prozessautomatisierung für lokale Unternehmen.",
    url: "https://www.kundenpilot.site",
    siteName: "Kundenpilot",
    locale: "de_DE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={inter.variable}>
      <body className="bg-white text-slate-900 antialiased flex flex-col min-h-screen">
        <Navigation />
        <div className="flex-1 pt-[68px]">{children}</div>
        <Footer />
        {/* WhatsApp – unten links */}
        <WhatsAppButton />
        {/* KI-Chat-Widget – unten rechts */}
        <ChatWidget />
      </body>
    </html>
  );
}
