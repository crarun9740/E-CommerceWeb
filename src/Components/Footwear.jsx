import React from "react";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { footwear } from "../data/info";

function Footwear() {
  return (
    <>
      <div className="pt-20">
        <h2 className="text-2xl pl-15 font-semibold mt-15">
          Footwear Collections
        </h2>
        <div className="">
          <h1 className="ml-12 text-2xl font-semibold hidden">Footwears</h1>
          <div className="flex flex-wrap justify-around items-center gap-10 p-10">
            {footwear.map((footwear, index) => (
              <Link to={`/categories/footwear/${footwear.id}`}>
                <div key={index} className="">
                  <img
                    src={footwear.image || "/placeholder.svg"}
                    alt={`${footwear.name}`}
                    className="w-[300px] h-[400px] object-cover border-2 border-gray-400  rounded-2xl hover:scale-102"
                  />
                  <div className="flex justify-between items-center">
                    <span className="mt-2 font-bold text-xl">
                      {footwear.name}
                    </span>
                    <span className="mt-2 text-lg font-semibold">
                      Rating : {footwear.Rating}
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="mt-2 text-gray-500">{footwear.tag}</span>
                    <span className="mt-2 font-semibold text-lg text-gray-700">
                      ₹{footwear.price}
                    </span>
                    <div className="flex gap-2 mt-2">
                      <button className="border-1 w-8 rounded-sm hover:bg-gray-300">
                        7
                      </button>
                      <button className="border-1 w-8 rounded-sm hover:bg-gray-300">
                        8
                      </button>

                      <button className="border-1 w-8 rounded-sm hover:bg-gray-300">
                        9
                      </button>
                      <button className="border-1 w-8 rounded-sm hover:bg-gray-300">
                        10
                      </button>
                      <button className="border-1 w-8 rounded-sm hover:bg-gray-300">
                        11
                      </button>
                    </div>
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

export default Footwear;
