import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-gray-200 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} BERGERE Arthur. Tous droits réservés.
        </p>

        <nav className="flex gap-6 text-sm text-gray-600">
          <a href="#about" className="hover:text-gray-900 transition">
            About
          </a>
          <a href="#experience" className="hover:text-gray-900 transition">
            Experience
          </a>
          <a href="#projects" className="hover:text-gray-900 transition">
            Projects
          </a>
          <a href="#contact" className="hover:text-gray-900 transition">
            Contact
          </a>
        </nav>

        <div className="flex gap-4">
          <a
            href="https://github.com/tonprofil"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-gray-900 transition"
          >
            <Github size={20} />
          </a>
          <a
            href="https://linkedin.com/in/tonprofil"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-gray-900 transition"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="mailto:tonemail@mail.com"
            className="text-gray-500 hover:text-gray-900 transition"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
