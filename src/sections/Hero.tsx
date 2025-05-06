// src/sections/Hero.tsx
"use client";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Button } from "@/components/ui/button";
import { Download, Linkedin, Github } from "lucide-react";
import { SectionWrapper } from "@/components/SectionWrapper";

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: "spring" }}
        className="space-y-8"
      >
        <h1 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
          Lakshay Verma
        </h1>
        <TypeAnimation
          sequence={[
            "Full Stack Web Developer",
            2000,
            "MERN | TypeScript | Vue.js",
            2000,
            "Problem Solver & Innovator",
            2000,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
          className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <Button asChild size="lg" className="gap-2">
            <a href="/resume.pdf" download>
              <Download className="w-5 h-5" /> Download Resume
            </a>
          </Button>
          <Button asChild variant="outline" size="lg" className="gap-2">
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-5 h-5" /> LinkedIn
            </a>
          </Button>
          <Button asChild variant="ghost" size="lg" className="gap-2">
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5" /> GitHub
            </a>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}