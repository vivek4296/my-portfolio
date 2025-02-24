import profilePic from "../assets/vivekProfilePic.webp"; // Adjust the path and file name to match your image
import { HERO_CONTENT } from "../constants";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      staggerChildren: 0.2,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const Hero = () => {
  return (
    <div className="pb-4 lg:mb-36">
      <div className="flex flex-wrap lg:flex-row items-center">
        {/* Image - Order first on mobile */}
        <div className="w-full lg:w-1/2 order-first lg:order-last">
          <div className="flex justify-center lg:p-8">
            <motion.img
              src={profilePic}
              alt="Vivek Singh Chauhan"
              className="border border-stone-900 rounded-3xl"
              width={650}
              height={650}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01],
              }}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.2 },
              }}
            />
          </div>
        </div>

        {/* Text Content - Order second on mobile */}
        <div className="w-full lg:w-1/2 order-last lg:order-first">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="flex flex-col items-center lg:items-start mt-10"
          >
            <motion.h2
              variants={childVariants}
              className="pb-2 text-4xl tracking-tighter lg:text-8xl bg-gradient-to-r from-white via-stone-300 to-stone-600 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ["0%", "100%"],
                transition: {
                  duration: 8,
                  repeat: Infinity,
                  repeatType: "reverse",
                },
              }}
            >
              Vivek Singh Chauhan
            </motion.h2>
            <motion.span
              variants={childVariants}
              className="bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-3xl tracking-tight text-transparent"
              animate={{
                opacity: [0, 1],
                transition: {
                  duration: 1,
                  times: [0, 1],
                  repeat: 1,
                },
              }}
            >
              Backend Software Developer
            </motion.span>
            <motion.p
              variants={childVariants}
              className="my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tighter"
            >
              {HERO_CONTENT}
            </motion.p>
            <motion.a
              variants={childVariants}
              whileHover={{
                scale: 1.05,
                backgroundColor: "#e5e5e5",
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 0.95 }}
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
              className="bg-white rounded-full p-4 text-sm text-stone-800 mb-10"
            >
              Download Resume
            </motion.a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
