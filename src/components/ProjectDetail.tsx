"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

interface ProjectDetailProps {
  project: {
    title: string;
    description: string;
    tech: string[];
    github: string;
    live: string;
    extraInfo?: string;
  };
  onClose: () => void;
}

export function ProjectDetail({ project, onClose }: ProjectDetailProps) {
  const [activeTab, setActiveTab] = useState<"details" | "info">("details");

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40"
        aria-hidden="true"
      />

      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.95 }}
        transition={{ duration: 0.3 }}
        className="fixed max-w-3xl w-full top-20 left-1/2 -translate-x-1/2 z-50 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 overflow-auto max-h-[80vh]"
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-detail-title"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 dark:hover:text-gray-200 font-bold text-2xl leading-none"
          aria-label="Close project details"
        >
          ×
        </button>

        <h2
          id="project-detail-title"
          className="text-3xl font-bold mb-4 text-gray-900 dark:text-white"
        >
          {project.title}
        </h2>

        {/* Tabs */}
        <div className="flex space-x-4 border-b border-gray-300 dark:border-gray-700 mb-6">
          <button
            onClick={() => setActiveTab("details")}
            className={`pb-2 font-medium ${
              activeTab === "details"
                ? "border-b-2 border-blue-600 text-blue-600"
                : "text-gray-600 dark:text-gray-400"
            }`}
          >
            Details
          </button>
          <button
            onClick={() => setActiveTab("info")}
            className={`pb-2 font-medium ${
              activeTab === "info"
                ? "border-b-2 border-blue-600 text-blue-600"
                : "text-gray-600 dark:text-gray-400"
            }`}
          >
            Info
          </button>
        </div>

        {/* Tab Content */}
        {activeTab === "details" && (
          <div>
            <p className="mb-4 text-gray-700 dark:text-gray-300">
              {project.description}
            </p>

            <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">
              Tech Stack
            </h3>
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
          </div>
        )}

        {activeTab === "info" && (
          <div className="text-gray-700 dark:text-gray-300">
            <div className="flex flex-col gap-3">
              <div>
                <strong>Live Preview:</strong>{" "}
                {project.live ? (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline flex items-center gap-1"
                  >
                    <ExternalLink className="w-4 h-4" /> Visit Site
                  </a>
                ) : (
                  <span className="italic text-gray-500">Not available</span>
                )}
              </div>

              <div>
                <strong>GitHub Repository:</strong>{" "}
                {project.github ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-800 dark:text-gray-200 hover:underline flex items-center gap-1"
                  >
                    <Github className="w-4 h-4" /> View Code
                  </a>
                ) : (
                  <span className="italic text-gray-500">
                    Private / Not available
                  </span>
                )}
              </div>

              {project.extraInfo && (
                <div className="mt-4">
                  <strong>Additional Info:</strong>
                  <p className="mt-1 text-gray-600 dark:text-gray-400">
                    {project.extraInfo}
                  </p>
                </div>
              )}
            </div>
          </div>
        )}
      </motion.div>
    </>
  );
}
