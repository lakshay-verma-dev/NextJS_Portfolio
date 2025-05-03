// src/sections/About.tsx
"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FaAward, FaUserGraduate, FaClock } from "react-icons/fa";

export function About() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Animation for the floating image
  const imageVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  // Animation for text fade-in
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.5,
      },
    },
  };

  // Starry background effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let particles: any[] = [];
    let animationFrameId: number;

    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const initParticles = () => {
      particles = [];
      const particleCount = 200;
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 1.5,
          color: `rgba(255, 255, 255, ${Math.random() * 0.8})`,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
        });
      }
    };

    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((particle) => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
        particle.x += particle.vx;
        particle.y += particle.vy;
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    setCanvasDimensions();
    initParticles();
    animate();

    window.addEventListener("resize", () => {
      setCanvasDimensions();
      initParticles();
    });

    return () => {
      window.removeEventListener("resize", setCanvasDimensions);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-black overflow-hidden" id="about">
      {/* Starry background */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none"></canvas>

      <div className="relative z-10 w-full min-h-screen flex flex-col md:flex-row items-center justify-center px-4 md:px-16 py-8 md:py-0">
        {/* Left: Animated image */}
        <div className="w-full md:w-1/2 flex justify-center items-center mb-8 md:mb-0 order-1">
          <motion.div
            variants={imageVariants}
            animate="animate"
            className="w-64 h-64 sm:w-80 sm:h-80 md:w-[400px] md:h-[400px] relative rounded-full overflow-hidden shadow-2xl border-4 border-purple-500"
          >
            <img
              src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=facearea&w=500&h=500&facepad=2"
              alt="Lakshay Verma"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        {/* Right: Animated text */}
        <motion.div
          className="w-full md:w-1/2 text-white relative order-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={textVariants}
        >
          {/* Large faded background text */}
          <h2 className="absolute text-gray-600/30 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-wide md:-top-18 -left-2 -z-10 select-none pointer-events-none">
            About Me
          </h2>

          {/* Main content */}
          <div className="relative z-10 mt-16 md:mt-0">
            <h1 className="bg-gradient-to-r from-purple-300 via-blue-400 to-purple-500 bg-clip-text text-transparent text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
              Lakshay Verma
            </h1>

            <p className="text-gray-300 mb-6 md:mb-8 max-w-xl text-base sm:text-lg font-sans">
              Full Stack Web Developer with 6 months of hands-on experience, specializing in MERN stack, TypeScript, Vue.js, and problem-solving. Currently working at DST Technology Pvt. Ltd., building scalable and efficient web applications.
            </p>

            <p className="text-gray-300 mb-6 md:mb-8 max-w-xl text-base sm:text-lg font-sans">
              Passionate about transforming ideas into high-quality, user-friendly digital solutions. Always eager to learn and implement modern technologies.
            </p>

            <div className="flex flex-wrap items-center gap-4 md:gap-8 text-xl mb-6">
              <div className="flex items-center text-gray-300 ">
                <FaClock className="mr-2 text-lg text-purple-400" />
                <span className="font-display ">6+ months experience</span>
              </div>
              <div className="flex items-center text-gray-300">
                <FaAward className="mr-2 text-lg text-purple-400" />
                <span className="font-sans">MERN, TypeScript, Vue.js</span>
              </div>
              <div className="flex items-center text-gray-300">
                <FaUserGraduate className="mr-2 text-lg text-purple-400" />
                <span className="font-sans">BCA, Kurukshetra University</span>
              </div>
            </div>
            {/* Add social media buttons or a call-to-action here if you want */}
          </div>
        </motion.div>
      </div>
    </div>
  );
}