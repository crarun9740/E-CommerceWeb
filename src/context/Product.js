import { useContext } from "react";
import { CartContext } from "./CartContext";
import {
  Bestseller,
  toys,
  mens,
  womens,
  mobiles,
  Accecories,
} from "../data/info";

// Combine all product arrays into one flat array
const combinedProducts = [
  ...Bestseller,
  ...toys,
  ...mens,
  ...womens,
  ...mobiles,
  ...Accecories,
];

function Products() {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="font-bold text-2xl sm:text-3xl text-center mb-8">
        Products
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {combinedProducts.map((product) => (
          <div
            key={product.id}
            className="border border-gray-300 rounded-2xl overflow-hidden shadow-md bg-white"
          >
            <div className="w-full h-48 flex items-center justify-center bg-gray-50">
              <img
                src={product.image || "/placeholder.svg"}
                alt={product.name || "Product"}
                className="max-w-full max-h-full object-contain p-2"
              />
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2 truncate">
                {product.name || "Product Name"}
              </h3>
              <p className="text-lg text-gray-700 mb-2">
                ₹{product.price || 499}.00
              </p>
              <button
                onClick={() => addToCart(product)}
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
