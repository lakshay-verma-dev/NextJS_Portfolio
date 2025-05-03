"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function Projects() {
  const projects = [
    {
      title: "Trade Monitoring Software",
      description: "Developed a trade monitoring software to track real-time options market data and automate trade notifications using Dhan API & Telegram Bot API.",
      tech: ["React", "Redux", "Python", "FastAPI", "Bootstrap", "PostgreSQL", "AWS EC2"],
      type: "Work Project"
    },
    {
      title: "Book Inventory Management System",
      description: "A comprehensive system for book buying, selling, and management with secure authentication and payment integration.",
      tech: ["React.js", "Redux Toolkit", "Node.js", "Express.js", "MongoDB", "JWT", "Stripe"],
      liveLink: "https://inventory-hub.com", // Replace with actual link
      githubLink: "https://github.com/yourusername/inventory-hub" // Replace with actual link
    }
  ];

  return (
    <section id="projects" className="py-20">
      <h2 className="text-3xl font-bold mb-12 text-center">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
          >
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold">{project.title}</h3>
                {project.type && (
                  <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 rounded-full text-sm">
                    {project.type}
                  </span>
                )}
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              {(project.liveLink || project.githubLink) && (
                <div className="flex gap-4 mt-4">
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-600 hover:text-purple-700 dark:text-purple-400"
                    >
                      Live Preview →
                    </a>
                  )}
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-600 hover:text-purple-700 dark:text-purple-400"
                    >
                      GitHub →
                    </a>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
