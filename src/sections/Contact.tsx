"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github } from "lucide-react";
import { SectionWrapper } from "@/components/SectionWrapper";
import { SectionHeader } from "@/components/SectionHeader";
import emailjs from "emailjs-com";

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    setSubmitted(false);

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          name: form.name,
          email: form.email,
          message: form.message,
          subject: `Contact Us: Portfolio Inquiry from ${form.name}`,
          time: new Date().toLocaleString(),
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setSubmitted(true);
        setForm({ name: "", email: "", message: "" });
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => setLoading(false));
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
              href="mailto:lakshayverma.dev@gmail.com"
              className="flex items-center gap-2 text-lg text-purple-700 dark:text-purple-300 hover:underline"
            >
              <Mail className="w-5 h-5" /> lakshayverma.dev@gmail.com
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
          {submitted && (
            <div className="p-3 text-sm rounded bg-green-100 text-green-800 border border-green-300">
              ✅ Message sent successfully!
            </div>
          )}
          {error && (
            <div className="p-3 text-sm rounded bg-red-100 text-red-800 border border-red-300">
              ❌ Failed to send message. Please try again.
            </div>
          )}

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

          {/* Submit Button */}
          <motion.button
            type="submit"
            whileHover={{
              boxShadow: "0px 0px 16px rgba(124, 58, 237, 0.6)",
              transition: { type: "spring", stiffness: 300 },
            }}
            whileTap={{ scale: 0.95 }}
            disabled={loading}
            className={`w-full py-3 bg-gradient-to-r cursor-pointer from-purple-600 to-blue-600 text-white rounded-lg font-semibold transition-transform ${
              loading ? "opacity-70 cursor-not-allowed" : "hover:scale-105"
            }`}
          >
            {loading ? (
              <div className="flex items-center justify-center gap-2">
                <span className="spinner-border inline-block w-4 h-4 border-2 border-t-transparent border-white rounded-full animate-spin"></span>
                Sending...
              </div>
            ) : (
              "Send Message"
            )}
          </motion.button>
        </motion.form>
      </div>
    </SectionWrapper>
  );
}
