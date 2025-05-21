"use client";

import React, { useState } from "react";
import { X } from "lucide-react";
import { ChallengeData } from "@/assets/Challenge";

interface Props {
  open: boolean;
  onClose: () => void;
  challenge: ChallengeData | null;
}

const tabs = ["Description", "Solution"] as const;
type Tab = (typeof tabs)[number];

export function ChallengeModal({ open, onClose, challenge }: Props) {
  const [activeTab, setActiveTab] = useState<Tab>("Description");

  if (!open || !challenge) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black bg-opacity-60 flex justify-center pt-24 px-4"
      style={{ overflowY: "auto" }}
    >
      <div
        className="bg-white dark:bg-gray-900 max-w-3xl w-full rounded-lg shadow-lg p-6 relative flex flex-col"
        style={{ maxHeight: "50vh" }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-red-500 transition"
          aria-label="Close"
        >
          <X size={24} />
        </button>

        {/* Title & Date */}
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
          {challenge.title}
        </h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
          {challenge.date}
        </p>

        {/* Tabs */}
        <nav className="mb-4 flex border-b border-gray-300 dark:border-gray-700">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-2 px-4 -mb-px border-b-2 font-semibold text-sm transition-colors ${
                activeTab === tab
                  ? "border-cyan-500 text-cyan-500 dark:text-cyan-400"
                  : "border-transparent text-gray-600 dark:text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-400"
              }`}
            >
              {tab}
            </button>
          ))}
        </nav>

        {/* Scrollable Content */}
        <div
          className="overflow-y-auto text-sm text-gray-700 dark:text-gray-300"
          style={{ flex: 1 }}
        >
          {activeTab === "Description" ? (
            <p className="whitespace-pre-line">{challenge.fullDescription}</p>
          ) : (
            <p className="whitespace-pre-line">{challenge.solution}</p>
          )}
        </div>
      </div>
    </div>
  );
}
