import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import SectionTitle from "../components/ui/TitleSection";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 max-w-3xl mx-auto px-6 text-center"
    >
      <SectionTitle number="04." title="What's Next?" />

      <motion.h2
        className="text-4xl font-bold text-gray-900 mb-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Get In Touch
      </motion.h2>

      <motion.p
        className="text-gray-600 leading-relaxed mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        My inbox is always open. Whether you have a question or just want to say hi, 
        I'll try my best to get back to you!
      </motion.p>

      {/* CTA button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <a
          href="mailto:yourmail@example.com"
          className="inline-block border border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-mono text-lg hover:bg-blue-50 transition-colors"
        >
          Say Hello
        </a>
      </motion.div>

      {/* Social icons */}
      <motion.div
        className="flex justify-center gap-6 mt-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        viewport={{ once: true }}
      >
        <a
          href="https://github.com/ArthurBergere"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-blue-600 transition-colors"
        >
          <Github size={28} />
        </a>
        <a
          href="https://fr.linkedin.com/in/arthur-bergere"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-blue-600 transition-colors"
        >
          <Linkedin size={28} />
        </a>
        <a
          href="mailto:bergere.arthur51@gmail.com"
          className="text-gray-600 hover:text-blue-600 transition-colors"
        >
          <Mail size={28} />
        </a>
      </motion.div>
    </section>
  );
}
