"use client";

import React from "react";
import { X } from "lucide-react";
import { Project } from "./ProjectCard";

interface ProjectDetailProps {
  project: Project;
  onClose: () => void;
}

export function ProjectDetail({ project, onClose }: ProjectDetailProps) {
  const {
    title,
    detailedInfo: {
      overview,
      features,
      challenges,
      learnings,
      role,
      duration,
      impact,
    },
  } = project;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-60 flex justify-center items-center p-4 overflow-y-auto">
      <div className="bg-white dark:bg-gray-900 max-w-4xl w-full rounded-lg shadow-lg p-6 relative space-y-4">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-red-500"
        >
          <X size={24} />
        </button>

        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          {title}
        </h2>

        <section>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
            Overview
          </h3>
          <p className="text-gray-700 dark:text-gray-300">{overview}</p>
        </section>

        <section>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
            Features
          </h3>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
            {features.map((feature, idx) => (
              <li key={idx}>{feature}</li>
            ))}
          </ul>
        </section>

        <section>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
            Challenges
          </h3>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
            {challenges.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </section>

        <section>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
            Learnings
          </h3>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
            {learnings.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="text-gray-700 dark:text-gray-300">
          <p>
            <strong>Role:</strong> {role}
          </p>
          <p>
            <strong>Duration:</strong> {duration}
          </p>
          {impact && (
            <p>
              <strong>Impact:</strong> {impact}
            </p>
          )}
        </section>
      </div>
    </div>
  );
}
