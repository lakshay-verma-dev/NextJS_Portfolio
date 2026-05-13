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
        className="container mx-auto flex flex-col gap-14 lg:flex-row mt-14"
      >
        {/* Left Side */}
        <div
          ref={storyRef}
          className="flex-1 text-center lg:text-left z-10"
        >
          <h2
            ref={h2Ref}
            className="text-[32px] leading-tight font-bold text-white md:text-[52px]"
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
            className="my-8 text-slate-300 text-lg leading-relaxed"
          >
            Over the years, I&apos;ve had the opportunity to work with amazing teams
            and build scalable applications.
          </p>

          <p
            ref={textRef2}
            className="mb-5 text-[14px] font-extrabold text-cyan-500 uppercase tracking-widest"
          >
            Core competencies include:
          </p>

          <div className="flex flex-col gap-3 lg:-ms-4" ref={statsRef}>
            {[
              "Frontend Architecture",
              "Full Stack Engineering",
              "Performance Optimization",
              "State Management",
              "Agile Development",
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
        <div className="timeline-container relative flex w-full flex-1 flex-col gap-12 pl-8 md:pl-14 border-l border-cyan-800/50">
          {/* Timeline Fill */}
          <div
            ref={timelineFillRef}
            className="absolute left-0 top-0 w-[2px] bg-cyan-400 rounded-full"
            style={{ height: "0%" }}
          />

          {/* Moving Icon */}
          <div
            ref={iconRef}
            className="absolute top-0 -left-[23px] z-20 flex h-12 w-12 items-center justify-center rounded-full border-2 border-cyan-400 bg-slate-950 shadow-[0_0_20px_rgba(34,211,238,0.5)]"
          >
            <Briefcase className="h-5 w-5 text-cyan-400" />
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
                    scale: 1.015,
                    y: -4,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 220,
                    damping: 18,
                  }}
                  className="group relative overflow-hidden rounded-2xl border border-cyan-500/20 bg-cyan-900/20 backdrop-blur-md p-6 shadow-lg transition-all duration-300 hover:border-cyan-400/30 hover:shadow-cyan-500/20"
                >
                  {/* Glow */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.12),transparent_45%)]" />

                  {/* Header */}
                  <div className="relative z-10 flex flex-col gap-5 sm:flex-row sm:justify-between">
                    <div className="flex gap-4 w-full">
                      <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-cyan-500/20 bg-cyan-950/60">
                        <TerminalSquare className="h-7 w-7 text-cyan-300" />
                      </div>

                      <div className="w-full">
                        <div className="flex flex-wrap items-center gap-2 justify-between">
                          <h3 className="text-xl md:text-2xl font-bold text-cyan-300">
                            {item.role}
                          </h3>
                          <div>
                            <span className="inline-block rounded-full border border-cyan-500/20 bg-cyan-950/70 px-4 py-2 text-sm font-semibold text-cyan-300">
                              {item.duration}
                            </span>
                          </div>
                        </div>

                        <p className="mt-1 text-lg font-medium text-slate-100">
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
                  <div className="relative z-10 mt-6">
                    <p className="text-slate-300 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div className="relative z-10 mt-6">
                    <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-cyan-400">
                      Technologies
                    </h4>

                    <div className="flex flex-wrap gap-2">
                      {item.technologies.map((tech: string, i: number) => (
                        <span
                          key={i}
                          className="rounded-lg border border-cyan-500/20 bg-cyan-950/40 px-3 py-1.5 text-sm text-cyan-100"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Projects */}
                  <div className="relative z-10 mt-6">
                    <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-fuchsia-400">
                      Highlight Projects
                    </h4>

                    <div className="flex flex-wrap gap-2">
                      {item.projects.map((project: string, i: number) => (
                        <span
                          key={i}
                          className="rounded-lg border border-fuchsia-500/20 bg-fuchsia-950/20 px-3 py-1.5 text-sm text-fuchsia-200"
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