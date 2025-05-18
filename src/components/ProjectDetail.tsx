"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, X } from "lucide-react";

interface ProjectDetailProps {
  project: Project;
  onClose: () => void;
}

export function ProjectDetail({ project, onClose }: ProjectDetailProps) {
  const [activeTab, setActiveTab] = useState<"overview" | "features" | "tech">("overview");

  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50"
      >
        {/* Backdrop with blur effect */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm"
          aria-hidden="true"
        />

        {/* Modal Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 overflow-y-auto"
        >
          <div className="min-h-full flex items-center justify-center p-4">
            <div className="relative w-full max-w-5xl bg-white dark:bg-gray-800 rounded-2xl shadow-2xl">
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                aria-label="Close project details"
              >
                <X className="w-6 h-6 text-gray-500 dark:text-gray-400" />
              </button>

              {/* Header with Image */}
              <div className="relative">
                {project.imageUrl && (
                  <div className="h-64 w-full overflow-hidden rounded-t-2xl">
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                  <h2 className="text-3xl font-bold text-white">
                    {project.title}
                  </h2>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Tabs */}
                <div className="flex space-x-6 border-b border-gray-200 dark:border-gray-700 mb-6">
                  {["overview", "features", "tech"].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab as typeof activeTab)}
                      className={`pb-3 font-medium capitalize transition-colors ${
                        activeTab === tab
                          ? "border-b-2 border-blue-600 text-blue-600"
                          : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>

                {/* Tab Content */}
                <div className="max-h-[60vh] overflow-y-auto pr-4 custom-scrollbar">
                  {activeTab === "overview" && (
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-200">
                          Overview
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                          {project.detailedInfo.overview}
                        </p>
                      </div>

                      <div className="grid grid-cols-2 gap-6">
                        <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg">
                          <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Role</h4>
                          <p className="text-gray-600 dark:text-gray-400">{project.detailedInfo.role}</p>
                        </div>
                        <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg">
                          <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Duration</h4>
                          <p className="text-gray-600 dark:text-gray-400">{project.detailedInfo.duration}</p>
                        </div>
                      </div>

                      {project.detailedInfo.impact && (
                        <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg">
                          <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Impact</h4>
                          <p className="text-gray-600 dark:text-gray-400">{project.detailedInfo.impact}</p>
                        </div>
                      )}
                    </div>
                  )}

                  {activeTab === "features" && (
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-200">
                          Key Features
                        </h3>
                        <ul className="space-y-3">
                          {project.detailedInfo.features.map((feature, index) => (
                            <li key={index} className="flex items-start">
                              <span className="text-blue-600 mr-2">•</span>
                              <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="grid grid-cols-2 gap-6">
                        <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg">
                          <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-3">Challenges</h4>
                          <ul className="space-y-2">
                            {project.detailedInfo.challenges.map((challenge, index) => (
                              <li key={index} className="flex items-start">
                                <span className="text-red-500 mr-2">•</span>
                                <span className="text-gray-700 dark:text-gray-300">{challenge}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg">
                          <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-3">Learnings</h4>
                          <ul className="space-y-2">
                            {project.detailedInfo.learnings.map((learning, index) => (
                              <li key={index} className="flex items-start">
                                <span className="text-green-500 mr-2">•</span>
                                <span className="text-gray-700 dark:text-gray-300">{learning}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === "tech" && (
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                          Technology Stack
                        </h3>
                        <div className="flex flex-wrap gap-3">
                          {project.tech.map((tech) => (
                            <span
                              key={tech}
                              className="bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300 px-4 py-2 rounded-full text-sm font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex gap-4">
                        {project.live && (
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
                          >
                            <ExternalLink className="w-5 h-5" />
                            <span>Live Demo</span>
                          </a>
                        )}
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 transition-colors"
                          >
                            <Github className="w-5 h-5" />
                            <span>View Source Code</span>
                          </a>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
