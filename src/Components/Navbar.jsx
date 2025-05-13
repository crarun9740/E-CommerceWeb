import React from "react";
import { IoIosSearch } from "react-icons/io";
import { CiUser } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { useState } from "react";
import { Link } from "react-router-dom";
import Product from "./Product";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [Showseach, setShowseach] = useState(false);
  return (
    <>
      <div className="w-full h-auto fixed flex justify-between items-center border-1 border-gray-400 shadow z-50 bg-gray-100">
        <div className="flex items-center justify-between px-6 py-3 gap-10 ">
          <Link to="/" className="text-2xl font-semibold pl-10">
            Fashion Bhandar
          </Link>
          <div className="flex justify-around items-center space-x-6 pl-8">
            <Link to="/" className="cursor-pointer text-gray-800 ">
              Home
            </Link>
            <Link to="/products" className="cursor-pointer text-gray-800 ">
              Products
            </Link>
            <Link to="/categories" className="cursor-pointer text-gray-800">
              Categories
            </Link>
            <Link to="/about" className="cursor-pointer text-gray-800">
              About
            </Link>
            <Link to="/contact" className="cursor-pointer text-gray-800">
              Contact
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-5 text-2xl pr-10">
          <span className="cursor-pointer">
            <IoIosSearch onClick={() => setShowseach((prev) => !prev)} />
            {Showseach && (
              <input
                type="text"
                placeholder="Search..."
                className="absolute text-sm top-3.5 left-190 px-3 py-1 rounded w-100 border-1 border-gray-500 focus:outline-none  "
              />
            )}
          </span>
          <button className="border-1 w-20 h-10 p-1 rounded-xl text-sm text-black bg-white font-semibold cursor-pointer hover:bg-black hover:text-white ">
            Login
          </button>
          <button className="border-1 w-20 h-10 p-1 rounded-xl text-sm bg-black text-white font-semibold cursor-pointer ">
            SignUp
          </button>
          <span className="cursor-pointer">
            <CiUser />
          </span>
          <span className="cursor-pointer">
            <IoCartOutline />
          </span>
        </div>
      </div>
    </>
  );
}

export default Navbar;
