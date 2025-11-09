import React from "react";
import { motion } from "framer-motion";
import { FaStar, FaCalendarAlt, FaTags } from "react-icons/fa";
import { useNavigate } from "react-router";

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate(`/movies/${movie.id}`); // dynamic route
  };

  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className="bg-base-200 dark:bg-base-100 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 cursor-pointer"
    >
      {/* Movie Poster */}
      <div className="relative">
        <img
          src={movie.poster}
          alt={movie.title}
          className="w-full h-64 object-cover"
        />

        {/* Rating Badge */}
        <div className="absolute top-3 right-3 bg-yellow-500 text-white px-2 py-1 rounded-md flex items-center text-sm font-semibold shadow-md">
          <FaStar className="mr-1" />
          {movie.rating}
        </div>
      </div>

      {/* Movie Info */}
      <div className="p-4 flex flex-col justify-between h-40">
        <h3 className="text-lg font-bold text-primary mb-1 truncate">
          {movie.title}
        </h3>

        <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm mb-2">
          <FaCalendarAlt className="mr-2 text-primary" />
          {movie.releaseYear}
        </div>

        <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm mb-4">
          <FaTags className="mr-2 text-primary" />
          {movie.genre}
        </div>

        <button
          onClick={handleViewDetails}
          className="btn btn-sm bg-primary text-white hover:bg-primary/80 transition-all duration-300 rounded-lg"
        >
          View Details
        </button>
      </div>
    </motion.div>
  );
};

export default MovieCard;
