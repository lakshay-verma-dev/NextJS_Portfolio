"use client";

import React, { useState } from "react";
import { X } from "lucide-react";
import { Project } from "./ProjectCard";

interface ProjectDetailProps {
  project: Project;
  onClose: () => void;
}

const tabs = [
  "Overview",
  "Features",
  "Challenges",
  "Learnings",
  "Other Info",
] as const;
type Tab = (typeof tabs)[number];

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

  const [activeTab, setActiveTab] = useState<Tab>("Overview");

  const renderTabContent = () => {
    switch (activeTab) {
      case "Overview":
        return <p className="text-gray-700 dark:text-gray-300">{overview}</p>;

      case "Features":
        return (
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
            {features.map((feature, idx) => (
              <li key={idx}>{feature}</li>
            ))}
          </ul>
        );

      case "Challenges":
        return (
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
            {challenges.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        );

      case "Learnings":
        return (
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
            {learnings.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        );

      case "Other Info":
        return (
          <div className="text-gray-700 dark:text-gray-300 space-y-2">
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
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 backdrop-blur-sm bg-white/10 flex justify-center pt-24 px-4 sm:px-6"
      style={{ overflowY: "auto" }}
    >
      <div
        className="bg-white dark:bg-gray-900 max-w-4xl w-full rounded-lg shadow-lg p-6 relative flex flex-col"
        style={{ maxHeight: "80vh" }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 cursor-pointer text-gray-500 hover:text-red-500 transition"
          aria-label="Close"
        >
          <X size={24} />
        </button>

        {/* Title */}
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          {title}
        </h2>

        {/* Tabs */}
        <nav className="mb-4 flex border-b border-gray-300 dark:border-gray-700 overflow-x-auto whitespace-nowrap w-full">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-2 px-4 -mb-px border-b-2 font-semibold text-sm flex-shrink-0 ${
                activeTab === tab
                  ? "border-indigo-600 text-indigo-600 dark:text-indigo-400"
                  : "border-transparent text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400"
              } transition-colors`}
            >
              {tab}
            </button>
          ))}
        </nav>

        {/* Scrollable Content */}
        <div className="overflow-y-auto text-sm" style={{ flex: 1 }}>
          {renderTabContent()}
        </div>
      </div>
    </div>
  );
}
