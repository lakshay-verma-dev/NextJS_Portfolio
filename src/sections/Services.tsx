"use client";

import { motion } from "framer-motion";

export function Services() {
  const services = [
    {
      title: "Web Development",
      description: "Building responsive and scalable web applications using modern technologies.",
    },
    {
      title: "UI/UX Design",
      description: "Designing user-friendly interfaces and experiences for web and mobile.",
    },
    {
      title: "Freelancing",
      description: "Available for freelance projects and collaborations.",
    },
  ];

  return (
    <section id="services" className="py-20">
      <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
        My Services
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {services.map((service, idx) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8 hover:scale-105 transition-transform"
          >
            <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
            <p className="text-gray-600 dark:text-gray-400">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
