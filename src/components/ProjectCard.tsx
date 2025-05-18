"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

export type Project = {
  id: string;
  title: string;
  description: string;
  detailedInfo: {
    overview: string;
    features: string[];
    challenges: string[];
    learnings: string[];
    role: string;
    duration: string;
    impact?: string;
  };
  tech: string[];
  github?: string;
  live?: string;
  tag?: string;
  type?: "personal" | "company";
};

interface ProjectCardProps {
  project: Project;
  idx: number;
  onViewDetails: () => void;
}

export function ProjectCard({ project, idx, onViewDetails }: ProjectCardProps) {
  const isPersonal = project.type === "personal";

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, delay: idx * 0.2 }}
      viewport={{ once: true }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col h-full max-h-[500px] overflow-auto border border-gray-200 dark:border-gray-700"
    >
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
          {project.title}
        </h3>
        {project.tag && (
          <span
            className={`text-xs font-semibold px-3 py-1 rounded-full border ${
              project.tag === "In Progress"
                ? "bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 border-yellow-400"
                : project.tag === "Complete"
                ? "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 border-green-400"
                : "bg-gray-200 text-gray-800 border-gray-400"
            }`}
          >
            {project.tag}
          </span>
        )}
      </div>

      <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm line-clamp-3">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 text-xs px-3 py-1 rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex flex-col gap-2 mt-auto text-sm">
        {project.live ? (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-blue-600 hover:underline"
          >
            <ExternalLink className="w-4 h-4" /> Live
          </a>
        ) : isPersonal ? (
          <span className="text-gray-500 italic">Live: Coming Soon...</span>
        ) : null}

        {project.github ? (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-gray-800 dark:text-gray-200 hover:underline"
          >
            <Github className="w-4 h-4" /> GitHub
          </a>
        ) : isPersonal ? (
          <span className="text-gray-500 italic">GitHub: Coming Soon...</span>
        ) : null}
      </div>

      {/* Gradient Button */}
      <button
        onClick={onViewDetails}
        className="mt-4 w-full py-4 px-12 text-[12px] uppercase tracking-[2.5px] font-bold text-black bg-white rounded-[45px] shadow-[0_8px_15px_rgba(0,0,0,0.1)] transition-all duration-300 ease-in-out transform cursor-pointer hover:bg-[#02367B] hover:text-white hover:shadow-[0_15px_20px_rgba(2,54,123,0.4)] hover:translate-y-[-7px] active:translate-y-[-1px]"
      >
        View Details
      </button>
    </motion.div>
  );
}
