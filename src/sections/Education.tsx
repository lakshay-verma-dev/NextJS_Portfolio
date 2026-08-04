"use client";

import { SectionWrapper } from "@/components/SectionWrapper";
import { SectionHeader } from "@/components/SectionHeader";
import { education } from "@/assets/Education";
import { motion } from "framer-motion";
import { GraduationCap, MapPin, CalendarDays } from "lucide-react";

export function Education() {
  return (
    <SectionWrapper id="education">
      <SectionHeader>Education</SectionHeader>

      <div className="relative w-full">
        {/* Timeline line */}
        <div
          className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-cyan-400/60 via-purple-500/40 to-transparent sm:left-1/2 sm:-translate-x-px"
          aria-hidden
        />

        <div className="space-y-8 sm:space-y-10">
          {education.map((item, index) => {
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                viewport={{ once: true, amount: 0.3 }}
                className={`relative flex flex-col sm:flex-row ${
                  isLeft ? "sm:justify-start" : "sm:justify-end"
                }`}
              >
                {/* Marker */}
                <div className="absolute left-4 top-6 z-10 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border border-cyan-400/50 bg-slate-950 shadow-[0_0_16px_rgba(34,211,238,0.35)] sm:left-1/2">
                  <GraduationCap className="h-4 w-4 text-cyan-300" />
                </div>

                {/* Card */}
                <div
                  className={`ml-12 w-auto sm:ml-0 sm:w-[calc(50%-1.75rem)] ${
                    isLeft ? "sm:mr-auto sm:pr-2" : "sm:ml-auto sm:pl-2"
                  }`}
                >
                  <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-5 shadow-[0_8px_32px_rgba(0,0,0,0.25)] backdrop-blur-md transition-all duration-300 hover:border-cyan-400/30 hover:bg-white/[0.07] hover:shadow-cyan-500/10 sm:p-6">
                    <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.1),transparent_55%)]" />

                    <div className="relative z-10">
                      <span className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-cyan-500/25 bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-300">
                        <CalendarDays className="h-3.5 w-3.5" />
                        {item.duration}
                      </span>

                      <h3 className="text-lg font-semibold leading-snug text-white sm:text-xl">
                        {item.degree}
                      </h3>

                      <p className="mt-2 flex items-start gap-2 text-sm text-slate-300 sm:text-base">
                        <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-purple-300" />
                        <span>{item.institution}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
