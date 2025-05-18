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
        className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center"
      >
        <GitHubStats />
        <GitHubStreak />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="mt-16 text-center"
      >
        <h3 className="text-xl sm:text-2xl font-bold text-purple-500 dark:text-purple-300 mb-6">
          GitHub Contribution Calendar
        </h3>
        <div className="overflow-x-auto flex justify-center">
          <div className="inline-block min-w-[320px] sm:min-w-[500px]">
            <GitHubCalendar
              username="lakshay-verma-dev"
              blockSize={15}
              blockMargin={5}
              fontSize={14}
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
