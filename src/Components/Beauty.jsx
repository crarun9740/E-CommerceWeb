import React from "react";
import Footer from "./Footer";

function Beauty() {
  const Beauty = [
    {
      name: "Bellavita",
      tag: "Unisex Eau De Perfume Gift Set 4 x 200ml",
      price: "RS.699",
      image: "/assets/beauty-7.jpeg",
      Rating: "4.5",
    },
    {
      name: "Cetaphil",
      tag: "Hydrating Face Wash with Vitamin B5",
      price: "Rs.395",
      image: "/assets/beauty-8.jpeg",
      Rating: "4.2",
    },
    {
      name: "Garnier",
      tag: "Garnier Micellar Water for Makeup Remover",
      price: "Rs.319",
      image: "/assets/beauty-9.jpeg",
      Rating: "3.6",
    },
    {
      name: "Lakme",
      tag: "Lakme Matte Lipstick ",
      price: "Rs.499",
      image: "/assets/beauty-10.jpeg",
      Rating: "3.9",
    },
    {
      name: "Realme",
      tag: "Minimalist 2% Salicyclic acid Face Wash",
      price: "Rs.799",
      image: "/assets/beauty-11.jpeg",
      Rating: "3.1",
    },
    {
      name: "Dot & Key",
      tag: "Barrier Repairing Moisturizer  ",
      price: "Rs.799",
      image: "/assets/beauty-12.jpeg",
      Rating: "4.7",
    },
    {
      name: "The derma Co.",
      tag: "The Derma Co. 7% Glycolic Acid Hydrating Toner",
      price: "Rs.829",
      image: "/assets/beauty-13.jpeg",
      Rating: "4.0",
    },
    {
      name: "Lakme",
      tag: "Lakme Makeup Kit",
      price: "Rs.12,999",
      image: "/assets/beauty-14.jpeg",
      Rating: "4.3",
      size: "",
    },
  ];
  return (
    <>
      <div className="pt-20">
        <h2 className="text-2xl pl-15 font-semibold">Beauty Collections</h2>
        <div className="mt-5">
          <div className="flex flex-wrap justify-around items-center gap-10 p-10">
            {Beauty.map((Beauty, index) => (
              <div key={index} className="">
                <img
                  src={Beauty.image || "/placeholder.svg"}
                  alt={`${Beauty.name}`}
                  className="w-[300px] h-[400px] object-cover border-2 rounded-2xl border-gray-400 "
                />
                <div className="flex justify-between items-center">
                  <span className="mt-2 font-bold text-xl">{Beauty.name}</span>
                  <span className="mt-2 text-lg font-semibold">
                    Rating : {Beauty.Rating}
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="mt-2 text-gray-500">{Beauty.tag}</span>
                  <span className="mt-2 font-semibold text-lg text-gray-700">
                    {Beauty.price}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Beauty;
