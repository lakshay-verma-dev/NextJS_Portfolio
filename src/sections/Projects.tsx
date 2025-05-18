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
      <div className="max-w-6xl mx-auto px-6 py-12">
        <SectionHeader>Projects</SectionHeader>

        {/* Personal Projects */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-100">
            Personal Projects
          </h3>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mb-12">
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

        {/* Company Projects */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-100">
            Work Projects
          </h3>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
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
      </div>
    </SectionWrapper>
  );
}
