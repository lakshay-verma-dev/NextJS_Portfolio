"use client";

import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
        <div className="prose dark:prose-invert max-w-none">
          <p className="text-lg text-gray-600 dark:text-gray-400">
            I&apos;m a passionate software developer with a focus on creating intuitive and efficient web applications. 
            My journey in software development started with [your background], and I&apos;ve since worked on various projects 
            that have helped me develop a strong foundation in modern web technologies.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
