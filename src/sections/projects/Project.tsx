import SectionTitle from "../../components/ui/TitleSection";
import { projects } from "../../data/Project";
import ProjectsTable from "./ProjectTable";

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 max-w-6xl mx-auto px-6">
      <SectionTitle number="05." title="All My Projects" />
      <p className="text-gray-600 mb-8">
        A selection of projects I’ve worked on recently. You can check out the source code on GitHub.
      </p>
      <ProjectsTable projects={projects} />
    </section>
  );
}
