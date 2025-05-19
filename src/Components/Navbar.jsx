import React, { useState } from "react";
import { IoIosSearch, IoIosMenu, IoIosClose } from "react-icons/io";
import { CiUser } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

function Navbar() {
  const [showSearch, setShowSearch] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const cartItemCount = 0; // Placeholder: Replace with actual cart state or context

  const toggleSearch = () => setShowSearch((prev) => !prev);
  const toggleMobileMenu = () => setShowMobileMenu((prev) => !prev);

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-white shadow-md border-b border-gray-200">
      <div className="flex flex-col md:flex-row justify-between items-center px-4 py-3 md:py-4 max-w-7xl mx-auto">
        {/* Left - Logo and Navigation */}
        <div className="flex items-center justify-between w-full md:w-auto">
          <Link to="/" className="text-2xl md:text-3xl font-bold text-gray-800">
            Fashion Bhandar
          </Link>
          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-2xl text-gray-800 focus:outline-none"
            onClick={toggleMobileMenu}
            aria-label={showMobileMenu ? "Close menu" : "Open menu"}
          >
            {showMobileMenu ? <IoIosClose /> : <IoIosMenu />}
          </button>
        </div>

        {/* Navigation Links */}
        <div
          className={`${
            showMobileMenu ? "flex" : "hidden"
          } md:flex flex-col md:flex-row items-center w-full md:w-auto mt-4 md:mt-0 md:space-x-6 space-y-2 md:space-y-0 bg-white md:bg-transparent transition-all duration-300`}
        >
          {[
            { to: "/", label: "Home" },
            { to: "/products", label: "Products" },
            { to: "/categories", label: "Categories" },
            { to: "/about", label: "About" },
            { to: "/contact", label: "Contact" },
          ].map((item, index) => (
            <Link
              key={index}
              to={item.to}
              className="text-gray-600 hover:text-gray-900 font-medium text-base md:text-lg transition-colors"
              onClick={() => setShowMobileMenu(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Right - Search, Login, SignUp, Icons */}
        <div className="flex items-center gap-3 md:gap-5 mt-4 md:mt-0 text-xl md:text-2xl">
          {/* Search */}
          <div className="relative">
            <button
              onClick={toggleSearch}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
              aria-label={showSearch ? "Close search" : "Open search"}
            >
              <IoIosSearch />
            </button>
            {showSearch && (
              <input
                type="text"
                placeholder="Search products..."
                className="absolute top-10 md:top-12 -left-40 md:left-0 w-64 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 bg-white shadow-md z-50 text-sm"
                autoFocus
                onBlur={() => setShowSearch(false)}
              />
            )}
          </div>

          {/* User Account */}
          <Link
            to="/account"
            className="text-gray-600 hover:text-gray-900"
            aria-label="User account"
          >
            <CiUser />
          </Link>

          {/* Cart */}
          <Link
            to="/cart"
            className="relative text-gray-600 hover:text-gray-900"
            aria-label="Shopping cart"
          >
            <IoCartOutline />
            {cartItemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cartItemCount}
              </span>
            )}
          </Link>

          {/* Login / SignUp */}
          <Link to="/login">
            <button className="border w-20 h-10 rounded-lg text-sm text-gray-800 bg-white font-semibold hover:bg-gray-100 transition">
              Login
            </button>
          </Link>
          <Link to="/signup">
            <button className="border w-20 h-10 rounded-lg text-sm bg-gray-800 text-white font-semibold hover:bg-gray-900 transition">
              SignUp
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
