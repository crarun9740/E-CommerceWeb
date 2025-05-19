import React from "react";
import Footer from "./Footer";
import { Link } from "react-router-dom";

function Men() {
  const Mens = [
    {
      id: 1,
      name: "Snitch",
      price: "Rs.499",
      tag: "Men Premium Solid Polo Neck Polycotton",
      image: "/assets/tshirt-2.jpeg",
      rating: "Rating : 4.5",
    },
    {
      id: 2,
      name: "Denim",
      price: "Rs.1399",
      tag: "Full Sleeve Men Denim Jacket with white",
      image: "/assets/shirt-6.jpeg",
      rating: "Rating : 4.7",
    },
    {
      id: 3,
      name: "Wrogn",
      price: "Rs.899",
      tag: "Men Full Sleeve Premium Polycotton shirt",
      image: "/assets/shirt-2.jpeg",
      rating: "Rating : 4.6",
    },
    {
      id: 4,
      name: "Ketch",
      price: "Rs.559",
      tag: "Men half Sleeve Baggy tshirt Round neck",
      image: "/assets/men-1.jpeg",
      rating: "Rating : 3.9",
    },
    {
      id: 5,
      name: "Bear",
      price: "Rs.1099",
      tag: "Men Comport Fit Grey Cotton Blend Pant",
      image: "/assets/men-2.jpeg",
      rating: "Rating : 4.5",
    },
    {
      id: 6,
      name: "Ethos",
      price: "Rs.659",
      tag: "Men Solid Round Neck White tshirt",
      image: "/assets/men-3.jpeg",
      rating: "Rating : 4.5",
    },
    {
      id: 7,
      name: "Ketch",
      price: "Rs.999",
      tag: "Men Casual Bollywood Fashion Shirt",
      image: "/assets/shirt-3.jpeg",
      rating: "Rating : 4.1",
    },
    {
      id: 8,
      name: "Amazon Brand",
      price: "Rs.599",
      tag: "Women Salvar Blue and Gold Combo ",
      image: "/assets/tshirt-1.jpg",
      rating: "Rating : 4.3",
    },
  ];

  return (
    <>
      <div className="pt-20">
        <div className="">
          <h2 className="text-3xl font-semibold px-4 md:px-6 lg:px-8 ">
            Mens Collection
          </h2>
          <div className="mt-10">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 pl-15 gap-4">
              {Mens.map((Mens, index) => (
                <Link to={`/categories/men/${Mens.id}`}>
                  <div key={index} className="justify-center">
                    <div className="flex flex-col w-[300px] h-[500px] items-center cursor-pointer">
                      <div className="border-2 border-gray-400 rounded-xl overflow-hidden ">
                        <img
                          src={Mens.image || "/placeholder.svg"}
                          alt={`${Mens.name} category`}
                          className="w-[300px] h-[400px] object-cover"
                        />
                      </div>
                      <div className="flex flex-col gap-1 pr-10 mb-10">
                        <div className="flex justify-between items-center mt-2">
                          <span className="font-semibold text-lg text-black  ">
                            {Mens.name}
                          </span>
                          <span className="font-semibold">{Mens.rating}</span>
                        </div>
                        <span className="text-sm text-gray-400 mt-1  ">
                          {Mens.tag}
                        </span>
                        <span className="font-semibold text-lg text-gray-700 mt-1 ">
                          {Mens.price}
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

export default Men;
