import type { Metadata } from "next";
import { Inter, Lora, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Λόγος Think Tank",
    default: "Λόγος Think Tank | Laboratorio de Ideas",
  },
  description: "Un espacio de meditación, análisis y pensamiento profundo. Exploramos las ideas que moldean nuestro mundo.",
  openGraph: {
    title: "Λόγος Think Tank",
    description: "Un espacio de meditación, análisis y pensamiento profundo.",
    url: "https://logos-thinktank.vercel.app",
    siteName: "Λόγος Think Tank",
    locale: "es_ES",
    type: "website",
  },
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${lora.variable} ${ibmPlexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-background text-foreground">
        <Header />
        <main className="flex-grow flex flex-col">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
