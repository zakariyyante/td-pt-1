import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jogocasinopt.com"),
  title: "Jogo Casino PT - Rankings de Casinos do Reino Unido 2026",
  description:
    "A Jogo Casino PT compara bónus de casino, rapidez de pagamentos e sinais de confiança para ajudar jogadores do Reino Unido a escolherem melhores ofertas.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    url: "https://jogocasinopt.com",
    siteName: "Jogo Casino PT",
    title: "Jogo Casino PT - Rankings de Casinos do Reino Unido 2026",
    description:
      "Descubra casinos escolhidos pelo editor, atualizados semanalmente com destaques de bónus, avaliações e orientações de jogo responsável.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
