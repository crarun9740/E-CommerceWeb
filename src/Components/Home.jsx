import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import Product from "./Product";
import { Link } from "react-router-dom";
import Footer from "./Footer";

function Home() {
  return (
    <>
      <div className="pt-20   flex flex-row justify-between gap-15">
        <div className="flex flex-col w-[630px] p-6 ">
          <span className="text-6xl font-bold pl-10 mt-10">
            Discover Your True Style & Our fusion with Fashion Bhandar.
          </span>
          <span className="mt-8 text-lg w-[500px] text-gray-600 pl-10">
            Shop the latest trends in fashion and home decor. Quality products
            at prices you'll love.
          </span>
          <div className="flex mt-20 space-x-7 pl-10">
            <Link
              to="/products"
              className="border-1 w-50 rounded-2xl p-2 flex justify-center items-center gap-2 bg-black text-white cursor-pointer hover:bg-gray-800"
            >
              <span>Shop Now</span>
              <span>
                <FaArrowRight />
              </span>
            </Link>
            <Link to="/categories">
              <button className="border-1 w-50 rounded-2xl p-2 text-black bg-white cursor-pointer hover:bg-gray-100 ">
                <span>Browse Categories</span>
              </button>
            </Link>
          </div>
        </div>
        <div className="w-1/2 relative">
          <img
            src="/assets/img-1.jpg"
            alt="photo"
            className=" w-[550px] h-[600px] object-cover border-1 border-gray-500 rounded-2xl "
          />
          <div className="absolute bottom-10 pl-9 ">
            <Link to="/categories">
              <div className="flex flex-col justify-center border-2 border-gray-400 w-[480px] h-[70px] pl-5 rounded-2xl bg-gray-200 hover:bg-gray-300 hover:text-gray-500 cursor-pointer">
                <span className="font-semibold">New Collection 2025</span>
                <span className=" font-semibold">
                  Up to 40% off on selected items
                </span>
                <div>
                  <span className="absolute right-5 top-7 font-xl ">
                    <FaArrowRight />
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex justify-around items-center mt-15 p-5">
        <div className="flex flex-col">
          <span className="font-semibold text-xl">Free Shipping</span>
          <span className="text-gray-400">On order over Rs.599</span>
        </div>
        <div className="flex flex-col">
          <span className="font-semibold text-xl">Easy Returns</span>
          <span className="text-gray-400">30 day return policy</span>
        </div>
        <div className="flex flex-col">
          <span className="font-semibold text-xl">Secure Payments</span>
          <span className="text-gray-400">Protected by encryption</span>
        </div>
        <div className="flex flex-col">
          <span className="font-semibold text-xl">Customer Support</span>
          <span className="text-gray-400">24/7 dedicated support</span>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center mt-10">
        <div>
          <span className="text-2xl font-bold">Shop by Category</span>
        </div>
        <div className="flex flex-wrap gap-5 mt-10 ">
          <Link to="/categories">
            <div className="relative [300px] h-[450px] border-3 border-gray-400">
              <div className="relative">
                <img
                  src="/assets/clothing-4.jpeg"
                  alt=""
                  className="w-[300px] h-[370px] object-cover"
                />
              </div>
              <div className="w-full absolute bottom-0 text-white flex flex-col gap-2 justify-center items-center bg-gray-900 border-3 border-gray-400 ">
                <span className="font-bold text-2xl p-1">Clothing</span>
                <span className="p-1 font-semibold text-gray-400">
                  124 Products
                </span>
              </div>
            </div>
          </Link>
          <Link to="/categories/Accecory">
            <div className="relative [300px] h-[450px] border-3 border-gray-400">
              <div className="relative">
                <img
                  src="/assets/accecories-2.jpeg"
                  alt=""
                  className="w-[300px] h-[370px] object-cover"
                />
              </div>
              <div className="w-full absolute bottom-0 text-white flex flex-col gap-2 justify-center items-center bg-gray-900 border-3 border-gray-400 ">
                <span className="font-bold text-2xl p-1">Accecories</span>
                <span className="p-1 font-semibold text-gray-400">
                  204+ Products
                </span>
              </div>
            </div>
          </Link>
          <Link to="/categories/Footwear">
            <div className="relative [300px] h-[450px] border-3 border-gray-400">
              <div className="relative">
                <img
                  src="/assets/footwear-1.jpeg"
                  alt=""
                  className="w-[300px] h-[370px] object-cover"
                />
              </div>
              <div className="w-full absolute bottom-0 text-white flex flex-col gap-2 justify-center items-center bg-gray-900 border-3 border-gray-400 ">
                <span className="font-bold text-2xl p-1">Footwears</span>
                <span className="p-1 font-semibold text-gray-400">
                  64 Products
                </span>
              </div>
            </div>
          </Link>
          <Link to="/categories/Homedecor">
            <div className="relative [300px] h-[450px] border-3 border-gray-400">
              <div className="relative">
                <img
                  src="/assets/homedecor-1.jpeg"
                  alt=""
                  className="w-[300px] h-[370px] object-cover"
                />
              </div>
              <div className="w-full absolute bottom-0 text-white flex flex-col gap-2 justify-center items-center bg-gray-900 border-3 border-gray-400 ">
                <span className="font-bold text-2xl p-1">Home Decor</span>
                <span className="p-1 font-semibold text-gray-400">
                  32 Products
                </span>
              </div>
            </div>
          </Link>
        </div>
      </div>
      <div className=" w-full flex justify-between items-center space-x-10 mt-10 p-20 mb-20 ">
        <div className="w-1/2 border-3 border-gray-500 h-[400px]">
          <div className="flex w-full">
            <img
              src="/assets/summer-4.jpeg"
              alt=""
              className="object-cover w-1/3 h-[395px]"
            />
            <img
              src="/assets/summer-5.jpeg"
              alt=""
              className="object-cover w-1/3 h-[395px]"
            />
            <img
              src="/assets/summer-6.jpeg"
              alt=""
              className="object-cover w-1/3 h-[395px]"
            />
          </div>
          <div className=" bottom-1 left-10 flex flex-col gap-2 ">
            <span className="text-2xl font-bold text-black">
              Summer Collections
            </span>
            <span className="font-semibold text-gray-400">
              Lightweight fabrics for the warmer days ahead
            </span>
            <button className="flex justify-around items-center w-50 border-2 p-1 rounded-xl bg-gray-200 cursor-pointer hover:text-black hover:bg-gray-300">
              <span>Shop Collection</span>
              <span>
                <FaArrowRight />
              </span>
            </button>
          </div>
        </div>
        <div className="w-1/2 border-3 border-gray-400 h-[400px]">
          <div className="flex w-full">
            <img
              src="/assets/homedecor-6.jpeg"
              alt=""
              className="object-cover w-1/3 h-[395px]"
            />
            <img
              src="/assets/homedecor-3.jpeg"
              alt=""
              className="object-cover w-1/3 h-[395px]"
            />
            <img
              src="/assets/homedecor-5.jpeg"
              alt=""
              className="object-cover w-1/3 h-[395px]"
            />
          </div>
          <div className=" bottom-1 left-10 flex flex-col gap-2">
            <span className="text-2xl font-bold text-black">Home Decor</span>
            <span className="font-semibold text-gray-400">
              Transform your space with our latest home collection
            </span>
            <button className="flex justify-around items-center w-50 border-2 p-1 rounded-xl bg-gray-200 cursor-pointer hover:text-black hover:bg-gray-300">
              <span>Explore Now</span>
              <span>
                <FaArrowRight />
              </span>
            </button>
          </div>
        </div>
      </div>
      <Product />
    </>
  );
}

export default Home;
