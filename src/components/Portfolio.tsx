import React from "react";
import { motion } from "framer-motion";

const Portfolio: React.FC = () => (
  <motion.div
    className="p-8 bg-gray-900 text-white min-h-screen"
    initial={{ x: "-100vw" }}
    animate={{ x: 0 }}
    transition={{ type: "spring", stiffness: 50 }}
  >
    <h1 className="text-4xl font-bold mb-4 text-shadow-md">Portfolio</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[1, 2, 3, 4, 5, 6].map((item) => (
        <motion.div
          key={item}
          className="h-64 bg-gray-700 rounded-lg flex items-center justify-center"
          whileHover={{ scale: 1.05 }}
        >
          <p className="text-lg font-bold">Image {item}</p>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

export default Portfolio;
