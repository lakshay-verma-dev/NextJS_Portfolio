"use client";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { SectionWrapper } from "@/components/SectionWrapper";

export function Projects() {
  const projects = [
    {
      title: "Personal Portfolio Website",
      description:
        "My own responsive, animated portfolio built with Next.js, Tailwind CSS, Framer Motion, and shadcn/ui.",
      tech: ["Next.js", "React", "Tailwind CSS", "Framer Motion", "shadcn/ui"],
      github: "https://github.com/lakshay-verma-dev/your-portfolio-repo",
      live: "https://your-portfolio-domain.com",
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
      github: "https://github.com/lakshay-verma-dev/inventory-hub",
      live: "https://inventory-hub.com",
    },
  ];

  return (
    <SectionWrapper id="projects" >
      <h2 className="text-3xl font-bold mb-12 text-center bg-clip-text text-transparent">
        My Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, idx) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-xl h-full flex flex-col p-6"
          >
            <div className="mb-4">
              <h3 className="text-xl font-bold">{project.title}</h3>
            </div>
            <div className="mb-4 text-gray-600 dark:text-gray-400">
              {project.description}
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 rounded-full text-xs"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-4 mt-auto">
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-blue-600 hover:underline"
                >
                  <ExternalLink className="w-4 h-4" /> Live
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-gray-800 dark:text-gray-200 hover:underline"
                >
                  <Github className="w-4 h-4" /> GitHub
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
