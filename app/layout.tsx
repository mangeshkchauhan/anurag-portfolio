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
  title: "Anurag Ray | Web3 Tokenomics Architect",
  description: "Web3 Tokenomics Architect & Ecosystem Strategist focused on designing sustainable token economies and scaling decentralized ecosystems.",
  keywords: ["Web3", "Tokenomics", "Blockchain", "DeFi", "NFT", "Token Design", "Ecosystem Strategy"],
  authors: [{ name: "Anurag Ray" }],
  creator: "Anurag Ray",
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: '32x32' }
    ],
  },
  openGraph: {
    title: "Anurag Ray | Web3 Tokenomics Architect",
    description: "Web3 Tokenomics Architect & Ecosystem Strategist focused on designing sustainable token economies and scaling decentralized ecosystems.",
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
