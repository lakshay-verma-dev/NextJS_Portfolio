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
          I&apos;m always open to new opportunities and collaborations. Feel free to reach out!
        </p>
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          <a
            href="mailto:lakshayverma544@gmail.com"
            className="px-8 py-4 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors inline-block"
          >
            Send me an email
          </a>
          <a
            href="https://linkedin.com/in/yourprofile" // Replace with your LinkedIn profile
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors inline-block"
          >
            LinkedIn Profile
          </a>
          <a
            href="https://github.com/yourusername" // Replace with your GitHub profile
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors inline-block"
          >
            GitHub Profile
          </a>
        </div>
      </motion.div>
    </section>
  );
}
