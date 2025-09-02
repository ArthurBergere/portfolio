import { motion } from "framer-motion";

interface SectionTitleProps {
  number: string;
  title: string;
}

export default function SectionTitle({ number, title }: SectionTitleProps) {
  return (
    <div className="flex items-center gap-4 mb-8">
      <motion.span
        className="text-blue-600 font-mono text-lg"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
      >
        {number}
      </motion.span>
      <motion.h2
        className="text-2xl font-bold text-gray-900"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        {title}
      </motion.h2>
      <motion.div
        className="h-[1px] flex-1 bg-gray-300"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      />
    </div>
  );
}
