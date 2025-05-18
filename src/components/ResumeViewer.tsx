"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface ResumeViewerProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ResumeViewer({ isOpen, onClose }: ResumeViewerProps) {
  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[1000] backdrop-blur-sm bg-black/40 flex items-start justify-center pt-24 px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="relative w-full max-w-4xl h-[80vh] bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-2xl"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300 }}
            onClick={(e) => e.stopPropagation()} // Prevent closing on internal click
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-2 right-2 z-10 text-white bg-red-500 hover:bg-red-600 p-1.5 rounded-full"
            >
              <X className="w-5 h-5" />
            </button>

            <iframe
              src="/resume-lakshayverma.pdf"
              className="w-full h-full"
              title="Lakshay Verma Resume"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
