"use client";

import { useState } from "react";
import { ProjectCard, Project } from "@/components/ProjectCard";
import { ProjectDetail } from "@/components/ProjectDetail";

const projects: Project[] = [
  {
    title: "Personal Portfolio Website",
    description:
      "My own responsive, animated portfolio built with Next.js, Tailwind CSS, Framer Motion, and shadcn/ui.",
    tech: ["Next.js", "React", "Tailwind CSS", "Framer Motion", "shadcn/ui"],
    github: "https://github.com/lakshay-verma-dev/NextJS_Portfolio",
    live: "https://lakshayverma-portfolio.vercel.app",
  },
  {
    title: "Trade Monitoring Software",
    description:
      "Real-time options market data, trade notifications, and role-based dashboards.",
    tech: [
      "React",
      "Redux",
      "Python",
      "FastAPI",
      "Bootstrap",
      "PostgreSQL",
      "AWS EC2",
    ],
    github: "",
    live: "",
    tag: "Work",
  },
  {
    title: "Book Inventory Management System",
    description:
      "Seamless book buying, selling, and management with secure authentication and payments.",
    tech: [
      "React.js",
      "Redux Toolkit",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Stripe",
    ],
    github: "https://github.com/Lakshay-22/Book-Inventory-Management",
    live: "",
  },
];

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const openDetail = (project: Project) => {
    setSelectedProject(project);
  };

  const closeDetail = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-4xl font-bold mb-10 text-center text-gray-900 dark:text-white">
        Projects
      </h2>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, idx) => (
          <ProjectCard
            key={project.title}
            project={project}
            idx={idx}
            onViewDetails={() => openDetail(project)}
          />
        ))}
      </div>

      {selectedProject && (
        <ProjectDetail project={selectedProject} onClose={closeDetail} />
      )}
    </section>
  );
}
