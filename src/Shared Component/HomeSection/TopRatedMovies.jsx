import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import MovieCard from "../MovieCard";

const TopRatedMovies = () => {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "The Dark Knight",
      rating: 9.0,
      genre: "Action",
      releaseYear: 2010,
      poster:
        "https://m.media-amazon.com/images/I/51k0qa6q3WL._AC_SY679_.jpg",
    },
    {
      id: 2,
      title: "Inception",
      rating: 8.8,
      genre: "Sci-Fi",
      releaseYear: 2010,
      poster:
        "https://m.media-amazon.com/images/I/81p+xe8cbnL._AC_SY679_.jpg",
    },
    {
      id: 3,
      title: "Interstellar",
      rating: 8.6,
      releaseYear: 2010,
      genre: "Adventure",
      poster:
        "https://m.media-amazon.com/images/I/71n58iFZ1zL._AC_SY679_.jpg",
    },
    {
      id: 4,
      title: "The Shawshank Redemption",
      rating: 9.3,
      genre: "Drama",
      releaseYear: 2010,
      poster:
        "https://m.media-amazon.com/images/I/51NiGlapXlL._AC_SY679_.jpg",
    },
    {
      id: 5,
      title: "Avengers: Endgame",
      rating: 8.4,
      genre: "Action",
      releaseYear: 2010,
      poster:
        "https://m.media-amazon.com/images/I/81ExhpBEbHL._AC_SY679_.jpg",
    },
    {
      id: 6,
      title: "The Godfather",
      rating: 9.2,
      genre: "Crime",
      releaseYear: 2010,
      poster:
        "https://m.media-amazon.com/images/I/71xZ+8L1cRL._AC_SY679_.jpg",
    },
  ]);

  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  // 🔹 Fetch from database (Uncomment when backend ready)
  /*
  useEffect(() => {
    const fetchTopMovies = async () => {
      try {
        const res = await fetch("https://your-backend-api.com/top-rated");
        const data = await res.json();
        setMovies(data.slice(0, 6));
      } catch (err) {
        console.error("Error fetching movies:", err);
      }
    };
    fetchTopMovies();
  }, []);
  */

  return (
    <section
      ref={ref}
      className="py-16 bg-base-100 dark:bg-base-200 transition-colors duration-300"
    >
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-2">
          🎬 Top Rated Movies
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Discover the highest-rated gems loved by audiences worldwide.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3  gap-6 px-5 md:px-10 max-w-7xl mx-auto">
        {movies.map((movie) => (
      <MovieCard key={movie.id} movie={movie} />
    ))}
      </div>
    </section>
  );
};

export default TopRatedMovies;
