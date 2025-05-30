import React from "react";
import { motion } from "framer-motion";
import {useNavigate} from "react-router-dom"
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  function formHandling(e){
e.preventDefault();

  }
  const navigate = useNavigate();
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="bg-gradient-to-br from-blue-900 to-purple-900 text-white py-12"
    >
      <div className="container mx-auto px-4">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              InterviewCove
            </h3>
            <p className="text-gray-300">
              Your go-to platform for mastering interviews. Practice with peers, track your progress, and land your dream job.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-xl font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              
              <li onClick={()=> navigate("/")} className="text-gray-300 hover:text-cyan-400 transition-colors cursor-pointer">
                  Home
                
              </li>
              <li onClick={()=> navigate("/start-session")} className="text-gray-300 hover:text-cyan-400 transition-colors cursor-pointer">
                  Start Session
                
              </li>
              
              <li onClick={()=> navigate("/session:history")} className="text-gray-300 hover:text-cyan-400 transition-colors cursor-pointer">
                  Leaderboard
                
              </li>
             
              
              <li>
                <a href="https://www.linkedin.com/in/rehman-ali-80497b204/" target="_blank" className="text-gray-300 hover:text-cyan-400 transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter & Social Media */}
          <div className="space-y-4">
            <h4 className="text-xl font-semibold">Stay Updated</h4>
            <p className="text-gray-300">
              Subscribe to our newsletter for the latest updates and tips.
            </p>
            <form className="flex space-x-2" onSubmit={(e)=> forHandling(e)}>
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-cyan-400 text-black rounded-lg hover:bg-cyan-500 transition-colors"
              >
                Subscribe
              </button>
            </form>

            {/* Social Media Links */}
            <div className="flex space-x-4 mt-4">
              <a
                href="linkedin.com/in/rehman-ali-80497b204/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-cyan-400 transition-colors"
              >
                <FaLinkedin className="w-6 h-6" />
              </a>
              <a
                href="https://github.com/rehmeee"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-cyan-400 transition-colors"
              >
                <FaGithub className="w-6 h-6" />
              </a>
             
              <a
                href="mailto:chrehmanali5@gmail.com"
                className="text-gray-300 hover:text-cyan-400 transition-colors"
              >
                <FaEnvelope className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-8" />

        {/* Copyright */}
        <div className="text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} InterviewCove. All rights reserved.
          </p>
          <p className="text-sm mt-2">
            Made with ❤️ by{" "}
            <a
              href="https://github.com/rehmeee"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:underline"
            >
              Rehman Ali
            </a>
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;