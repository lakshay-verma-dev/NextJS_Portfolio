"use client";

import { useEffect, useRef, useState } from "react";

export default function FloatingCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const pos = useRef({ x: 0, y: 0 });
  const speed = 0.1;
  const [visible, setVisible] = useState(false);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const dx = e.clientX - mouse.current.x;
      const dy = e.clientY - mouse.current.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      // Calculate scale based on speed
      const velocityScale = Math.min(1 + distance / 150, 1.5);
      setScale(velocityScale);

      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
      setVisible(true);
    };

    const handleMouseLeave = () => {
      setVisible(false);
    };

    const animate = () => {
      pos.current.x += (mouse.current.x - pos.current.x) * speed;
      pos.current.y += (mouse.current.y - pos.current.y) * speed;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0) scale(${scale})`;
      }

      // Smoothly reduce the scale back to 1
      setScale((prev) => prev + (1 - prev) * 0.1);

      requestAnimationFrame(animate);
    };

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
    <>
      {/* Hide system cursor */}
      {/* Floating Cursor */}
      <div
        ref={cursorRef}
        className={`fixed top-0 left-0 w-4 h-4 rounded-full pointer-events-none z-[9999]
          bg-white shadow-[0_0_12px_rgba(255,255,255,0.6)]
          transition-opacity duration-300 ease-in-out
          will-change-transform
          ${visible ? "opacity-100" : "opacity-0"}
        `}
        style={{ transform: "translate3d(0, 0, 0) scale(1)" }}
      />
    </>
  );
}
