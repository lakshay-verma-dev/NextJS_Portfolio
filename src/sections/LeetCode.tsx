"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaMedal, FaChartLine, FaBolt, FaTrophy } from "react-icons/fa";

export function LeetCode() {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    fetch("https://leetcode-stats-api.herokuapp.com/lakshay_03")
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
          setStats(data);
        }
      })
      .catch((err) => {
        console.error("Failed to fetch LeetCode stats:", err);
      });
  }, []);

  return (
    <section id="leetcode" className="py-20 bg-white dark:bg-gray-900">
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
        className="max-w-5xl mx-auto mb-10"
      >
        <div className="w-full h-64 md:h-80 mx-auto flex items-center justify-center">
          <img
            src="https://leetcard.jacoblin.cool/lakshay_03?theme=dark&ext=heatmap"
            alt="Lakshay Verma's LeetCode Stats"
            className="max-h-full rounded-lg shadow-lg"
          />
        </div>
      </motion.div>

      {/* Stats Grid */}
      {stats ? (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto text-white"
        >
          {[
            {
              icon: <FaTrophy size={30} />,
              label: "Total Solved",
              value: stats.totalSolved,
              color: "bg-indigo-600",
            },
            {
              icon: <FaBolt size={30} />,
              label: "Easy Problems",
              value: stats.easySolved,
              color: "bg-green-500",
            },
            {
              icon: <FaChartLine size={30} />,
              label: "Medium Problems",
              value: stats.mediumSolved,
              color: "bg-yellow-500",
            },
            {
              icon: <FaMedal size={30} />,
              label: "Hard Problems",
              value: stats.hardSolved,
              color: "bg-red-500",
            },
          ].map(({ icon, label, value, color }, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-xl shadow-lg ${color} text-center flex flex-col items-center justify-center`}
            >
              <div className="mb-3">{icon}</div>
              <h4 className="text-xl font-semibold">{label}</h4>
              <p className="text-2xl font-bold">{value}</p>
            </div>
          ))}
        </motion.div>
      ) : (
        <p className="text-center mt-10 text-gray-500 dark:text-gray-300">
          Loading LeetCode stats...
        </p>
      )}
    </section>
  );
}
