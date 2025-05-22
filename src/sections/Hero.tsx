"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Download, Linkedin, Github, Eye } from "lucide-react";
import { SectionWrapper } from "@/components/SectionWrapper";
import { useState } from "react";
import { ResumeViewer } from "@/components/ResumeViewer";
import AnimatedButton from "@/components/ui/AnimatedButton";
import * as Tooltip from "@radix-ui/react-tooltip";

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
          className="sm:text-3xl md:text-6xl font-extrabold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"
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
          <Tooltip.Provider delayDuration={100}>
            {/* View Resume */}
            <Tooltip.Root>
              <Tooltip.Trigger asChild>
                <span>
                  <AnimatedButton
                    text="View Resume"
                    icon={<Eye className="w-5 h-5" />}
                    onClick={() => setShowResume(true)}
                  />
                </span>
              </Tooltip.Trigger>
              <Tooltip.Portal>
                <Tooltip.Content
                  side="top"
                  className="rounded bg-black px-2 py-1 mb-1.5 text-white text-sm shadow-md"
                >
                  Open PDF Viewer
                </Tooltip.Content>
              </Tooltip.Portal>
            </Tooltip.Root>

            {/* Download Resume */}
            <Tooltip.Root>
              <Tooltip.Trigger asChild>
                <span>
                  <a href="/resume-lakshayverma.pdf" download>
                    <AnimatedButton
                      text="Download Resume"
                      icon={<Download className="w-5 h-5" />}
                    />
                  </a>
                </span>
              </Tooltip.Trigger>
              <Tooltip.Portal>
                <Tooltip.Content
                  side="top"
                  className="rounded bg-black px-2 py-1 mb-1.5 text-white text-sm shadow-md"
                >
                  Download as PDF
                </Tooltip.Content>
              </Tooltip.Portal>
            </Tooltip.Root>

            {/* LinkedIn */}
            <Tooltip.Root>
              <Tooltip.Trigger asChild>
                <span>
                  <a
                    href="https://linkedin.com/in/lakshay-verma-dev"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <AnimatedButton
                      text="LinkedIn"
                      icon={<Linkedin className="w-5 h-5" />}
                    />
                  </a>
                </span>
              </Tooltip.Trigger>
              <Tooltip.Portal>
                <Tooltip.Content
                  side="top"
                  className="rounded bg-black px-2 py-1 mb-1.5 text-white text-sm shadow-md"
                >
                  Visit LinkedIn Profile
                </Tooltip.Content>
              </Tooltip.Portal>
            </Tooltip.Root>

            {/* GitHub */}
            <Tooltip.Root>
              <Tooltip.Trigger asChild>
                <span>
                  <a
                    href="https://github.com/lakshay-verma-dev"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <AnimatedButton
                      text="GitHub"
                      icon={<Github className="w-5 h-5" />}
                    />
                  </a>
                </span>
              </Tooltip.Trigger>
              <Tooltip.Portal>
                <Tooltip.Content
                  side="top"
                  className="rounded bg-black px-2 py-1 mb-1.5 text-white text-sm shadow-md"
                >
                  Visit GitHub Profile
                </Tooltip.Content>
              </Tooltip.Portal>
            </Tooltip.Root>
          </Tooltip.Provider>
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
}
