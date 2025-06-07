import React from "react";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <div className="m-25 flex justify-center items-center p-5">
      <div className="border-1 rounded-bl-2xl rounded-tl-2xl border-gray-400">
        <img
          src="/assets/login-2.jpg"
          alt=""
          className="object-cover w-[400px] h-[524px] rounded-bl-2xl rounded-tl-2xl border-gray-200"
        />
      </div>

      <div className="flex flex-col justify-center items-center gap-5 md:w-[45%] border-1 rounded-br-2xl rounded-tr-2xl p-3 border-gray-400">
        <h1 className="text-4xl font-bold">Sign Up</h1>
        <div className="flex flex-col">
          <label htmlFor="name" className="font-semibold text-lg">
            Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            className="outline-none w-80 h-10 px-3 rounded-lg border-2 border-gray-300"
          />
        </div>
        <div className="flex flex-col border-gray-200 ">
          <label htmlFor="email" className="font-semibold text-lg ">
            E-mail
          </label>
          <input
            type="text"
            id="email"
            placeholder="Enter your email"
            className="outline-none w-80 h-10 px-3 rounded-lg border-2 border-gray-300"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="password" className="font-semibold text-lg">
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            className="outline-none w-80 h-10 px-3 rounded-lg border-2 border-gray-300"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="confirm-password" className="font-semibold text-lg ">
            Confirm Password
          </label>
          <input
            type="password"
            id="confirm-password"
            placeholder="Confirm your password"
            className="outline-none w-80 h-10 px-3 rounded-lg border-2 border-gray-300"
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="confirm-password"
            className="font-semibold text-lg text-center"
          >
            or
          </label>
          <div className="bg-gray-200 border-1 rounded-b-full rounded-t-full border-gray-200">
            <img
              src="/assets/google-img.jpg"
              alt="google-logo"
              className="w-15 cursor-pointer bg-gray-100 rounded-b-full rounded-t-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
