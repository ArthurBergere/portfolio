import TechList from "../../components/ui/CustomList";
import { motion } from "framer-motion";

interface ExperienceItemProps {
  role: string;
  company: string;
  companyUrl?: string;
  duration: string;
  period: string;
  city?: string;              
  technologies: string[];
}
  
export default function ExperienceItem({
  role,
  company,
  companyUrl,
  duration,
  period,
  city,
  technologies,
}: ExperienceItemProps) {
  return (
    <motion.div
      className="space-y-3"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <h3 className="text-lg font-semibold text-gray-900">
        {role}{" "}
        <a
          href={companyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          @ {company}
        </a>
      </h3>

      <div className="flex flex-wrap gap-4 items-center text-sm font-mono text-gray-600">
        <span>{duration} — {period}</span>
        {city && (
          <span className="flex items-center text-gray-500">
            <span className="mr-1">📍</span> {city}
          </span>
        )}
      </div>

      <TechList items={technologies} />
    </motion.div>
  );
}