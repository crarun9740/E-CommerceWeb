import React from "react";
import Footer from "./Footer";

function Footwear() {
  const footwear = [
    {
      name: "Nike",
      tag: "ETPU Athleisure Shoes for Men",
      price: "RS.1,493",
      image: "/assets/footwear-1.jpeg",
      Rating: "4.5",
    },
    {
      name: "Nike",
      tag: "Sneakers For Men",
      price: "Rs.6,795",
      image: "/assets/footwear-4.jpeg",
      Rating: "4.6",
    },
    {
      name: "FLYING&SAM ",
      tag: "Women Flats Sandal",
      price: "Rs.300",
      image: "/assets/footwear-5.jpeg",
      Rating: "3.8",
    },
    {
      name: "TAYDOL",
      tag: "Women Presents Collection Of Ethnic Wear ",
      price: "Rs.401",
      image: "/assets/footwear-6.jpeg",
      Rating: "3.5",
    },
    {
      name: "Roadster ",
      tag: "Men Slides",
      price: "Rs.299",
      image: "/assets/footwear-7.jpeg",
      Rating: "3.5",
    },
    {
      name: "Sparx",
      tag: "Men Flipflops",
      price: "Rs.399",
      image: "/assets/footwear-9.jpeg",
      Rating: "4.2",
    },
    {
      name: "Crocs",
      tag: " Crocs Clogs Gray and Green",
      price: "Rs.6999",
      image: "/assets/footwear-10.jpeg",
      Rating: "4.5",
    },
    {
      name: "Bahamas",
      tag: "men Flipflop",
      price: "Rs.199",
      image: "/assets/footwear-13.jpeg",
      Rating: "4.5",
      size: "",
    },
  ];
  return (
    <>
      <div className="pt-20">
        <h2 className="text-2xl pl-15 font-semibold">Footwear Collections</h2>
        <div className="mt-5">
          <div className="flex flex-wrap justify-around items-center gap-10 p-10">
            {footwear.map((footwear, index) => (
              <div key={index} className="">
                <img
                  src={footwear.image || "/placeholder.svg"}
                  alt={`${footwear.name}`}
                  className="w-[300px] h-[400px] object-cover border-2 border-gray-400  rounded-2xl"
                />
                <div className="flex justify-between items-center">
                  <span className="mt-2 font-bold text-xl">
                    {footwear.name}
                  </span>
                  <span className="mt-2 text-lg font-semibold">
                    Rating : {footwear.Rating}
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="mt-2 text-gray-500">{footwear.tag}</span>
                  <span className="mt-2 font-semibold text-lg text-gray-700">
                    {footwear.price}
                  </span>
                  <div className="flex gap-2 mt-2">
                    <button className="border-1 w-8 rounded-sm hover:bg-gray-300">
                      7
                    </button>
                    <button className="border-1 w-8 rounded-sm hover:bg-gray-300">
                      8
                    </button>

                    <button className="border-1 w-8 rounded-sm hover:bg-gray-300">
                      9
                    </button>
                    <button className="border-1 w-8 rounded-sm hover:bg-gray-300">
                      10
                    </button>
                    <button className="border-1 w-8 rounded-sm hover:bg-gray-300">
                      11
                    </button>
                  </div>
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

export default Footwear;
