"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaBookOpen } from "react-icons/fa";
import { SectionWrapper } from "@/components/SectionWrapper";
import { SectionHeader } from "@/components/SectionHeader";
import { challenges, ChallengeData } from "@/assets/Challenge";
import { ChallengeModal } from "@/components/ChallengeModal";

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

export function Challenges() {
  const [selectedChallenge, setSelectedChallenge] =
    useState<ChallengeData | null>(null);

  return (
    <SectionWrapper id="challenges">
      <SectionHeader>Tech Journey Challenges</SectionHeader>
      <motion.div
        className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {challenges.map((challenge) => (
          <motion.div
            key={challenge.id}
            className="p-6 rounded-2xl shadow-md border border-white/10 hover:shadow-cyan-500/20 transition-all duration-300 bg-black/30"
            variants={cardVariants}
          >
            <div className="flex items-center gap-3 mb-4">
              <FaBookOpen className="text-cyan-400 text-2xl" />
              <h3 className="text-xl font-semibold text-white tracking-wide">
                {challenge.title}
              </h3>
            </div>
            <p className="text-sm text-gray-400 mb-2">{challenge.date}</p>
            <p className="text-base text-white/90 mb-3">
              {challenge.shortDescription}
            </p>
            <button
              onClick={() => setSelectedChallenge(challenge)}
              className="text-cyan-400 text-sm hover:underline"
            >
              Read more →
            </button>
          </motion.div>
        ))}
      </motion.div>

      <ChallengeModal
        open={!!selectedChallenge}
        onClose={() => setSelectedChallenge(null)}
        challenge={selectedChallenge}
      />
    </SectionWrapper>
  );
}
