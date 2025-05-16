"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

export type Project = {
  title: string;
  description: string;
  tech: string[];
  github: string;
  live: string;
  tag?: string;
};

interface ProjectCardProps {
  project: Project;
  idx: number;
  onViewDetails: () => void;
}

export function ProjectCard({ project, idx, onViewDetails }: ProjectCardProps) {
  return (
    <motion.div
      key={project.title}
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, delay: idx * 0.2 }}
      viewport={{ once: true }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col h-full border border-gray-200 dark:border-gray-700"
    >
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
          {project.title}
        </h3>
        {project.tag && (
          <span className="text-xs font-medium px-2 py-1 bg-blue-100 dark:bg-blue-700 text-blue-700 dark:text-white rounded-full">
            {project.tag}
          </span>
        )}
      </div>

      <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
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

      <div className="flex gap-4 mt-auto">
        {project.live ? (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-blue-600 hover:underline"
          >
            <ExternalLink className="w-4 h-4" /> Live
          </a>
        ) : (
          <span className="text-gray-400 text-sm italic">Live soon</span>
        )}

        {project.github ? (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-gray-800 dark:text-gray-200 hover:underline"
          >
            <Github className="w-4 h-4" /> GitHub
          </a>
        ) : (
          <span className="text-gray-400 text-sm italic">Private</span>
        )}
      </div>

      <button
        onClick={onViewDetails}
        className="mt-4 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold py-2 rounded-md w-full"
      >
        View Details
      </button>
    </motion.div>
  );
}
