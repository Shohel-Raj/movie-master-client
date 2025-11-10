import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../../context/AuthContext";
import { toast } from "react-toastify";
import { FiMenu, FiX, FiSun, FiMoon } from "react-icons/fi";
import Loader from "../Loader/Loader";
import MainIcon from "../Icon/MainIcon";

const Navbar = () => {
  const { user, signOutUser, loading } = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [profileOpen, setProfileOpen] = useState(false);

  console.log(user)
  // Sync theme with Tailwind/DaisyUI
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
              to="/add-movies"
              className={({ isActive }) =>
                `font-medium transition-colors duration-200 ${
                  isActive
                    ? "text-primary border-b-2 border-primary"
                    : "text-gray-600 dark:text-gray-300 hover:text-primary"
                }`
              }
              onClick={() => setMenuOpen(false)}
            >
              Add Movie
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
    <div className="navbar w-full transition-colors duration-300">
      {/* Left: Logo */}
      <MainIcon />

      {/* Center: Desktop Menu */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItems}</ul>
      </div>

      {/* Right */}
      <div className="navbar-end flex items-center gap-2 relative">
        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="btn btn-ghost btn-sm lg:flex"
          aria-label="Toggle Theme"
        >
          {theme === "light" ? (
            <FiMoon className="w-5 h-5" />
          ) : (
            <FiSun className="w-5 h-5 text-yellow-400" />
          )}
        </button>

        {/* Auth Section */}
        {user ? (
          <div className="hidden lg:flex items-center gap-3 cursor-pointer">
            {/* Profile Dropdown */}
            <div className="relative cursor-pointer">
              <button
                onClick={() => setProfileOpen(!profileOpen)}
                className="focus:outline-none"
              >
                <img
                  src={
                    user.photoURL || "https://i.ibb.co/2FsfXqM/default-avatar.png"
                  }
                  alt="User Avatar"
                  className="w-10 h-10 rounded-full border border-gray-400 cursor-pointer"
                />
              </button>

              {/* Dropdown Menu */}
              {profileOpen && (
                <div className="absolute right-0 mt-3 w-56 bg-base-100 dark:bg-base-200 border border-gray-300 dark:border-gray-600 rounded-lg shadow-lg p-4 z-50">
                  <p className="font-semibold text-gray-800 dark:text-white">
                    {user.displayName || "User"}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-white mb-3">
                    {user.email}
                  </p>
                  <button
                    onClick={handleLogout}
                    className="btn btn-error btn-sm w-full text-white"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
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

        {/* Auth Buttons (Mobile) */}
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
