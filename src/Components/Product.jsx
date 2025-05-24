import React from "react";
import { useState } from "react";
import { MdKeyboardArrowUp, MdOutlineKeyboardArrowDown } from "react-icons/md";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { products } from "../data/info";

function Product() {
  const [Showaddcart, setShowaddcart] = useState(false);
  const [Showcategories, setShowcategories] = useState(true);
  const [showRange, setshowRange] = useState(true);
  const [priceRange, setpriceRange] = useState(0);

  const togglecategories = () => {
    setShowcategories(!Showcategories);
  };
  const togglerange = () => {
    setshowRange(!showRange);
  };

  return (
    <>
      <div className="lg:ml-10 lg:pt-20 pt-30 mb-20 md:pt-28 md:flex-row">
        <span className="lg:ml-10 ml-5 text-3xl font-bold ">All Products</span>
        <div className="lg:mt-5 ml-0 flex lg:flex-row flex-col justify-between h-auto ">
          <div className="flex-col pl-10 h-[500px] lg:flex hidden">
            <span className="text-lg font-semibold  md:flex-col">Filters</span>
            <button className="border-1 p-2 rounded-md mt-10 w-62 hover:bg-gray-100">
              Clear All
            </button>
            <div className="">
              <button
                onClick={togglecategories}
                className=" mt-10 flex items-center justify-between w-full rounded-md "
              >
                <span className="hover:underline text-xl font-semibold ">
                  Categories
                </span>
                {Showcategories ? (
                  <MdKeyboardArrowUp />
                ) : (
                  <MdOutlineKeyboardArrowDown />
                )}
              </button>

              {Showcategories && (
                <div>
                  <ul className="flex justify-between">
                    <label>Men</label>
                    <li>
                      <input type="checkbox" />
                    </li>
                  </ul>
                  <ul className="flex justify-between">
                    <label>Women</label>
                    <li>
                      <input type="checkbox" />
                    </li>
                  </ul>
                  <ul className="flex justify-between">
                    <label>Accesories</label>
                    <li>
                      <input type="checkbox" />
                    </li>
                  </ul>
                  <ul className="flex justify-between">
                    <label>Footwears</label>
                    <li>
                      <input type="checkbox" />
                    </li>
                  </ul>
                </div>
              )}
            </div>
            <br />
            <div className="md:flex-col">
              <div className="flex flex-col justify-between items-center">
                <button
                  onClick={togglerange}
                  className="flex items-center justify-between w-full  rounded-md "
                >
                  <span className="text-xl font-semibold">Price Range</span>
                  {showRange ? (
                    <MdKeyboardArrowUp />
                  ) : (
                    <MdOutlineKeyboardArrowDown />
                  )}
                </button>
                {showRange && (
                  <div className=" mt-5 mr-20 ">
                    <input
                      type="range"
                      min={0}
                      max={50000}
                      value={priceRange}
                      onChange={(e) => setpriceRange(e.target.value)}
                      className="w-full accent-gray-800"
                    />
                    <div>
                      <label htmlFor="price" className="font-semibold">
                        ₹ {priceRange}
                      </label>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <br />
          </div>

          <div className="flex lg:hidden">adsfasdfsfsf</div>

          <div className="flex flex-wrap justify-around items-center gap-10 p-10 ">
            {products.map((products, index) => (
              <Link to={`/product/${products.id}`}>
                <div key={index} className="">
                  <img
                    src={products.image || "/placeholder.svg"}
                    alt={`${products.name}`}
                    className="w-[300px] h-[400px] object-cover border-2 rounded-2xl border-gray-400 "
                  />
                  <div className="flex justify-between items-center">
                    <span className="mt-2 font-bold text-xl ">
                      {products.name}
                    </span>
                    <span className="mt-2 text-lg font-semibold">
                      Rating : {products.Rating}
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="mt-2 text-gray-500">{products.tag}</span>
                    <span className="mt-2 font-semibold text-lg text-gray-700">
                      {products.price}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Product;
