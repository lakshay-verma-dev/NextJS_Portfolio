"use client";
import { motion } from "framer-motion";
import GitHubCalendar from "react-github-calendar";
import { SectionWrapper } from "@/components/SectionWrapper";
import dynamic from "next/dynamic";
import { SectionHeader } from "@/components/SectionHeader";
import ModernButton from "@/components/ui/ModernButton";

// Dynamic imports
const GitHubStreak = dynamic(() => import("@/components/GitHubStreak"), {
  ssr: false,
  loading: () => <p className="text-center">Loading GitHub streak chart...</p>,
});
const GitHubStats = dynamic(() => import("@/components/GitHubStats"), {
  ssr: false,
  loading: () => <p className="text-center">Loading GitHub stats...</p>,
});

export function GitHub() {
  return (
    <SectionWrapper id="github">
      <SectionHeader>GitHub Performance</SectionHeader>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 gap-6 text-center md:grid-cols-2 md:gap-8"
      >
        <GitHubStats />
        <GitHubStreak />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="mt-12 text-center sm:mt-16"
      >
        <h3 className="mb-4 text-lg font-bold text-purple-300 sm:mb-6 sm:text-2xl">
          GitHub Contribution Calendar
        </h3>
        <div className="flex justify-center overflow-x-auto px-1">
          <div className="inline-block min-w-[280px] sm:min-w-[500px]">
            <GitHubCalendar
              username="lakshay-verma-dev"
              blockSize={12}
              blockMargin={4}
              fontSize={12}
            />
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="mt-12"
      >
        <a
          href="https://github.com/lakshay-verma-dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ModernButton text="Visit Github Profile" />
        </a>
      </motion.div>
    </SectionWrapper>
  );
}
