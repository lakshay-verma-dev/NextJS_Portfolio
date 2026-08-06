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
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      duration: 0.8,
    },
  },
};

export function Hero() {
  const [showResume, setShowResume] = useState(false);

  return (
    <SectionWrapper
      id="home"
      className="min-h-[100svh] w-full flex items-center justify-center text-center relative"
    >
      <ResumeViewer isOpen={showResume} onClose={() => setShowResume(false)} />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="w-full max-w-4xl mx-auto space-y-6 relative"
      >
        <motion.h1
          variants={itemVariants}
          className="text-3xl font-extrabold leading-tight sm:text-4xl md:text-6xl"
        >
          <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            {"Hi, I'm "}
          </span>
          <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Lakshay Verma
          </span>
        </motion.h1>

        <motion.div
          variants={itemVariants}
          className="min-h-[2.5rem] text-lg font-semibold text-slate-200 sm:min-h-[3rem] sm:text-2xl md:text-3xl"
        >
          <TypeAnimation
            sequence={[
              "Software Developer",
              2000,
              "React.js | Next.js | Node.js | TypeScript",
              2000,
              "Shopify | Liquid | Full Stack",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="mx-auto max-w-3xl text-sm leading-relaxed text-slate-300 sm:text-base md:text-lg"
        >
          Software Developer with 1.5+ years of hands-on experience in React.js,
          Next.js, Node.js, TypeScript, and Shopify development. Building
          scalable production apps, REST APIs, and third-party integrations.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-3 pt-2 sm:gap-4 sm:pt-4"
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
                <span >
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
