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
    name: "Portfolio Website",
    description: "A personal portfolio built with React, TailwindCSS, and Framer Motion.",
    githubUrl: "https://github.com/ArthurBergere/portfolio",
    techStack: ["Vite", "React", "TypeScript", "TailwindCSS"],
    liveUrl: "https://arthur-portfolio.com",
    image: "/assets/work/portfolio.png",
  },
  {
    name: "PokeApp",
    description:
      "A web app with paginated Pokémon list, dynamic search, detail views, and instant i18n (FR/EN).",
    githubUrl: "https://github.com/ELAKROUTIAbdelhakim/PokeApp",
    techStack: ["Vite", "React", "TypeScript", "TailwindCSS"],
    liveUrl: "https://univ-pokeapp.vercel.app/",
    image: "/src/assets/pokeApp.png",
  },
];

