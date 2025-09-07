export interface WorkProject {
  name: string;
  description: string;
  image: string;
  githubUrl?: string;
  liveUrl?: string;
  techStack: string[];
}

export const workProjects: WorkProject[] = [
  {
    name: "Document Management System",
    description: "The DMS project, developed at Hutchinson, aimed to replace an outdated electronic document management system that became unusable after a server migration. The solution leverages Elasticsearch for powerful full-text search and FSCrawler for the automatic indexing of over 200,000 documents. Access to the indexed content is provided through a web application built with ASP .Net MVC. The goal was to restore a fast and efficient full-text search capability for the company’s research center staff.",
    techStack: [".NET", "ElasticSearch", "FSCrawler", "Html/Js/Bootstrap"],
    liveUrl: "https://arthur-portfolio.com",
    image: "../src/assets/ged.png",
  },
  {
    name: "PokeApp",
    description:
      "A web app with paginated Pokémon list, dynamic search, detail views, and instant i18n (FR/EN).",
    githubUrl: "https://github.com/ELAKROUTIAbdelhakim/PokeApp",
    techStack: ["Vite", "React", "TypeScript", "TailwindCSS"],
    liveUrl: "https://univ-pokeapp.vercel.app/",
    image: "../src/assets/pokeapp.png",
  },
];

