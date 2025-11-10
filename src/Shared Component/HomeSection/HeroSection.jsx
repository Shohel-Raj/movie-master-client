import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const HeroSection = () => {
  // 🔹 Dummy featured movies
  const [featuredMovies, setFeaturedMovies] = useState([
    // {
    //   id: 1,
    //   title: "The Shadow Within",
    //   description:
    //     "A gripping mystery thriller exploring the thin line between truth and illusion.",
    //   image:
    //     "https://images.unsplash.com/photo-1606112219348-204d7d8b94ee?q=80&w=1470&auto=format&fit=crop",
    //   rating: 8.7,
    //   genre: "Mystery / Thriller",
    // },
    // {
    //   id: 2,
    //   title: "Echoes of Tomorrow",
    //   description:
    //     "In a futuristic world, one scientist risks everything to change the past.",
    //   image:
    //     "https://images.unsplash.com/photo-1606112219348-204d7d8b94ee?q=80&w=1470&auto=format&fit=crop",
    //   rating: 9.0,
    //   genre: "Sci-Fi / Drama",
    // },
    // {
    //   id: 3,
    //   title: "Lost Horizon",
    //   description:
    //     "An inspiring tale of survival, friendship, and the pursuit of dreams.",
    //   image:
    //     "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?q=80&w=1470&auto=format&fit=crop",
    //   rating: 8.5,
    //   genre: "Adventure / Drama",
    // },
  ]);
  
  useEffect(() => {
    const fetchFeaturedMovies = async () => {
      try {
        const res = await fetch("https://moviemaster-backend.vercel.app/top-rated");
        const data = await res.json();
        setFeaturedMovies(data);
      } catch (error) {
        console.error("Error fetching featured movies:", error);
      }
    };
    fetchFeaturedMovies();
  }, []);


  return (
    <div className="w-full rounded-lg overflow-hidden">
      <div className="carousel w-full">
        {featuredMovies.map((movie, index) => (
          <div
            key={movie.id}
            id={`slide${index + 1}`}
            className="carousel-item relative w-full transition-all duration-500 "
          >
            {/* 🎥 Background Image */}
            <div
              className="hero min-h-[65vh]"
              style={{
                backgroundImage: `url(${movie.posterUrl})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* 🔹 Overlay adapts to theme */}
              <div className="hero-overlay bg-gradient-to-t from-black/70 via-black/50 to-transparent dark:from-base-100/90 dark:via-base-100/70"></div>

              <div className="hero-content text-center text-neutral-content">
                <div className="max-w-xl">
                  <h1 className="mb-5 text-4xl md:text-5xl font-bold text-primary drop-shadow-md">
                    {movie.title}
                  </h1>
                  <p className="mb-5 text-gray-200 dark:text-gray-300">
                    {movie.plotSummary}
                  </p>

                  <div className="flex justify-center gap-4 mb-5">
                    <span className="badge badge-outline ">
                      {movie.genre}
                    </span>
                    <span className="badge  badge-primary">
                      ⭐ {movie.rating}
                    </span>
                  </div>

                  <div className="flex justify-center gap-3">
                    <Link to={`/movies/${movie._id}`} className="btn btn-primary">
                      🎬 Watch Now
                    </Link>
                    <Link
                      to={`/movies/${movie._id}`}
                      className="btn btn-outline text-white dark:text-base-content"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* 🔹 Carousel Controls */}
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a
                href={`#slide${index === 0 ? featuredMovies.length : index}`}
                className="btn btn-circle btn-sm bg-base-200/70 text-base-content border-none hover:bg-primary hover:text-white"
              >
                ❮
              </a>
              <a
                href={`#slide${
                  index + 2 > featuredMovies.length ? 1 : index + 2
                }`}
                className="btn btn-circle btn-sm bg-base-200/70 text-base-content border-none hover:bg-primary hover:text-white"
              >
                ❯
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
