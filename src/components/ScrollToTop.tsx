"use client";

import React, { useEffect, useState } from "react";
import styled from "styled-components";
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
    <StyledWrapper>
      {isVisible && (
        <Tooltip.Provider delayDuration={100}>
          <Tooltip.Root>
            <Tooltip.Trigger asChild>
              <a
                className="codepen-button"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                <span>
                  <ArrowUp className="w-5 h-5" />
                </span>
              </a>
            </Tooltip.Trigger>
            <Tooltip.Portal>
              <Tooltip.Content
                side="left"
                className="rounded bg-black px-2 py-1 z-50 mr-2 text-white text-sm shadow-md"
              >
                Scroll to Top
              </Tooltip.Content>
            </Tooltip.Portal>
          </Tooltip.Root>
        </Tooltip.Provider>
      )}
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  z-index: 50;

  .codepen-button {
    display: block;
    cursor: pointer;
    color: white;
    margin: 0 auto;
    position: relative;
    text-decoration: none;
    font-weight: 600;
    border-radius: 100px;
    overflow: hidden;
    padding: 2px;
    isolation: isolate;
  }

  .codepen-button::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 400%;
    height: 100%;
    background: linear-gradient(115deg, #d1d1d1, #02367b, #a7bfde);
    background-size: 25% 100%;
    animation: border-glow 0.75s linear infinite;
    animation-play-state: running;
    translate: -5% 0%;
    transition: translate 0.25s ease-out;
  }

  .codepen-button:hover::before {
    animation-play-state: running;
    transition-duration: 0.75s;
    translate: 0% 0%;
  }

  @keyframes border-glow {
    to {
      transform: translateX(-25%);
    }
  }

  .codepen-button span {
    position: relative;
    display: block;
    padding: 1rem;
    font-size: 1.1rem;
    background: #02367b;
    border-radius: 100px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export default ScrollToTop;
