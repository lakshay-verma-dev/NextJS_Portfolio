// components/ModernButton.tsx
"use client";

import React from "react";
import { cn } from "@/lib/utils"; // Optional: if using clsx/cn utility

interface ModernButtonProps {
  text: string;
}

const ModernButton: React.FC<ModernButtonProps> = ({ text }) => {
  const isGithub = text.toLowerCase().includes("github");
  const isLeetCode = text.toLowerCase().includes("leetcode");

  const colorClass = isGithub
    ? {
        base: "text-purple-400 border-purple-400",
        hover: "hover:text-[#212121] hover:bg-purple-400",
        fill: "fill-purple-400 hover:fill-[#212121]",
        ring: "ring-purple-400",
      }
    : isLeetCode
    ? {
        base: "text-yellow-300 border-yellow-300",
        hover: "hover:text-[#212121] hover:bg-yellow-300",
        fill: "fill-yellow-300 hover:fill-[#212121]",
        ring: "ring-yellow-300",
      }
    : {
        base: "text-green-400 border-green-400",
        hover: "hover:text-[#212121] hover:bg-green-400",
        fill: "fill-green-400 hover:fill-[#212121]",
        ring: "ring-green-400",
      };

  return (
    <div className="flex justify-center mt-8">
      <button
        className={cn(
          "relative flex items-center gap-1 px-9 py-4 border-[3px] rounded-full font-semibold text-base shadow-[0_0_0_2px] overflow-hidden cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]",
          colorClass.base,
          colorClass.ring,
          colorClass.hover
        )}
        aria-label={text}
        title={text}
      >
        <svg
          viewBox="0 0 24 24"
          className={cn(
            "absolute left-[-25%] w-6 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]",
            colorClass.fill,
            "arr-2"
          )}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
        </svg>

        <span className="relative z-10 transition-all duration-700 translate-x-[-12px] group-hover:translate-x-[12px]">
          {text}
        </span>

        <span className="absolute top-1/2 left-1/2 z-0 h-5 w-5 rounded-full bg-current opacity-0 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:w-[220px] group-hover:h-[220px] group-hover:opacity-100 -translate-x-1/2 -translate-y-1/2" />

        <svg
          viewBox="0 0 24 24"
          className={cn(
            "absolute right-4 w-6 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]",
            colorClass.fill,
            "arr-1"
          )}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
        </svg>
      </button>
    </div>
  );
};

export default ModernButton;
