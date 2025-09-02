import type { Project } from "../../data/Project";
import ProjectRow from "./ProjectRow";

interface ProjectsTableProps {
  projects: Project[];
}

export default function ProjectsTable({ projects }: ProjectsTableProps) {
  return (
    <div className="overflow-x-auto rounded-lg shadow-md">
      <table className="w-full text-left border-collapse bg-white">
        <thead>
          <tr className="bg-gray-100 text-gray-700 text-sm">
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Description</th>
            <th className="px-4 py-2">Tech Stack</th>
            <th className="px-4 py-2">Year</th>
            <th className="px-4 py-2">Links</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project) => (
            <ProjectRow key={project.name} project={project} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
