import React, { useState } from "react";

function Cart() {
  const [count, setcount] = useState(1);
  let decrementCount = () => {
    if (count >= 1) {
      setcount(count - 1);
    }
  };
  return (
    <>
      <div className="mt-25 ml-40">
        <span className="font-bold flex text-3xl justify-center">
          Your Cart
        </span>
      </div>
      <div className="flex justify-center gap-8 mt-5 h-auto">
        <div className="border-1 border-gray-400  rounded-2xl">
          <div className="flex p-6 gap-10">
            <div className="border-1 border-gray-400  rounded-xl w-40 h-30">
              <img src="" alt="ghg" />
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-semibold text-xl">Name of Product</span>
              <span className="text-lg">Price of product</span>
              <span className="text-sm">order No</span>
            </div>
            <div className="flex justify-center items-center gap-5">
              <button
                onClick={() => setcount(count + 1)}
                className="text-3xl p-3 font-bold"
              >
                +
              </button>
              <span className="font-semibold text-2xl">{count}</span>
              <button
                onClick={decrementCount}
                className="text-3xl p-3 font-bold"
              >
                -
              </button>
              <button className="text-lg font-semibold border-1 rounded-2xl w-22 bg-black text-white">
                Remove
              </button>
            </div>
          </div>
        </div>
        <div className="border-1 border-gray-400 rounded-2xl p-3">
          <span className="text-center font-semibold text-xl">
            Order Summary
          </span>
          <hr className="border-gray-300 my-4" />
          <div className="flex flex-col justify-center">
            <span>Subtotal </span>
            <span>Shipping </span>
            <span>Tax </span>
            <span>Total </span>
          </div>
          <hr className="border-gray-300 my-4" />
          <div className="flex gap-5 mt-3">
            <button className="border-1 border-gray-400  p-1 rounded-xl bg-black text-white hover:bg-gray-700 cursor-pointer">
              Proceed to Checkout
            </button>
            <button className="border-1 border-gray-400  p-1 rounded-xl hover:bg-gray-100 cursor-pointer">
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
