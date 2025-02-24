import { RiReactjsLine } from "react-icons/ri";
import { FaJava, FaPython } from "react-icons/fa";
import { DiRedis } from "react-icons/di";
import {
  SiSpring,
  SiApachekafka,
  SiPostgresql,
  SiMongodb,
  SiNextdotjs,
} from "react-icons/si";

import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "linear",
    },
  },
});

const Technologies = () => {
  return (
    <div className="pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap justify-center gap-8"
      >
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(2.5)}
          className="group relative p-4 hover:scale-110 transition-transform"
        >
          <FaJava className="text-7xl text-[#f89820]" /> {/* Java Orange */}
          <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-stone-900 text-white text-sm px-2 py-1 rounded">
            Java
          </span>
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(4)}
          className="group relative p-4 hover:scale-110 transition-transform"
        >
          <SiSpring className="text-7xl text-[#6DB33F]" /> {/* Spring Green */}
          <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-stone-900 text-white text-sm px-2 py-1 rounded">
            Spring Framework
          </span>
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(5)}
          className="group relative p-4 hover:scale-110 transition-transform"
        >
          <SiApachekafka className="text-7xl text-[#231F20]" />{" "}
          {/* Kafka Black */}
          <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-stone-900 text-white text-sm px-2 py-1 rounded">
            Kafka
          </span>
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(6)}
          className="group relative p-4 hover:scale-110 transition-transform"
        >
          <DiRedis className="text-7xl text-[#DC382D]" /> {/* Redis Red */}
          <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-stone-900 text-white text-sm px-2 py-1 rounded">
            Redis
          </span>
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(4)}
          className="group relative p-4 hover:scale-110 transition-transform"
        >
          <SiPostgresql className="text-7xl text-[#336791]" />{" "}
          {/* Postgres Blue */}
          <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-stone-900 text-white text-sm px-2 py-1 rounded">
            PostgreSQL
          </span>
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(2.5)}
          className="group relative p-4 hover:scale-110 transition-transform"
        >
          <SiMongodb className="text-7xl text-[#47A248]" />{" "}
          {/* MongoDB Green */}
          <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-stone-900 text-white text-sm px-2 py-1 rounded">
            MongoDB
          </span>
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(5)}
          className="group relative p-4 hover:scale-110 transition-transform"
        >
          <RiReactjsLine className="text-7xl text-[#61DAFB]" />{" "}
          {/* React Blue */}
          <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-stone-900 text-white text-sm px-2 py-1 rounded">
            React
          </span>
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(6)}
          className="group relative p-4 hover:scale-110 transition-transform"
        >
          <SiNextdotjs className="text-7xl text-white" /> {/* Next.js White */}
          <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-stone-900 text-white text-sm px-2 py-1 rounded">
            Next.js
          </span>
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(2.5)}
          className="group relative p-4 hover:scale-110 transition-transform"
        >
          <FaPython className="text-7xl text-[#3776AB]" /> {/* Python Blue */}
          <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-stone-900 text-white text-sm px-2 py-1 rounded">
            Python
          </span>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
