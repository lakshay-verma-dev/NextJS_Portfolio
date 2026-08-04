// src/app/layout.tsx
import { Cormorant_Garamond, Outfit } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import "./globals.css";


const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Lakshay Verma - Software Developer",
  description:
    "Software Developer with 1.5+ years of experience in React.js, Next.js, Node.js, TypeScript, and Shopify. Building scalable web applications, REST APIs, and production-ready products.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${outfit.variable} ${cormorant.variable} min-h-screen overflow-x-hidden bg-[#05070f] text-white antialiased`}
      >
        <Navbar />
        <main className="relative w-full pt-20 sm:pt-24">
          {children}
        </main>
      </body>
    </html>
  );
}
