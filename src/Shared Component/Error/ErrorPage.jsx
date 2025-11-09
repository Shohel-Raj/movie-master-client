import React from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import { FiHome, FiAlertTriangle } from "react-icons/fi";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-base-100 dark:bg-base-200 text-center transition-colors duration-300">
      {/* Animated Icon */}
      <motion.div
        initial={{ scale: 0, rotate: 0 }}
        animate={{ scale: 1, rotate: [0, 10, -10, 0] }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="flex flex-col items-center mb-6"
      >
        <FiAlertTriangle className="text-6xl text-primary mb-2" />
        <h1 className="text-6xl font-extrabold text-gray-800 dark:text-gray-100">
          404
        </h1>
      </motion.div>

      {/* Message */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-lg text-gray-600 dark:text-gray-300 max-w-md mb-8"
      >
        Oops! The page you’re looking for doesn’t exist or has been moved.
      </motion.p>

      {/* Button */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.6, type: "spring", stiffness: 120 }}
      >
        <Link
          to="/"
          className="btn btn-primary flex items-center gap-2 text-white shadow-md hover:shadow-lg transition-all duration-300"
        >
          <FiHome className="w-5 h-5" /> Go Back Home
        </Link>
      </motion.div>

      {/* Subtle background motion shape */}
      <motion.div
        className="absolute inset-0 -z-10 opacity-10"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.1 }}
        transition={{ duration: 1.5, repeat: Infinity, repeatType: "mirror" }}
      >
        <div className="w-64 h-64 bg-primary rounded-full blur-3xl absolute top-1/3 left-1/3"></div>
      </motion.div>
    </div>
  );
};

export default ErrorPage;
