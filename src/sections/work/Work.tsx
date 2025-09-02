import SectionTitle from "../../components/ui/TitleSection";
import WorkItem from "./WorkItem";
import { workProjects } from "../../data/work";

export default function Work() {
  return (
    <section id="work" className="py-24 max-w-6xl mx-auto px-6">
      <SectionTitle number="02." title="Some Things I’ve Built" />

      <div className="mt-16">
        {workProjects.map((project, i) => (
          <WorkItem
            key={project.name}
            project={project}
            reversed={i % 2 === 1} 
          />
        ))}
      </div>
    </section>
  );
}
