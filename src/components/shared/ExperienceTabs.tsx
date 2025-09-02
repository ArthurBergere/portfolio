import { useState } from "react";
import ExperienceItem from "../../sections/Experience/ExperienceItem";

interface Experience {
  company: string;
  companyUrl?: string;
  role: string;
  duration: string;
  period: string;
  city?: string; 
  technologies: string[];
}

interface ExperienceTabsProps {
  experiences: Experience[];
}

export default function ExperienceTabs({ experiences }: ExperienceTabsProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="grid md:grid-cols-[200px_1fr] gap-8">
      {/* Tabs - Entreprises */}
      <div className="flex md:flex-col border-l border-gray-300">
        {experiences.map((exp, i) => (
          <button
            key={exp.company}
            onClick={() => setActiveIndex(i)}
            className={`px-4 py-2 text-left font-mono text-sm transition-colors ${
              i === activeIndex
                ? "text-blue-600 bg-gray-100 border-l-2 border-blue-600"
                : "text-gray-600 hover:text-blue-600"
            }`}
          >
            {exp.company}
          </button>
        ))}
      </div>

      {/* Contenu */}
      <div>
        <ExperienceItem {...experiences[activeIndex]} />
      </div>
    </div>
  );
}
