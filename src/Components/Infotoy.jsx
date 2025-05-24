"use client";
import { useParams } from "react-router-dom";
import { toys } from "../data/info";
import Footer from "./Footer";

function Infomobiles() {
  const { id } = useParams();
  const product = toys.find((mb) => mb.id.toString() === id);

  if (!product) {
    return (
      <div className="pt-28 flex justify-center items-center min-h-[60vh] text-xl font-medium text-gray-600">
        Product not found.
      </div>
    );
  }

  return (
    <>
      <div className="pt-24 pb-16 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Product Image Section */}
          <div className="flex flex-col w-full lg:w-1/2">
            <div className="bg-gray-50 rounded-2xl p-6 mb-6 transition-all duration-300 hover:shadow-lg">
              <img
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                className="w-full h-auto object-contain rounded-xl mx-auto max-h-[550px]"
              />
            </div>
          </div>

          {/* Product Details Section */}
          <div className="w-full lg:w-1/2">
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="inline-block px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm font-medium mb-4">
                {product.tag}
              </div>

              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                {product.name || "Premium Product"}
              </h1>

              <div className="flex items-center gap-2 mb-6">
                <span className="text-gray-600">
                  Ratings : {product.Rating}
                </span>
              </div>

              <div className="text-3xl font-bold text-gray-900 mb-6">
                {product.price}
              </div>

              <div className="border-t border-gray-100 pt-6">
                <h3 className="text-lg font-semibold mb-4">
                  Product Specifications
                </h3>
                <div className="space-y-4">
                  {product.specifications.material && (
                    <div className="flex">
                      <span className="w-1/3 text-gray-500">Material</span>
                      <span className="w-2/3 font-medium">
                        {product.specifications.material}
                      </span>
                    </div>
                  )}

                  {product.specifications.ageGroup && (
                    <div className="flex">
                      <span className="w-1/3 text-gray-500">AgeGroup</span>
                      <span className="w-2/3 font-medium">
                        {product.specifications.ageGroup}
                      </span>
                    </div>
                  )}

                  {product.specifications.dimensions && (
                    <div className="flex">
                      <span className="w-1/3 text-gray-500">Dimensions</span>
                      <span className="w-2/3 font-medium">
                        {product.specifications.dimensions}
                      </span>
                    </div>
                  )}

                  {product.specifications.weight && (
                    <div className="flex">
                      <span className="w-1/3 text-gray-500">Weight</span>
                      <span className="w-2/3 font-medium">
                        {product.specifications.weight}
                      </span>
                    </div>
                  )}

                  {product.specifications.os && (
                    <div className="flex">
                      <span className="w-1/3 text-gray-500">Os</span>
                      <span className="w-2/3 font-medium">
                        {product.specifications.os}
                      </span>
                    </div>
                  )}

                  {product.specifications.features && (
                    <div className="flex">
                      <span className="w-1/3 text-gray-500">Features</span>
                      <span className="w-2/3 font-medium">
                        {product.specifications.features}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <div className="inline-flex items-center px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-1"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                  Secure Payment
                </div>
                <div className="inline-flex items-center px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-1"
                  >
                    <path d="M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14" />
                    <path d="M16.5 9.4 7.55 4.24" />
                    <polyline points="3.29 7 12 12 20.71 7" />
                    <line x1="12" x2="12" y1="22" y2="12" />
                    <circle cx="18.5" cy="15.5" r="2.5" />
                    <path d="M20.27 17.27 22 19" />
                  </svg>
                  Free Shipping
                </div>
                <div className="inline-flex items-center px-3 py-1 bg-orange-50 text-orange-700 rounded-full text-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-1"
                  >
                    <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
                    <path d="M12 12v9" />
                    <path d="m8 17 4 4 4-4" />
                  </svg>
                  Easy Returns
                </div>
              </div>
              <div className="flex justify-between items-center gap-4 mt-8">
                <button className="flex-1 py-4 px-6 bg-white border border-gray-200 rounded-xl font-medium text-gray-800 transition-all duration-300 hover:bg-gray-50 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-gray-200 flex justify-center items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-shopping-cart"
                  >
                    <circle cx="8" cy="21" r="1" />
                    <circle cx="19" cy="21" r="1" />
                    <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
                  </svg>
                  Add to Cart
                </button>
                <button className="flex-1 py-4 px-6 bg-black text-white rounded-xl font-medium transition-all duration-300 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-800 flex justify-center items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-credit-card"
                  >
                    <rect width="20" height="14" x="2" y="5" rx="2" />
                    <line x1="2" x2="22" y1="10" y2="10" />
                  </svg>
                  Buy Now
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

export default Infomobiles;
