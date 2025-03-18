import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-[#1b2a41] text-white py-4 px-6 md:px-12 shadow-md">
      <div className="flex justify-between items-center">
      


        <div className="text-xl font-bold flex items-center space-x-2">
          <span className="text-white">🧠 InterviewCove</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-lg">
          <li className="hover:text-gray-300 transition"><a href="#">Home</a></li>
          <li className="hover:text-gray-300 transition"><a href="#">Test Session</a></li>
          <li className="hover:text-gray-300 transition"><a href="#">Leaderboard</a></li>
          <li className="hover:text-gray-300 transition"><a href="#">Login/Sign Up</a></li>
        </ul>

        {/* Mobile Menu Toggle */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
          {menuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden flex flex-col bg-[#1b2a41] text-lg mt-4 space-y-4 py-4 px-6 rounded-lg shadow-md">
          <li><a href="#" className="block py-2 hover:text-gray-300">Home</a></li>
          <li><a href="#" className="block py-2 hover:text-gray-300">Test Session</a></li>
          <li><a href="#" className="block py-2 hover:text-gray-300">Leaderboard</a></li>
          <li><a href="#" className="block py-2 hover:text-gray-300">Login/Sign Up</a></li>
        </ul>
      )}
    </nav>
  );
}
