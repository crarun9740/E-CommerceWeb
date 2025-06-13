import React from "react";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { homedecor } from "../data/info";

function Homedecor() {
  return (
    <>
      <div className="pt-20">
        <h2 className="text-2xl pl-13 font-bold mt-12">Homedecor Collection</h2>
        <div className="">
          <div className="flex flex-wrap justify-around items-center gap-10 p-10">
            {homedecor.map((homedecor, index) => (
              <Link to={`/categories/homedecor/${homedecor.id}`}>
                <div key={index} className="">
                  <img
                    src={homedecor.image || "/placeholder.svg"}
                    alt={`${homedecor.name}`}
                    className="w-[300px] h-[400px] object-cover border-2 border-gray-400  rounded-2xl hover:scale-102"
                  />
                  <div className="flex justify-between items-center">
                    <span className="mt-2 font-bold text-xl">
                      {homedecor.name}
                    </span>
                    <span className="mt-2 text-lg font-semibold">
                      Rating : {homedecor.Rating}
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="mt-2 text-gray-500">{homedecor.tag}</span>
                    <span className="mt-2 font-semibold text-lg text-gray-700">
                      {homedecor.price}
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

export default Homedecor;
