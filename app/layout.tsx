import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "@/app/components/Sidebar";
import Player from "@/app/components/Player";
import Header from "@/app/components/Header";
import "@/app/lib/fontawesome";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Spotify Clone",
  description: "Clone de player para praticar Next.js + TypeScript + Tailwind",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-neutral-900 text-neutral-100`}
      >
        {/* Header persistente */}
        <Header />
        <div className="min-h-screen pb-28">
          <div className="flex h-[calc(100vh-6rem)]">
            {/* Sidebar (persistente) */}
            <Sidebar />

            {/* Main content (dinâmico) */}
            <main className="flex-1 overflow-y-auto p-6">{children}</main>
          </div>
        </div>

        {/* Player persistente */}
        <Player />
      </body>
    </html>
  );
}
