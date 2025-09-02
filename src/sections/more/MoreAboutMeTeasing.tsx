import { motion } from "framer-motion";

interface MoreAboutMeTeaserProps {
  onClick: () => void;
}

export default function MoreAboutMeTeaser({ onClick }: MoreAboutMeTeaserProps) {
  return (
    <section className="py-20 text-center bg-gray-50">
      <motion.p
        className="text-2xl md:text-3xl font-semibold cursor-pointer text-gray-800"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        onClick={onClick}
      >
        👀 You want to know more about me?
      </motion.p>
      <p className="text-sm text-gray-500 mt-2">(click)</p>
    </section>
  );
}
