import { useState } from "react";
import {
  Bestseller,
  toys,
  mens,
  womens,
  mobiles,
  Accecories,
} from "../data/info";
import Footer from "./Footer";
import { CiShoppingCart } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../store/cartSlice";

let combinedProducts = [
  ...Bestseller,
  ...toys,
  ...mens,
  ...womens,
  ...mobiles,
  ...Accecories,
];

function Cart() {
  const [count, setCount] = useState(1);
  const [cartItems, setCartItems] = useState([]);
  const cart = useSelector((state) => state.cartSlice.cart);

  const totalPrice = cart.reduce((acc, item) => +item.price + acc, 0);

  const tax = (cart.length * 499 * count + 200) * 0.18;

  console.log(totalPrice);

  const dispatch = useDispatch();

  const decrementCount = (id) => {
    dispatch(removeFromCart(id));
  };

  const incrementCount = (id) => {
    dispatch(increaseprduct(id));
  };

  const removeItem = (indexToRemove) => {
    const updatedCart = cartItems.filter((_, index) => index !== indexToRemove);
    setCartItems(updatedCart);
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
              {cart.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-12">
                  <div className="text-8xl text-gray-600">
                    <CiShoppingCart />
                  </div>

                  <p className="text-gray-600 text-xl font-semibold mb-2">
                    Your cart is empty
                  </p>
                  <p className="text-gray-500 text-sm">
                    Add some items to get started!
                  </p>
                  <a
                    href="/products"
                    className="mt-4 px-4 py-2 bg-black text-white rounded-lg cursor-pointer hover:bg-gray-800 "
                  >
                    Shop Now
                  </a>
                </div>
              ) : (
                cart.map((product, index) => (
                  <div
                    key={index}
                    className="border-b border-gray-200 last:border-b-0"
                  >
                    <div className="flex flex-col sm:flex-row p-6 gap-6 items-center">
                      <div className="flex-shrink-0">
                        <div className="border border-gray-300 rounded-xl w-32 h-32 flex items-center justify-center bg-gray-50">
                          <img
                            src={product.image || "/placeholder.svg"}
                            alt={product.name || "Product"}
                            className="max-w-full max-h-full object-contain p-2"
                          />
                        </div>
                      </div>

                      <div className="flex-1 text-center sm:text-left">
                        <h3 className="font-semibold text-xl mb-2">
                          {product.name || "Name of Product"}
                        </h3>
                        <p className="text-lg text-gray-700 mb-1">
                          ₹{product.price || 499}.00
                        </p>
                        <p className="text-sm text-gray-500">
                          Order No: 1ASddcrKr{product.id || 12345}
                        </p>
                      </div>

                      <div className="flex flex-col sm:flex-row items-center gap-4">
                        <div className="flex items-center gap-3 border border-gray-300 rounded-lg px-3 py-2">
                          <button
                            onClick={() => decrementCount(product.id)}
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
                            onClick={() => incrementCount(product.id)}
                            className="text-2xl font-bold w-8 h-8 flex items-center justify-center rounded text-gray-700 hover:bg-gray-100"
                          >
                            +
                          </button>
                        </div>

                        <button
                          onClick={() => dispatch(removeFromCart(product.id))}
                          className="text-red-600 hover:text-red-800 font-medium px-3 py-2 rounded hover:bg-red-50 transition-colors"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          {cart.length !== 0 && (
            <div className="w-full lg:w-96">
              <div className="border border-gray-300 rounded-2xl p-6 sticky top-4">
                <h2 className="text-center font-semibold text-xl mb-4">
                  Order Summary
                </h2>

                <hr className="border-gray-300 mb-4" />

                <div className="space-y-3 mb-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-medium">₹{totalPrice}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Shipping</span>
                    <span className="font-medium">₹200.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Tax</span>
                    <span className="font-medium">
                      ₹
                      {((cartItems.length * 499 * count + 200) * 0.18).toFixed(
                        2
                      )}
                    </span>
                  </div>
                </div>

                <hr className="border-gray-300 mb-4" />

                <div className="flex justify-between font-bold text-lg mb-6">
                  <span>Total</span>
                  <span>₹{(totalPrice + 200 + tax).toFixed(2)}</span>
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
          )}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Cart;
