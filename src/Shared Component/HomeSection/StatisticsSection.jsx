import React, { useEffect, useState } from "react";
import { FaFilm, FaUsers, FaStar, FaMedal } from "react-icons/fa";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const StatisticsSection = () => {
  const [stats, setStats] = useState({});

  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });


  useEffect(() => {
    const fetchStats = async () => {
      const res = await fetch("http://localhost:3000/api/stats");
      const data = await res.json();
      setStats(data);
    };
    fetchStats();
  }, []);


  const statItems = [
    {
      id: 1,
      icon: <FaFilm size={30} className="text-primary mb-2" />,
      label: "Total Movies",
      value: stats.totalMovies,
      suffix: "",
    },
    {
      id: 2,
      icon: <FaUsers size={30} className="text-primary mb-2" />,
      label: "Users",
      value: stats.totalUsers,
      suffix: "",
    },
    {
      id: 3,
      icon: <FaStar size={30} className="text-primary mb-2" />,
      label: "Top Rating",
      value: stats.topRatedMovie,
      suffix: "/10",
      decimals: 1,
    },
    {
      id: 4,
      icon: <FaMedal size={30} className="text-primary mb-2" />,
      label: "Awards Won",
      value: stats.awardsWon,
      suffix: "",
    },
  ];

  return (
    <section
      ref={ref}
      className="py-16 bg-base-200 dark:bg-base-100 rounded-lg "
    >
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-2">
          Platform Statistics
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Real-time insights into our growing movie collection and community.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto px-5">
        {statItems.map((stat) => (
          <div
            key={stat.id}
            className="stat-card bg-base-100 dark:bg-base-200 rounded-2xl shadow-md p-6 text-center hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2"
          >
            {stat.icon}
            <h3 className="text-lg font-semibold mb-2">{stat.label}</h3>
            <p className="text-4xl font-bold text-primary">
              {inView ? (
                <CountUp
                  end={stat.value}
                  duration={2.5}
                  decimals={stat.decimals || 0}
                  suffix={stat.suffix}
                />
              ) : (
                0
              )}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatisticsSection;
