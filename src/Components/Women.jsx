import React from "react";
import Footer from "./Footer";
import { Link } from "react-router-dom";

function Women() {
  const Women = [
    {
      id: 1,
      name: "Manyavar",
      price: "Rs.2,999",
      tag: "Women Salvar Blue and Gold Combo ",
      image: "/assets/women-3.jpg",
      rating: "Rating : 4.3",
    },
    {
      id: 2,
      name: "Ketch",
      price: "Rs.1,099",
      tag: "Women Casual Bollywood Fashion Shirt",
      image: "/assets/women-2.jpg",
      rating: "Rating : 4.1",
    },
    {
      id: 3,
      name: "Ansh&Styles",
      price: "Rs.1,599",
      tag: "Elegant Wine gown Dress for Women...",
      image: "/assets/women-7.jpg",
      rating: "Rating : 4.6",
    },
    {
      id: 4,
      name: "Sudathi",
      price: "Rs.20,999",
      tag: "Reception Blue color Saree in Silk fabric",
      image: "/assets/women-8.jpeg",
      rating: "Rating : 4.9",
    },
    {
      id: 5,
      name: "Ansh Style",
      price: "Rs.3,099",
      tag: "best bridal lahanga for women and.....",
      image: "/assets/women-9.jpg",
      rating: "Rating : 4.5",
    },
    {
      id: 6,
      name: "Zara",
      price: "Rs.1,059",
      tag: "Emerald-green kurta hand-embroidered ",
      image: "/assets/women-10.jpeg",
      rating: "Rating : 4.5",
    },
    {
      id: 7,
      name: "Zudio",
      price: "Rs.1,999",
      tag: "Women Leather bag with hand Crafted",
      image: "/assets/women-11.jpeg",
      rating: "Rating : 4.1",
    },
    {
      id: 8,
      name: "Gucci",
      price: "Rs.5,099",
      tag: "Women Modern Premium Watch G-3CR",
      image: "/assets/women-12.jpeg",
      rating: "Rating : 4.3",
    },
  ];

  return (
    <>
      <div className="pt-20">
        <div className="">
          <h2 className="text-3xl font-semibold px-4 md:px-6 lg:px-8 ">
            Women Collection
          </h2>
          <div className="mt-10">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 pl-15 gap-4">
              {Women.map((Women, index) => (
                <Link to={`/categories/women/${Women.id}`}>
                  <div key={index} className="justify-center">
                    <div className="flex flex-col w-[300px] h-[500px] items-center cursor-pointer">
                      <div className="border-2 border-gray-400 rounded-xl overflow-hidden">
                        <img
                          src={Women.image || "/placeholder.svg"}
                          alt={`${Women.name} category`}
                          className="w-[300px] h-[400px] object-cover"
                        />
                      </div>
                      <div className="flex flex-col gap-1 pr-10 mb-10">
                        <div className="flex justify-between items-center mt-2">
                          <span className="font-semibold text-lg text-black  ">
                            {Women.name}
                          </span>
                          <span className="font-semibold">{Women.rating}</span>
                        </div>
                        <span className="text-sm text-gray-400 mt-1  ">
                          {Women.tag}
                        </span>
                        <span className="font-semibold text-lg text-gray-700 mt-1 ">
                          {Women.price}
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

export default Women;
