export interface Project {
  name: string;
  description: string;
  githubUrl: string;
  techStack: string[];
  year: number;
}

export const projects: Project[] = [
  {
    name: "Portfolio Website",
    description: "A personal portfolio built with React, TailwindCSS, and Framer Motion.",
    githubUrl: "https://github.com/ArthurBergere/portfolio",
    techStack: ["Vite", "React", "TypeScript", "TailwindCSS"],
    year: 2025,
  },
  {
    name: "PokeApp",
    description: "PokeApp is a web application built with React and Vite, featuring a paginated list of Pokémon with dynamic search and detail views, and instant French/English language switching using react-i18next, all based on an Atomic Design architecture.",
    githubUrl: "https://github.com/ELAKROUTIAbdelhakim/PokeApp",
    techStack: ["Vite", "React", "TypeScript", "TailwindCSS"],
    year: 2025,
  },
  {
    name: "BetterBreak",
    description: "BetterBreak is a Flutter application designed for digital well-being, helping users control their social media time with a screen time tracker, usage quotas, and integrated guided breathing exercises within a minimalist interface.",
    githubUrl: "https://github.com/ArthurBergere/BetterBreak",
    techStack: ["Dart", "Flutter", "Firebase"],
    year: 2025,
  },
    {
    name: "Ressources Relationnelles",
    description: "Ressources Relationnelles is a fictional social network school project allowing users to create accounts, manage profiles, share posts, and interact, featuring a notification system using the Toastr library.",
    githubUrl: "https://github.com/Neograaph/ressources_relationnelles",
    techStack: ["C#", "Angular", "Toastr", "Docker", "SQL Server"],
    year: 2024,
  },
];
