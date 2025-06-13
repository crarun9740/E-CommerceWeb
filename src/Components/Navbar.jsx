import React, { useState } from "react";
import { IoIosSearch, IoIosMenu, IoIosClose } from "react-icons/io";
import { CiUser } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

import {
  Bestseller,
  mens,
  mobiles,
  womens,
  toys,
  beauty,
  homedecor,
  footwear,
  Accecories,
} from "../data/info";

const allProduct = [
  ...Bestseller,
  ...mens,
  ...mobiles,
  ...womens,
  ...toys,
  ...beauty,
  ...homedecor,
  ...footwear,
  ...Accecories,
];

function Navbar() {
  const [showSearch, setShowSearch] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const cartItemCount = 0;
  const toggleSearch = () => setShowSearch((prev) => !prev);
  const toggleMobileMenu = () => setShowMobileMenu((prev) => !prev);
  const filteredProducts = allProduct.filter((product) =>
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
          } md:flex flex-col md:flex-row items-center active:text-black w-full md:w-auto mt-4 md:mt-0 md:space-x-6 space-y-2 md:space-y-0 bg-white md:bg-transparent transition-all duration-300`}
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
              className="text-gray-600  active:text-black hover:text-gray-900 font-medium text-base md:text-lg transition-colors "
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
              className={`${
                showSearch ? "text-black" : "text-gray-600 hover:text-gray-900"
              } focus:outline-none`}
              aria-label={showSearch ? "Close search" : "Open search"}
            >
              <IoIosSearch className="cursor-pointer" />
            </button>

            {showSearch && (
              <div className="absolute md:z-50 w-50 md:w-96 md:top-12 top-10 md:left-1/2 left-20 -translate-x-1/2">
                <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
                  <input
                    type="text"
                    placeholder="Search for products..."
                    className="w-full px-4 py-2 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400"
                    autoFocus
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  {searchTerm && (
                    <ul className="max-h-64 overflow-y-auto divide-y divide-gray-100">
                      {filteredProducts.length > 0 ? (
                        filteredProducts.map((product) => (
                          <li key={product.id}>
                            <Link
                              to={`/product/${product.id}`}
                              className="block px-4 py-2 hover:bg-gray-100 transition-colors text-sm text-gray-700"
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
                        <li className="px-4 py-3 text-sm italic text-gray-400">
                          No products found
                        </li>
                      )}
                    </ul>
                  )}
                </div>
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
