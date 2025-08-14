import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { IoIosLock } from "react-icons/io";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    console.log({ email, password, confirmPassword });
    // TODO: send to backend
  };

  return (
    <div className="mt-15 flex justify-center items-center mb-4">
      <div className="flex flex-col md:flex-row items-center border rounded-2xl shadow-lg bg-white overflow-hidden max-w-4xl">
        <div className="hidden md:block">
          <img
            src="/assets/sign-4.jpeg"
            alt="Signup Illustration"
            className="h-[533px] w-[500px] object-cover"
          />
        </div>

        <div className="p-10 w-full md:w-1/2">
          <h2 className="text-3xl font-bold text-center">Sign Up</h2>

          <form onSubmit={handleSubmit}>
            <div className="flex items-center gap-2 mt-4 border rounded-xl px-3 py-2 bg-gray-300">
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

            <div className="flex items-center gap-2 mt-4 border rounded-xl px-3 py-2">
              <IoIosLock className="text-gray-500" />
              <input
                type="password"
                placeholder="Confirm Your Password"
                className="w-full outline-none"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
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

            <button
              onClick={handleClick}
              style={{
                backgroundColor: isClicked ? "gray" : "black",
              }}
              type="submit"
              className="mt-6 w-full bg-black text-white text-lg py-2 rounded-xl hover:bg-gray-700 transition"
            >
              Submit
            </button>
          </form>

          <div className="mt-6 text-center text-sm">
            <p>
              Already have an account?{" "}
              <Link to="/login" className="text-blue-500 hover:underline">
                Login
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

export default SignupPage;
