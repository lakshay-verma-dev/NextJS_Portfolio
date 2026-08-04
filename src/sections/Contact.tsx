"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Phone, MapPin } from "lucide-react";
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

  const contactLinks = [
    {
      href: "mailto:lakshayverma544@gmail.com",
      icon: Mail,
      label: "lakshayverma544@gmail.com",
      color: "text-purple-300",
    },
    {
      href: "tel:+917015698733",
      icon: Phone,
      label: "+91 7015698733",
      color: "text-emerald-300",
    },
    {
      href: undefined,
      icon: MapPin,
      label: "Yamunanagar, Haryana",
      color: "text-slate-300",
    },
    {
      href: "https://linkedin.com/in/lakshay-verma-dev",
      icon: Linkedin,
      label: "LinkedIn",
      color: "text-blue-300",
    },
    {
      href: "https://github.com/lakshay-verma-dev",
      icon: Github,
      label: "GitHub",
      color: "text-slate-200",
    },
  ];

  const inputClass =
    "w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none transition focus:border-cyan-400/40 focus:ring-2 focus:ring-cyan-400/20";

  return (
    <SectionWrapper id="contact">
      <SectionHeader>Contact Me</SectionHeader>

      <div className="grid w-full gap-8 lg:grid-cols-5 lg:gap-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="lg:col-span-2"
        >
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-md sm:p-6">
            <p className="mb-5 text-sm leading-relaxed text-slate-300 sm:text-base">
              Open to opportunities, collaborations, and freelance work. Reach
              out anytime.
            </p>
            <div className="flex flex-col gap-3">
              {contactLinks.map(({ href, icon: Icon, label, color }) => {
                const content = (
                  <>
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5">
                      <Icon className={`h-4 w-4 ${color}`} />
                    </span>
                    <span className="truncate text-sm text-slate-200 sm:text-base">
                      {label}
                    </span>
                  </>
                );

                if (!href) {
                  return (
                    <div
                      key={label}
                      className="flex items-center gap-3 rounded-xl border border-transparent px-1 py-1"
                    >
                      {content}
                    </div>
                  );
                }

                return (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-3 rounded-xl border border-transparent px-1 py-1 transition hover:border-white/10 hover:bg-white/5"
                  >
                    {content}
                  </a>
                );
              })}
            </div>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="space-y-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-md sm:p-6 lg:col-span-3"
        >
          {submitted && (
            <div className="rounded-xl border border-emerald-400/30 bg-emerald-500/10 p-3 text-sm text-emerald-200">
              Message sent successfully!
            </div>
          )}
          {error && (
            <div className="rounded-xl border border-red-400/30 bg-red-500/10 p-3 text-sm text-red-200">
              Failed to send message. Please try again.
            </div>
          )}

          <div>
            <label htmlFor="name" className="mb-1.5 block text-sm text-slate-300">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              required
              value={form.name}
              onChange={handleChange}
              className={inputClass}
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="mb-1.5 block text-sm text-slate-300">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              value={form.email}
              onChange={handleChange}
              className={inputClass}
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label htmlFor="message" className="mb-1.5 block text-sm text-slate-300">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              required
              rows={4}
              value={form.message}
              onChange={handleChange}
              className={`${inputClass} resize-y min-h-[120px]`}
              placeholder="How can I help?"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 py-3.5 text-sm font-semibold text-white transition hover:opacity-95 ${
              loading ? "cursor-not-allowed opacity-70" : "hover:shadow-[0_0_24px_rgba(124,58,237,0.35)]"
            }`}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </motion.form>
      </div>
    </SectionWrapper>
  );
}
