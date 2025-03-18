import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const textVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, staggerChildren: 0.3 } },
};

const menuContainerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const menuItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Hero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-purple-900 relative overflow-hidden">
      {/* Navigation Bar */}
      <nav className="flex justify-between items-center px-8 py-6 absolute w-full top-0">
        <motion.h1
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
        >
          interviewcove
        </motion.h1>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 text-white">
          {["Home", "Test Session", "Leaderboard"].map((item) => (
            <motion.button
              whileHover={{ scale: 1.05, color: "#7dd3fc" }}
              className="text-sm font-medium"
              key={item}
            >
              {item}
            </motion.button>
          ))}
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="bg-cyan-400 text-black px-4 py-2 rounded-full text-sm font-bold"
          >
            Login/SignUp
          </motion.button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(true)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                setIsMenuOpen(false);
              }
            }}
          >
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white p-8 rounded-lg w-full max-w-md relative"
            >
              <button
                className="absolute top-4 right-4 text-black"
                onClick={() => setIsMenuOpen(false)}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <motion.div
                variants={menuContainerVariants}
                initial="hidden"
                animate="visible"
                className="flex flex-col gap-4"
              >
                {["Home", "Test Session", "Leaderboard"].map((item) => (
                  <motion.button
                    variants={menuItemVariants}
                    key={item}
                    className="text-black text-lg font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </motion.button>
                ))}
                <motion.button
                  variants={menuItemVariants}
                  className="bg-cyan-400 text-black px-4 py-2 rounded-full text-lg font-bold"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Login/SignUp
                </motion.button>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Content */}
      <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={textVariants}
          className="max-w-4xl mx-auto"
        >
          {/* Animated Title */}
          <motion.h1
            variants={textVariants}
            className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent"
          >
            interviewcove
          </motion.h1>

          {/* Animated Subtitle Text */}
          <motion.div variants={textVariants} className="space-y-4 mb-12">
            {[
              "The ultimate battleground for interview preparation",
              "Are you ready to take the challenge?",
            ].map((line, index) => (
              <motion.p
                key={index}
                variants={textVariants}
                className="text-xl md:text-3xl text-gray-100 font-medium"
              >
                {line}
              </motion.p>
            ))}
          </motion.div>

          {/* Animated Buttons */}
          <motion.div variants={textVariants} className="flex gap-6 justify-center">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="bg-cyan-400 text-black px-8 py-4 rounded-full text-lg font-bold shadow-lg"
            >
              Let's Start!
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-full text-lg font-bold shadow-lg"
            >
              Join Session
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Animated Background Elements */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-4 h-4 bg-cyan-400 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [0, 1.2, 0],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default Hero;