import React from "react";
import { motion } from "framer-motion";
import { currentProjects } from "../constants";

const Current = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <div className="p-4 bg-neutral-950 shadow-xl backdrop-blur-xl rounded-lg">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <h2 className="text-xl font-bold text-white mb-4">Current Projects</h2>
        
        <h3 className="text-lg font-semibold text-white mt-4 mb-2">Ongoing:</h3>
        <motion.ul className="space-y-2">
          {currentProjects.ongoing.map((project, index) => (
            <motion.li 
              key={index} 
              variants={itemVariants}
              className="flex items-center text-white"
            >
              <span className="mr-2 text-green-500">✓</span>
              {project}
            </motion.li>
          ))}
        </motion.ul>

        <h3 className="text-lg font-semibold text-white mt-4 mb-2">Planned:</h3>
        <motion.ul className="space-y-2">
          {currentProjects.planned.map((project, index) => (
            <motion.li 
              key={index} 
              variants={itemVariants}
              className="flex items-center text-gray-400"
            >
              <span className="mr-2">○</span>
              {project}
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </div>
  );
};

export default Current;