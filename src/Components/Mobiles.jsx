import React from "react";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { mobiles } from "../data/info";

function Mobiles() {
  return (
    <>
      <div className="pt-20">
        <h2 className="text-2xl pl-15 font-semibold">Mobiles Collections</h2>
        <div className="mt-5">
          <div className="flex flex-wrap justify-around items-center  gap-10 p-10">
            {mobiles.map((mobiles, index) => (
              <Link to={`/categories/mobiles/${mobiles.id}`}>
                <div key={index} className="">
                  <img
                    src={mobiles.image || "/placeholder.svg"}
                    alt={`${mobiles.name}`}
                    className="w-[300px] h-[400px] object-cover border-2 border-gray-400  rounded-2xl"
                  />
                  <div className="flex justify-between items-center">
                    <span className="mt-2 font-bold text-xl">
                      {mobiles.name}
                    </span>
                    <span className="mt-2 text-lg font-semibold">
                      Rating : {mobiles.Rating}
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="mt-2 text-gray-500">{mobiles.tag}</span>
                    <span className="mt-2 font-semibold text-lg text-gray-700">
                      {mobiles.price}
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

export default Mobiles;
