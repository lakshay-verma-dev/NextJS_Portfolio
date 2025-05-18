"use client";

import React from "react";
import clsx from "clsx";

interface AnimatedButtonProps {
  text: string;
  icon: React.ReactNode;
  onClick?: () => void;
}

const AnimatedButton: React.FC<AnimatedButtonProps> = ({ text, icon, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={clsx(
        "relative w-40 h-11 bg-violet-600 cursor-pointer text-white rounded-md overflow-hidden transition-colors duration-300 group",
        "hover:bg-violet-700 active:scale-95"
      )}
    >
      <span
        className={clsx(
          "absolute inset-0 flex items-center justify-center transition-transform duration-500",
          "group-hover:-translate-y-full"
        )}
      >
        {text}
      </span>
      <span
        className={clsx(
          "absolute inset-0 flex items-center justify-center transition-transform duration-500",
          "translate-y-full group-hover:translate-y-0"
        )}
      >
        {icon}
      </span>
    </button>
  );
};

export default AnimatedButton;
