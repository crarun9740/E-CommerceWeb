import React from "react";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { toys } from "../data/info";

function Toys() {
  return (
    <>
      <div className="pt-20">
        <h2 className="mt-13 text-2xl pl-15 font-bold mr-5">Toys Collection</h2>
        <div className="">
          <h1 className="ml-12 text-2xl font-semibold hidden">Toys</h1>
          <div className="flex flex-wrap justify-around items-center gap-10 p-10">
            {toys.map((toys, index) => (
              <Link to={`/categories/Toys/${toys.id}`}>
                <div key={index} className="">
                  <img
                    src={toys.image || "/placeholder.svg"}
                    alt={`${toys.name}`}
                    className="w-[300px] h-[400px] object-cover border-2 border-gray-400  rounded-2xl hover:scale-102"
                  />
                  <div className="flex justify-between items-center">
                    <span className="mt-2 font-bold text-xl">{toys.name}</span>
                    <span className="mt-2 text-lg font-semibold">
                      Rating : {toys.Rating}
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="mt-2 text-gray-500">{toys.tag}</span>
                    <span className="mt-2 font-semibold text-lg text-gray-700">
                      ₹{toys.price}
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

export default Toys;
