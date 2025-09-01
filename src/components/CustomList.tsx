import { motion } from "framer-motion";

interface TechListProps {
  items: string[];
}

export default function TechList({ items }: TechListProps) {
  return (
    <ul className="grid grid-cols-2 gap-2 mt-4 font-mono text-sm text-gray-700">
      {items.map((tech, i) => (
        <motion.li
          key={tech}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.1, duration: 0.3 }}
          className="before:content-['▹'] before:text-blue-600 before:mr-2"
        >
          {tech}
        </motion.li>
      ))}
    </ul>
  );
}
