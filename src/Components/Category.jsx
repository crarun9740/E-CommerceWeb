import Footer from "./Footer";
import { Link } from "react-router-dom";
import { Accecories, Bestseller } from "../data/info";

function Category() {
  const categories = [
    { name: "men", image: "/assets/men-3.jpeg" },
    { name: "Women", image: "/assets/women-6.jpeg" },
    { name: "Accecory", image: "/assets/accecories-5.jpeg" },
    { name: "Footwear", image: "/assets/footwear-2.jpeg" },
    { name: "Mobiles", image: "/assets/mobile-1.jpeg" },
    { name: "Toys", image: "/assets/toy-5.jpeg" },
    { name: "Beauty", image: "/assets/beauty-3.jpeg" },
    { name: "HomeDecor", image: "/assets/homedecor-1.jpeg" },
  ];

  return (
    <>
      <div className="pt-30 lg:pt-20 flex flex-col">
        <h2 className="text-3xl font-semibold px-4 md:px-8 lg:px-8 lg:font-bold">
          Categories
        </h2>
        <div className="bg-gray-100 mt-5 py-6 px-4 md:px-6 lg:px-8 border-1 border-gray-50 shadow-lg">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {categories.map((category, index) => (
              <Link to={`/categories/${category.name} `} key={index}>
                <div className="flex justify-center">
                  <div className="flex flex-col items-center cursor-pointer">
                    <div className="border-2 border-gray-400 rounded-xl overflow-hidden">
                      <img
                        src={category.image || "/placeholder.svg"}
                        alt={`${category.name} category`}
                        className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] object-cover hover:scale-106"
                      />
                    </div>
                    <span className="font-bold text-lg text-gray-800 mt-2 text-center">
                      {category.name}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-10 px-4 md:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold">Bestseller</h2>
        <div className="mt-10">
          <div className="grid grid-cols-1  md:grid-cols-4 pl-10 gap-4 ">
            {Bestseller.map((Bestseller, index) => (
              <Link to={`/categories/${Bestseller.id}`} key={index}>
                <div className="justify-center">
                  <div className="flex flex-col w-[300px] h-[500px] items-center cursor-pointer">
                    <div className="border-2 border-gray-400 rounded-xl overflow-hidden hover:scale-102">
                      <img
                        src={Bestseller.image || "/placeholder.svg"}
                        alt={`${Bestseller.name} category`}
                        className="w-[300px] h-[400px] object-cover "
                      />
                    </div>
                    <div className="flex flex-col gap-1 pr-10 mb-10">
                      <div className="flex justify-between items-center mt-2">
                        <span className="font-semibold text-lg text-black  ">
                          {Bestseller.name}
                        </span>
                        <span className="font-semibold">
                          {Bestseller.rating}
                        </span>
                      </div>
                      <span className="text-sm text-gray-400 mt-1  ">
                        {Bestseller.tag}
                      </span>
                      <span className="font-semibold text-lg text-gray-700 mt-1 ">
                        ₹{Bestseller.price}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-10">
        <h2 className="text-3xl font-semibold px-4 md:px-6 lg:px-8">
          Accecories
        </h2>
        <div className="mt-10">
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 pl-10 gap-4">
            {Accecories.map((Accecories, index) => (
              <Link to={`/categories/${Accecories.id}`}>
                <div key={index} className="justify-center">
                  <div className="flex flex-col w-[300px] h-[500px] items-center cursor-pointer">
                    <div className="border-2 border-gray-400 rounded-xl overflow-hidden hover:scale-102">
                      <img
                        src={Accecories.image || "/placeholder.svg"}
                        alt={`${Accecories.name} category`}
                        className="w-[300px] h-[400px] object-cover hover:scale-106"
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
                        ₹{Accecories.price}
                      </span>
                    </div>
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

export default Category;
