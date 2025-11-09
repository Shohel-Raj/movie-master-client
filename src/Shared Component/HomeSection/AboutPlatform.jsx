import React from "react";
import { motion } from "framer-motion";
import { FaFilm, FaUsers, FaFilter, FaHeart } from "react-icons/fa";

const AboutPlatform = () => {
  return (
    <section className="py-20 bg-base-100 dark:bg-base-200">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        {/* Left Image / Illustration */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <img
            src="./about.jpg"
            alt="About MovieMaster Pro"
            className="rounded-2xl shadow-2xl w-full  object-cover"
          />
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-5"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            About <span className="text-secondary">MovieMaster Pro</span>
          </h2>

          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            MovieMaster Pro is your all-in-one movie management system — 
            designed for film enthusiasts to explore, organize, and personalize their movie experience.
            Whether you’re curating your own collection or discovering hidden gems, 
            our platform keeps everything at your fingertips.
          </p>

          <div className="grid grid-cols-2 gap-4 pt-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 bg-base-200 dark:bg-base-100 p-4 rounded-xl shadow-sm"
            >
              <FaFilm className="text-primary text-2xl" />
              <p className="font-medium">Track Your Movies</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 bg-base-200 dark:bg-base-100 p-4 rounded-xl shadow-sm"
            >
              <FaUsers className="text-primary text-2xl" />
              <p className="font-medium">Connect with Others</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 bg-base-200 dark:bg-base-100 p-4 rounded-xl shadow-sm"
            >
              <FaFilter className="text-primary text-2xl" />
              <p className="font-medium">Advanced Filters</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 bg-base-200 dark:bg-base-100 p-4 rounded-xl shadow-sm"
            >
              <FaHeart className="text-primary text-2xl" />
              <p className="font-medium">Personal Collections</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutPlatform;
