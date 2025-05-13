"use client";
import { motion } from "framer-motion";
import GitHubCalendar from "react-github-calendar";
import { SectionWrapper } from "@/components/SectionWrapper";
import Image from "next/image";
import dynamic from "next/dynamic";

// Dynamically import the streak chart component (client only)
const GitHubStreak = dynamic(() => import("@/components/GitHubStreak"), {
  ssr: false,
  loading: () => <p className="text-center">Loading GitHub streak chart...</p>,
});
// top of file
const GitHubStats = dynamic(() => import("@/components/GitHubStats"), {
  ssr: false,
  loading: () => <p className="text-center">Loading GitHub stats...</p>,
});


export function GitHub() {
  return (
    <SectionWrapper id="github">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-extrabold mb-12 text-center text-purple-600 dark:text-purple-400"
      >
        GitHub Contributions
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 text-center"
      >
        <GitHubStats />

        {/* Client-only GitHub Streak Image */}
        <GitHubStreak />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="mt-16 text-center"
      >
        <h3 className="text-2xl font-bold text-purple-500 dark:text-purple-300 mb-6">
          GitHub Contribution Calendar
        </h3>
        <div className="overflow-x-auto flex justify-center">
          <div className="inline-block">
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
        className="mt-12 text-center"
      >
        <a
          href="https://github.com/lakshay-verma-dev"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-lg font-semibold shadow-lg hover:scale-110 transition-transform duration-300"
        >
          View GitHub Profile
        </a>
      </motion.div>
    </SectionWrapper>
  );
}
