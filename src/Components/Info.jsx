import React from "react";
import { useParams } from "react-router-dom";

function Info() {
  const { id } = useParams();
  return (
    <div className="pt-20 mb-20 flex justify-around items-start p-5">
      <div className="flex flex-col justify-center items-center w-1/2  ">
        <p>{id}</p>
        <div>
          <img src="{}" alt="" className="w-[500px] h-[550px] " />
        </div>
        <div className="flex justify-between items-center gap-5 m-2">
          <button className="h-20 w-60 border-1 p-2 bg-gray-50 rounded-2xl font-semibold text-lg">
            Add to Cart
          </button>
          <button className="h-20 w-60 border-1 p-2 bg-black text-white rounded-2xl font-semibold text-lg">
            Buy Now
          </button>
        </div>
      </div>

      <div className="w-1/2">
        <div className="w-full">
          <span>tag</span>
        </div>
        <div className="mt-2">Ratings</div>
        <div className="text-xl font-semibold mt-2">Price</div>
        <div>
          <div>
            <span className="text-3xl font-semibold mt-2">Specifications</span>
            <div>
              <span>General</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info;
