import { motion } from "framer-motion";

export function SectionHeader({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true }}
      className={`mb-8 text-center text-3xl font-extrabold leading-tight tracking-tight sm:mb-10 sm:text-4xl md:text-5xl ${className}`}
    >
      <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
        {children}
      </span>
    </motion.h2>
  );
}
