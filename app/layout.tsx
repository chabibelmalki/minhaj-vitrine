import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const siteUrl = "https://minhaj.fr";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "MINHAJ — Conseil & solutions informatiques",
    template: "%s — MINHAJ",
  },
  description:
    "MINHAJ SAS, société française de conseil et de services informatiques : conseil IT, solutions d'intelligence artificielle, vente de solutions et formation aux nouvelles technologies.",
  keywords: [
    "MINHAJ",
    "conseil informatique",
    "intelligence artificielle",
    "solutions IT",
    "formation",
    "hadn",
    "xklic",
  ],
  authors: [{ name: "MINHAJ SAS" }],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: siteUrl,
    siteName: "MINHAJ",
    title: "MINHAJ — Conseil & solutions informatiques",
    description:
      "Conseil IT, intelligence artificielle, vente de solutions et formation aux nouvelles technologies.",
  },
  twitter: {
    card: "summary_large_image",
    title: "MINHAJ — Conseil & solutions informatiques",
    description:
      "Conseil IT, intelligence artificielle, vente de solutions et formation aux nouvelles technologies.",
  },
  alternates: { canonical: siteUrl },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#020617" },
  ],
};

// Runs before paint to apply the saved (or system) theme without a flash.
const themeScript = `
(function () {
  try {
    var stored = localStorage.getItem("theme");
    var dark = stored ? stored === "dark"
      : window.matchMedia("(prefers-color-scheme: dark)").matches;
    document.documentElement.classList.toggle("dark", dark);
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={inter.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  );
}
