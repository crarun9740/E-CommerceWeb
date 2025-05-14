import React from "react";
import Footer from "./Footer";

function Mobiles() {
  const Mobiles = [
    {
      name: "Google",
      tag: "Google pixel 9 Pro",
      price: "RS.99,999",
      image: "/assets/mobile-1.jpeg",
      Rating: "4.5",
    },
    {
      name: "Apple",
      tag: "iphone 16 Plus",
      price: "Rs.6,795",
      image: "/assets/mobile-4.jpeg",
      Rating: "4.6",
    },
    {
      name: "Redmi ",
      tag: "Redmi Note 9 Pro Max",
      price: "Rs.18,999",
      image: "/assets/mobile-6.jpeg",
      Rating: "3.8",
    },
    {
      name: "IQ00",
      tag: "IQ00 Z6 Lite ",
      price: "Rs.17,999",
      image: "/assets/mobile-9.jpeg",
      Rating: "3.5",
    },
    {
      name: "Realme",
      tag: "Realme C55",
      price: "Rs.19,999",
      image: "/assets/mobile-10.jpeg",
      Rating: "4.1",
    },
    {
      name: "Samsung",
      tag: "Samsung Galaxy A16 5G",
      price: "Rs.34,999",
      image: "/assets/mobile-12.jpeg",
      Rating: "4.2",
    },
    {
      name: "Poco",
      tag: "Poco C51",
      price: "Rs.9,999",
      image: "/assets/mobile-13.jpeg",
      Rating: "4.5",
    },
    {
      name: "Infinix",
      tag: "Infinix Hot 40 Pro",
      price: "Rs.22,999",
      image: "/assets/mobile-14.jpeg",
      Rating: "4.5",
      size: "",
    },
  ];
  return (
    <>
      <div className="pt-20">
        <h2 className="text-2xl pl-15 font-semibold">Mobiles Collections</h2>
        <div className="mt-5">
          <div className="flex flex-wrap justify-around items-center  gap-10 p-10">
            {Mobiles.map((Mobiles, index) => (
              <div key={index} className="">
                <img
                  src={Mobiles.image || "/placeholder.svg"}
                  alt={`${Mobiles.name}`}
                  className="w-[300px] h-[400px] object-cover border-2 border-gray-400  rounded-2xl"
                />
                <div className="flex justify-between items-center">
                  <span className="mt-2 font-bold text-xl">{Mobiles.name}</span>
                  <span className="mt-2 text-lg font-semibold">
                    Rating : {Mobiles.Rating}
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="mt-2 text-gray-500">{Mobiles.tag}</span>
                  <span className="mt-2 font-semibold text-lg text-gray-700">
                    {Mobiles.price}
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

export default Mobiles;
