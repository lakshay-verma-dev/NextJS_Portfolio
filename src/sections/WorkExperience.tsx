"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import { experiences } from "@/assets/WorkExperince";
import { Briefcase, Code, TerminalSquare } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { SectionWrapper } from "@/components/SectionWrapper";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

gsap.registerPlugin(ScrollTrigger);

export function WorkExperience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const iconRef = useRef<HTMLDivElement>(null);

  const storyRef = useRef<HTMLDivElement>(null);
  const h2Ref = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const textRef2 = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const timelineFillRef = useRef<HTMLDivElement>(null);
  const glow1Ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const icon = iconRef.current;
    const cards = cardsRef.current;

    if (!icon || !cards.length || !container) return;

    const triggers: ScrollTrigger[] = [];

    // Card animations
    cards.forEach((card) => {
      if (!card) return;

      const animation = gsap.fromTo(
        card,
        {
          opacity: 0,
          y: 40,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
          },
        },
      );

      if (animation.scrollTrigger) {
        triggers.push(animation.scrollTrigger);
      }
    });

    // Timeline icon movement
    cards.forEach((card) => {
      if (!card) return;

      const trigger = ScrollTrigger.create({
        trigger: card,
        start: "top 60%",
        end: "bottom 40%",
        onEnter: () => moveIcon(card, icon),
        onEnterBack: () => moveIcon(card, icon),
      });

      triggers.push(trigger);
    });

    function moveIcon(card: HTMLDivElement, icon: HTMLDivElement) {
      if (!container) return;
      const containerRect = container.getBoundingClientRect();
      const cardRect = card.getBoundingClientRect();

      const y =
        cardRect.top -
        containerRect.top +
        cardRect.height / 2 -
        icon.offsetHeight / 2;

      gsap.to(icon, {
        y,
        duration: 0.35,
        ease: "power2.out",
        overwrite: true,
      });
    }

    // Left section smooth animation
    if (storyRef.current) {
      gsap.fromTo(
        storyRef.current,
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: storyRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        },
      );
    }

    // Heading animation
    if (h2Ref.current) {
      gsap.fromTo(
        h2Ref.current,
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: h2Ref.current,
            start: "top bottom-=100px",
          },
        },
      );
    }

    // Text animation
    if (textRef.current) {
      gsap.fromTo(
        textRef.current,
        {
          opacity: 0,
          y: 10,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: textRef.current,
            start: "top bottom-=100px",
          },
        },
      );
    }

    // Small heading animation
    if (textRef2.current) {
      gsap.fromTo(
        textRef2.current,
        {
          opacity: 0,
          y: 10,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: textRef2.current,
            start: "top bottom-=100px",
          },
        },
      );
    }

    // Stats animation
    if (statsRef.current) {
      gsap.fromTo(
        statsRef.current.children,
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          stagger: 0.08,
          duration: 0.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 85%",
          },
        },
      );
    }

    // Timeline fill
    if (timelineFillRef.current && containerRef.current) {
      gsap.set(timelineFillRef.current, {
        height: "0%",
      });

      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top+=10% bottom",
        end: "bottom-=20% bottom",
        scrub: 0.3,
        onUpdate: (self) => {
          if (timelineFillRef.current) {
            gsap.set(timelineFillRef.current, {
              height: `${self.progress * 100}%`,
            });
          }
        },
      });
    }

    // Glow text
    if (glow1Ref.current) {
      gsap.fromTo(
        glow1Ref.current,
        {
          opacity: 0.5,
        },
        {
          opacity: 1,
          duration: 1.5,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        },
      );
    }

    return () => {
      triggers.forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <SectionWrapper id="experience">
      <SectionHeader>Work Experience</SectionHeader>

      <div
        ref={containerRef}
        className="mx-auto flex w-full flex-col gap-10 lg:flex-row lg:gap-14"
      >
        {/* Left Side */}
        <div
          ref={storyRef}
          className="flex-1 text-center lg:text-left z-10"
        >
          <h2
            ref={h2Ref}
            className="text-[28px] leading-tight font-bold text-white sm:text-[32px] md:text-[48px]"
          >
            My Professional Journey{" "}
            <Code className="inline-block h-[30px] w-[30px] md:h-[50px] md:w-[50px] text-cyan-400" />
            .{" "}
            <span
              ref={glow1Ref}
              className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500"
            >
              Built with passion.
            </span>
          </h2>

          <p
            ref={textRef}
            className="my-6 text-base leading-relaxed text-slate-300 sm:my-8 sm:text-lg"
          >
            Software Developer with 1.5+ years of hands-on experience building
            production web apps, e-commerce storefronts, and full-stack platforms
            with React, Next.js, Node.js, TypeScript, and Shopify.
          </p>

          <p
            ref={textRef2}
            className="mb-5 text-[14px] font-extrabold text-cyan-500 uppercase tracking-widest"
          >
            Core competencies include:
          </p>

          <div className="flex flex-col gap-3 lg:-ms-4" ref={statsRef}>
            {[
              "React / Next.js Applications",
              "Shopify & Liquid Development",
              "REST APIs & Integrations",
              "Full Stack Engineering",
              "Performance Optimization",
            ].map((item) => (
              <div
                key={item}
                className="w-fit rounded-xl bg-gradient-to-r from-cyan-900/40 to-transparent py-3 px-6 text-sm md:text-base font-medium text-cyan-100 border border-cyan-500/10"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="timeline-container relative flex w-full flex-1 flex-col gap-8 border-l border-cyan-800/50 pl-6 sm:gap-10 sm:pl-8 md:pl-14">
          {/* Timeline Fill */}
          <div
            ref={timelineFillRef}
            className="absolute left-0 top-0 w-[2px] rounded-full bg-cyan-400"
            style={{ height: "0%" }}
          />

          {/* Moving Icon */}
          <div
            ref={iconRef}
            className="absolute top-0 -left-[18px] z-20 flex h-9 w-9 items-center justify-center rounded-full border-2 border-cyan-400 bg-slate-950 shadow-[0_0_20px_rgba(34,211,238,0.5)] sm:-left-[23px] sm:h-12 sm:w-12"
          >
            <Briefcase className="h-4 w-4 text-cyan-400 sm:h-5 sm:w-5" />
          </div>

          {experiences.map((item, index) => (
            <div
              key={item.id}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
            >
              <Tilt
                tiltMaxAngleX={5}
                tiltMaxAngleY={5}
                scale={1.01}
                transitionSpeed={400}
                glareEnable={false}
                className="relative"
              >
                <motion.div
                  whileHover={{
                    scale: 1.01,
                    y: -2,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 220,
                    damping: 18,
                  }}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-4 shadow-lg backdrop-blur-md transition-all duration-300 hover:border-cyan-400/30 hover:shadow-cyan-500/10 sm:p-6"
                >
                  {/* Glow */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.12),transparent_45%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  {/* Header */}
                  <div className="relative z-10 flex flex-col gap-4">
                    <div className="flex gap-3 sm:gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-cyan-500/20 bg-cyan-950/60 sm:h-14 sm:w-14">
                        <TerminalSquare className="h-5 w-5 text-cyan-300 sm:h-7 sm:w-7" />
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                          <h3 className="text-lg font-bold text-cyan-300 sm:text-xl md:text-2xl">
                            {item.role}
                          </h3>
                          <span className="inline-flex w-fit rounded-full border border-cyan-500/20 bg-cyan-950/70 px-3 py-1 text-xs font-semibold text-cyan-300 sm:text-sm">
                            {item.duration}
                          </span>
                        </div>

                        <p className="mt-1 text-base font-medium text-slate-100 sm:text-lg">
                          {item.company}
                        </p>

                        <div className="mt-3 flex flex-wrap gap-2">
                          <span className="rounded-full border border-cyan-500/20 bg-cyan-950/60 px-3 py-1 text-xs text-cyan-300">
                            {item.location}
                          </span>

                          <span className="rounded-full border border-fuchsia-500/20 bg-fuchsia-950/30 px-3 py-1 text-xs text-fuchsia-300">
                            {item.workMode}
                          </span>

                          <span className="rounded-full border border-orange-500/20 bg-orange-950/30 px-3 py-1 text-xs text-orange-300">
                            {item.jobType}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="relative z-10 mt-5">
                    <p className="text-sm leading-relaxed text-slate-300 sm:text-base">
                      {item.description}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div className="relative z-10 mt-5">
                    <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-cyan-400 sm:mb-3 sm:text-sm">
                      Technologies
                    </h4>

                    <div className="flex flex-wrap gap-2">
                      {item.technologies.map((tech: string, i: number) => (
                        <span
                          key={i}
                          className="rounded-lg border border-cyan-500/20 bg-cyan-950/40 px-2.5 py-1 text-xs text-cyan-100 sm:px-3 sm:py-1.5 sm:text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Projects */}
                  <div className="relative z-10 mt-5">
                    <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-fuchsia-400 sm:mb-3 sm:text-sm">
                      Highlight Projects
                    </h4>

                    <div className="flex flex-wrap gap-2">
                      {item.projects.map((project: string, i: number) => (
                        <span
                          key={i}
                          className="rounded-lg border border-fuchsia-500/20 bg-fuchsia-950/20 px-2.5 py-1 text-xs text-fuchsia-200 sm:px-3 sm:py-1.5 sm:text-sm"
                        >
                          {project}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </Tilt>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}