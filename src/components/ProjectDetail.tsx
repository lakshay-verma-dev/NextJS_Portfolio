"use client";

import React, { useEffect, useState } from "react";
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
  "Tech Used",
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

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const renderTabContent = () => {
    switch (activeTab) {
      case "Overview":
        return <p className="leading-relaxed text-slate-300">{overview}</p>;

      case "Features":
        return (
          <ul className="list-disc space-y-2 pl-5 text-slate-300">
            {features.map((feature, idx) => (
              <li key={idx}>{feature}</li>
            ))}
          </ul>
        );

      case "Challenges":
        return (
          <ul className="list-disc space-y-2 pl-5 text-slate-300">
            {challenges.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        );

      case "Learnings":
        return (
          <ul className="list-disc space-y-2 pl-5 text-slate-300">
            {learnings.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        );

      case "Tech Used":
        return (
          <div className="flex flex-wrap gap-2">
            {project.tech.map((techItem, idx) => (
              <span
                key={idx}
                className="rounded-full border border-cyan-400/25 bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-200"
              >
                {techItem}
              </span>
            ))}
          </div>
        );

      case "Other Info":
        return (
          <div className="space-y-2 text-slate-300">
            <p>
              <span className="font-semibold text-white">Role:</span> {role}
            </p>
            <p>
              <span className="font-semibold text-white">Duration:</span>{" "}
              {duration}
            </p>
            {impact && (
              <p>
                <span className="font-semibold text-white">Impact:</span>{" "}
                {impact}
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
      className="fixed inset-0 z-[60] flex items-end justify-center bg-black/70 p-0 backdrop-blur-md sm:items-center sm:p-4"
      onClick={onClose}
    >
      <div
        className="relative flex max-h-[92vh] w-full max-w-3xl flex-col rounded-t-2xl border border-white/10 bg-slate-950/95 p-5 shadow-2xl sm:max-h-[85vh] sm:rounded-2xl sm:p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-3 top-3 rounded-lg border border-white/10 p-1.5 text-slate-400 transition hover:border-red-400/40 hover:text-red-300"
          aria-label="Close"
        >
          <X size={20} />
        </button>

        <h2 className="mb-4 pr-10 text-xl font-bold text-white sm:text-2xl">
          {title}
        </h2>

        <nav className="mb-4 flex w-full gap-1 overflow-x-auto border-b border-white/10 pb-px">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`shrink-0 border-b-2 px-3 py-2 text-xs font-semibold transition-colors sm:text-sm ${
                activeTab === tab
                  ? "border-cyan-400 text-cyan-300"
                  : "border-transparent text-slate-400 hover:text-slate-200"
              }`}
            >
              {tab}
            </button>
          ))}
        </nav>

        <div className="min-h-0 flex-1 overflow-y-auto pr-1 text-sm sm:text-base">
          {renderTabContent()}
        </div>
      </div>
    </div>
  );
}
