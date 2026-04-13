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
  title: "Lucía Lorenzo Santos — TA Ops × AI",
  description:
    "Building the tools that change how recruiting works. TA Operations Partner in progress.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body
        className="min-h-screen antialiased"
        style={{ backgroundColor: "#F7EEDD", color: "#2D0810" }}
      >
        <Nav />
        <main>{children}</main>
        <footer
          className="mt-24 py-8 text-center text-xs font-[family-name:var(--font-geist-mono)]"
          style={{ borderTop: "1px solid #DECCBF", color: "#B98D97" }}
        >
          built in public · 2026
        </footer>
      </body>
    </html>
  );
}
