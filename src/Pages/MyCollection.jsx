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
  const [showModal, setShowModal] = useState(false);
  const [selectedMovieId, setSelectedMovieId] = useState(null);

  useEffect(() => {
    // 🔹 Uncomment when backend is ready
    
    fetch(`http://localhost:3000/my-collection/${user?.email}`)
      .then(res => res.json())
      .then(data => setMovies(data))
      .catch(err => console.error(err));
  

   
  }, [user, loading]);

  const handleDelete = (id) => {
 
    fetch(`http://localhost:3000/movies/${id}`, { method: "DELETE" })
      .then(res => res.json())
      .then(() => {
        setMovies(prev => prev.filter(movie => movie._id !== id));
        setShowModal(false);
        toast.success("Movie deleted");
      })
      .catch((err) =>{ toast.error("Failed to delete")
        setShowModal(false);
      }
      
    );

    // setMovies((prev) => prev.filter((movie) => movie._id !== id));
    // toast.success("Movie deleted (dummy)");
    // 
    // setSelectedMovieId(null);
  };

  const confirmDelete = (id) => {
    setSelectedMovieId(id);
    setShowModal(true);
  };

  if (loading) {
    return <Loader />;
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
                        onClick={() => confirmDelete(movie._id)}
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

          {/* Delete Confirmation Modal */}
          {showModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
              <div className="bg-base-200 dark:bg-base-300 p-6 rounded-2xl shadow-lg w-96">
                <h3 className="text-xl font-bold text-primary mb-4">
                  Confirm Deletion
                </h3>
                <p className="text-base-content/70 mb-6">
                  Are you sure you want to delete this movie? This action cannot
                  be undone.
                </p>
                <div className="flex justify-end gap-4">
                  <button
                    className="btn btn-outline"
                    onClick={() => {
                      setShowModal(false);
                      setSelectedMovieId(null);
                    }}
                  >
                    Cancel
                  </button>
                  <button
                    className="btn btn-error"
                    onClick={() => handleDelete(selectedMovieId)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </Wrapper>
    </div>
  );
};

export default MyCollection;
