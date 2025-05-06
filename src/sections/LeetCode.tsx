"use client";
import { motion } from "framer-motion";

export function LeetCode() {
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

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 text-center"
      >
        <div className="w-full h-64 md:h-80 mx-auto flex items-center justify-center">
          <img
            src="https://leetcard.jacoblin.cool/lakshay_03?theme=dark&ext=heatmap"
            alt="Lakshay Verma's LeetCode Stats"
            className="max-h-full rounded-lg shadow-lg"
          />
        </div>
      </motion.div>
    </section>
  );
}
