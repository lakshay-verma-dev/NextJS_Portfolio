"use client";

import { SectionWrapper } from "@/components/SectionWrapper";
import { SectionHeader } from "@/components/SectionHeader";
import { motion } from "framer-motion";
import {
  SiReact,
  SiTypescript,
  SiRedux,
  SiTailwindcss,
  SiBootstrap,
  SiNodedotjs,
  SiExpress,
  SiPython,
  SiNextdotjs,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiGit,
  SiGithub,
  SiPostman,
  SiCplusplus,
  SiShopify,
  SiBitbucket,
  SiCloudflare,
} from "react-icons/si";
import { FaAws, FaCode } from "react-icons/fa";
import { IconType } from "react-icons";

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
        { name: "TypeScript", icon: SiTypescript },
        { name: "Redux Toolkit", icon: SiRedux },
        { name: "Tailwind CSS", icon: SiTailwindcss },
        { name: "Bootstrap", icon: SiBootstrap },
      ],
    },
    {
      title: "E-Commerce",
      skills: [
        { name: "Shopify", icon: SiShopify },
        { name: "Liquid Templating", icon: FaCode },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", icon: SiNodedotjs },
        { name: "Express.js", icon: SiExpress },
        { name: "Python / FastAPI", icon: SiPython },
        { name: "RESTful APIs", icon: SiPostman },
      ],
    },
    {
      title: "Databases",
      skills: [
        { name: "MongoDB", icon: SiMongodb },
        { name: "PostgreSQL", icon: SiPostgresql },
        { name: "MySQL", icon: SiMysql },
      ],
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git", icon: SiGit },
        { name: "GitHub", icon: SiGithub },
        { name: "Bitbucket", icon: SiBitbucket },
        { name: "Postman", icon: SiPostman },
        { name: "Cloudflare", icon: SiCloudflare },
        { name: "AWS EC2", icon: FaAws },
        { name: "C++ (OOPS)", icon: SiCplusplus },
      ],
    },
  ];

  return (
    <SectionWrapper id="skills">
      <SectionHeader>My Skill Set</SectionHeader>

      <div className="grid w-full gap-6 sm:gap-8">
        {skillCategories.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: index * 0.05 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 shadow-[0_8px_32px_rgba(0,0,0,0.2)] backdrop-blur-md sm:p-6"
          >
            <h3 className="mb-4 text-center text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300 sm:mb-5 sm:text-base">
              {category.title}
            </h3>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 lg:grid-cols-6">
              {category.skills.map(({ name, icon: Icon }) => (
                <div
                  key={name}
                  className="flex flex-col items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] p-3 transition-all duration-300 hover:border-cyan-400/30 hover:bg-cyan-500/10 sm:p-4"
                >
                  <Icon className="text-3xl text-cyan-300 sm:text-4xl" />
                  <span className="text-center text-[11px] leading-tight text-slate-200 sm:text-sm">
                    {name}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
