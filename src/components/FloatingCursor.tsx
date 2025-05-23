"use client";

import { useEffect, useRef, useState } from "react";

export default function FloatingCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const pos = useRef({ x: 0, y: 0 });
  const speed = 0.1;

  const [visible, setVisible] = useState(false);
  const [scale, setScale] = useState(1);
  const [hoverColor, setHoverColor] = useState("white");

  useEffect(() => {
    const animate = () => {
      pos.current.x += (mouse.current.x - pos.current.x) * speed;
      pos.current.y += (mouse.current.y - pos.current.y) * speed;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0) scale(${scale})`;
        cursorRef.current.style.backgroundColor = hoverColor;
        cursorRef.current.style.boxShadow = `0 0 10px ${hoverColor}, 0 0 20px ${hoverColor}`;
      }

      // Slowly reset scale
      setScale((prev) => prev + (1 - prev) * 0.1);

      requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
      setVisible(true);

      // Check if target or any parent has .cursor-hover-target
      const target = e.target as HTMLElement;
      const hoverTarget = target.closest(".cursor-hover-target");

      if (hoverTarget) {
        setScale(2.2);

        const computedStyle = window.getComputedStyle(hoverTarget);
        const bgColor = computedStyle.backgroundColor;

        // Use target's background color or fallback
        setHoverColor(bgColor !== "rgba(0, 0, 0, 0)" ? bgColor : "#facc15");
      } else {
        setHoverColor("white");
      }
    };

    const handleMouseLeave = () => setVisible(false);

    animate();

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseout", handleMouseLeave);
    window.addEventListener("blur", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseout", handleMouseLeave);
      window.removeEventListener("blur", handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className={`fixed top-0 left-0 w-5 h-5 rounded-full pointer-events-none z-[9999]
        transition-opacity duration-300 ease-in-out will-change-transform
        ${visible ? "opacity-100" : "opacity-0"}`}
      style={{
        transform: "translate3d(0, 0, 0) scale(1)",
        backgroundColor: "white",
        boxShadow: "0 0 12px rgba(255,255,255,0.6)",
        mixBlendMode: "difference", // optional: for contrast effect
      }}
    />
  );
}
