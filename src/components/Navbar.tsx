// src/components/Navbar.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "services", label: "Services" },
  { id: "contact", label: "Contact" },
];

const Navbar = () => {
  const [active, setActive] = useState("home");

  const scrollTo = (id: string) => {
    setActive(id);
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 w-full z-50 bg-white dark:bg-black shadow-md"
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">MyPortfolio</h1>
        <ul className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => scrollTo(link.id)}
                className={`text-sm font-medium hover:text-blue-500 transition-all duration-200 ${
                  active === link.id
                    ? "text-blue-600 underline"
                    : "text-gray-700 dark:text-gray-300"
                }`}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;
