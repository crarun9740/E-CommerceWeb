import React from "react";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { Accecories } from "../data/info";

function Accecory() {
  return (
    <>
      <div className="pt-30">
        <div className="">
          <h2 className="text-3xl font-semibold px-4 md:px-6 lg:px-8 ">
            Accesory Collection
          </h2>
          <div className="mt-10">
            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 pl-10 gap-4">
              {Accecories.map((Accecories, index) => (
                <Link
                  to={`/categories/accecories/${Accecories.id}`}
                  key={index}
                >
                  <div className="justify-center">
                    <div className="flex flex-col w-[300px] h-[500px] items-center cursor-pointer">
                      <div className="border-2 border-gray-400 rounded-xl overflow-hidden hover:scale-102">
                        <img
                          src={Accecories.image || "/placeholder.svg"}
                          alt={`${Accecories.name} category`}
                          className="w-[300px] h-[400px] object-cover "
                        />
                      </div>
                      <div className="flex flex-col gap-1 pr-10 mb-10">
                        <div className="flex justify-between items-center mt-2">
                          <span className="font-semibold text-lg text-black  ">
                            {Accecories.name}
                          </span>
                          <span className="font-semibold">
                            {Accecories.rating}
                          </span>
                        </div>
                        <span className="text-sm text-gray-400 mt-1  ">
                          {Accecories.tag}
                        </span>
                        <span className="font-semibold text-lg text-gray-700 mt-1 ">
                          {Accecories.price}
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

export default Accecory;
