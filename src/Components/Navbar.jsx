import React, { useState } from "react";
import { IoIosSearch, IoIosMenu, IoIosClose } from "react-icons/io";
import { CiUser } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { Bestseller } from "../data/info";

function Navbar() {
  const [showSearch, setShowSearch] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const cartItemCount = 0;

  const toggleSearch = () => setShowSearch((prev) => !prev);
  const toggleMobileMenu = () => setShowMobileMenu((prev) => !prev);

  const filteredProducts = Bestseller.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-white shadow-md border-b border-gray-200">
      <div className="flex flex-col md:flex-row justify-between items-center px-4 py-3 md:py-4 max-w-7xl mx-auto">
        <div className="flex items-center justify-between w-full md:w-auto">
          <Link to="/" className="text-2xl md:text-3xl font-bold text-gray-800">
            Fashion Bhandar
          </Link>

          <button
            className="md:hidden text-2xl text-gray-800 focus:outline-none"
            onClick={toggleMobileMenu}
            aria-label={showMobileMenu ? "Close menu" : "Open menu"}
          >
            {showMobileMenu ? <IoIosClose /> : <IoIosMenu />}
          </button>
        </div>

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

        <div className="flex items-center gap-3 md:gap-5 mt-4 md:mt-0 text-xl md:text-2xl relative">
          <div className="relative">
            <button
              onClick={toggleSearch}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
              aria-label={showSearch ? "Close search" : "Open search"}
            >
              <IoIosSearch className="cursor-pointer" />
            </button>

            {showSearch && (
              <div className="absolute top-10 md:top-12 -left-40 md:left-0 z-50 w-64">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full px-4 py-2 rounded-t-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 bg-white shadow-md text-sm"
                  autoFocus
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                {searchTerm && (
                  <ul className="max-h-60 overflow-y-auto bg-white border border-t-0 border-gray-300 shadow-md rounded-b-lg text-sm">
                    {filteredProducts.length > 0 ? (
                      filteredProducts.map((product) => (
                        <li
                          key={product.id}
                          className="p-2 hover:bg-gray-100 cursor-pointer"
                        >
                          <Link
                            to={`/product/${product.id}`}
                            onClick={() => {
                              setSearchTerm("");
                              setShowSearch(false);
                            }}
                          >
                            {product.name}
                          </Link>
                        </li>
                      ))
                    ) : (
                      <li className="p-2 text-gray-500 italic">
                        No products found
                      </li>
                    )}
                  </ul>
                )}
              </div>
            )}
          </div>

          <Link
            to="/user"
            className="text-gray-600 hover:text-gray-900"
            aria-label="User account"
          >
            <CiUser />
          </Link>

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

          {/* Login and Signup */}
          <Link to="/login">
            <button className="border w-20 h-10 rounded-lg text-sm text-gray-800 bg-white font-semibold hover:bg-gray-100 transition cursor-pointer">
              Login
            </button>
          </Link>
          <Link to="/signup">
            <button className="border w-20 h-10 rounded-lg text-sm bg-gray-800 text-white font-semibold hover:bg-gray-900 transition cursor-pointer">
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
