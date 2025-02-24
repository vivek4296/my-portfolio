import { PLATFORM_LINKS } from "../constants";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const CodingProfiles = () => {
  return (
    <div className="pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Coding Profiles
      </motion.h2>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-wrap justify-center gap-8"
      >
        {PLATFORM_LINKS.map((platform) => (
          <motion.a
            key={platform.name}
            variants={itemVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            href={platform.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative p-4"
          >
            <platform.icon
              className="text-7xl transition-transform"
              style={{ color: platform.color }}
            />
            <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-stone-900 text-white text-sm px-2 py-1 rounded">
              {platform.name}
            </span>
          </motion.a>
        ))}
      </motion.div>
    </div>
  );
};

export default CodingProfiles;
