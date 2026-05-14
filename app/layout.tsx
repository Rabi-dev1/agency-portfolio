import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rabi Digital Solutions – KI-Automatisierung & Webentwicklung",
  description:
    "Professionelle Webentwicklung, WhatsApp-KI-Chatbots und SEO für lokale Unternehmen in Deutschland. Wir digitalisieren Ihr Unternehmen.",
  keywords: [
    "Webentwicklung",
    "KI-Chatbot",
    "WhatsApp Bot",
    "SEO",
    "Gütersloh",
    "Digitalagentur",
  ],
  authors: [{ name: "Rabi Digital Solutions" }],
  openGraph: {
    title: "Rabi Digital Solutions – KI-Automatisierung & Webentwicklung",
    description:
      "Professionelle Webentwicklung, WhatsApp-KI-Chatbots und SEO für lokale Unternehmen.",
    type: "website",
    locale: "de_DE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${inter.variable} scroll-smooth`}>
      <body className="bg-white text-slate-900 antialiased">{children}</body>
    </html>
  );
}
