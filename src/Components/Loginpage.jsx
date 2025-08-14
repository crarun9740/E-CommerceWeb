import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { IoIosLock } from "react-icons/io";
import { Link } from "react-router-dom";
import axios from "axios";
import Footer from "./Footer";

function Loginpage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        { email, password },
        { withCredentials: true } // if using cookies
      );
      if (res.data.token) {
        localStorage.setItem("token", res.data.token);
      }
      alert("Login successful!");
    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="mt-15 flex justify-center items-center p-4 ">
      <div className="flex flex-col md:flex-row items-center border rounded-2xl shadow-lg bg-white overflow-hidden w-full max-w-4xl">
        <div className="hidden md:block">
          <img
            src="/assets/login-6.gif"
            alt="Login Illustration"
            className="h-[480px] w-[590px] object-cover"
          />
        </div>

        <div className="p-8 w-full md:w-1/2">
          <h2 className="text-3xl font-bold text-center mb-6">Login</h2>

          <form onSubmit={handleSubmit}>
            <div className="flex items-center gap-2 mt-4 border rounded-xl px-3 py-2">
              <FaUser className="text-gray-500" />
              <input
                type="text"
                placeholder="Enter Your Email"
                className="w-full outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="flex items-center gap-2 mt-4 border rounded-xl px-3 py-2">
              <IoIosLock className="text-gray-500" />
              <input
                type="password"
                placeholder="Enter Your Password"
                className="w-full outline-none"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="mt-6 w-full bg-black text-white text-lg py-2 rounded-xl hover:bg-gray-700 transition"
            >
              Login
            </button>
          </form>

          <div className="mt-6 text-center text-sm">
            <p>
              Don't have an account?{" "}
              <Link to="/signup" className="text-blue-500 hover:underline">
                Signup
              </Link>
            </p>
            <p className="mt-3">
              Forgot{" "}
              <Link
                to="/forgot-password"
                className="text-blue-500 hover:underline"
              >
                Password
              </Link>
              ?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Loginpage;
