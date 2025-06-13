import { useState } from "react";
import {
  Bestseller,
  toys,
  mens,
  womens,
  mobiles,
  homedecor,
  footwear,
  beauty,
  Accecories,
} from "../data/info";
import Footer from "./Footer";

let allProduct = [Bestseller];

function Cart() {
  const [count, setCount] = useState(1);

  const decrementCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const incrementCount = () => {
    setCount(count + 1);
  };

  const removeItem = () => {
    console.log("Item removed");
  };

  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="font-bold text-2xl sm:text-3xl">Your Cart</h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto">
          <div className="flex-1">
            <div className="border border-gray-300 rounded-2xl overflow-hidden">
              {allProduct.map((product, index) => (
                <div
                  key={index}
                  className="border-b border-gray-200 last:border-b-0"
                >
                  <div className="flex flex-col sm:flex-row p-6 gap-6 items-center">
                    {/* Product Image */}
                    <div className="flex-shrink-0">
                      <div className="border border-gray-300 rounded-xl w-32 h-32 flex items-center justify-center bg-gray-50">
                        <img
                          src="/placeholder.svg?height=120&width=120"
                          alt="Product"
                          className="max-w-full max-h-full object-contain p-2"
                        />
                      </div>
                    </div>

                    {/* Product Info */}
                    <div className="flex-1 text-center sm:text-left">
                      <h3 className="font-semibold text-xl mb-2">
                        Name of Product
                      </h3>
                      <p className="text-lg text-gray-700 mb-1">₹499.00</p>
                      <p className="text-sm text-gray-500">Order No: #12345</p>
                    </div>

                    {/* Quantity Controls */}
                    <div className="flex flex-col sm:flex-row items-center gap-4">
                      <div className="flex items-center gap-3 border border-gray-300 rounded-lg px-3 py-2">
                        <button
                          onClick={decrementCount}
                          disabled={count <= 1}
                          className={`text-2xl font-bold w-8 h-8 flex items-center justify-center rounded ${
                            count <= 1
                              ? "text-gray-400 cursor-not-allowed"
                              : "text-gray-700 hover:bg-gray-100"
                          }`}
                        >
                          -
                        </button>
                        <span className="font-semibold text-xl min-w-[2rem] text-center">
                          {count}
                        </span>
                        <button
                          onClick={incrementCount}
                          className="text-2xl font-bold w-8 h-8 flex items-center justify-center rounded text-gray-700 hover:bg-gray-100"
                        >
                          +
                        </button>
                      </div>

                      <button
                        onClick={removeItem}
                        className="text-red-600 hover:text-red-800 font-medium px-3 py-2 rounded hover:bg-red-50 transition-colors"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full lg:w-96">
            <div className="border border-gray-300 rounded-2xl p-6 sticky top-4">
              <h2 className="text-center font-semibold text-xl mb-4">
                Order Summary
              </h2>

              <hr className="border-gray-300 mb-4" />

              <div className="space-y-3 mb-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">
                    ₹{(499 * count).toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-medium">₹200.00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Tax</span>
                  <span className="font-medium">
                    ₹{((499 * count + 200) * 0.18).toFixed(2)}
                  </span>
                </div>
              </div>

              <hr className="border-gray-300 mb-4" />

              <div className="flex justify-between font-bold text-lg mb-6">
                <span>Total</span>
                <span>
                  ₹{(499 * count + 200 + (499 * count + 200) * 0.18).toFixed(2)}
                </span>
              </div>

              <div className="space-y-3">
                <button className="w-full bg-black text-white py-3 px-4 rounded-xl font-medium hover:bg-gray-800 transition-colors">
                  Proceed to Checkout
                </button>
                <button className="w-full border border-gray-300 py-3 px-4 rounded-xl font-medium hover:bg-gray-50 transition-colors">
                  Continue Shopping
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Cart;
