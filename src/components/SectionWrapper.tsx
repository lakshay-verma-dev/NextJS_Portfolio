import { motion, Variants } from "framer-motion";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94], // smooth spring-like easing
    },
  },
};

export function SectionWrapper({
  children,
  id,
  className = "",
}: {
  children: React.ReactNode;
  id: string;
  className?: string;
}) {
  return (
    <motion.section
      id={id}
      variants={fadeInUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className={`py-16 px-4 sm:px-6 lg:px-12 w-full max-w-[90rem] mx-auto ${className}`}
    >
      {children}
    </motion.section>
  );
}
