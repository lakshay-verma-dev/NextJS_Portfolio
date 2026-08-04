"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

export type Project = {
  id: string;
  title: string;
  description: string;
  detailedInfo: {
    overview: string;
    features: string[];
    challenges: string[];
    learnings: string[];
    role: string;
    duration: string;
    impact?: string;
  };
  tech: string[];
  github?: string;
  live?: string;
  tag?: string;
  type?: "personal" | "company";
};

interface ProjectCardProps {
  project: Project;
  idx: number;
  onViewDetails: () => void;
}

export function ProjectCard({ project, idx, onViewDetails }: ProjectCardProps) {
  const isPersonal = project.type === "personal";

  const tagStyles =
    project.tag === "In Progress"
      ? "bg-amber-500/15 text-amber-200 border-amber-400/40"
      : project.tag === "Complete"
        ? "bg-emerald-500/15 text-emerald-200 border-emerald-400/40"
        : "bg-cyan-500/15 text-cyan-200 border-cyan-400/40";

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: Math.min(idx * 0.08, 0.4) }}
      viewport={{ once: true }}
      className="group flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.04] p-5 shadow-[0_8px_32px_rgba(0,0,0,0.25)] backdrop-blur-md transition-all duration-300 hover:border-cyan-400/30 hover:bg-white/[0.07] sm:p-6"
    >
      <div className="mb-3 flex items-start justify-between gap-3">
        <h3 className="text-lg font-semibold leading-snug text-white sm:text-xl">
          {project.title}
        </h3>
        {project.tag && (
          <span
            className={`shrink-0 rounded-full border px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide sm:text-xs ${tagStyles}`}
          >
            {project.tag}
          </span>
        )}
      </div>

      <p className="mb-4 line-clamp-3 text-sm leading-relaxed text-slate-300">
        {project.description}
      </p>

      <div className="mb-4 flex flex-wrap gap-2">
        {project.tech.slice(0, 5).map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-purple-400/20 bg-purple-500/10 px-2.5 py-1 text-[11px] text-purple-200 sm:text-xs"
          >
            {tech}
          </span>
        ))}
        {project.tech.length > 5 && (
          <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] text-slate-400">
            +{project.tech.length - 5}
          </span>
        )}
      </div>

      <div className="mt-auto flex flex-wrap items-center gap-4 text-sm">
        {project.live ? (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-cyan-300 transition-colors hover:text-cyan-200"
          >
            <ExternalLink className="h-4 w-4" /> Live
          </a>
        ) : isPersonal ? (
          <span className="text-slate-500 italic">Live soon</span>
        ) : null}

        {project.github ? (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-slate-200 transition-colors hover:text-white"
          >
            <Github className="h-4 w-4" /> GitHub
          </a>
        ) : isPersonal ? (
          <span className="text-slate-500 italic">GitHub soon</span>
        ) : null}
      </div>

      <button
        onClick={onViewDetails}
        className="mt-5 w-full rounded-xl border border-cyan-400/30 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 py-3 text-xs font-semibold uppercase tracking-[0.15em] text-white transition-all duration-300 hover:border-cyan-300/50 hover:from-cyan-500/30 hover:to-purple-500/30 hover:shadow-[0_0_24px_rgba(34,211,238,0.15)]"
      >
        View Details
      </button>
    </motion.div>
  );
}
