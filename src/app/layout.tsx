import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/nav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lucía Santos — TA Ops × AI",
  description:
    "Building the tools that change how recruiting works. TA Operations Partner in progress.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark`}
    >
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">
        <Nav />
        <main>{children}</main>
        <footer className="border-t border-zinc-800 mt-24 py-8 text-center text-zinc-500 text-xs font-[family-name:var(--font-geist-mono)]">
          built in public · 2026
        </footer>
      </body>
    </html>
  );
}
