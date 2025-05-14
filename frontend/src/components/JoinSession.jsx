import axios from "axios";
import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { changeCreator } from "../features/creatorSlice.js";
import { useDispatch } from 'react-redux'
import { addRoomID } from "../features/sessionDetailsSlice.js";

const textVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, staggerChildren: 0.3 } },
};

const JoinSession = () => {
  const navigate = useNavigate();
  const [sessionId, setSessionId] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const dispatch = useDispatch();

  // to check either the room id is correct or not
  const validateSessionId = async (id) => {
    try {
      const response = await axios.get("http://localhost:5000/check-room");
      if (response.status == 200) {
        return true;
      }
      return false;
    } catch (error) {
      console.log(error.message, "error while checking room id");
    }

  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (!validateSessionId(sessionId)) {
      setError("Invalid session ID format (must be 6 alphanumeric characters)");
      setIsLoading(false);
      return;
    }
    else {
      dispatch(changeCreator())
      dispatch(addRoomID({
        roomID:sessionId
      }))
      navigate("/session-dashboard");

    }

  };

  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText();
      if (validateSessionId(text)) {
        setSessionId(text);
        setError("");
      }
    } catch (err) {
      setError("Couldn't access clipboard");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-gradient-to-br from-blue-900 to-purple-900 relative overflow-hidden"
    >
      {/* Navigation Bar */}
      <nav className="flex justify-between items-center px-8 py-6 absolute w-full top-0 z-30">
        <motion.h1
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent cursor-pointer"
          onClick={() => navigate("/")}
        >
          interviewcove
        </motion.h1>

        <div className="hidden md:flex gap-8 text-white">
          <motion.button
            whileHover={{ scale: 1.05, color: "#7dd3fc" }}
            className="text-sm font-medium"
            onClick={() => navigate("/")}
          >
            Back to Home
          </motion.button>
        </div>
      </nav>

      {/* Main Content */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={textVariants}
        className="flex flex-col items-center justify-center min-h-screen px-4 text-center relative z-20"
      >
        <div className="max-w-2xl mx-auto space-y-8">
          <motion.h2
            variants={textVariants}
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent"
          >
            Join Session
          </motion.h2>

          <form onSubmit={handleSubmit} className="space-y-8">
            <motion.div variants={textVariants} className="space-y-6">
              <div className="relative group">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="p-6 bg-white/10 backdrop-blur-lg rounded-xl border-2 border-dashed border-cyan-300"
                >
                  <div className="flex flex-col md:flex-row items-center gap-4">
                    <input
                      type="text"
                      value={sessionId}
                      onChange={(e) => {
                        setSessionId(e.target.value.toUpperCase());
                        setError("");
                      }}
                      placeholder="Enter Session ID"
                      className="w-full bg-transparent text-cyan-300 font-mono placeholder-cyan-300/50 focus:outline-none text-center md:text-left"
                      maxLength="6"
                    />
                    <motion.button
                      type="button"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={handlePaste}
                      className="flex items-center gap-2 text-cyan-100 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                        />
                      </svg>
                      Paste
                    </motion.button>
                  </div>
                </motion.div>
                {error && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-400 text-sm mt-2"
                  >
                    {error}
                  </motion.p>
                )}
              </div>

              <motion.div variants={textVariants} className="mt-8">
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  disabled={isLoading}
                  className="bg-cyan-400 text-black px-8 py-4 rounded-full text-lg font-bold shadow-lg hover:shadow-cyan-400/30 disabled:opacity-50 disabled:cursor-not-allowed w-full md:w-auto"
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center gap-2">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity }}
                        className="w-5 h-5 border-2 border-black rounded-full border-t-transparent"
                      />
                      Joining...
                    </div>
                  ) : (
                    "Join Session"
                  )}
                </motion.button>
              </motion.div>
            </motion.div>
          </form>

          <motion.p variants={textVariants} className="text-cyan-100 text-sm">
            Don't have an ID?{" "}
            <motion.span
              whileHover={{ color: "#7dd3fc" }}
              className="cursor-pointer font-semibold"
              onClick={() => navigate("/start-session")}
            >
              Start a new session
            </motion.span>
          </motion.p>
        </div>
      </motion.div>

      {/* Animated Background Particles */}
      <motion.div
        className="fixed inset-0 w-full h-full pointer-events-none z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [0, 1.4, 0],
              opacity: [0, 0.8, 0],
              x: [0, (Math.random() - 0.5) * 100],
              y: [0, (Math.random() - 0.5) * 100]
            }}
            transition={{
              duration: 3 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
          />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default JoinSession;