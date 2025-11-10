import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import MovieCard from "../MovieCard";

const TopRatedMovies = () => {
  const [movies, setMovies] = useState([ ]);

  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

 

  useEffect(() => {
    const fetchTopMovies = async () => {
      try {
        const res = await fetch("https://moviemaster-backend.vercel.app/top-rated");
        const data = await res.json();
        setMovies(data.slice(0, 6));
      } catch (err) {
        console.error("Error fetching movies:", err);
      }
    };
    fetchTopMovies();
  }, []);


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
