import React, { useEffect, useState } from "react";
import MovieCard from "../Shared Component/MovieCard";
import { FaChevronDown } from "react-icons/fa";
import { PropagateLoader } from "react-spinners";
import Loader from "../Shared Component/Loader/Loader";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("");
  const [ratingRange, setRatingRange] = useState([0, 10]);
  const [showGenreDropdown, setShowGenreDropdown] = useState(false);
  const [loading, setLoading] = useState(false);

  const genres = ["Action", "Comedy", "Drama", "Horror", "Sci-Fi", "Romance"];

  useEffect(() => {
    setLoading(true);

    // Simulate API fetch delay
    setTimeout(() => {
      // 🔹 Dummy data for now
      const dummyMovies = [
        {
          _id: 1,
          title: "The Infinite Sky",
          genre: "Sci-Fi",
          releaseYear: 2024,
          rating: 8.5,
          image: "https://i.ibb.co/yp2wzRq/movie1.jpg",
        },
        {
          _id: 2,
          title: "Love & Echoes",
          genre: "Romance",
          releaseYear: 2023,
          rating: 7.9,
          image: "https://i.ibb.co/M1PtVHz/movie2.jpg",
        },
        {
          _id: 3,
          title: "Silent Storm",
          genre: "Action",
          releaseYear: 2022,
          rating: 9.1,
          image: "https://i.ibb.co/qmDfWzB/movie3.jpg",
        },
        {
          _id: 4,
          title: "Haunted Hollow",
          genre: "Horror",
          releaseYear: 2021,
          rating: 8.2,
          image: "https://i.ibb.co/vhqzJZL/movie4.jpg",
        },
        {
          _id: 5,
          title: "Comedy Chaos",
          genre: "Comedy",
          releaseYear: 2020,
          rating: 7.4,
          image: "https://i.ibb.co/Jcv6JQ9/movie5.jpg",
        },
        {
          _id: 6,
          title: "Tears of Time",
          genre: "Drama",
          releaseYear: 2023,
          rating: 8.9,
          image: "https://i.ibb.co/M1PtVHz/movie6.jpg",
        },
      ];

      // Filter movies based on selectedGenre & ratingRange
      const filteredMovies = dummyMovies.filter(
        (movie) =>
          (selectedGenre ? movie.genre === selectedGenre : true) &&
          movie.rating >= ratingRange[0] &&
          movie.rating <= ratingRange[1]
      );

      setMovies(filteredMovies);
      setLoading(false);
    }, 1000); // 1 second delay to simulate fetch
  }, [selectedGenre, ratingRange]);

  const handleGenreSelect = (genre) => {
    setSelectedGenre(genre);
    setShowGenreDropdown(false);
  };

  const handleClearFilters = () => {
    setSelectedGenre("");
    setRatingRange([0, 10]);
  };

  return (
    <div className="min-h-screen bg-base-100 dark:bg-base-200 py-12 mt-10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            Explore All Movies
          </h2>
          <p className="text-base-content/70 mt-2">
            Browse movies by genre or rating to find your next favorite watch!
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-between gap-6 mb-12 bg-base-300 px-4 py-5 rounded-xl shadow-md hover:bg-base-200 transition">
          {/* Genre Dropdown */}
          <div className="relative">
            <button
              onClick={() => setShowGenreDropdown(!showGenreDropdown)}
              className="flex items-center justify-between gap-2 bg-base-300 px-4 py-2 rounded-xl shadow-md hover:bg-base-200 transition"
            >
              <span>{selectedGenre || "Select Genre"}</span>
              <FaChevronDown size={18} />
            </button>

            {showGenreDropdown && (
              <div className="absolute mt-2 w-48 bg-base-200 rounded-xl shadow-lg z-20 overflow-hidden">
                {genres.map((genre) => (
                  <div
                    key={genre}
                    onClick={() => handleGenreSelect(genre)}
                    className="px-4 py-2 hover:bg-primary hover:text-white cursor-pointer transition"
                  >
                    {genre}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Rating Range */}
          <div className="flex items-center gap-2 bg-base-300 p-3 rounded-xl shadow-md">
            <span className="font-medium text-base-content/80">⭐ Rating:</span>
            <input
              type="number"
              min="0"
              max="10"
              value={ratingRange[0]}
              onChange={(e) =>
                setRatingRange([Number(e.target.value), ratingRange[1]])
              }
              className="w-16 bg-base-100 rounded px-2 text-center border border-base-300"
            />
            <span>–</span>
            <input
              type="number"
              min="0"
              max="10"
              value={ratingRange[1]}
              onChange={(e) =>
                setRatingRange([ratingRange[0], Number(e.target.value)])
              }
              className="w-16 bg-base-100 rounded px-2 text-center border border-base-300"
            />
          </div>

          {/* Clear Filters */}
          <div>
            <button
              onClick={handleClearFilters}
              className="bg-red-500 text-white px-4 py-2 rounded-xl shadow-md hover:bg-red-600 transition"
            >
              Clear Filters
            </button>
          </div>
        </div>

        {/* Movies Grid */}
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <Loader />
          </div>
        ) : movies.length === 0 ? (
          <div className="text-center py-20 text-lg text-base-content/70">
            <p>No movies available</p>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {movies.map((movie) => (
              <MovieCard key={movie._id} movie={movie} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Movies;
