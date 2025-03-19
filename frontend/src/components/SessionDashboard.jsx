import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaVideo, FaVideoSlash, FaMicrophone, FaMicrophoneSlash, FaComment, FaRegPaperPlane } from 'react-icons/fa';

const SessionDashboard = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoOff, setIsVideoOff] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  // Sample questions
  const questions = [
    {
      question: "What is the time complexity of binary search?",
      choices: ["O(n)", "O(log n)", "O(n log n)", "O(1)"],
      correct: 1
    },
    // Add more questions
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          handleNextQuestion();
          return 30;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [currentQuestion]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (newMessage.trim()) {
      setMessages([...messages, { text: newMessage, sender: 'You' }]);
      setNewMessage('');
    }
  };

  const handleNextQuestion = () => {
    setCurrentQuestion(prev => (prev + 1) % questions.length);
    setTimeLeft(30);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-purple-900 flex">
      {/* Left Section - Video & Chat */}
      <div className="w-1/3 flex flex-col border-r border-white/20">
        {/* Video Section */}
        <div className="flex-1 p-4 border-b border-white/20">
          <h2 className="text-xl text-white mb-4 flex items-center gap-2">
            <FaVideo className="text-cyan-400" /> Live Session
          </h2>
          
          {/* Video Blocks */}
          <div className="grid gap-4 mb-4">
            <motion.div
              className="bg-white/10 rounded-lg aspect-video relative"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <div className="absolute bottom-2 left-2 text-white text-sm">
                Participant 1
              </div>
            </motion.div>
            
            <motion.div
              className="bg-white/10 rounded-lg aspect-video relative"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <div className="absolute bottom-2 left-2 text-white text-sm">
                You
              </div>
            </motion.div>
          </div>

          {/* Video Controls */}
          <div className="flex justify-center gap-4">
            <button
              onClick={() => setIsMuted(!isMuted)}
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
            >
              {isMuted ? <FaMicrophoneSlash /> : <FaMicrophone />}
            </button>
            <button
              onClick={() => setIsVideoOff(!isVideoOff)}
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
            >
              {isVideoOff ? <FaVideoSlash /> : <FaVideo />}
            </button>
          </div>
        </div>

        {/* Chat Section */}
        <div className="flex-1 p-4 flex flex-col">
          <h2 className="text-xl text-white mb-4 flex items-center gap-2">
            <FaComment className="text-cyan-400" /> Chat
          </h2>
          
          <div className="flex-1 bg-white/5 rounded-lg p-4 mb-4 overflow-y-auto">
            {messages.map((msg, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`mb-3 ${msg.sender === 'You' ? 'text-right' : ''}`}
              >
                <div className={`inline-block p-2 rounded-lg ${msg.sender === 'You' ? 'bg-cyan-400 text-black' : 'bg-white/10 text-white'}`}>
                  <div className="text-xs opacity-75">{msg.sender}</div>
                  {msg.text}
                </div>
              </motion.div>
            ))}
          </div>

          <form onSubmit={handleSendMessage} className="flex gap-2">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              className="flex-1 bg-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
              placeholder="Type your message..."
            />
            <button
              type="submit"
              className="p-2 rounded-lg bg-cyan-400 text-black hover:bg-cyan-500 transition-colors"
            >
              <FaRegPaperPlane />
            </button>
          </form>
        </div>
      </div>

      {/* Right Section - Test */}
      <div className="flex-1 p-8">
        <div className="max-w-3xl mx-auto">
          {/* Test Header */}
          <div className="flex justify-between items-center mb-8">
            <div className="text-white">
              <div className="text-2xl font-bold">Question {currentQuestion + 1}</div>
              <div className="text-sm opacity-75">Total Questions: {questions.length}</div>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-white/10 px-4 py-2 rounded-full text-white">
                ⏳ {timeLeft}s
              </div>
            </div>
          </div>

          {/* Question */}
          <motion.div
            key={currentQuestion}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white/10 rounded-xl p-6 mb-8"
          >
            <div className="text-xl text-white mb-6">
              {questions[currentQuestion].question}
            </div>
            
            <div className="grid gap-3">
              {questions[currentQuestion].choices.map((choice, idx) => (
                <motion.button
                  key={idx}
                  whileHover={{ scale: 1.02 }}
                  className="p-3 text-left rounded-lg bg-white/5 hover:bg-white/10 text-white transition-colors"
                >
                  {String.fromCharCode(65 + idx)}. {choice}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Progress */}
          <div className="bg-white/10 h-2 rounded-full mb-4">
            <div 
              className="bg-cyan-400 h-2 rounded-full transition-all duration-1000"
              style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SessionDashboard;