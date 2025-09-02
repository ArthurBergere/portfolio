import { motion } from "framer-motion";
import SectionTitle from "../components/ui/TitleSection";
import TechList from "../components/ui/CustomList";
import ProfilePic from "../assets/profile.jpg"; 

export default function About() {
  return (
    <section id="about" className="py-24 max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
      {/* Left - Text */}
      <div>
        <SectionTitle number="01." title="About Me" />

        <motion.div
          className="space-y-4 text-gray-700 leading-relaxed"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
          }}
        >
          <p>
            Hello! I'm Arthur, a software engineer based in Paris, France.
            I love everything related to high-tech and IT.
          </p>
          <p>
            Since I discovered programming, I like to create things — whether it's websites,
            applications, software, or even useless little experiments.
          </p>
          <p>
            I studied in Orléans, France for my{" "}
            <a href="#" className="text-blue-600 hover:underline">
              two-year university degree
            </a>{" "}
            and continued at{" "}
            <a href="#" className="text-blue-600 hover:underline">
              CESI école d'ingénieurs
            </a>{" "}
            and{" "}
            <a href="#" className="text-blue-600 hover:underline">
              University of Orléans
            </a>{" "}
            for my Master degree.
          </p>
          <p>
            These experiences gave me strong foundations in multiple technologies, 
            sharpened my critical thinking, and fueled my passion for problem-solving.
          </p>
        </motion.div>

        {/* Tech list */}
        <TechList
          items={[
            "C# .NET",
            "React",
            "Java",
            "HTML & (S)CSS",
            "Spring boot",
            "Node.js",
          ]}
        />
      </div>

      {/* Right - Profile image */}
      <motion.div
        className="relative max-w-xs mx-auto"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="relative group">
          <img
            src={ProfilePic}
            alt="Profile"
            className="rounded-lg shadow-lg grayscale group-hover:grayscale-0 transition duration-500"
          />
          <div className="absolute -inset-2 border-2 border-blue-600 rounded-lg -z-10 translate-x-3 translate-y-3 group-hover:translate-x-1 group-hover:translate-y-1 transition duration-500"></div>
        </div>
      </motion.div>
    </section>
  );
}
