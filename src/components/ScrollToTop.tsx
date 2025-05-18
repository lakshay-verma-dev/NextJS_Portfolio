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
    <>
      <style>
        {`
          @keyframes border-glow {
            0% { transform: translateX(-5%); }
            100% { transform: translateX(-100%); }
          }

          .glow-border::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 400%;
            height: 100%;
            background: linear-gradient(115deg, #d1d1d1, #02367b, #a7bfde);
            background-size: 25% 100%;
            animation: border-glow 2s linear infinite;
            border-radius: 9999px;
            z-index: 0;
          }
        `}
      </style>

      <div className="fixed bottom-8 right-8 z-50">
        {isVisible && (
          <Tooltip.Provider delayDuration={100}>
            <Tooltip.Root>
              <Tooltip.Trigger asChild>
                <button
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                  className="relative p-[2px] rounded-full overflow-hidden isolate glow-border"
                >
                  <span className="relative z-10 flex items-center justify-center w-14 h-14 bg-[#02367b] text-white rounded-full shadow-lg">
                    <ArrowUp className="w-5 h-5" />
                  </span>
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
    </>
  );
};

export default ScrollToTop;
