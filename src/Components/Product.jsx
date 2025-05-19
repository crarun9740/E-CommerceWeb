import React from "react";
import { useState } from "react";
import { MdKeyboardArrowUp, MdOutlineKeyboardArrowDown } from "react-icons/md";
import Footer from "./Footer";
import { Link } from "react-router-dom";

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

  const products = [
    {
      id: 1,
      name: "Amazon Brand",
      tag: "Men Solid Round Neck Pure Cotton White tshirt",
      price: "₹ 559",
      Rating: 4.2,
      image: "/assets/tshirt-1.jpg",
    },
    {
      id: 2,
      name: "wrogn",
      tag: "Men Solid Round Neck Pure Cotton White tshirt",
      price: "₹ 899",
      Rating: 4.2,
      image: "/assets/shirt-2.jpeg",
    },
    {
      id: 3,
      name: "Roadstar",
      tag: " Women Pure Cotton White shirt",
      price: "Price ₹ 999",
      Rating: 4.2,
      image: "/assets/women-5.jpeg",
    },
    {
      id: 4,
      name: "Ketch",
      tag: "Women Regular Fit Striped Shirt",
      price: "₹ 1099",
      Rating: 4.2,
      image: "/assets/women-2.jpg",
    },
    {
      id: 5,
      name: "Ethos",
      tag: "Men Analogue Watch",
      price: "₹ 1559",
      Rating: 4.2,
      image: "/assets/watch-1.jpg",
    },

    {
      id: 6,
      name: "Amazon Brand",
      tag: "Men Leather Tachymeter Watch",
      price: "₹ 2559",
      Rating: 4.2,
      image: "/assets/watch-2.jpg",
    },
  ];

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

          <div className="flex flex-wrap justify-around items-center gap-10 p-10">
            {products.map((products, index) => (
              <Link to={`/product/${products.id}`}>
                <div key={index} className="">
                  <img
                    src={products.image || "/placeholder.svg"}
                    alt={`${products.name}`}
                    className="w-[300px] h-[400px] object-cover border-2 rounded-2xl border-gray-400 "
                  />
                  <div className="flex justify-between items-center">
                    <span className="mt-2 font-bold text-xl">
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
