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
  title: "Jogo Casino PT - Trusted Casino Rankings UK 2026",
  description:
    "Jogo Casino PT compares top casino bonuses, payout speed, and trust signals so UK players can choose safer offers faster.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "https://jogocasinopt.com",
    siteName: "Jogo Casino PT",
    title: "Jogo Casino PT - Trusted Casino Rankings UK 2026",
    description:
      "Discover editor-picked online casinos, updated weekly with bonus highlights, ratings, and responsible gambling guidance.",
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
