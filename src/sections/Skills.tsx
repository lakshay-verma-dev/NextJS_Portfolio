"use client";

import { SectionWrapper } from "@/components/SectionWrapper";
import { SectionHeader } from "@/components/SectionHeader";
import { motion } from "framer-motion";
import {
  SiReact,
  SiVuedotjs,
  SiTypescript,
  SiRedux,
  SiTailwindcss,
  SiBootstrap,
  SiNodedotjs,
  SiExpress,
  SiPython,
  SiFastapi,
  SiNextdotjs,
  SiMongodb,
  SiPostgresql,
  SiDuckdb,
  SiMysql,
  SiGit,
  SiGithub,
  SiPostman,
  SiCplusplus,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { IconType } from "react-icons";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

interface Skill {
  name: string;
  icon: IconType;
}

export function Skills() {
  const skillCategories: { title: string; skills: Skill[] }[] = [
    {
      title: "Frontend",
      skills: [
        { name: "React.js", icon: SiReact },
        { name: "Next.js", icon: SiNextdotjs },
        { name: "Vue.js", icon: SiVuedotjs },
        { name: "TypeScript", icon: SiTypescript },
        { name: "Redux Toolkit", icon: SiRedux },
        { name: "Tailwind CSS", icon: SiTailwindcss },
        { name: "Bootstrap", icon: SiBootstrap },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", icon: SiNodedotjs },
        { name: "Express.js", icon: SiExpress },
        { name: "Python", icon: SiPython },
        { name: "FastAPI", icon: SiFastapi },
      ],
    },
    {
      title: "Databases",
      skills: [
        { name: "MongoDB", icon: SiMongodb },
        { name: "PostgreSQL", icon: SiPostgresql },
        { name: "DuckDB", icon: SiDuckdb },
        { name: "MySQL", icon: SiMysql },
      ],
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git", icon: SiGit },
        { name: "GitHub", icon: SiGithub },
        { name: "Postman", icon: SiPostman },
        { name: "AWS EC2", icon: FaAws },
        { name: "RESTful APIs", icon: SiPostman },
        { name: "C++", icon: SiCplusplus },
      ],
    },
  ];

  return (
    <SectionWrapper id="skills">
      <SectionHeader>My Skill Set</SectionHeader>
      <motion.div
        className="max-w-6xl mx-auto px-4 grid gap-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {skillCategories.map((category, index) => (
          <motion.div
            key={category.title}
            className="p-6 rounded-2xl shadow-md border"
            initial="hidden"
            animate="show"
            variants={cardVariants}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-6 uppercase tracking-wide">
              {category.title}
            </h3>
            <motion.div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {category.skills.map(({ name, icon: Icon }, idx) => (
                <motion.div
                  key={idx}
                  className="p-4 rounded-xl flex flex-col items-center justify-center gap-2 hover:scale-105 hover:shadow-cyan-500/30 transition-all duration-300 border"
                  variants={cardVariants}
                >
                  <Icon className="text-4xl text-cyan-400" />
                  <span className="text-sm text-white tracking-wide text-center">
                    {name}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
