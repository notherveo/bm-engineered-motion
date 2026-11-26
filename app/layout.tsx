import * as React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "ENGINEERED MOTION INDUSTRIES | Precision Motion Components",
  description:
    "Industrial pumps, precision motors and engineered motion components for critical applications. Custom specifications, certified quality.",
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable}`}>
      <body className="bg-[#F9FAFB] text-[#172B4D] antialiased font-sans">
        <header className="site-header" />
        <main>{children}</main>
        <footer className="site-footer" />
      </body>
    </html>
  );
}
