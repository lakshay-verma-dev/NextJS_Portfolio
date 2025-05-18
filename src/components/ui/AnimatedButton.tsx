// components/AnimatedButton.tsx
"use client";

import styled from "styled-components";
import React from "react";

interface AnimatedButtonProps {
  text: string;
  icon: React.ReactNode;
  onClick?: () => void;
}

const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  text,
  icon,
  onClick,
}) => {
  return (
    <StyledWrapper onClick={onClick}>
      <div className="animated-button">
        <div className="button-wrapper">
          <div className="text">{text}</div>
          <span className="icon">{icon}</span>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .animated-button {
    --width: 160px;
    --height: 42px;
    --tooltip-height: 35px;
    --tooltip-width: 110px;
    --gap-between-tooltip-to-button: 18px;
    --tooltip-color: #fff;
    width: var(--width);
    height: var(--height);
    background: #7c3aed;
    position: relative;
    text-align: center;
    border-radius: 0.45em;
    font-family: "Arial";
    transition: background 0.3s;
    cursor: pointer;
    overflow: hidden;
    color: #fff;
    user-select: none;
  }

  .animated-button::before {
    position: absolute;
    content: attr(data-tooltip);
    width: var(--tooltip-width);
    height: var(--tooltip-height);
    background-color: var(--tooltip-color);
    font-size: 0.9rem;
    color: #111;
    border-radius: 0.25em;
    line-height: var(--tooltip-height);
    bottom: calc(var(--height) + var(--gap-between-tooltip-to-button) + 10px);
    left: calc(50% - var(--tooltip-width) / 2);
    opacity: 0;
    visibility: hidden;
    transition: all 0.5s;
    z-index: 5;
  }

  .animated-button::after {
    position: absolute;
    content: "";
    width: 0;
    height: 0;
    border: 10px solid transparent;
    border-top-color: var(--tooltip-color);
    left: calc(50% - 10px);
    bottom: calc(100% + var(--gap-between-tooltip-to-button) - 10px);
    opacity: 0;
    visibility: hidden;
    transition: all 0.5s;
    z-index: 5;
  }

  .animated-button:hover::before,
  .animated-button:hover::after {
    opacity: 1;
    visibility: visible;
  }

  .animated-button:hover::before {
    bottom: calc(var(--height) + var(--gap-between-tooltip-to-button));
  }

  .animated-button:hover::after {
    bottom: calc(var(--height) + var(--gap-between-tooltip-to-button) - 10px);
  }

  .button-wrapper,
  .text,
  .icon {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .text {
    top: 0;
    transition: top 0.5s;
  }

  .icon {
    top: 100%;
    transition: top 0.5s;
  }

  .animated-button:hover .text {
    top: -100%;
  }

  .animated-button:hover .icon {
    top: 0;
  }
`;

export default AnimatedButton;
