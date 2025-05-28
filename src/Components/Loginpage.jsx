import React from "react";
import { FaUser } from "react-icons/fa";
import { IoIosLock } from "react-icons/io";
import { Link } from "react-router-dom";

function Loginpage() {
  return (
    <div className="min-h-screen flex justify-center items-center p-4 bg-gray-100">
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

          <div className="flex items-center gap-2 mt-4 border rounded-xl px-3 py-2">
            <FaUser className="text-gray-500" />
            <input
              type="text"
              placeholder="Enter Your Email"
              className="w-full outline-none"
            />
          </div>

          <div className="flex items-center gap-2 mt-4 border rounded-xl px-3 py-2">
            <IoIosLock className="text-gray-500" />
            <input
              type="password"
              placeholder="Enter Your Password"
              className="w-full outline-none"
            />
          </div>

          <button className="mt-6 w-full bg-black text-white text-lg py-2 rounded-xl hover:bg-gray-700 transition">
            Login
          </button>

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
