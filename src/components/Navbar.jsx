import { FaLinkedin, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <motion.a
          href="/"
          aria-label="Home"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="text-4xl md:text-5xl font-abril text-white tracking-wider mx-2">
            VC
          </span>
        </motion.a>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <motion.a
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          href="https://www.linkedin.com/in/vivek4296"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          href="https://github.com/vivek4296"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Github"
        >
          <FaGithub />
        </motion.a>
      </div>
    </nav>
  );
};

export default Navbar;
