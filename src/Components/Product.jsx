import React, { useState } from "react";
import { MdKeyboardArrowUp, MdOutlineKeyboardArrowDown } from "react-icons/md";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import {
  Bestseller,
  toys,
  mens,
  womens,
  mobiles,
  Accecories,
  homedecor,
  footwear,
  beauty,
} from "../data/info";

function Product() {
  const [Showcategories, setShowcategories] = useState(true);
  const [showRange, setshowRange] = useState(true);
  const [priceRange, setpriceRange] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState([]);

  const handleCheckboxChange = (category) => {
    setSelectedCategory((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const togglecategories = () => {
    setShowcategories(!Showcategories);
  };

  const togglerange = () => {
    setshowRange(!showRange);
  };

  const allProducts = [
    ...mens.map((p) => ({ ...p, category: "Men" })),
    ...womens.map((p) => ({ ...p, category: "Women" })),
    ...Accecories.map((p) => ({ ...p, category: "Accessories" })),
    ...footwear.map((p) => ({ ...p, category: "Footwears" })),
    ...Bestseller.map((p) => ({ ...p, category: "Bestseller" })),
    ...toys.map((p) => ({ ...p, category: "Toys" })),
    ...mobiles.map((p) => ({ ...p, category: "Mobiles" })),
    ...homedecor.map((p) => ({ ...p, category: "Homedecor" })),
    ...beauty.map((p) => ({ ...p, category: "Beauty" })),
  ];

  const getFilteredProducts = () => {
    let filtered = allProducts;

    if (selectedCategory.length > 0) {
      filtered = filtered.filter((product) =>
        selectedCategory.includes(product.category)
      );
    }

    if (priceRange > 0) {
      filtered = filtered.filter((product) => product.price <= priceRange);
    }

    return filtered;
  };

  return (
    <>
      <div className="lg:ml-10 lg:pt-20 pt-30 mb-20 md:pt-28 md:flex-row">
        <span className="lg:ml-10 ml-5 text-3xl font-bold ">All Products</span>
        <div className="lg:mt-5 ml-0 flex lg:flex-row flex-col justify-between h-auto ">
          {/* Filter Sidebar */}
          <div className="flex-col pl-10 h-[500px] lg:flex hidden">
            <span className="text-lg font-semibold">Filters</span>
            <button
              className="border-1 p-2 rounded-md mt-10 w-62 hover:bg-gray-100 cursor-pointer"
              onClick={() => {
                setSelectedCategory([]);
                setpriceRange(0);
              }}
            >
              Clear All
            </button>

            {/* Category Filter */}
            <div>
              <button
                onClick={togglecategories}
                className=" mt-10 flex items-center justify-between w-full rounded-md"
              >
                <span className="hover:underline text-xl font-semibold">
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
                      <input
                        type="checkbox"
                        onChange={() => handleCheckboxChange("Men")}
                        checked={selectedCategory.includes("Men")}
                      />
                    </li>
                  </ul>
                  <ul className="flex justify-between">
                    <label>Women</label>
                    <li>
                      <input
                        type="checkbox"
                        onChange={() => handleCheckboxChange("Women")}
                        checked={selectedCategory.includes("Women")}
                      />
                    </li>
                  </ul>
                  <ul className="flex justify-between">
                    <label>Accessories</label>
                    <li>
                      <input
                        type="checkbox"
                        onChange={() => handleCheckboxChange("Accessories")}
                        checked={selectedCategory.includes("Accessories")}
                      />
                    </li>
                  </ul>
                  <ul className="flex justify-between">
                    <label>Footwears</label>
                    <li>
                      <input
                        type="checkbox"
                        onChange={() => handleCheckboxChange("Footwears")}
                        checked={selectedCategory.includes("Footwears")}
                      />
                    </li>
                  </ul>
                  <ul className="flex justify-between">
                    <label>Mobiles</label>
                    <li>
                      <input
                        type="checkbox"
                        onChange={() => handleCheckboxChange("Mobiles")}
                        checked={selectedCategory.includes("Mobiles")}
                      />
                    </li>
                  </ul>
                  <ul className="flex justify-between">
                    <label>HomeDecor</label>
                    <li>
                      <input
                        type="checkbox"
                        onChange={() => handleCheckboxChange("Homedecor")}
                        checked={selectedCategory.includes("Homedecor")}
                      />
                    </li>
                  </ul>
                  <ul className="flex justify-between">
                    <label>Beauty</label>
                    <li>
                      <input
                        type="checkbox"
                        onChange={() => handleCheckboxChange("Beauty")}
                        checked={selectedCategory.includes("Beauty")}
                      />
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
                  <div className="mt-5 mr-20">
                    <input
                      type="range"
                      min={0}
                      max={25000}
                      value={priceRange}
                      onChange={(e) => setpriceRange(e.target.value)}
                      className="w-full accent-gray-800"
                    />
                    <div>
                      <label className="font-semibold">₹ {priceRange}</label>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <br />
          </div>

          {/* Product List */}
          <div className="flex flex-wrap justify-around items-center gap-10 p-10">
            {getFilteredProducts().map((product, index) => (
              <Link to={`/product/${product.id}`} key={index}>
                <div>
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-[300px] h-[400px] object-cover border-2 rounded-2xl border-gray-400 hover:scale-106"
                  />
                  <div className="flex justify-between items-center">
                    <span className="mt-2 font-bold text-xl ">
                      {product.name}
                    </span>
                    <span className="mt-2 text-lg font-semibold">
                      Rating : {product.Rating}
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="mt-2 text-gray-500">{product.tag}</span>
                    <span className="mt-2 font-semibold text-lg text-gray-700">
                      ₹{product.price}
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
