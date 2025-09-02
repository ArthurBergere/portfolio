import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import type { WorkProject } from "../../data/work";

interface WorkItemProps {
  project: WorkProject;
  reversed?: boolean; // permet d’alterner gauche/droite
}

export default function WorkItem({ project, reversed }: WorkItemProps) {
  return (
    <motion.div
      className={`grid md:grid-cols-2 items-center gap-8 mb-20 ${
        reversed ? "md:flex-row-reverse" : ""
      }`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {/* Image */}
      <div className="relative overflow-hidden rounded-2xl shadow-lg">
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Content */}
      <div className="text-left">
        <h3 className="text-2xl font-bold mb-4 text-gray-900">{project.name}</h3>
        <p className="text-gray-600 mb-4">{project.description}</p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-lg font-mono"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-4">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-blue-600 hover:underline"
            >
              <Github size={18} /> Code
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-blue-600 hover:underline"
            >
              <ExternalLink size={18} /> Live
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
