"use client";

import { SectionWrapper } from "@/components/SectionWrapper";
import { SectionHeader } from "@/components/SectionHeader";
import { motion } from "framer-motion";
import { FaBookOpen } from "react-icons/fa";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

interface Challenge {
  title: string;
  date: string;
  description: string;
  link?: string; // Optional: for "Read more" link to full blog/article
}

const challenges: Challenge[] = [
  {
    title: "Deploying Full Stack App to AWS",
    date: "March 2024",
    description:
      "Faced issues with CORS and server environment configuration. Learned how to set up EC2, security groups, and nginx for reverse proxy.",
    link: "#",
  },
  {
    title: "Mastering Redux Toolkit",
    date: "February 2024",
    description:
      "Initially struggled with async thunks and state normalization. Eventually understood slice management and used RTK Query for optimization.",
    link: "#",
  },
  {
    title: "Building a Scalable Auth System",
    date: "January 2024",
    description:
      "Faced edge cases like token expiration and password reset. Learned about JWT, cookie sessions, and used bcrypt for secure storage.",
    link: "#",
  },
  {
    title: "Responsive UI With Tailwind & Framer Motion",
    date: "December 2023",
    description:
      "Created a dynamic interface with animations and responsive layouts. Solved layout shifting bugs and improved mobile experience.",
    link: "#",
  },
];

export function Challenges() {
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
        {challenges.map((challenge, index) => (
          <motion.div
            key={index}
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
              {challenge.description}
            </p>
            {challenge.link && (
              <a
                href={challenge.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 text-sm hover:underline"
              >
                Read more →
              </a>
            )}
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
