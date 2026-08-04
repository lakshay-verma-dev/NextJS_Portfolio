"use client";

import { useState } from "react";
import { ProjectCard, Project } from "@/components/ProjectCard";
import { ProjectDetail } from "@/components/ProjectDetail";
import { SectionWrapper } from "@/components/SectionWrapper";
import { SectionHeader } from "@/components/SectionHeader";
import { personalProjects, companyProjects } from "@/assets/Projects";

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const openDetail = (project: Project) => {
    setSelectedProject(project);
  };

  const closeDetail = () => {
    setSelectedProject(null);
  };

  return (
    <SectionWrapper id="projects">
      <SectionHeader>Projects</SectionHeader>

      <div className="mb-12 sm:mb-16">
        <h3 className="mb-5 text-center text-lg font-semibold text-slate-200 sm:mb-6 sm:text-left sm:text-xl">
          Personal Projects
        </h3>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {personalProjects.map((project, idx) => (
            <ProjectCard
              key={project.id}
              project={project}
              idx={idx}
              onViewDetails={() => openDetail(project)}
            />
          ))}
        </div>
      </div>

      <div>
        <h3 className="mb-5 text-center text-lg font-semibold text-slate-200 sm:mb-6 sm:text-left sm:text-xl">
          Work Projects
        </h3>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {companyProjects.map((project, idx) => (
            <ProjectCard
              key={project.id}
              project={project}
              idx={idx}
              onViewDetails={() => openDetail(project)}
            />
          ))}
        </div>
      </div>

      {selectedProject && (
        <ProjectDetail project={selectedProject} onClose={closeDetail} />
      )}
    </SectionWrapper>
  );
}
