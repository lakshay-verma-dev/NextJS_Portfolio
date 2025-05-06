"use client";
import { SectionWrapper } from "@/components/SectionWrapper";
import { SectionHeader } from "@/components/SectionHeader";
import { motion } from "framer-motion";
import {
  SiReact, SiVuedotjs, SiTypescript, SiRedux, SiTailwindcss, SiBootstrap,
  SiNodedotjs, SiExpress, SiPython, SiFastapi,
  SiMongodb, SiPostgresql, SiDuckdb, SiMysql,
  SiGit, SiGithub, SiPostman, SiCplusplus
} from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { IconType } from "react-icons";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.9 },
  show: { opacity: 1, y: 0, scale: 1 },
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
        { name: "Vue.js", icon: SiVuedotjs },
        { name: "TypeScript", icon: SiTypescript },
        { name: "Redux Toolkit", icon: SiRedux },
        { name: "Tailwind CSS", icon: SiTailwindcss },
        { name: "React Bootstrap", icon: SiBootstrap },
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
        { name: "SQL", icon: SiMysql },
        { name: "NoSQL", icon: SiMongodb },
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
        { name: "C++ (OOPS)", icon: SiCplusplus },
      ],
    },
  ];

  return (
    <SectionWrapper id="skills">
      <SectionHeader>My Skill Set</SectionHeader>
      <motion.div
        className="max-w-7xl mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={category.title}
            className="mb-16"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-semibold mb-8 text-center text-cyan-400 tracking-wide uppercase">
              {category.title}
            </h3>
            <motion.div
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {category.skills.map(({ name, icon: Icon }, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  className="rounded-2xl p-5 text-center border border-cyan-500/20 bg-black/30 dark:bg-zinc-900/40 
                    backdrop-blur-md shadow-lg hover:shadow-cyan-500/30 transition duration-300 
                    text-white hover:scale-105 transform flex flex-col items-center space-y-3"
                >
                  <Icon className="text-4xl text-cyan-400" />
                  <span className="text-sm tracking-wider">{name}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
