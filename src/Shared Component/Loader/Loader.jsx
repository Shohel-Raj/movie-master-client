import React from "react";
import { PropagateLoader } from "react-spinners";
import { motion } from "framer-motion";

const Loader = ({ size = 15, color }) => {
  // Dynamically pick color based on theme
  const isDarkMode =
    document.documentElement.getAttribute("data-theme") === "dark";
  const loaderColor = color || (isDarkMode ? "#00e6e6" : "#36d7b7");

  return (
    <div className="flex flex-col items-center justify-center h-screen   transition-colors duration-300">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <PropagateLoader color={loaderColor} size={size} />
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="mt-6 text-gray-600 dark:text-gray-300 text-lg font-medium"
      >
        Loading, please wait...
      </motion.p>
    </div>
  );
};

export default Loader;
