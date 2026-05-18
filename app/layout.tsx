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
  title: "Tokenomy | Token Economy Command Center",
  description:
    "Tokenomy helps Web3 teams design sustainable token utility, incentive loops, launch strategy, dashboards, liquidity, treasury logic, and retention systems.",
  keywords: [
    "Tokenomy",
    "tokenomics consultant",
    "token economy design",
    "Web3 economy design",
    "token utility design",
    "liquidity strategy",
    "treasury runway",
    "token launch validation",
    "airdrop strategy",
    "crypto economic modeling",
  ],
  authors: [{ name: "Anurag Ray" }],
  creator: "Tokenomy",
  icons: {
    icon: [
      { url: '/icon.png', type: 'image/png', sizes: '512x512' },
      { url: '/favicon.ico', sizes: '32x32' },
    ],
    shortcut: '/favicon.ico',
    apple: '/icon.png',
  },
  openGraph: {
    title: "Tokenomy | Token Economy Command Center",
    description:
      "Design sustainable token economies around utility, incentive loops, smart-contract logic, dashboards, liquidity, treasury strategy, and retention.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
