"use client";

import React, { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import * as Tooltip from "@radix-ui/react-tooltip";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  if (!hasMounted) return null;

  return (
    <div className="fixed bottom-8 right-8 z-50">
      {isVisible && (
        <Tooltip.Provider delayDuration={100}>
          <Tooltip.Root>
            <Tooltip.Trigger asChild>
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="w-14 h-14 rounded-full bg-[#02367b] text-white flex items-center justify-center
                shadow-[0_0_15px_3px_rgba(3,105,161,0.8)]
                transition duration-300"
              >
                <ArrowUp className="w-5 h-5" />
              </button>
            </Tooltip.Trigger>
            <Tooltip.Portal>
              <Tooltip.Content
                side="left"
                className="rounded bg-black px-2 py-1 mr-2 text-white text-sm shadow-md z-50"
              >
                Scroll to Top
              </Tooltip.Content>
            </Tooltip.Portal>
          </Tooltip.Root>
        </Tooltip.Provider>
      )}
    </div>
  );
};

export default ScrollToTop;
