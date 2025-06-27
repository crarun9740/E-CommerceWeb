import React from "react";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { womens } from "../data/info";

function Women() {
  return (
    <>
      <div className="pt-0">
        <div className="mt-10">
          <h2 className="text-3xl font-semibold px-4 md:px-6 lg:px-8 ">
            Women Collection
          </h2>
          <div className="mt-10">
            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 pl-10 gap-4">
              {womens.map((womens, index) => (
                <Link to={`/categories/women/${womens.id}`}>
                  <div key={index} className="justify-center">
                    <div className="flex flex-col w-[300px] h-[500px] items-center cursor-pointer">
                      <div className="border-2 border-gray-400 rounded-xl overflow-hidden hover:scale-102">
                        <img
                          src={womens.image || "/placeholder.svg"}
                          alt={`${Women.name} category`}
                          className="w-[300px] h-[400px] object-cover"
                        />
                      </div>
                      <div className="flex flex-col gap-1 pr-10 mb-10">
                        <div className="flex justify-between items-center mt-2">
                          <span className="font-semibold text-lg text-black  ">
                            {womens.name}
                          </span>
                          <span className="font-semibold">{Women.rating}</span>
                        </div>
                        <span className="text-sm text-gray-400 mt-1  ">
                          {womens.tag}
                        </span>
                        <span className="font-semibold text-lg text-gray-700 mt-1 ">
                          ₹{womens.price}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Women;
