"use client";

import { motion } from "framer-motion";

export function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React.js", "Vue.js", "TypeScript", "Redux Toolkit", "Tailwind CSS", "React Bootstrap"]
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express.js", "Python", "FastAPI"]
    },
    {
      title: "Databases",
      skills: ["MongoDB", "PostgreSQL", "DuckDB", "SQL", "NoSQL"]
    },
    {
      title: "Tools & Others",
      skills: ["Git", "GitHub", "Postman", "AWS EC2", "RESTful APIs", "C++ (OOPS)"]
    }
  ];

  return (
    <section id="skills" className="py-20">
      <h2 className="text-3xl font-bold mb-12 text-center">Skills</h2>
      <div className="max-w-6xl mx-auto">
        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {category.skills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-lg p-4 text-center shadow-lg"
                >
                  {skill}
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
