import { motion } from "framer-motion";
import { FaChartLine, FaClock, FaBook, FaPercentage } from "react-icons/fa";

const TestHistoryDashboard = () => {
  // Sample test session data
  const testSessions = [
    {
      id: 1,
      date: "2024-03-15",
      score: 85,
      totalQuestions: 20,
      correctAnswers: 17,
      timeSpent: "25:30",
      topics: ["Algorithms", "Data Structures", "System Design"]
    },
    {
      id: 2,
      date: "2024-03-12",
      score: 72,
      totalQuestions: 15,
      correctAnswers: 11,
      timeSpent: "20:15",
      topics: ["JavaScript", "React", "Web Development"]
    },
    // Add more test sessions
  ];

  // Statistics
  const stats = [
    { title: "Total Tests", value: testSessions.length, icon: <FaChartLine /> },
    { title: "Average Score", value: "78%", icon: <FaPercentage /> },
    { title: "Total Time Spent", value: "45h 22m", icon: <FaClock /> },
    { title: "Topics Covered", value: "12", icon: <FaBook /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-purple-900 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold text-white mb-2">Test History</h1>
          <p className="text-gray-300">Review your previous test performances</p>
        </motion.div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-4 text-white"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-400">{stat.title}</p>
                  <p className="text-2xl font-bold">{stat.value}</p>
                </div>
                <span className="text-cyan-400 text-2xl">{stat.icon}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Filter/Sort Options */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex gap-4 mb-6"
        >
          <button className="px-4 py-2 rounded-full bg-cyan-400 text-black text-sm font-medium">
            All Tests
          </button>
          <button className="px-4 py-2 rounded-full bg-white/10 text-white text-sm font-medium">
            Last 30 Days
          </button>
          <button className="px-4 py-2 rounded-full bg-white/10 text-white text-sm font-medium">
            By Score
          </button>
        </motion.div>

        {/* Test Sessions List */}
        <div className="space-y-4">
          {testSessions.map((session, index) => (
            <motion.div
              key={session.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-white"
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                {/* Session Overview */}
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="text-cyan-400 text-xl">
                      <FaChartLine />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">
                        {new Date(session.date).toLocaleDateString("en-US", {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </h3>
                      <p className="text-sm text-gray-400">
                        {session.topics.join(", ")}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Score Progress */}
                <div className="w-full md:w-48">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm">Score</span>
                    <span className="text-cyan-400 font-medium">
                      {session.score}%
                    </span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full">
                    <div
                      className="h-2 bg-cyan-400 rounded-full transition-all duration-500"
                      style={{ width: `${session.score}%` }}
                    />
                  </div>
                </div>

                {/* Detailed Stats */}
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <p className="text-sm text-gray-400">Correct</p>
                    <p className="font-medium">
                      {session.correctAnswers}/{session.totalQuestions}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Time</p>
                    <p className="font-medium">{session.timeSpent}</p>
                  </div>
                </div>
              </div>

              {/* Topics Breakdown */}
              <div className="mt-4 pt-4 border-t border-white/10">
                <h4 className="text-sm font-medium mb-2">Topics Breakdown</h4>
                <div className="flex flex-wrap gap-2">
                  {session.topics.map((topic) => (
                    <span
                      key={topic}
                      className="px-3 py-1 rounded-full bg-cyan-400/10 text-cyan-400 text-sm"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {testSessions.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <div className="text-gray-400 mb-4">No test sessions found</div>
            <button className="px-6 py-2 bg-cyan-400 text-black rounded-full font-medium">
              Start Your First Test
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default TestHistoryDashboard;