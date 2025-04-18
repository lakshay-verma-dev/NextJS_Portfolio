// src/app/sections/Hero.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/path/to/your-image.jpg')" }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full text-center text-white">
        {/* Title */}
        <motion.h1
          className="text-5xl sm:text-6xl font-bold"
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Your Name
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="mt-4 text-lg sm:text-xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          I am a passionate web developer & designer
        </motion.p>

        {/* Call to Action Button */}
        <motion.div
          className="mt-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
        >
          <Link href="#contact">
            <button className="px-6 py-3 text-lg font-semibold text-white bg-blue-500 hover:bg-blue-600 rounded-lg">
              Contact Me
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
