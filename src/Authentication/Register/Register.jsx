import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../context/AuthContext";
import { toast } from "react-toastify";
import { FcGoogle } from "react-icons/fc";

const Register = () => {
  const { createUser, updateUserProfile, googleSignin } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    // Password Validation
    if (!/(?=.*[A-Z])/.test(password)) {
      setError("Password must contain at least one uppercase letter.");
      toast.error("Password must contain at least one uppercase letter.");
      return;
    } else if (!/(?=.*[a-z])/.test(password)) {
      setError("Password must contain at least one lowercase letter.");
      toast.error("Password must contain at least one lowercase letter.");
      return;
    } else if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      toast.error("Password must be at least 6 characters long.");
      return;
    }

    // Create User
    createUser(email, password)
      .then(() => {
        updateUserProfile(name, photo)
          .then(() => {
            toast.success("Registration successful!");
            navigate("/");
          })
          .catch((err) => toast.error(err.message));
      })
      .catch((err) => {
        setError(err.message);
        toast.error(err.message);
      });
  };

  // Google Login
  const handleGoogleLogin = () => {
    googleSignin()
      .then(() => {
        toast.success("Logged in with Google!");
        navigate("/");
      })
      .catch((err) => toast.error(err.message));
  };

  return (
    <div className="flex justify-center items-center min-h-[80vh] bg-base-200 px-4">
      <div className="bg-base-100 p-8 rounded-xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-4 text-primary">
          Register
        </h2>

        <form onSubmit={handleRegister} className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Full Name</label>
            <input
              type="text"
              name="name"
              required
              className="input input-bordered w-full"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Photo URL</label>
            <input
              type="text"
              name="photo"
              required
              className="input input-bordered w-full"
              placeholder="Your photo URL"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              name="email"
              required
              className="input input-bordered w-full"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Password</label>
            <input
              type="password"
              name="password"
              required
              className="input input-bordered w-full"
              placeholder="Create a password"
            />
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button type="submit" className="btn btn-primary w-full">
            Register
          </button>
        </form>

        <div className="divider">OR</div>

        <button onClick={handleGoogleLogin} className="btn btn-outline w-full">
          <FcGoogle className="text-xl mr-2" /> Continue with Google
        </button>

        <p className="text-center mt-4 text-sm">
          Already have an account?{" "}
          <Link to="/login" className="text-primary font-semibold">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
