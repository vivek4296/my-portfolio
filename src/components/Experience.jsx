import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const experienceVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const getCompanyColor = (company) => {
  switch (company) {
    case "Apple":
      return "border-blue-600";
    case "Adobe":
      return "border-red-600";
    case "Tekion Corps":
      return "border-green-500";
    case "Orange Business Services":
      return "border-orange-500";
    case "C-DAC":
      return "border-stone-900";
    default:
      return "border-stone-700";
  }
};

const getDotColor = (company) => {
  switch (company) {
    case "Apple":
      return "bg-blue-600";
    case "Adobe":
      return "bg-red-600";
    case "Tekion Corps":
      return "bg-green-500";
    case "Orange Business Services":
      return "bg-orange-500";
    case "C-DAC":
      return "bg-stone-900";
    default:
      return "bg-stone-700";
  }
};

const Experience = () => {
  return (
    <div className="pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Experience
      </motion.h2>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        {EXPERIENCES.map((experience, index) => (
          <motion.div
            key={index}
            variants={experienceVariants}
            className={`mb-12 border-l-2 ${getCompanyColor(
              experience.company
            )} pl-8 relative`}
          >
            {/* Timeline dot */}
            <div
              className={`absolute w-4 h-4 ${getDotColor(
                experience.company
              )} rounded-full -left-2 top-2`}
            ></div>

            {/* Year and Company */}
            <div className="flex flex-wrap items-center gap-4 mb-4">
              <h3 className="text-3xl font-semibold">{experience.company}</h3>
              <h3 className="text-2xl font-semibold">| {experience.role}</h3>
              <span className="text-sm text-stone-400 py-1 leading-6">
                {experience.year}
              </span>
            </div>

            {/* Description with bullet points */}
            <div className="text-stone-300 mb-4">
              {experience.description
                .split("•")
                .filter(Boolean)
                .map((point, pointIndex) => (
                  <div key={pointIndex} className="flex items-start mb-2">
                    <span className="mr-2 mt-1.5">•</span>
                    <p className="leading-relaxed">{point.trim()}</p>
                  </div>
                ))}
            </div>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2">
              {experience.technologies.map((tech, techIndex) => (
                <motion.span
                  key={techIndex}
                  whileHover={{ scale: 1.05 }}
                  className="px-3 py-1 bg-stone-800 rounded-full text-sm text-stone-300"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Experience;
