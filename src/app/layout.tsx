// src/app/layout.tsx
import { Inter } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

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
        className={`${inter.className} bg-white dark:bg-black text-gray-900 dark:text-white overflow-x-hidden`}
      >
        <Navbar />
        <main className="pt-10 w-full">
          {children}
        </main>
      </body>
    </html>
  );
}
