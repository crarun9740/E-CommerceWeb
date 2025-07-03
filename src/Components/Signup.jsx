import React from "react";
import { FaUser } from "react-icons/fa";
import { IoIosLock } from "react-icons/io";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

function Loginpage() {
  return (
    <div className="mt-15 flex justify-center items-center mb-4">
      <div className="flex flex-col md:flex-row items-center border rounded-2xl shadow-lg bg-white overflow-hidden  max-w-4xl">
        <div className="hidden md:block">
          <img
            src="/assets/sign-4.jpeg"
            alt="Login Illustration"
            className="h-[533px] w-[500px] object-cover"
          />
        </div>

        <div className="p-10 w-full md:w-1/2">
          <h2 className="text-3xl font-bold text-center">SignUp</h2>
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
          <div className="flex items-center gap-2 mt-4 border rounded-xl px-3 py-2">
            <IoIosLock className="text-gray-500" />
            <input
              type="password"
              placeholder="Confirm Your Password"
              className="w-full outline-none"
            />
          </div>
          <div className="flex justify-center mt-5 font-semibold">
            <span>OR</span>
          </div>

          <div className="flex justify-center mt-2 text-5xl cursor-pointer">
            <span>
              <FcGoogle />
            </span>
          </div>

          <button className="mt-6 w-full bg-black text-white text-lg py-2 rounded-xl hover:bg-gray-700 transition">
            Submit
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
