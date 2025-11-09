import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../context/AuthContext";
import { toast } from "react-toastify";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const { signInUser, googleSignin } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signInUser(email, password)
      .then(() => {
        toast.success("Login successful!");
        navigate(from, { replace: true });
      })
      .catch((err) => toast.error(err.message));
  };

  const handleGoogleLogin = () => {
    googleSignin()
      .then(() => {
        toast.success("Logged in with Google!");
        navigate(from, { replace: true });
      })
      .catch((err) => toast.error(err.message));
  };

  return (
    <div className="flex justify-center items-center min-h-[70vh] mt-10 py-10 bg-base-200 px-4">
      <div className="bg-base-100 p-8 rounded-xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-4 text-primary">
          Login
        </h2>

        <form onSubmit={handleLogin} className="space-y-4">
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
              placeholder="Enter your password"
            />
          </div>

          <button type="submit" className="btn btn-primary w-full">
            Login
          </button>
        </form>

        <div className="divider">OR</div>

        <button onClick={handleGoogleLogin} className="btn btn-outline w-full">
          <FcGoogle className="text-xl mr-2" /> Continue with Google
        </button>

        <p className="text-center mt-4 text-sm">
          New to MovieMaster Pro?{" "}
          <Link to="/register" className="text-primary font-semibold">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
