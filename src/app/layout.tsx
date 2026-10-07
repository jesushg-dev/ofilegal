import type { Metadata } from "next";
import {
  Alex_Brush,
  Cinzel,
  Cormorant_Garamond,
  Plus_Jakarta_Sans,
} from "next/font/google";

import { contentStore } from "@/features/cms/json-store";

import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const script = Alex_Brush({
  variable: "--font-script",
  subsets: ["latin"],
  weight: "400",
});

export async function generateMetadata(): Promise<Metadata> {
  const site = await contentStore.getSite();
  return {
    title: {
      default: `${site.firmName} | ${site.ownerName} – ${site.professionalTitle}`,
      template: `%s | ${site.firmName}`,
    },
    description: site.seoDescription,
    authors: [{ name: site.ownerName }],
    keywords: [
      "Abogado Nicaragua",
      "Notario Público Managua",
      "OFILEGAL",
      "Isaí Zeledón",
      "Asesoría Jurídica",
    ],
    openGraph: {
      title: `${site.firmName} | ${site.ownerName} – ${site.professionalTitle}`,
      description: site.tagline,
      locale: "es_NI",
      type: "website",
    },
  };
}

export default function RootLayout({
  children,
}: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${jakarta.variable} ${cinzel.variable} ${cormorant.variable} ${script.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-navy-pattern font-sans text-slate-200 selection:bg-navy-accent selection:text-white">
        {children}
      </body>
    </html>
  );
}
