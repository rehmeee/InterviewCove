import { motion } from "framer-motion";
import { FaGoogle, FaGithub, FaLinkedin } from "react-icons/fa";

const SignUp = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-purple-900 relative overflow-hidden flex items-center justify-center">
      {/* Floating Particles Background */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [0, 1.2, 0],
              opacity: [0, 0.5, 0],
              rotate: 360,
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Sign-Up Card */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl p-8 w-full max-w-md relative z-10"
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-8 text-center"
        >
          <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
            Join the Cove
          </h2>
          <p className="text-gray-300">Start your interview preparation journey</p>
        </motion.div>

        {/* Sign-Up Form */}
        <form className="space-y-6">
          {/* Name Input */}
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <label className="block text-gray-300 mb-2">Full Name</label>
            <input
              type="text"
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              placeholder="John Doe"
            />
          </motion.div>

          {/* Email Input */}
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <label className="block text-gray-300 mb-2">Email</label>
            <input
              type="email"
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              placeholder="john@example.com"
            />
          </motion.div>

          {/* Password Input */}
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <label className="block text-gray-300 mb-2">Password</label>
            <input
              type="password"
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              placeholder="••••••••"
            />
          </motion.div>

          {/* Confirm Password Input */}
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <label className="block text-gray-300 mb-2">Confirm Password</label>
            <input
              type="password"
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              placeholder="••••••••"
            />
          </motion.div>

          {/* Submit Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="w-full py-3 bg-cyan-400 text-black rounded-lg font-semibold hover:bg-cyan-500 transition-colors"
            type="submit"
          >
            Create Account
          </motion.button>
        </form>

        {/* Social Sign-Up */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="mt-8"
        >
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="flex-1 h-px bg-white/20"></div>
            <span className="text-gray-400 text-sm">Or sign up with</span>
            <div className="flex-1 h-px bg-white/20"></div>
          </div>

          <div className="flex justify-center space-x-4">
            {[
              { icon: FaGoogle, color: "bg-red-500" },
              { icon: FaGithub, color: "bg-gray-700" },
              { icon: FaLinkedin, color: "bg-blue-600" },
            ].map((provider, idx) => (
              <motion.button
                key={idx}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
                className={`${provider.color} p-3 rounded-full text-white`}
              >
                <provider.icon className="w-6 h-6" />
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Sign-In Link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-8 text-center"
        >
          <p className="text-gray-400">
            Already have an account?{" "}
            <a
              href="/signin"
              className="text-cyan-400 hover:underline font-semibold"
            >
              Sign In
            </a>
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SignUp;