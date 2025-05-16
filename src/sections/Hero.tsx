"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Button } from "@/components/ui/button";
import { Download, Linkedin, Github, Eye } from "lucide-react";
import { SectionWrapper } from "@/components/SectionWrapper";
import { useState } from "react";
import { ResumeViewer } from "@/components/ResumeViewer"; // Make sure this path is correct

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring", duration: 0.7 } },
};

export function Hero() {
  const [showResume, setShowResume] = useState(false);

  return (
    <SectionWrapper
      id="home"
      className="min-h-screen w-full flex items-center justify-center text-center px-4 relative"
    >
      <ResumeViewer isOpen={showResume} onClose={() => setShowResume(false)} />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="w-full max-w-3xl mx-auto space-y-6 relative z-10"
      >
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"
        >
          {"Hi, I'm "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            Lakshay Verma
          </span>
        </motion.h1>

        <motion.div
          variants={itemVariants}
          className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300"
        >
          <TypeAnimation
            sequence={[
              "Full Stack Web Developer",
              2000,
              "MERN | TypeScript | Vue JS | Next JS",
              2000,
              "Problem Solver & Innovator",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="text-gray-500 dark:text-gray-400 text-base md:text-lg leading-relaxed"
        >
          Passionate about building modern full-stack apps with smooth UI,
          scalable architecture, and performance in mind.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-4 pt-4"
        >
          <Button
            onClick={() => setShowResume(true)}
            className="gap-2 bg-cyan-600 hover:bg-cyan-700 text-white p-2"
          >
            <Eye className="w-5 h-5" />
            View Resume
          </Button>

          <Button
            asChild
            className="gap-2 bg-violet-600 hover:bg-violet-700 text-white p-2"
          >
            <a href="/resume-lakshayverma.pdf" download>
              <Download className="w-5 h-5" />
              Download Resume
            </a>
          </Button>

          <Button
            asChild
            className="gap-2 text-violet-500 border-violet-500 hover:bg-violet-700 p-2"
          >
            <a
              href="https://linkedin.com/in/lakshay-verma-dev"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
          </Button>

          <Button
            asChild
            className="gap-2 text-purple-500 hover:bg-purple-100 p-2"
          >
            <a
              href="https://github.com/lakshay-verma-dev"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-5 h-5" />
              GitHub
            </a>
          </Button>
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
}
