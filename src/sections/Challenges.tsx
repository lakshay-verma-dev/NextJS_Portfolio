"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaBookOpen } from "react-icons/fa";
import { SectionWrapper } from "@/components/SectionWrapper";
import { SectionHeader } from "@/components/SectionHeader";
import { challenges, ChallengeData } from "@/assets/Challenge";
import { ChallengeModal } from "@/components/ChallengeModal";

const CHALLENGES_TO_SHOW = 4;

export function Challenges() {
  const [selectedChallenge, setSelectedChallenge] =
    useState<ChallengeData | null>(null);
  const [showAll, setShowAll] = useState(false);

  const visibleChallenges = showAll
    ? challenges
    : challenges.slice(0, CHALLENGES_TO_SHOW);

  return (
    <SectionWrapper id="challenges">
      <SectionHeader>Tech Journey Challenges</SectionHeader>

      <div className="grid w-full grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2">
        {visibleChallenges.map((challenge, index) => (
          <motion.div
            key={challenge.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 shadow-[0_8px_32px_rgba(0,0,0,0.2)] backdrop-blur-md transition-all duration-300 hover:border-cyan-400/30 hover:bg-white/[0.07] sm:p-6"
          >
            <div className="mb-3 flex items-start gap-3">
              <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-cyan-400/20 bg-cyan-500/10">
                <FaBookOpen className="text-cyan-300" />
              </span>
              <h3 className="text-base font-semibold leading-snug text-white sm:text-lg">
                {challenge.title}
              </h3>
            </div>
            <p className="mb-2 text-xs italic text-cyan-400 sm:text-sm">
              {challenge.project}
            </p>
            <p className="mb-4 text-sm leading-relaxed text-slate-300">
              {challenge.shortDescription}
            </p>
            <button
              onClick={() => setSelectedChallenge(challenge)}
              className="text-sm font-medium text-cyan-300 transition hover:text-cyan-200"
            >
              Read more →
            </button>
          </motion.div>
        ))}
      </div>

      {challenges.length > CHALLENGES_TO_SHOW && (
        <div className="mt-8 text-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="rounded-xl border border-cyan-400/30 bg-cyan-500/15 px-5 py-2.5 text-sm font-medium text-cyan-100 transition hover:bg-cyan-500/25"
          >
            {showAll ? "Show Less" : "Show More"}
          </button>
        </div>
      )}

      <ChallengeModal
        open={!!selectedChallenge}
        onClose={() => setSelectedChallenge(null)}
        challenge={selectedChallenge}
      />
    </SectionWrapper>
  );
}
