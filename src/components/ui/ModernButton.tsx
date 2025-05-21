"use client";

import React from "react";
import { cn } from "@/lib/utils"; // or replace with clsx if not using cn

interface ModernButtonProps {
  text: string;
}

const ModernButton: React.FC<ModernButtonProps> = ({ text }) => {
  const isGithub = text.toLowerCase().includes("github");
  const isLeetCode = text.toLowerCase().includes("leetcode");

  const colorClass = isGithub
    ? {
        base: "text-purple-400 border-purple-400 bg-purple-500/10",
        hover: "hover:text-black hover:bg-purple-400",
        ring: "ring-purple-400",
        pulse: "animate-pulse-purple",
      }
    : isLeetCode
    ? {
        base: "text-yellow-300 border-yellow-300 bg-yellow-300/10",
        hover: "hover:text-black hover:bg-yellow-300",
        ring: "ring-yellow-300",
        pulse: "animate-pulse-yellow",
      }
    : {
        base: "text-green-400 border-green-400 bg-green-400/10",
        hover: "hover:text-black hover:bg-green-400",
        ring: "ring-green-400",
        pulse: "animate-pulse-green",
      };

  return (
    <div className="flex justify-center mt-8">
      <button
        className={cn(
          "group relative overflow-hidden px-10 py-4 border-2 rounded-full font-bold text-base transition-all duration-300 shadow-lg",
          "flex items-center justify-center gap-2",
          colorClass.base,
          colorClass.hover,
          colorClass.ring,
          colorClass.pulse
        )}
        aria-label={text}
        title={text}
      >
        <span className="relative z-10">{text}</span>

        {/* Arrow icon sliding in from right */}
        <svg
          className="w-5 h-5 absolute right-4 translate-x-10 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 ease-in-out"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10.293 15.707a1 1 0 010-1.414L13.586 11H3a1 1 0 110-2h10.586l-3.293-3.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" />
        </svg>

        {/* Expanding ripple effect */}
        <span className="absolute inset-0 rounded-full scale-0 group-hover:scale-150 opacity-0 group-hover:opacity-10 bg-current transition-all duration-700 ease-in-out" />
      </button>
    </div>
  );
};

export default ModernButton;
