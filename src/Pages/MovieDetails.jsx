import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import Loader from "../Shared Component/Loader/Loader";
import Wrapper from "../Shared Component/Wraper/Wraper";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loadingMovie, setLoading] = useState(true);
  const [watchlistAdded, setWatchlistAdded] = useState(false);
  const { user,  loading } = useContext(AuthContext);
  // 🔹 Simulate current user (replace with actual auth in production)
  const currentUser = user?.email; 
  useEffect(() => {

    fetch(`https://moviemaster-backend.vercel.app/movies/${id}`)
      .then(res => res.json())
      .then(data => setMovie(data))
      .catch(err => console.error("Error fetching movie details"))
      .finally(() => setLoading(false));


   
  }, [id]);

const handleAddToWatchlist = async (movie) => {
  try {

    const userEmail = user?.email || "guest@example.com"; 

    const watchlistItem = {
       movieId: movie._id,
      title: movie.title,
      posterUrl: movie.posterUrl || movie.image,
      genre: movie.genre,
      rating: movie.rating,
      releaseYear: movie.releaseYear,
      userEmail: userEmail,

      addedAt: new Date().toISOString(),
    };

    const response = await fetch(`https://moviemaster-backend.vercel.app/watchlist`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(watchlistItem),
    });

    const data = await response.json();

    if (data.insertedId) {
      setWatchlistAdded(true);
      toast.success(`${movie.title} added to watchlist!`);
    } else {
      toast.error("Failed to add to watchlist.");
    }
  } catch (error) {
    console.error("Error adding to watchlist:", error);
    toast.error("Something went wrong. Try again later.");
  }
  
};


  if (loading || loadingMovie ) return <Loader />;
  if (!movie) return <p className="text-center mt-20">Movie not found</p>;

  const isOwner = currentUser === movie?.addedBy;

  return (
    <div className="min-h-screen bg-base-100 dark:bg-base-200 py-12 mt-10 px-6 transition-colors duration-300">
      <Wrapper>
        <div>
          {/* Heading */}
          <div className="text-center mb-10">
            <h2 className="text-4xl md:text-5xl font-bold text-primary">
              Movie Details
            </h2>
            <p className="text-base-content/70 mt-2 text-lg">
              Explore all the information about your selected movie
            </p>
          </div>

          {/* Movie Info Card */}
          <div className="bg-base-200 dark:bg-base-300 rounded-2xl shadow-lg p-6 md:p-10 flex flex-col md:flex-row gap-8">
            {/* Poster */}
            <div className="md:w-1/3 flex justify-center">
              <img
                src={movie.posterUrl}
                alt={movie.title}
                className="rounded-xl shadow-md w-full object-cover"
              />
            </div>

            {/* Movie Info */}
            <div className="md:w-2/3 flex flex-col gap-4">
              <h1 className="text-3xl font-bold text-primary">{movie.title}</h1>
              <p className="text-base-content/80">
                <span className="font-semibold">Genre:</span> {movie.genre}
              </p>
              <p className="text-base-content/80">
                <span className="font-semibold">Release Year:</span>{" "}
                {movie.releaseYear}
              </p>
              <p className="text-base-content/80">
                <span className="font-semibold">Duration:</span>{" "}
                {movie.duration} min
              </p>
              <p className="text-base-content/80">
                <span className="font-semibold">Rating:</span> {movie.rating} ⭐
              </p>
              <p className="text-base-content/80">
                <span className="font-semibold">Director:</span>{" "}
                {movie.director}
              </p>
              <p className="text-base-content/80">
                <span className="font-semibold">Cast:</span> {movie.cast}
              </p>
              <p className="text-base-content/80 mt-2">
                <span className="font-semibold">Plot Summary:</span>{" "}
                {movie.plotSummary}
              </p>

              {/* Add to Watchlist Button */}
              <div className="mt-4">
                {isOwner ? (
                  <button
                    className="bg-gray-400 text-white px-5 py-2 rounded-xl cursor-not-allowed"
                    disabled
                  >
                    Owner
                  </button>
                ) : watchlistAdded ? (
                  <button
                    className="bg-green-500 text-white px-5 py-2 rounded-xl cursor-default"
                    disabled
                  >
                    Added to Watchlist
                  </button>
                ) : (
                  <button
                    className="bg-primary text-white px-5 py-2 rounded-xl hover:bg-primary/80 transition"
                    onClick={()=>{handleAddToWatchlist(movie)}}
                  >
                    Add to Watchlist
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default MovieDetails;
