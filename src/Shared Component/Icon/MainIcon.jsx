import React from "react";
import { Link } from "react-router";
import { RiMovieAiLine } from "react-icons/ri";

const MainIcon = () => {
  return (
    <div className="navbar-start">
      <Link
        to="/"
        className="btn btn-ghost hover:bg-transparent pl-0 text-xl font-bold tracking-wide flex items-center gap-1"
      >
        <RiMovieAiLine className="text-primary text-2xl" />
        <span className="text-primary">MovieMaster</span> Pro
      </Link>
    </div>
  );
};

export default MainIcon;
