import React from "react";
import { motion } from "framer-motion";

// Sample icons (replace with your own images or SVGs)
import dbIcon from "../assets/db.svg";
import osIcon from "../assets/os.svg";
import netIcon from "../assets/network.svg";
import webIcon from "../assets/web.svg";
import oopIcon from "../assets/oop.svg";
import sqlIcon from "../assets/sql.svg";
import jsIcon from "../assets/js.svg";

const subjects = [
  { title: "Database", icon: dbIcon },
  { title: "Operating System", icon: osIcon },
  { title: "Networking", icon: netIcon },
  { title: "Web Development", icon: webIcon },
  { title: "JavaScript", icon: jsIcon },
  { title: "SQL", icon: sqlIcon },
  { title: "OOP", icon: oopIcon },
];

const SubjectCard = ({ item }) => (
  <motion.div
    className="w-40 h-52 p-4 bg-[#d9e9f6] rounded-lg shadow-md cursor-pointer flex flex-col items-center justify-center hover:bg-[#c2dff2] transition-colors"
    whileHover={{
      scale: 1.05,
      boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
    }}
    transition={{
      type: "spring",
      stiffness: 300,
      damping: 10,
    }}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
  >
    <motion.img
      src={item.icon}
      alt={item.title}
      className="h-16 w-16 mb-4"
      whileHover={{ rotate: 15 }}
      transition={{ type: "spring", stiffness: 300 }}
    />
    <p className="text-lg font-semibold text-gray-700 text-center">
      {item.title}
    </p>
  </motion.div>
);

const SubjectsGrid = () => {
  // Split into two rows: row1 = 4 cards, row2 = 3 cards
  const row1 = subjects.slice(0, 4);
  const row2 = subjects.slice(4);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="container mx-auto px-4 py-12"
    >
      <h2 className="text-4xl font-extrabold mb-12 text-center bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text text-transparent drop-shadow-lg">
        Unlock Your Potential
      </h2>

      <div className="flex flex-col items-center space-y-8">
        {/* Row 1: 4 cards */}
        <div className="flex flex-wrap justify-center gap-8">
          {row1.map((item, idx) => (
            <SubjectCard key={idx} item={item} />
          ))}
        </div>

        {/* Row 2: 3 cards, with responsive offset */}
        <div className="flex flex-wrap justify-center gap-8 sm:translate-x-0 md:translate-x-6 lg:translate-x-12">
          {row2.map((item, idx) => (
            <SubjectCard key={idx} item={item} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default SubjectsGrid;