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
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
      viewport={{ once: true }}
      className={`text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-center leading-tight mb-12 bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent ${className}`}
    >
      {children}
    </motion.h2>
  );
}
