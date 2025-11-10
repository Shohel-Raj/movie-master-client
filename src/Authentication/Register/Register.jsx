import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../context/AuthContext";
import { toast } from "react-toastify";
import { FcGoogle } from "react-icons/fc";

const Register = () => {
  const { createUser, updateUserProfile, googleSignin } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // 🔹 Save user data to backend using PUT (upsert)
  const saveUserToDB = async (userData) => {
    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL || "http://localhost:3000"}/users/${userData.email}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(userData),
        }
      );

      if (res.ok) {
        console.log("✅ User stored/updated successfully!");
      } else {
        console.error("❌ Failed to save user:", await res.text());
      }
    } catch (err) {
      console.error("❌ Error saving user:", err);
    }
  };

  // 🔹 Handle Manual Register
const handleRegister = async (e) => {
  e.preventDefault();
  const form = e.target;
  const displayName = form.name.value;
  const photoURL = form.photo.value;
  const email = form.email.value;
  const password = form.password.value;

  // 🔸 Password validation
  if (!/(?=.*[A-Z])/.test(password)) {
    return toast.error("Password must contain at least one uppercase letter.");
  } else if (!/(?=.*[a-z])/.test(password)) {
    return toast.error("Password must contain at least one lowercase letter.");
  } else if (password.length < 6) {
    return toast.error("Password must be at least 6 characters long.");
  }

  try {
    // 1️⃣ Create user in Firebase/Auth
    const userCredential = await createUser(email, password);


    const data={
      displayName,
      photoURL
    }
    // 2️⃣ Update user profile with display name and photo URL
    await updateUserProfile(data);

    // 3️⃣ Save user info to your database
    const newUser = {
      name: displayName,
      email,
      photo: photoURL,
      provider: "manual",
      createdAt: new Date(),
    };

    await saveUserToDB(newUser);

    toast.success("🎉 Registration successful!");
    navigate("/");
  } catch (err) {
    console.error("❌ Registration Error:", err);
    setError(err.message);
    toast.error(err.message);
  }
};

  // 🔹 Google Login
  const handleGoogleLogin = async () => {
    try {
      const result = await googleSignin();
      const user = result.user;

      // 🔸 Save Google user to DB
      const googleUser = {
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
        provider: "google",
        createdAt: new Date(),
      };
      await saveUserToDB(googleUser);

      toast.success("Logged in with Google!");
      navigate("/");
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-[80vh] mt-20 py-10 bg-base-200 px-4">
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
