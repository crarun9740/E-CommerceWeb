import React from "react";

function Signup() {
  return (
    <div className="pt-20 flex justify-center items-center">
      <div className="flex flex-col mt-5">
        <span className="text-center text-3xl font-semibold">SignUp</span>
        <div className="mt-8 flex flex-col gap-4">
          <div className="flex gap-10">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="font-semibold text-lg">
                Name:
              </label>
              <input
                type="text"
                placeholder="Enter Your Name"
                className="outline-none  w-90 h-10 rounded-xl pl-2 border-2 border-gray-400"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="date" className="font-semibold text-lg">
                Date of Birth
              </label>
              <input
                type="date"
                placeholder="Enter Your Name"
                className="outline-none  w-90 h-10 rounded-xl pl-2 border-2 border-gray-400"
              />
            </div>
          </div>
          <div className="flex gap-10">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="font-semibold text-lg">
                Gender
              </label>
              <select
                name="gender"
                id=""
                className="border-1  w-90 h-10 rounded-xl"
              >
                <option value="">Male</option>
                <option value="">Female</option>
                <option value="">Others</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="font-semibold text-lg">
                Email:
              </label>
              <input
                type="text"
                placeholder="Enter Your Email"
                className="outline-none  w-90 h-10 rounded-xl pl-2 border-2 border-gray-400"
              />
            </div>
          </div>
          <div className="flex gap-10">
            <div className="flex flex-col gap-2">
              <label htmlFor="password" className="font-semibold text-lg">
                Password:
              </label>
              <input
                type="text"
                placeholder="Create Password "
                className="outline-none  w-90 h-10 rounded-xl pl-2 border-2 border-gray-400"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="password" className="font-semibold text-lg">
                Confirm Password:
              </label>
              <input
                type="text"
                placeholder="Confirm Password"
                className="outline-none  w-90 h-10 rounded-xl pl-2 border-2 border-gray-400"
              />
            </div>
          </div>
          <button className="border-1 v h-10 mt-8 rounded-xl bg-black text-white font-semibold hover:bg-gray-800">
            Sign Up
          </button>
          <div className="flex flex-col justify-center items-center mt-5">
            <span className="text-centre">Or</span>

            <div className="w-20 rounded-4xl mt-6">
              <img
                src="/assets/google-img.jpg"
                alt=""
                className="rounded-4xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
