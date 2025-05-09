"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Button } from "@/components/ui/button";
import { Download, Linkedin, Github } from "lucide-react";
import { SectionWrapper } from "@/components/SectionWrapper";
import { useEffect, useRef } from "react";

export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Starry background effect (canvas)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let particles: {
      x: number;
      y: number;
      radius: number;
      color: string;
      vx: number;
      vy: number;
    }[] = [];
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
      particles.forEach(
        (particle: {
          x: number;
          y: number;
          radius: number;
          color: string;
          vx: number;
          vy: number;
        }) => {
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
        }
      );
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
    <SectionWrapper
      id="home"
      className="min-h-screen w-full flex items-center justify-center text-center px-4 relative"
    >
      {/* Starry background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0 pointer-events-none"
      ></canvas>

      <div className="w-full max-w-3xl mx-auto space-y-6 relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"
        >
          Hi, I'm{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            Lakshay Verma
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300"
        >
          <TypeAnimation
            sequence={[
              "Full Stack Web Developer",
              2000,
              "MERN | TypeScript | Vue.js",
              2000,
              "Problem Solver & Innovator",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </motion.div>

        <p className="text-gray-500 dark:text-gray-400 text-base md:text-lg leading-relaxed">
          Passionate about building modern full-stack apps with smooth UI,
          scalable architecture, and performance in mind.
        </p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="flex flex-wrap justify-center gap-4 pt-4"
        >
          <Button
            asChild
            className="gap-2 bg-violet-600 hover:bg-violet-700 text-white p-2"
          >
            <a href="/resume.pdf" download aria-label="Download Resume">
              <Download className="w-5 h-5" />
              Download Resume
            </a>
          </Button>

          <Button
            asChild
            className="gap-2 text-violet-500 border-violet-500 hover:bg-violet-700 p-2"
          >
            <a
              href="https://linkedin.com/in/lakshayverma123"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit LinkedIn profile"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
          </Button>

          <Button
            asChild
            className="gap-2 text-purple-500 hover:bg-purple-100 p-2"
          >
            <a
              href="https://github.com/lakshayverma123"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit GitHub profile"
            >
              <Github className="w-5 h-5" />
              GitHub
            </a>
          </Button>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
