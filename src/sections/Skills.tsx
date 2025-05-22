"use client";

import { SectionWrapper } from "@/components/SectionWrapper";
import { SectionHeader } from "@/components/SectionHeader";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
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

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
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
        className="max-w-7xl mx-auto px-6 grid gap-20"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {skillCategories.map((category, index) => (
          <motion.div
            key={category.title}
            className="p-6 rounded-3xl border-2 border-cyan-600/20  from-cyan-900/30 to-cyan-800/10 shadow-lg"
            variants={cardVariants}
            custom={index}
          >
            <h3 className="text-3xl font-semibold text-center mb-8 text-cyan-300 uppercase tracking-widest">
              {category.title}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {category.skills.map(({ name, icon: Icon }, idx) => (
                <Tilt
                  key={idx}
                  tiltMaxAngleX={10}
                  tiltMaxAngleY={10}
                  scale={1.05}
                  transitionSpeed={400}
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 1 }}
                    className="bg-cyan-900/30 backdrop-blur-md p-4 rounded-xl flex flex-col items-center justify-center gap-2 border border-cyan-500/20 shadow-cyan-400/10 shadow-md hover:shadow-cyan-500/30 transition-all duration-300 group"
                  >
                    <motion.div
                      className="text-5xl text-cyan-300 group-hover:animate-pulse"
                      animate={{ y: [0, -4, 0] }}
                      transition={{
                        repeat: Infinity,
                        duration: 2,
                        ease: "easeInOut",
                        delay: idx * 0.05,
                      }}
                    >
                      <Icon />
                    </motion.div>
                    <span className="text-xs sm:text-sm text-white text-center font-light">
                      {name}
                    </span>
                  </motion.div>
                </Tilt>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
