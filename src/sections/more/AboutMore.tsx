import { motion } from "framer-motion";
import SectionTitle from "../../components/TitleSection";

const SectionBlock = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <motion.div
    className="mb-12"
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
  >
    <h3 className="text-2xl font-bold mb-4 text-blue-600">{title}</h3>
    <div className="text-gray-700 leading-relaxed">{children}</div>
  </motion.div>
);

export default function AboutMore() {
  return (
    <section id="about-more" className="py-20 px-6 md:px-16 bg-white">
      <div className="max-w-4xl mx-auto">
        <SectionTitle number="07." title="More About Me" />
        <SectionBlock title="🌱 My Journey">
          <p>
            My story started with curiosity for technology, which quickly turned into 
            a passion for web development. From my very first project to my current 
            work, I've been driven by the desire to build meaningful and user-friendly 
            applications...
          </p>
        </SectionBlock>

        <SectionBlock title="⚽ Hobbies & Lifestyle">
          <p>
            Outside of coding, I enjoy staying active with sports, exploring new 
            cultures through travel, and diving into photography. These passions 
            fuel my creativity and give me fresh perspectives when I come back to 
            the keyboard.
          </p>
        </SectionBlock>

        <SectionBlock title="🎨 Creative Side">
          <p>
            In addition to development, I design logos, posters, and visual identities. 
            This creative practice allows me to combine aesthetic sense with 
            technical problem-solving.
          </p>
        </SectionBlock>
      </div>
    </section>
  );
}
