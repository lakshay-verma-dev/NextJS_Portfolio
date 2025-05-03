import { motion } from "framer-motion";

export function SectionHeader({ children }: { children: React.ReactNode }) {
  return (
    <motion.h2
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, type: "spring" }}
      viewport={{ once: true }}
      className="text-3xl md:text-4xl font-extrabold text-center mb-12 bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent"
    >
      {children}
    </motion.h2>
  );
} 