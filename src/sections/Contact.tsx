"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github } from "lucide-react";
import { SectionWrapper } from "@/components/SectionWrapper"; // adjust import path as needed
import { SectionHeader } from "@/components/SectionHeader";

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <SectionWrapper id="contact">
     <SectionHeader>Contact Me</SectionHeader>
      <div className="max-w-3xl mx-auto flex flex-col md:flex-row gap-12 items-center">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, type: "spring" }}
          viewport={{ once: true }}
          className="flex-1 space-y-6 text-center md:text-left"
        >
          <div className="flex flex-col gap-4 items-center md:items-start">
            <a
              href="mailto:lakshayverma544@gmail.com"
              className="flex items-center gap-2 text-lg text-purple-700 dark:text-purple-300 hover:underline"
            >
              <Mail className="w-5 h-5" /> lakshayverma544@gmail.com
            </a>
            <a
              href="https://linkedin.com/in/lakshay-verma-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-lg text-blue-700 dark:text-blue-300 hover:underline"
            >
              <Linkedin className="w-5 h-5" /> LinkedIn
            </a>
            <a
              href="https://github.com/lakshay-verma-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-lg text-gray-800 dark:text-gray-200 hover:underline"
            >
              <Github className="w-5 h-5" /> GitHub
            </a>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, type: "spring" }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="flex-1 bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8 space-y-6 w-full"
        >
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              required
              value={form.name}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-1">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              required
              rows={4}
              value={form.message}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-semibold hover:scale-105 transition-transform"
          >
            {submitted ? "Thank you! I'll get back to you." : "Send Message"}
          </button>
        </motion.form>
      </div>
    </SectionWrapper>
  );
}
