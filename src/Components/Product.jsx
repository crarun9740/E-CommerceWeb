import React from "react";
import { useState } from "react";
import { MdKeyboardArrowUp, MdOutlineKeyboardArrowDown } from "react-icons/md";
import Footer from "./Footer";

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
      <div className="ml-10 pt-20 mb-20">
        <span className="ml-10 text-3xl font-bold">All Products</span>
        <div className="mt-5 flex justify-between ">
          <div className="flex flex-col pl-10">
            <span className="text-lg font-semibold">Filters</span>
            <button className="border-1 p-2 rounded-md mt-10 w-62 hover:bg-gray-100">
              Clear All
            </button>
            <div className="">
              <button
                onClick={togglecategories}
                className=" mt-10 flex items-center justify-between w-full  rounded-md "
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
            <div className="">
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
            <div className="flex flex-col gap-5">
              <div>
                <span className="font-semibold text-xl">Sizes</span>
              </div>
              <div className="flex flex-col gap-5 mb-10 ">
                <div className="flex gap-2 ">
                  <button className=" w-20 h-10 border-1 rounded-xl hover:bg-gray-100">
                    XS
                  </button>
                  <button className=" w-20 h-10 border-1 rounded-xl hover:bg-gray-100">
                    S
                  </button>
                  <button className=" w-20 h-10 border-1 rounded-xl hover:bg-gray-100">
                    M
                  </button>
                </div>
                <div className="flex gap-2">
                  <button className=" w-20 h-10 border-1 rounded-xl hover:bg-gray-100">
                    L
                  </button>
                  <button className=" w-20 h-10 border-1 rounded-xl hover:bg-gray-100">
                    XL
                  </button>
                  <button className=" w-20 h-10 border-1 rounded-xl hover:bg-gray-100">
                    XXL
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col gap-10 ml-20 ">
            <div className="">
              <span>Showing Products</span>
            </div>
            <div className="flex flex-wrap gap-5 ">
              <div className="relative border-1 border-gray-400 shadow">
                <img
                  src="/assets/tshirt-1.jpg"
                  alt=""
                  className="object-cover w-[303px] h-[400px]  "
                />
                <div className="">
                  <div className="bg-red-500 text-white border-1 rounded-xl p-1 w-20 absolute right-1 top-1">
                    <span>25% OFF</span>
                  </div>
                  <div className="flex flex-col p-1 ">
                    <span className="font-bold text-black">Amazon Brand</span>
                    <span className="text-sm">
                      Men Solid Round Neck Pure Cotton White tshirt
                    </span>
                    <span className="font-semibold">Price ₹ 559</span>
                  </div>
                </div>
              </div>
              <div className="relative border-1 border-gray-400 shadow">
                <img
                  src="/assets/shirt-2.jpeg"
                  alt=""
                  className="object-cover w-[303px] h-[400px]  "
                />
                <div className="">
                  <div className="bg-gray-400 text-white border-1 rounded-xl p-1 w-20 absolute right-1 top-1">
                    <span>45% OFF</span>
                  </div>
                  <div className="flex flex-col p-1 ">
                    <span className="font-bold text-black">Wrogn</span>
                    <span className="text-sm">Men Solid Half Sleeve shirt</span>
                    <span className="font-semibold">Price ₹ 799</span>
                  </div>
                </div>
              </div>
              <div className="relative border-1 border-gray-400 shadow">
                <img
                  src="/assets/women-5.jpeg"
                  alt=""
                  className="object-cover w-[303px] h-[400px]  "
                />
                <div className="">
                  {/* <div className="bg-black text-white border-1 rounded-lg p-1 w-11 h-8 absolute right-1 top-1">
                    <span>New</span>
                  </div> */}
                  <div className="flex flex-col p-1 ">
                    <span className="font-bold text-black">Roadstar</span>
                    <span className="text-sm">
                      Women Pure Cotton White shirt
                    </span>
                    <span className="font-semibold">Price ₹ 999</span>
                  </div>
                </div>
              </div>
              <div className="relative border-1 border-gray-400 shadow">
                <img
                  src="/assets/women-2.jpg"
                  alt=""
                  className="object-cover w-[303px] h-[400px]  "
                />
                <div className="">
                  <div className="bg-black text-white border-1 rounded-xl p-1 w-20 absolute right-1 top-1">
                    <span>65% OFF</span>
                  </div>
                  <div className="flex flex-col p-1 ">
                    <span className="font-bold text-black">Ketch</span>
                    <span className="text-sm">
                      Women Regular Fit Striped Shirt
                    </span>
                    <span className="font-semibold">Price ₹ 1099</span>
                  </div>
                </div>
              </div>
              <div className="relative border-1 border-gray-400 shadow">
                <img
                  src="/assets/watch-1.jpg"
                  alt=""
                  className="object-cover w-[303px] h-[400px]  "
                />
                <div className="">
                  <div className="bg-red-500 text-white border-1 rounded-xl p-1 w-20 absolute right-1 top-1">
                    <span>25% OFF</span>
                  </div>
                  <div className="flex flex-col p-1 ">
                    <span className="font-bold text-black">Ethos</span>
                    <span className="text-sm">Men Analogue Watch</span>
                    <span className="font-semibold">Price ₹ 1559</span>
                  </div>
                </div>
              </div>
              <div className="relative border-1 border-gray-400 shadow">
                <img
                  src="/assets/watch-2.jpg"
                  alt=""
                  className="object-cover w-[303px] h-[400px]  "
                />
                <div className="">
                  <div className="bg-gray-400 text-white border-1 rounded-xl p-1 w-20 absolute right-1 top-1">
                    <span>25% OFF</span>
                  </div>
                  <div className="flex flex-col p-1 ">
                    <span className="font-bold text-black">Timex</span>
                    <span className="text-sm">
                      Men Leather Tachymeter Watch
                    </span>
                    <span className="font-semibold">Price ₹ 2559</span>
                  </div>
                </div>
              </div>
              <div className="relative border-1 border-gray-400 shadow">
                <img
                  src="/assets/boot-2.jpeg"
                  alt=""
                  className="object-contain w-[303px] h-[400px]  "
                />
                <div className="">
                  <div className="bg-black text-white border-1 rounded-xl p-1 w-20 absolute right-1 top-1">
                    <span>55% OFF</span>
                  </div>
                  <div className="flex flex-col p-1 ">
                    <span className="font-bold text-black">WoodLand</span>
                    <span className="text-sm">Mean Round Toe Boots</span>
                    <span className="font-semibold">Price ₹ 1259</span>
                  </div>
                </div>
              </div>
              <div className="relative border-1 border-gray-400 shadow">
                <img
                  src="/assets/shoes-4.jpeg"
                  alt=""
                  className="object-cover w-[303px] h-[400px]  "
                />
                <div className="">
                  <div className="bg-red-500 text-white border-1 rounded-xl p-1 w-20 absolute right-1 top-1">
                    <span>25% OFF</span>
                  </div>
                  <div className="flex flex-col p-1 ">
                    <span className="font-bold text-black">Bacca Bucci</span>
                    <span className="text-sm">Men Casual White Shoes</span>
                    <span className="font-semibold">Price ₹ 559</span>
                  </div>
                </div>
              </div>
              <div className="relative border-1 border-gray-400 shadow">
                <img
                  src="/assets/bag-2.jpeg"
                  alt=""
                  className="object-cover w-[303px] h-[400px]  "
                />
                <div className="">
                  <div className="bg-red-500 text-white border-1 rounded-xl p-1 w-20 absolute right-1 top-1">
                    <span>25% OFF</span>
                  </div>
                  <div className="flex flex-col p-1 ">
                    <span className="font-bold text-black">
                      Fashion B Brand
                    </span>
                    <span className="text-sm">
                      Women Black Leather Bag with good..
                    </span>
                    <span className="font-semibold">Price ₹ 559</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Product;
