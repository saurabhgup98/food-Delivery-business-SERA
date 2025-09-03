import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Food Delivery Business App",
  description: "Business management platform for food delivery",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-dark-900`}
      >
        <div className="grid grid-rows-[auto_1fr] min-h-screen">
          {/* Header - Fixed height, no scroll */}
          <Header />
          
          {/* Main Content - Fills remaining space */}
          <main className="min-h-0">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
