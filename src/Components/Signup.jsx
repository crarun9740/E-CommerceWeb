import React from "react";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <div className="min-h-screen pt-20 px-10 flex flex-wrap justify-center items-center ">
      <div className="md:w-1/2 w-full flex justify-center mb-10 md:mb-0">
        <img
          src="/assets/signup-2.jpeg"
          alt="Signup"
          className="object-cover h-[500px] w-[450px] rounded-2xl shadow-lg"
        />
      </div>
      <div className="md:w-1/2 w-full max-w-2xl flex flex-col items-center md:items-start">
        <h2 className="text-4xl font-bold mb-8">Sign Up</h2>

        <div className="flex flex-wrap gap-6 w-full">
          <div className="flex flex-col w-full md:w-[45%]">
            <label htmlFor="name" className="font-semibold text-lg mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              className="outline-none h-10 px-3 rounded-lg border-2 border-gray-300"
            />
          </div>

          <div className="flex flex-col w-full md:w-[45%]">
            <label htmlFor="email" className="font-semibold text-lg mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="outline-none h-10 px-3 rounded-lg border-2 border-gray-300"
            />
          </div>

          <div className="flex flex-col w-full md:w-[45%]">
            <label htmlFor="password" className="font-semibold text-lg mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Create a password"
              className="outline-none h-10 px-3 rounded-lg border-2 border-gray-300"
            />
          </div>

          <div className="flex flex-col w-full md:w-[45%]">
            <label
              htmlFor="confirmPassword"
              className="font-semibold text-lg mb-1"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              placeholder="Confirm password"
              className="outline-none h-10 px-3 rounded-lg border-2 border-gray-300"
            />
          </div>
        </div>

        <button className="mt-8 h-12 w-full md:w-[50%] bg-black text-white rounded-lg font-semibold hover:bg-gray-800 transition duration-300">
          Sign Up
        </button>

        <div className="flex flex-col items-center mt-6 w-full">
          <span className="text-gray-500">Or sign up with</span>
          <Link to="#" className="mt-4">
            <img
              src="/assets/google-img.jpg"
              alt="Google sign in"
              className="w-12 h-12 rounded-full shadow-md hover:scale-105 transition-transform duration-200"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;
