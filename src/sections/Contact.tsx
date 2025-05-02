"use client";

import { motion } from "framer-motion";

export function Contact() {
  return (
    <section id="contact" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
          I&apos;m always open to new opportunities and collaborations.
        </p>
        <a
          href="mailto:your.email@example.com"
          className="px-8 py-4 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors inline-block"
        >
          Send me an email
        </a>
      </motion.div>
    </section>
  );
}
