import type { Metadata } from "next";
import { Inter, Geist_Mono, Fraunces } from "next/font/google";
import Script from "next/script";
import { MouseFollower } from "@/components/landing/MouseFollower";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["italic"],
  weight: ["300", "400"],
});

export const metadata: Metadata = {
  title: "ClinicService — Le système d'exploitation des cliniques dentaires",
  description:
    "ClinicService digitalise votre flux patient. Conçu en Algérie, augmenté par l'IA Julia.",
  icons: { icon: "/logo.png" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="fr"
      className={`dark ${inter.variable} ${geistMono.variable} ${fraunces.variable} antialiased`}
    >
      <head>
        <Script src="https://fast.wistia.com/player.js" strategy="afterInteractive" />
        <Script
          src="https://fast.wistia.com/embed/ko3v3y0pu8.js"
          strategy="afterInteractive"
          type="module"
        />
      </head>
      <body className="min-h-screen bg-background text-foreground">
        <MouseFollower />
        {children}
      </body>
    </html>
  );
}
