import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Wrapper from "../Shared Component/Wraper/Wraper";
import { AuthContext } from "../context/AuthContext";
import Loader from "../Shared Component/Loader/Loader";
import { toast } from "react-toastify";

const MyCollection = () => {
  const navigate = useNavigate();
  const [movies, setMovies] = useState([]);
  const { user, loading } = useContext(AuthContext);

  useEffect(() => {
    
    // 🔹 Uncomment when backend is ready
    /*
    fetch("/api/movies/my-collection")
      .then(res => res.json())
      .then(data => setMovies(data))
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
    ];
    setMovies(dummyData);
  }, [user,loading]);

  const handleDelete = (id) => {
    // 🔹 Uncomment when backend is ready
    /*
    fetch(`/api/movies/${id}`, { method: "DELETE" })
      .then(res => res.json())
      .then(() => {
        setMovies(prev => prev.filter(movie => movie._id !== id));
        toast.success("Movie deleted");
      })
      .catch(err => toast.error("Failed to delete"));
    */
    setMovies((prev) => prev.filter((movie) => movie._id !== id));
    toast.success("Movie deleted (dummy)");
  };
  if(loading){
    return <Loader/>
  }

  if (movies.length === 0) {
    return (
      <div className="min-h-screen flex flex-col justify-center mt-10 items-center gap-6 bg-base-100 dark:bg-base-200 transition-colors duration-300 px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-primary">
          Your Collection is Empty!
        </h2>
        <p className="text-base-content/70 text-lg md:text-xl text-center">
          You haven't added any movies yet. Add your favorite movies to manage
          them here.
        </p>
        <button
          onClick={() => navigate("/movies/add")}
          className="btn btn-primary mt-4"
        >
          Add a Movie
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-base-100 mt-10 dark:bg-base-200 transition-colors duration-300 py-12 px-6">
      <Wrapper>
        <div>
          {/* Heading */}
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-bold text-primary">
              My Collection
            </h2>
            <p className="text-base-content/70 mt-2 text-lg md:text-xl">
              Manage all the movies you have added. You can update details or
              remove any movie.
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
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {movies.map((movie, idx) => (
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
                    <th className="flex gap-2">
                      <button
                        onClick={() => navigate(`/movies/update/${movie._id}`)}
                        className="btn btn-ghost btn-xs btn-info"
                      >
                        Update
                      </button>
                      <button
                        onClick={() => handleDelete(movie._id)}
                        className="btn btn-ghost btn-xs btn-error"
                      >
                        Delete
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

export default MyCollection;
