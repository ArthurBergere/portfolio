import type { Project } from "../../data/Project";
import { Github } from "lucide-react";

interface ProjectRowProps {
  project: Project;
}

export default function ProjectRow({ project }: ProjectRowProps) {
  return (
    <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
      <td className="px-4 py-3 font-medium text-gray-800">{project.name}</td>
      <td className="px-4 py-3 text-gray-600">{project.description}</td>
      <td className="px-4 py-3">
        <div className="flex gap-2 flex-wrap">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-xs rounded-lg bg-gray-100 text-gray-700 font-mono"
            >
              {tech}
            </span>
          ))}
        </div>
      </td>
      <td className="px-4 py-3 text-gray-600">{project.year}</td>
      <td className="px-4 py-3">
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-blue-600 hover:underline"
        >
          <Github size={16} />
          GitHub
        </a>
      </td>
    </tr>
  );
}
