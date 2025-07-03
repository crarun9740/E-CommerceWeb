import { useParams } from "react-router-dom";
import {
  Accecories,
  mens,
  womens,
  products,
  homedecor,
  Bestseller,
  mobiles,
  toys,
  footwear,
  beauty,
} from "../data/info";
import Footer from "./Footer";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";

import { Cloud, CreditCard, Shield, Truck } from "lucide-react";
import { BiCart } from "react-icons/bi";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCartDB } from "../../actions/addToCartDB";

function Info() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const product =
    Accecories.find((acc) => acc.id.toString() === id) ||
    mens.find((men) => men.id.toString() === id) ||
    womens.find((women) => women.id.toString() === id) ||
    Bestseller.find((best) => best.id.toString() === id) ||
    homedecor.find((hd) => hd.id.toString() === id) ||
    products.find((pd) => pd.id.toString() === id) ||
    Bestseller.find((bs) => bs.id.toString() === id) ||
    toys.find((pd) => pd.id.toString() === id) ||
    mobiles.find((pd) => pd.id.toString() === id) ||
    beauty.find((pd) => pd.id.toString() === id) ||
    footwear.find((pd) => pd.id.toString() === id);

  const addtocart = (product) => {
    // console.log(product);
    dispatch(addToCart(product));
    addToCartDB(product);
  };

  const cartItems = useSelector((state) => state.cartSlice.cart);
  const navigate = useNavigate();
  const handleBuyNow = (product) => {
    const alreadyInCart = cartItems.some((item) => item.id === product.id);

    if (!alreadyInCart) {
      addToCart(product);
    }
    navigate("/cart");
  };

  return (
    <>
      <div className="pb-16 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="flex flex-col w-full lg:w-1/2">
            <div className="bg-gray-50 rounded-2xl p-6 mb-6 transition-all duration-300 hover:shadow-lg">
              <img
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                className="w-full h-auto object-contain rounded-xl mx-auto max-h-[550px]"
              />
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="inline-block px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm font-medium mb-4">
                {product.tag}
              </div>

              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                {product.name || "Premium Product"}
              </h1>

              <div className="flex items-center gap-2 mb-6">
                <span className="text-gray-600">{product.rating}</span>
              </div>

              <div className="text-3xl font-bold text-gray-900 mb-6">
                <span>Rs.{product.price}</span>
              </div>

              <div className="border-t border-gray-100 pt-6">
                <h3 className="text-lg font-semibold mb-4">
                  Product Specifications
                </h3>
                <div className="space-y-4">
                  {product.specifications.fit && (
                    <div className="flex">
                      <span className="w-1/3 text-gray-500">Fit</span>
                      <span className="w-2/3 font-medium">
                        {product.specifications.fit}
                      </span>
                    </div>
                  )}

                  {product.specifications.sleeve && (
                    <div className="flex">
                      <span className="w-1/3 text-gray-500">Sleeve</span>
                      <span className="w-2/3 font-medium">
                        {product.specifications.sleeve}
                      </span>
                    </div>
                  )}

                  {product.specifications.collar && (
                    <div className="flex">
                      <span className="w-1/3 text-gray-500">Collar</span>
                      <span className="w-2/3 font-medium">
                        {product.specifications.collar}
                      </span>
                    </div>
                  )}

                  {product.specifications.pattern && (
                    <div className="flex">
                      <span className="w-1/3 text-gray-500">Pattern</span>
                      <span className="w-2/3 font-medium">
                        {product.specifications.pattern}
                      </span>
                    </div>
                  )}

                  {product.specifications.occasion && (
                    <div className="flex">
                      <span className="w-1/3 text-gray-500">Occasion</span>
                      <span className="w-2/3 font-medium">
                        {product.specifications.occasion}
                      </span>
                    </div>
                  )}

                  {product.specifications.careInstructions && (
                    <div className="flex">
                      <span className="w-1/3 text-gray-500">Care</span>
                      <span className="w-2/3 font-medium">
                        {product.specifications.careInstructions}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <div className="inline-flex items-center px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm">
                  <Shield />
                  Secure Payment
                </div>
                <div className="inline-flex items-center px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">
                  <Truck />
                  Free Shipping
                </div>
                <div className="inline-flex items-center px-3 py-1 bg-orange-50 text-orange-700 rounded-full text-sm">
                  <Cloud />
                  Easy Returns
                </div>
              </div>
              <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-8">
                <div className="flex-1 w-full">
                  <button
                    onClick={() => addtocart(product)}
                    className="w-full cursor-pointer py-4 px-6 bg-white border border-gray-200 rounded-xl font-medium text-gray-800 transition-all duration-300 hover:bg-gray-50 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-gray-200 flex justify-center items-center gap-2"
                  >
                    <BiCart className="text-2xl" />
                    Add to Cart
                  </button>
                </div>

                <div className="flex-1 w-full">
                  <button
                    onClick={() => handleBuyNow(product)}
                    className="w-full cursor-pointer py-4 px-6 bg-black text-white rounded-xl font-medium transition-all duration-300 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-800 flex justify-center items-center gap-2"
                  >
                    <CreditCard />
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Info;
