import { EDUCATION } from "../constants";
import { motion } from "framer-motion";

const Education = () => {
  return (
    <div className="pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Education
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <motion.div
          whileHover={{ x: 10 }}
          transition={{ duration: 0.2 }}
          className="mb-12 border-l-2 border-stone-700 pl-8 relative"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5 }}
            className="absolute w-4 h-4 bg-stone-700 rounded-full -left-2 top-2"
          ></motion.div>

          <div className="flex flex-wrap items-center gap-4 mb-4">
            <span className="text-sm text-stone-400">{EDUCATION.year}</span>
            <h3 className="text-2xl font-semibold">{EDUCATION.degree}</h3>
            <span className="text-stone-400">@ {EDUCATION.institution}</span>
          </div>

          <motion.div whileHover={{ scale: 1.02 }} className="text-stone-300">
            <p className="text-lg">
              <span className="font-semibold">CGPA: </span>
              {EDUCATION.CGPA}
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Education;
