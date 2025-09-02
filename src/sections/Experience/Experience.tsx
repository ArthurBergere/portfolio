import SectionTitle from "../../components/ui/TitleSection";
import ExperienceTabs from "../../components/shared/ExperienceTabs";
import { experiences } from "../../data/experiences";

export default function Experience() {
  return (
    <section id="experience" className="py-24 max-w-5xl mx-auto px-6">
      <SectionTitle number="02." title="Where I've Worked" />
      <ExperienceTabs experiences={experiences} />
    </section>
  );
}
