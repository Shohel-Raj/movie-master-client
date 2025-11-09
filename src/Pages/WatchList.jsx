import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import Wrapper from "../Shared Component/Wraper/Wraper";

const WatchList = () => {
  const navigate = useNavigate();
  const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    // 🔹 Uncomment this when backend is ready
    /*
    fetch("/api/watchlist")
      .then(res => res.json())
      .then(data => setWatchlist(data))
      .catch(err => console.error(err));
    */

    // 🔹 Dummy data for now
    const dummyData = [
      {
        _id: 1,
        title: "Inception",
        genre: "Sci-Fi",
        releaseYear: 2010,
        posterUrl: "https://i.ibb.co/yp2wzRq/movie1.jpg",
      },
      {
        _id: 2,
        title: "The Dark Knight",
        genre: "Action",
        releaseYear: 2008,
        posterUrl: "https://i.ibb.co/qmDfWzB/movie3.jpg",
      },
      {
        _id: 3,
        title: "Inception",
        genre: "Sci-Fi",
        releaseYear: 2010,
        posterUrl: "https://i.ibb.co/yp2wzRq/movie1.jpg",
      },
      {
        _id: 4,
        title: "The Dark Knight",
        genre: "Action",
        releaseYear: 2008,
        posterUrl: "https://i.ibb.co/qmDfWzB/movie3.jpg",
      },
      {
        _id: 5,
        title: "Inception",
        genre: "Sci-Fi",
        releaseYear: 2010,
        posterUrl: "https://i.ibb.co/yp2wzRq/movie1.jpg",
      },
      {
        _id: 6,
        title: "The Dark Knight",
        genre: "Action",
        releaseYear: 2008,
        posterUrl: "https://i.ibb.co/qmDfWzB/movie3.jpg",
      },
      {
        _id: 7,
        title: "Inception",
        genre: "Sci-Fi",
        releaseYear: 2010,
        posterUrl: "https://i.ibb.co/yp2wzRq/movie1.jpg",
      },
      {
        _id: 8,
        title: "The Dark Knight",
        genre: "Action",
        releaseYear: 2008,
        posterUrl: "https://i.ibb.co/qmDfWzB/movie3.jpg",
      },
    ];
    setWatchlist(dummyData);
  }, []);

  const handleRemove = (id) => {
    // 🔹 Uncomment when backend is ready
    /*
    fetch(`/api/watchlist/${id}`, { method: "DELETE" })
      .then(res => res.json())
      .then(() => {
        setWatchlist(prev => prev.filter(movie => movie._id !== id));
        toast.success("Removed from watchlist");
      })
      .catch(err => toast.error("Failed to remove"));
    */
    setWatchlist((prev) => prev.filter((movie) => movie._id !== id));
    toast.success("Removed from watchlist (dummy)");
  };

  if (watchlist.length === 0) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center mt-10 gap-6 bg-base-100 dark:bg-base-200 transition-colors duration-300 px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-primary">
          My Watchlist
        </h2>
        <p className="text-base-content/70 text-lg md:text-xl text-center">
          You haven't added any movies to your watchlist yet. Start exploring
          and add your favorites!
        </p>
        <button
          onClick={() => navigate("/all-movies")}
          className="btn btn-primary mt-4"
        >
          Browse Movies
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-base-100 dark:bg-base-200 mt-10 transition-colors duration-300 py-12 px-6">
      <Wrapper>
        <div>
          {/* Heading */}
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-bold text-primary">
              My Watchlist
            </h2>
            <p className="text-base-content/70 mt-2 text-lg md:text-xl">
              Here are all the movies you've added to your watchlist. You can
              remove any movie you no longer want to keep.
            </p>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="table w-full">
              <thead>
                <tr>
                  <th></th>
                  <th>Movie</th>
                  <th>Genre</th>
                  <th>Release Year</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {watchlist.map((movie, idx) => (
                  <tr key={movie._id}>
                    <th>{idx + 1}</th>
                    <td className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={movie.posterUrl} alt={movie.title} />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{movie.title}</div>
                      </div>
                    </td>
                    <td>{movie.genre}</td>
                    <td>{movie.releaseYear}</td>
                    <th>
                      <button
                        onClick={() => handleRemove(movie._id)}
                        className="btn btn-ghost btn-xs btn-error"
                      >
                        Remove
                      </button>
                    </th>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default WatchList;
