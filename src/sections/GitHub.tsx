"use client";
import { motion } from "framer-motion";
import GitHubCalendar from "react-github-calendar";
import { SectionWrapper } from "@/components/SectionWrapper";

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
        <img
          src="https://github-readme-stats.vercel.app/api?username=lakshay-verma-dev&show_icons=true&theme=radical"
          alt="Lakshay Verma's GitHub stats"
          className="mx-auto rounded-lg shadow-2xl w-full transition-transform hover:scale-105"
        />

        <img
          src="https://github-readme-streak-stats.herokuapp.com/?user=lakshay-verma-dev&theme=radical"
          alt="Lakshay Verma's GitHub streak"
          className="mx-auto rounded-lg shadow-2xl w-full transition-transform hover:scale-105"
        />
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
