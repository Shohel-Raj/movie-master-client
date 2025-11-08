import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../../context/AuthContext";
import { toast } from "react-toastify";
import { FiMenu, FiX, FiSun, FiMoon } from "react-icons/fi";
import Loader from "../Loader/Loader";

const Navbar = () => {
  const { user, signOutUser, loading } = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  // Sync theme with HTML attribute for Tailwind/DaisyUI
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleLogout = () => {
    signOutUser()
      .then(() => toast.success("Logged out successfully!"))
      .catch((err) => toast.error(err.message));
  };

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const navItems = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `font-medium transition-colors duration-200 ${
              isActive
                ? "text-primary border-b-2 border-primary"
                : "text-gray-600 dark:text-gray-300 hover:text-primary"
            }`
          }
          onClick={() => setMenuOpen(false)}
        >
          Home
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/all-movies"
          className={({ isActive }) =>
            `font-medium transition-colors duration-200 ${
              isActive
                ? "text-primary border-b-2 border-primary"
                : "text-gray-600 dark:text-gray-300 hover:text-primary"
            }`
          }
          onClick={() => setMenuOpen(false)}
        >
          All Movies
        </NavLink>
      </li>

      {user && (
        <>
          <li>
            <NavLink
              to="/movies/my-collection"
              className={({ isActive }) =>
                `font-medium transition-colors duration-200 ${
                  isActive
                    ? "text-primary border-b-2 border-primary"
                    : "text-gray-600 dark:text-gray-300 hover:text-primary"
                }`
              }
              onClick={() => setMenuOpen(false)}
            >
              My Collection
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/movies/my-watchlist"
              className={({ isActive }) =>
                `font-medium transition-colors duration-200 ${
                  isActive
                    ? "text-primary border-b-2 border-primary"
                    : "text-gray-600 dark:text-gray-300 hover:text-primary"
                }`
              }
              onClick={() => setMenuOpen(false)}
            >
              My Watchlist
            </NavLink>
          </li>
        </>
      )}
    </>
  );

  if (loading) return <Loader />;

  return (
    <div className="navbar  w-full  transition-colors duration-300">
      {/* Left: Logo */}
      <div className="navbar-start">
        <Link
          to="/"
          className="btn btn-ghost hover:bg-transparent pl-0 text-xl font-bold tracking-wide"
        >
          🎬 <span className="text-primary">MovieMaster</span> Pro
        </Link>
      </div>

      {/* Center: Desktop Menu */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItems}</ul>
      </div>

      {/* Right */}
      <div className="navbar-end flex items-center gap-2">
        {/* Theme toggle */}
        <button
          onClick={toggleTheme}
          className="btn btn-ghost btn-sm  lg:flex"
          aria-label="Toggle Theme"
        >
          {theme === "light" ? (
            <FiMoon className="w-5 h-5" />
          ) : (
            <FiSun className="w-5 h-5 text-yellow-400" />
          )}
        </button>

        {/* Desktop Auth Buttons */}
        {user ? (
          <div className="hidden lg:flex items-center gap-3">
            <div className="relative group cursor-pointer">
              <img
                src={
                  user.photoURL || "https://i.ibb.co/2FsfXqM/default-avatar.png"
                }
                alt="User Avatar"
                className="w-10 h-10 rounded-full border border-gray-400"
              />
              <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-sm opacity-0 group-hover:opacity-100 transition-opacity bg-base-200 dark:bg-base-300 rounded px-2 py-1">
                {user.displayName || "User"}
              </span>
            </div>
            <button
              onClick={handleLogout}
              className="btn btn-sm btn-error text-white"
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="hidden lg:flex gap-2">
            <Link to="/login" className="btn btn-sm btn-outline">
              Login
            </Link>
            <Link to="/register" className="btn btn-sm btn-primary">
              Register
            </Link>
          </div>
        )}

        {/* Mobile Hamburger Menu */}
        <button
          className="btn btn-ghost lg:hidden"
          onClick={() => setMenuOpen(true)}
        >
          <FiMenu className="h-6 w-6" />
        </button>
      </div>

      {/* Mobile Overlay Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-full bg-base-100 dark:bg-base-200 z-40 transform transition-transform duration-500 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } flex flex-col items-center justify-center`}
      >
        {/* Close Button */}
        <button
          className="absolute top-5 right-5 btn btn-ghost"
          onClick={() => setMenuOpen(false)}
        >
          <FiX className="h-6 w-6" />
        </button>

        {/* Menu Items */}
        <ul className="menu text-lg space-y-2 text-center">{navItems}</ul>

        {/* Auth Buttons */}
        <div className="mt-8 flex flex-col items-center gap-3">
          {!user ? (
            <>
              <Link
                to="/login"
                onClick={() => setMenuOpen(false)}
                className="btn btn-outline w-40"
              >
                Login
              </Link>
              <Link
                to="/register"
                onClick={() => setMenuOpen(false)}
                className="btn btn-primary w-40"
              >
                Register
              </Link>
            </>
          ) : (
            <button
              onClick={() => {
                handleLogout();
                setMenuOpen(false);
              }}
              className="btn btn-error w-40 text-white"
            >
              Logout
            </button>
          )}
        </div>

       
      </div>
    </div>
  );
};

export default Navbar;
