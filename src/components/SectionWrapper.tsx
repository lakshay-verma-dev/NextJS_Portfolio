import { motion } from "framer-motion";

export function SectionWrapper({ children, id }: { children: React.ReactNode, id: string }) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 60, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.7, type: "spring" }}
      viewport={{ once: true, amount: 0.3 }}
      className="py-20"
    >
      {children}
    </motion.section>
  );
} 