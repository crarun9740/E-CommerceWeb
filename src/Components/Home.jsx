import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Footer from "./Footer";

function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div
        id="hero-section"
        className="pt-16 md:pt-20 px-4 md:px-8 lg:px-16 flex flex-col lg:flex-row justify-between gap-8 lg:gap-12"
      >
        <div className="flex flex-col w-full lg:w-[630px] p-4 md:p-6">
          <span className="text-3xl md:text-5xl lg:text-6xl font-bold mt-6 md:mt-10">
            Discover Your True Style & Our Fusion with Fashion Bhandar
          </span>
          <span className="mt-6 md:mt-8 text-base md:text-lg text-gray-600 max-w-[500px]">
            Shop the latest trends in fashion and home decor. Quality products
            at prices you'll love.
          </span>
          <div className="flex mt-10 md:mt-16 space-x-4 md:space-x-7">
            <Link
              to="/products"
              className="border rounded-2xl px-4 py-2 flex items-center gap-2 bg-black text-white cursor-pointer hover:bg-gray-800 transition"
            >
              <span className="">Shop Now</span>
              <FaArrowRight />
            </Link>
            <Link to="/categories">
              <button className="border rounded-2xl px-4 py-2 text-black bg-white cursor-pointer hover:bg-gray-100 transition">
                Browse Categories
              </button>
            </Link>
          </div>
        </div>
        <div className="w-full lg:w-1/2 relative">
          <img
            src="/assets/img-1.jpg"
            alt="Fashion banner"
            className="w-full max-w-[550px] h-[300px] md:h-[400px] lg:h-[600px] object-cover border border-gray-500 rounded-2xl mx-auto"
          />
          <div className="absolute bottom-4 md:bottom-10 left-0 right-0 mx-auto w-[90%] max-w-[480px]">
            <Link to="/categories">
              <div className="flex flex-col justify-center border-2 border-gray-400 p-4 rounded-2xl bg-gray-200 hover:bg-gray-300 hover:text-gray-500 cursor-pointer transition">
                <span className="font-semibold">New Collection 2025</span>
                <span className="font-semibold">
                  Up to 40% off on selected items
                </span>
                <FaArrowRight className="absolute right-4 top-1/2 -translate-y-1/2" />
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div
        id="benefits-section"
        className="flex flex-col md:flex-row justify-around items-center mt-10 md:mt-15 px-4 py-5 gap-6 md:gap-0"
      >
        {[
          { title: "Free Shipping", desc: "On order over Rs.599" },
          { title: "Easy Returns", desc: "30 day return policy" },
          { title: "Secure Payments", desc: "Protected by encryption" },
          { title: "Customer Support", desc: "24/7 dedicated support" },
        ].map((item, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <span className="font-semibold text-lg md:text-xl">
              {item.title}
            </span>
            <span className="text-gray-400 text-sm md:text-base">
              {item.desc}
            </span>
          </div>
        ))}
      </div>

      {/* Categories Section */}
      <div
        id="categories-section"
        className="flex flex-col justify-center items-center mt-10 px-4"
      >
        <span className="text-xl md:text-2xl font-bold">Shop by Category</span>
        <div className="flex flex-wrap justify-center gap-4 md:gap-5 mt-6 md:mt-10">
          {[
            {
              name: "Clothing",
              img: "/assets/clothing-4.jpeg",
              count: "124 Products",
              link: "/categories",
            },
            {
              name: "Accessories",
              img: "/assets/accecories-2.jpeg",
              count: "204+ Products",
              link: "/categories/accecory",
            },
            {
              name: "Footwear",
              img: "/assets/footwear-1.jpeg",
              count: "64 Products",
              link: "/categories/Footwear",
            },
            {
              name: "Home Decor",
              img: "/assets/homedecor-1.jpeg",
              count: "32 Products",
              link: "/categories/Homedecor",
            },
          ].map((category, index) => (
            <Link key={index} to={category.link}>
              <div className="relative w-[250px] md:w-[300px] h-[400px] md:h-[450px] border-2 border-gray-400">
                <img
                  src={category.img}
                  alt={category.name}
                  className="w-full h-[320px] md:h-[370px] object-cover"
                />
                <div className="absolute bottom-0 w-full text-white flex flex-col gap-2 justify-center items-center bg-gray-900 border-t-2 border-gray-400 p-2">
                  <span className="font-bold text-lg md:text-2xl">
                    {category.name}
                  </span>
                  <span className="font-semibold text-gray-400 text-sm md:text-base">
                    {category.count}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Collections Section */}
      <div
        id="collections-section"
        className="w-full flex flex-col lg:flex-row justify-between items-center gap-6 md:gap-10 mt-10 px-4 md:px-16 lg:px-20 py-10 md:py-20"
      >
        {[
          {
            title: "Summer Collections",
            desc: "Lightweight fabrics for the warmer days ahead",
            images: [
              "/assets/summer-4.jpeg",
              "/assets/summer-5.jpeg",
              "/assets/summer-6.jpeg",
            ],
            link: "/collections/summer",
          },
          {
            title: "Home Decor",
            desc: "Transform your space with our latest home collection",
            images: [
              "/assets/homedecor-6.jpeg",
              "/assets/homedecor-3.jpeg",
              "/assets/homedecor-5.jpeg",
            ],
            link: "/collections/homedecor",
          },
        ].map((collection, index) => (
          <div
            key={index}
            className="w-full lg:w-1/2 border-2 border-gray-500 h-[400px] md:h-[450px] flex flex-col"
          >
            <div className="flex w-full h-[70%]">
              {collection.images.map((img, imgIndex) => (
                <img
                  key={imgIndex}
                  src={img}
                  alt={`${collection.title} ${imgIndex + 1}`}
                  className="object-cover w-1/3 h-full"
                />
              ))}
            </div>
            <div className="flex flex-col gap-2 p-4">
              <span className="text-xl md:text-2xl font-bold text-black">
                {collection.title}
              </span>
              <span className="font-semibold text-gray-400 text-sm md:text-base">
                {collection.desc}
              </span>
              <Link to="/categories">
                <button className="flex justify-center items-center w-40 border-2 p-2 rounded-xl cursor-pointer hover:bg-black hover:text-white">
                  <span>
                    {collection.title === "Summer Collections"
                      ? "Shop Collection"
                      : "Explore Now"}
                  </span>
                  <FaArrowRight className="ml-2" />
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Placeholder for Product Section */}
      <div id="products-section" className="px-4 md:px-16 lg:px-20 py-10">
        <h2 className="text-xl md:text-2xl font-bold text-center">
          Featured Products
        </h2>
        {/* Replace with actual Product component or content */}
        <div className="text-center text-gray-500 mt-4">
          Product component placeholder (implement Product.jsx)
        </div>
      </div>

      {/* Placeholder for Footer */}
    </div>
  );
}

export default Home;
