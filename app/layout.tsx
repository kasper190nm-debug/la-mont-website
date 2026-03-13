import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "La Mont d.o.o. | Građevinska kompanija",
  description:
    "La Mont d.o.o. pruža kompletne građevinske usluge najvišeg kvaliteta u Bosni i Hercegovini. Od temelja do krova — vaša vizija je naša misija.",
  keywords: "građevinska kompanija, Banja Luka, Bosnia Herzegovina, gradnja, konstruktivni radovi, fasade, krovne konstrukcije",
  openGraph: {
    title: "La Mont d.o.o. | Građevinska kompanija",
    description: "Kompletne građevinske usluge od temelja do krova.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bs">
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
