import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import Wrapper from "../Shared Component/Wraper/Wraper";
import { toast } from "react-toastify";

const UpdateMovie = () => {
  const { id } = useParams(); // movie ID from URL
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    genre: "",
    releaseYear: "",
    director: "",
    cast: "",
    rating: "",
    duration: "",
    plotSummary: "",
    posterUrl: "",
    language: "",
    country: "",
  });

  useEffect(() => {
    // 🔹 Fetch movie details from backend when ready
    /*
    fetch(`/api/movies/${id}`)
      .then(res => res.json())
      .then(data => setFormData(data))
      .catch(err => console.error(err));
    */

    // 🔹 Dummy data for now
    const dummyData = {
      title: "Inception",
      genre: "Sci-Fi",
      releaseYear: 2010,
      director: "Christopher Nolan",
      cast: "Leonardo DiCaprio, Joseph Gordon-Levitt",
      rating: 8.8,
      duration: 148,
      plotSummary:
        "A thief who steals corporate secrets through dream-sharing technology...",
      posterUrl: "https://i.ibb.co/yp2wzRq/movie1.jpg",
      language: "English",
      country: "USA",
    };
    setFormData(dummyData);
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 🔹 Submit updated movie to backend
    /*
    fetch(`/api/movies/update/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then(res => res.json())
      .then(data => {
        toast.success("Movie updated successfully!");
        navigate("/movies/my-collection");
      })
      .catch(err => toast.error("Failed to update movie"));
    */
    toast.success("Movie updated (dummy)");
    console.log(formData)
  };

  return (
    <div className="min-h-screen bg-base-100 dark:bg-base-200 transition-colors duration-300 py-12 mt-10 px-6">
      <Wrapper>
        <div>
          {/* Heading */}
          <div className="text-center mb-10">
            <h2 className="text-4xl md:text-5xl font-bold text-primary">
              Update Movie
            </h2>
            <p className="text-base-content/70 mt-2 text-lg md:text-xl">
              Edit the details of your movie and save changes.
            </p>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-base-200 dark:bg-base-300 rounded-2xl shadow-lg p-6 md:p-10 flex flex-col gap-4"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Title"
                className="input input-bordered w-full"
                required
              />
              <input
                type="text"
                name="genre"
                value={formData.genre}
                onChange={handleChange}
                placeholder="Genre"
                className="input input-bordered w-full"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="number"
                name="releaseYear"
                value={formData.releaseYear}
                onChange={handleChange}
                placeholder="Release Year"
                className="input input-bordered w-full"
                required
              />
              <input
                type="text"
                name="director"
                value={formData.director}
                onChange={handleChange}
                placeholder="Director"
                className="input input-bordered w-full"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="cast"
                value={formData.cast}
                onChange={handleChange}
                placeholder="Cast (comma separated)"
                className="input input-bordered w-full"
                required
              />
              <input
                type="number"
                name="rating"
                value={formData.rating}
                onChange={handleChange}
                placeholder="Rating"
                className="input input-bordered w-full"
                min="0"
                max="10"
                step="0.1"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="number"
                name="duration"
                value={formData.duration}
                onChange={handleChange}
                placeholder="Duration (minutes)"
                className="input input-bordered w-full"
                required
              />
              <input
                type="text"
                name="posterUrl"
                value={formData.posterUrl}
                onChange={handleChange}
                placeholder="Poster URL"
                className="input input-bordered w-full"
                required
              />
            </div>

            <input
              type="text"
              name="language"
              value={formData.language}
              onChange={handleChange}
              placeholder="Language"
              className="input input-bordered w-full"
            />

            <input
              type="text"
              name="country"
              value={formData.country}
              onChange={handleChange}
              placeholder="Country"
              className="input input-bordered w-full"
            />

            <textarea
              name="plotSummary"
              value={formData.plotSummary}
              onChange={handleChange}
              placeholder="Plot Summary"
              className="textarea textarea-bordered w-full"
              rows={4}
              required
            />

            <button type="submit" className="btn btn-primary mt-4 w-full">
              Update Movie
            </button>
          </form>
        </div>
      </Wrapper>
    </div>
  );
};

export default UpdateMovie;
