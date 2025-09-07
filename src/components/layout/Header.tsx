import { motion } from "framer-motion";
import Logo from "../../assets/ab.svg";
const navItems = [
  { number: "01.", label: "About" },
  { number: "02.", label: "Experience" },
  { number: "03.", label: "Work" },
  { number: "04.", label: "Contact" },
  { number: "05.", label: "All my projects" },
];

export default function Header() {
  return (
    <header className="fixed w-full top-0 z-50 bg-gray-50 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
        
        {/* Logo */}
        <div className="flex items-center">
          <img src={Logo} alt="Logo" className="h-10 w-auto" />
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item, index) => (
            <motion.a
              key={item.label}
              href={`#${item.label.toLowerCase().replace(/\s+/g, "-")}`}
              className="flex items-center space-x-1 text-gray-900 font-mono hover:text-blue-600 transition-colors"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.4 }}
            >
              <span className="text-sm text-blue-600">{item.number}</span>
              <span>{item.label}</span>
            </motion.a>
          ))}
        </nav>

        {/* Resume Button */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: navItems.length * 0.2, duration: 0.4 }}
        >
          <a
            href="../src/assets/frenchresume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-blue-600 text-blue-600 px-4 py-2 rounded-md font-mono text-sm hover:bg-blue-50 transition-colors"
          >
            Resume
          </a>
        </motion.div>
      </div>
    </header>
  );
}
