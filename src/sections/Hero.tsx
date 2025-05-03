// src/app/sections/Hero.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function Hero() {
  return (
    <section className="min-h-[calc(100vh-5rem)] flex flex-col justify-center items-center text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-6"
      >
        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
          Hi, I&apos;m Lakshay Verma 👋
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-2xl">
          Full Stack Web Developer with expertise in MERN Stack, TypeScript, and Vue.js
        </p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex gap-4 justify-center flex-wrap"
        >
          <Link
            href="#projects"
            className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
          >
            View Projects
          </Link>
          <Link
            href="#contact"
            className="px-6 py-3 border border-purple-600 text-purple-600 dark:text-purple-400 rounded-lg hover:bg-purple-600/10 transition-colors"
          >
            Contact Me
          </Link>
          <a
            href="/resume.pdf" // You'll need to add your resume PDF to the public folder
            className="px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
            download
          >
            Download Resume
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
