import React, { useContext, useState } from "react";
import { toast } from "react-toastify";
import Wrapper from "../Shared Component/Wraper/Wraper";
import { AuthContext } from "../context/AuthContext";
import Loader from "../Shared Component/Loader/Loader";

const AddMovie = () => {
  const { user, loading } = useContext(AuthContext);
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

  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    const dataToSubmit = {
      ...formData,
      addedBy: user?.email, // assuming 'user' comes from your auth context or props
    };
    console.log(dataToSubmit);

    // 🔹 Simulate backend submission
    setTimeout(() => {
      // 🔹 Uncomment for real backend submission
      /*
      fetch("/api/movies/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
        .then(res => res.json())
        .then(data => {
          toast.success("Movie added successfully!");
        })
        .catch(err => toast.error("Failed to add movie"));
      */
      toast.success("Movie added (dummy)");

      // Reset form after submission
      setFormData({
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
      setSubmitting(false);
    }, 1000); // simulate 1 second delay
  };
  const handleReset = () => {
    setFormData({
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
  };

  if (loading) {
    return <Loader />;
  }
  return (
    <div className="min-h-screen bg-base-100 mt-10 dark:bg-base-200 transition-colors duration-300 py-12 px-6">
      <Wrapper>
        <div>
          {/* Heading */}
          <div className="text-center mb-10">
            <h2 className="text-4xl md:text-5xl font-bold text-primary">
              Add a Movie
            </h2>
            <p className="text-base-content/70 mt-2 text-lg md:text-xl">
              Fill in the details below to add a new movie to your collection.
            </p>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-base-200 dark:bg-base-300 rounded-2xl shadow-lg p-6 md:p-10 flex flex-col gap-6 transition-all duration-300"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Title"
                className="input input-bordered w-full bg-base-100 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition"
                required
              />
              <input
                type="text"
                name="genre"
                value={formData.genre}
                onChange={handleChange}
                placeholder="Genre"
                className="input input-bordered w-full bg-base-100 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition"
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
                className="input input-bordered w-full bg-base-100 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition"
                required
              />
              <input
                type="text"
                name="director"
                value={formData.director}
                onChange={handleChange}
                placeholder="Director"
                className="input input-bordered w-full bg-base-100 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition"
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
                className="input input-bordered w-full bg-base-100 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition"
                required
              />
              <input
                type="number"
                name="rating"
                value={formData.rating}
                onChange={handleChange}
                placeholder="Rating"
                className="input input-bordered w-full bg-base-100 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition"
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
                className="input input-bordered w-full bg-base-100 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition"
                required
              />
              <input
                type="text"
                name="posterUrl"
                value={formData.posterUrl}
                onChange={handleChange}
                placeholder="Poster URL"
                className="input input-bordered w-full bg-base-100 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="language"
                value={formData.language}
                onChange={handleChange}
                placeholder="Language"
                className="input input-bordered w-full bg-base-100 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition"
              />
              <input
                type="text"
                name="country"
                value={formData.country}
                onChange={handleChange}
                placeholder="Country"
                className="input input-bordered w-full bg-base-100 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition"
              />
            </div>

            <textarea
              name="plotSummary"
              value={formData.plotSummary}
              onChange={handleChange}
              placeholder="Plot Summary"
              className="textarea textarea-bordered w-full bg-base-100 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition"
              rows={4}
              required
            />

            {/* Buttons */}
            <div className="flex flex-col  gap-4 mt-4">
              <button
                type="submit"
                disabled={submitting}
                className={`btn btn-primary w-full md:w-auto transition hover:bg-primary/80 ${
                  submitting ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {submitting ? "Submitting..." : "Add Movie"}
              </button>
              <button
                type="button"
                disabled={submitting}
                onClick={handleReset}
                className={`btn btn-outline w-full md:w-auto transition hover:bg-base-100 ${
                  submitting ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                Reset
              </button>
            </div>
          </form>
        </div>
      </Wrapper>
    </div>
  );
};

export default AddMovie;
