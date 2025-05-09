"use client";
import { JSX, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaMedal, FaChartLine, FaBolt, FaTrophy } from "react-icons/fa";

// Define the shape of the LeetCode stats
interface LeetCodeStats {
  totalSolved: number;
  easySolved: number;
  mediumSolved: number;
  hardSolved: number;
  status: string;
}

interface StatCardProps {
  icon: JSX.Element;
  label: string;
  value: number;
}

export function LeetCode() {
  const [stats, setStats] = useState<LeetCodeStats | null>(null);

  useEffect(() => {
    fetch("https://leetcode-stats-api.herokuapp.com/lakshay_03")
      .then((res) => res.json())
      .then((data: LeetCodeStats) => {
        if (data.status === "success") {
          setStats(data);
        }
      })
      .catch((err) => {
        console.error("Failed to fetch LeetCode stats:", err);
      });
  }, []);

  return (
    <section id="leetcode" className="py-20 px-4 bg-white dark:bg-gray-900">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-extrabold mb-12 text-center text-yellow-600 dark:text-yellow-400"
      >
        LeetCode Performance
      </motion.h2>

      {/* LeetCard Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto mb-12"
      >
        <div className="w-full flex justify-center items-center">
          <img
            src="https://leetcard.jacoblin.cool/lakshay_03?theme=dark&ext=heatmap"
            alt="Lakshay Verma's LeetCode Stats"
            className="rounded-lg shadow-2xl border-4 border-yellow-400 dark:border-yellow-500"
          />
        </div>
      </motion.div>

      {/* Stats Grid */}
      {stats && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto"
        >
          <StatCard
            icon={<FaMedal className="text-orange-500" />}
            label="Total Solved"
            value={stats.totalSolved}
          />
          <StatCard
            icon={<FaChartLine className="text-blue-500" />}
            label="Easy Problems"
            value={stats.easySolved}
          />
          <StatCard
            icon={<FaBolt className="text-yellow-500" />}
            label="Medium Problems"
            value={stats.mediumSolved}
          />
          <StatCard
            icon={<FaTrophy className="text-red-500" />}
            label="Hard Problems"
            value={stats.hardSolved}
          />
        </motion.div>
      )}

      {/* View LeetCode Profile Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="mt-12 text-center"
      >
        <a
          href="https://leetcode.com/lakshay_03"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-lg font-semibold shadow hover:scale-105 transition-transform"
        >
          View LeetCode Profile
        </a>
      </motion.div>
    </section>
  );
}

function StatCard({ icon, label, value }: StatCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 shadow-lg text-center"
    >
      <div className="text-3xl mb-3">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
        {label}
      </h3>
      <p className="text-2xl font-bold text-yellow-600 dark:text-yellow-400 mt-1">
        {value}
      </p>
    </motion.div>
  );
}
