import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addSessionDetails } from "../features/sessionDetailsSlice";
import { useDispatch} from 'react-redux'


const generateRoomId = () => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let result = '';
  for (let i = 0; i < 6; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};

const textVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, staggerChildren: 0.3 } },
};

const StartSession = () => {
  const navigate = useNavigate();
  const [roomId] = useState(generateRoomId());
  const [selectedSubject, setSelectedSubject] = useState("");
  const [selectedQuestions, setSelectedQuestions] = useState(10);
  const [isCopied, setIsCopied] = useState(false);

  const dispatch = useDispatch();

  const subjects = ['Database', 'Web Development', 'OOP', 'OS', 'DSA'];
  

  const copyToClipboard = () => {
    navigator.clipboard.writeText(roomId);
    setIsCopied(true);
    if (navigator.vibrate) navigator.vibrate(50);
    setTimeout(() => setIsCopied(false), 2000);
  };
  function handleOnClick(){
    if(selectedSubject == ""){
      alert("please Select subject")
    }
    else{
      dispatch(addSessionDetails({
        subject: selectedSubject,
        questions: selectedQuestions,
        roomID: roomId
        
      }));
      navigate("/session:subject")
    }
    
  }

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
            Start New Session
          </motion.h2>

          {/* Session ID Box */}
          <motion.div variants={textVariants} className="space-y-6">
            <div className="relative group">
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="p-4 md:p-6 bg-white/10 backdrop-blur-lg rounded-xl border-2 border-dashed border-cyan-300 cursor-pointer"
                onClick={copyToClipboard}
              >
                <div className="flex flex-col md:flex-row items-center justify-between gap-2">
                  <p className="text-cyan-300 font-mono break-all text-sm md:text-base">
                    {roomId}
                  </p>
                  <div className="flex items-center gap-2">
                    <motion.span
                      className={`text-sm ${
                        isCopied ? 'text-green-400' : 'text-cyan-100'
                      }`}
                    >
                      {isCopied ? 'Copied!' : window.innerWidth < 768 ? 'Tap to copy' : 'Click to copy'}
                    </motion.span>
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-4 w-4 text-cyan-100"
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
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Form Controls */}
            <motion.div variants={textVariants} className="grid gap-6 md:grid-cols-2">
              <div className="space-y-4 text-left">
                <label className="block text-cyan-200 text-lg font-medium">Subject</label>
                <motion.select
                  whileHover={{ scale: 1.02 }}
                  className="w-full p-3 bg-white/20 backdrop-blur-sm rounded-lg text-white focus:ring-2 focus:ring-cyan-400 border-none"
                  value={selectedSubject}
                  onChange={(e) => setSelectedSubject(e.target.value)}
                >
                  <option value="" className="bg-purple-900">Select a subject</option>
                  {subjects.map((subject) => (
                    <option key={subject} value={subject} className="bg-purple-900">
                      {subject}
                    </option>
                  ))}
                </motion.select>
              </div>

              <div className="space-y-4 text-left">
                <label className="block text-cyan-200 text-lg font-medium">Questions</label>
                <motion.select
                  whileHover={{ scale: 1.02 }}
                  className="w-full p-3 bg-white/20 backdrop-blur-sm rounded-lg text-white focus:ring-2 focus:ring-cyan-400 border-none"
                  value={selectedQuestions}
                  onChange={(e) => setSelectedQuestions(e.target.value)}
                >
                  <option value="" className="bg-purple-900">Number of questions</option>
                  
                    <option  onClick={()=> setSelectedQuestions(10)}  className="bg-purple-900">
                      10
                    </option>
                    <option  onClick={()=> setSelectedQuestions(20)}  className="bg-purple-900">
                      20
                    </option>
                 
                </motion.select>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div variants={textVariants} className="flex flex-col gap-4 mt-8">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-cyan-400 text-black px-8 py-4 rounded-full text-lg font-bold shadow-lg hover:shadow-cyan-400/30"
                onClick={()=> handleOnClick()}
              >
                
                Start Session Now
              </motion.button>
              
              <p className="text-cyan-100 text-sm mt-4">
                Share this ID with participants to join your session
                <span className="block text-xs text-cyan-300/80 mt-1">
                  (Session settings can't be changed once started)
                </span>
              </p>
            </motion.div>
          </motion.div>
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

export default StartSession;