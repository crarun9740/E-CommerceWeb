import React from "react";
import { FaUser } from "react-icons/fa";
import { IoIosLock } from "react-icons/io";
import { Link } from "react-router-dom";
function Loginpage() {
  return (
    <div className="m-40 rounded-2xl ">
      <div className="flex justify-between  items-center border-1 rounded-2xl ">
        <div className="object-contain  ">
          <img
            src="/assets/login-6.gif"
            alt=""
            className="h-[480px] w-[590px] rounded-2xl"
          />
        </div>
        <div className="pr-20 ">
          <span className="text-4xl font-semibold ">Login</span>
          <div className="flex justify-center gap-2 items-center mt-8 border-1 rounded-2xl pl-2">
            <span>
              <FaUser />
            </span>{" "}
            |
            <input
              type="text"
              placeholder="Enter Your Email"
              className=" w-90 pl-2 h-10 outline-none"
            />
          </div>
          <div className="flex justify-center gap-2 items-center mt-8 border-1 rounded-2xl pl-2">
            <span>
              <IoIosLock />
            </span>{" "}
            |
            <input
              type="text"
              placeholder="Enter Your Password"
              className=" w-90 pl-2 h-10 outline-none"
            />
          </div>
          <button className="mt-10 border-1 h-10 w-40 rounded-2xl text-xl p-1 bg-black text-white hover:bg-gray-700">
            Login
          </button>

          <div className="mt-10">
            <div className="flex flex-col">
              <span>
                Don't have an account ?{" "}
                <Link
                  to="/signup"
                  className="cursor-pointer text-blue-400 hover:underline"
                >
                  Singup
                </Link>
              </span>
              <span className="mt-5">
                Forgot{" "}
                <Link className=" text-blue-400 hover:underline">Password</Link>
                ?
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Loginpage;
