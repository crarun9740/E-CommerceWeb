import React from "react";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { beauty } from "../data/info";

function Beauty() {
  return (
    <>
      <div className="pt-20">
        <h2 className="text-2xl pl-15 font-semibold">Beauty Collections</h2>
        <div className="mt-5">
          <div className="flex flex-wrap justify-around items-center gap-10 p-10">
            {beauty.map((beauty, index) => (
              <Link to={`/categories/beauty/${beauty.id}`}>
                <div key={index} className="">
                  <img
                    src={beauty.image || "/placeholder.svg"}
                    alt={`${beauty.name}`}
                    className="w-[300px] h-[400px] object-cover border-2 rounded-2xl border-gray-400 "
                  />
                  <div className="flex justify-between items-center">
                    <span className="mt-2 font-bold text-xl">
                      {beauty.name}
                    </span>
                    <span className="mt-2 text-lg font-semibold">
                      Rating : {beauty.Rating}
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="mt-2 text-gray-500">{beauty.tag}</span>
                    <span className="mt-2 font-semibold text-lg text-gray-700">
                      {beauty.price}
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

export default Beauty;
