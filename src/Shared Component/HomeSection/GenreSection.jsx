import React from "react";
import { useNavigate } from "react-router";
import { motion } from "framer-motion";
import {
  FaFistRaised,
  FaTheaterMasks,
  FaLaughSquint,
  FaRocket,
  FaHeart,
  FaGhost,
  FaMapMarkedAlt,
  FaPaw,
} from "react-icons/fa";

const GenreSection = () => {
  const navigate = useNavigate();

  // 🔹 Genre List with unique icons & colors
  const genres = [
    { id: 1, name: "Action", icon: <FaFistRaised />, color: "bg-red-500/10 text-red-600" },
    { id: 2, name: "Drama", icon: <FaTheaterMasks />, color: "bg-yellow-500/10 text-yellow-600" },
    { id: 3, name: "Comedy", icon: <FaLaughSquint />, color: "bg-green-500/10 text-green-600" },
    { id: 4, name: "Sci-Fi", icon: <FaRocket />, color: "bg-blue-500/10 text-blue-600" },
    { id: 5, name: "Romance", icon: <FaHeart />, color: "bg-pink-500/10 text-pink-600" },
    { id: 6, name: "Horror", icon: <FaGhost />, color: "bg-purple-500/10 text-purple-600" },
    { id: 7, name: "Adventure", icon: <FaMapMarkedAlt />, color: "bg-orange-500/10 text-orange-600" },
    { id: 8, name: "Animation", icon: <FaPaw />, color: "bg-teal-500/10 text-teal-600" },
  ];

  const handleGenreClick = (genre) => {
    navigate("/all-movies", { state: { selectedGenre: genre } });
  };

  return (
    <section className="py-16 bg-base-200 dark:bg-base-100 rounded-xl mt-10">
      <div className="max-w-6xl mx-auto px-5 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-2">
          Browse by Genre
        </h2>
        <p className="text-gray-500 dark:text-gray-400 mb-10">
          Explore your favorite movie types — from heart-pounding action to emotional drama.
        </p>

        {/* Genre Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {genres.map((genre) => (
            <motion.div
              key={genre.id}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleGenreClick(genre.name)}
              className={`cursor-pointer p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 flex flex-col items-center justify-center gap-3 ${genre.color}`}
            >
              <div className="text-4xl">{genre.icon}</div>
              <h3 className="font-semibold text-lg">{genre.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GenreSection;
