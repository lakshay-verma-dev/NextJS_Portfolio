"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { SectionWrapper } from "@/components/SectionWrapper";
import Image from "next/image";
import { SectionHeader } from "@/components/SectionHeader";
import ModernButton from "@/components/ui/ModernButton";

const LeetCodeCard = dynamic(() => import("@/components/LeetCodeCard"), {
  ssr: false,
  loading: () => <p className="text-center">Loading LeetCode stats...</p>,
});

interface LeetCodeStats {
  status: string;
  ranking: number;
  contributionPoints: number;
}

export function LeetCode() {
  const [stats, setStats] = useState<LeetCodeStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("https://leetcode-stats-api.herokuapp.com/lakshay_03")
      .then((res) => res.json())
      .then((data: LeetCodeStats) => {
        if (data.status === "success") {
          setStats(data);
        } else {
          setError(true);
        }
      })
      .catch((err) => {
        console.error("Failed to fetch LeetCode stats:", err);
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <SectionWrapper id="leetcode">
      <SectionHeader>LeetCode Performance</SectionHeader>

      {/* LeetCard Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto mb-12 flex justify-center items-center"
      >
        <LeetCodeCard />
      </motion.div>

      {/* Loader or Stats */}
      {loading ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex justify-center items-center h-24 mb-10"
        >
          <div className="w-10 h-10 border-4 border-yellow-500 border-t-transparent rounded-full animate-spin"></div>
        </motion.div>
      ) : error ? (
        <p className="text-center text-red-500 font-medium mb-10">
          🚫 Unable to load LeetCode stats. Please try again later.
        </p>
      ) : stats ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-4 mb-10"
        >
          <p className="text-lg font-medium text-gray-800 dark:text-gray-200">
            🌍 Global Ranking:{" "}
            <span className="text-yellow-600 dark:text-yellow-400 font-semibold">
              #{stats.ranking.toLocaleString()}
            </span>
          </p>
          <p className="text-lg font-medium text-gray-800 dark:text-gray-200">
            🚀 Contribution Points:{" "}
            <span className="text-yellow-600 dark:text-yellow-400 font-semibold">
              {stats.contributionPoints}
            </span>
          </p>
        </motion.div>
      ) : null}

      {/* Badges GIFs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="flex flex-wrap justify-center gap-6 mb-12"
      >
        <Image
          src="/badges/badge-50.gif"
          alt="50 Problem Badge"
          width={80}
          height={80}
        />
        <Image
          src="/badges/badge-100.gif"
          alt="100 Problem Badge"
          width={80}
          height={80}
        />
      </motion.div>

      {/* View Profile Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="mt-8 text-center"
      >
        <a
          href="https://leetcode.com/lakshay_03"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ModernButton text="View LeetCode Profile" />
        </a>
      </motion.div>
    </SectionWrapper>
  );
}
