"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Download, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ResumeViewerProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ResumeViewer({ isOpen, onClose }: ResumeViewerProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="relative bg-white dark:bg-gray-900 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-xl"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {/* Close Button */}
            <button
              className="absolute top-3 right-3 text-gray-600 dark:text-gray-300 hover:text-red-500"
              onClick={onClose}
              aria-label="Close resume viewer"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Resume PDF */}
            <iframe
              src="/resume-lakshayverma.pdf"
              className="w-full h-[75vh]"
              title="Lakshay Verma Resume"
            ></iframe>

            {/* Action Buttons */}
            <div className="p-4 flex justify-end gap-4 bg-gray-100 dark:bg-gray-800">
              <Button
                onClick={onClose}
                className="px-4 py-2"
              >
                Close
              </Button>

              <Button
                asChild
                className="gap-2 bg-violet-600 hover:bg-violet-700 text-white"
              >
                <a href="/resume-lakshayverma.pdf" download>
                  <Download className="w-5 h-5" />
                  Download
                </a>
              </Button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
