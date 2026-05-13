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
  description: "A showcase of my software development journey",
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
        className={`${outfit.variable} ${cormorant.variable} bg-white dark:bg-black text-gray-900 dark:text-white overflow-x-hidden`}
      >
        <Navbar />
        <main className="pt-10 w-full">
          {children}
        </main>
      </body>
    </html>
  );
}
