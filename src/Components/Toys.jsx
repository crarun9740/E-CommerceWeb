import React from "react";
import Footer from "./Footer";
import { Link } from "react-router-dom";

function Toys() {
  const Toys = [
    {
      id: 1,
      name: "Funskool",
      tag: "Wooden Toys for children",
      price: "RS.499",
      image: "/assets/toy-7.jpeg",
      Rating: "4.5",
    },
    {
      id: 2,
      name: "Shopee",
      tag: "Plastic Chess Pieces",
      price: "Rs.215",
      image: "/assets/toy-9.jpeg",
      Rating: "4.6",
    },
    {
      id: 3,
      name: "Shopee",
      tag: "UNO is the classic card game deck",
      price: "Rs.249",
      image: "/assets/toy-10.jpeg",
      Rating: "3.8",
    },
    {
      id: 4,
      name: "Plush",
      tag: "9.5-inch Ganesh plush is an ideal ",
      price: "Rs.199",
      image: "/assets/toy-11.jpeg",
      Rating: "3.5",
    },
    {
      id: 5,
      name: "Channapatna Toys",
      tag: "Channapatna Toys Wooden Rattles for Baby",
      price: "Rs.999",
      image: "/assets/toy-13.jpeg",
      Rating: "4.1",
    },
    {
      id: 6,
      name: "Element Ambhari",
      tag: "This Piece is refer to Elephant Ambari.",
      price: "Rs.299",
      image: "/assets/toy-14.jpeg",
      Rating: "4.2",
    },
    {
      id: 7,
      name: "Bazook",
      tag: "Bubble Gun, 69 Holes Bubble Machine Gun",
      price: "Rs.2,999",
      image: "/assets/toy-15.jpeg",
      Rating: "4.5",
    },
    {
      id: 8,
      name: "FairyLand",
      tag: "Teddybear cute fluffy friend ",
      price: "Rs.999",
      image: "/assets/toy-16.jpeg",
      Rating: "4.5",
      size: "",
    },
  ];
  return (
    <>
      <div className="pt-20">
        <h2 className="text-2xl pl-15 font-semibold">Toys Collections</h2>
        <div className="mt-5">
          <div className="flex flex-wrap justify-around items-center gap-10 p-10">
            {Toys.map((Toys, index) => (
              <Link to={`/categories/Toys/${Toys.id}`}>
                <div key={index} className="">
                  <img
                    src={Toys.image || "/placeholder.svg"}
                    alt={`${Toys.name}`}
                    className="w-[300px] h-[400px] object-cover border-2 border-gray-400  rounded-2xl"
                  />
                  <div className="flex justify-between items-center">
                    <span className="mt-2 font-bold text-xl">{Toys.name}</span>
                    <span className="mt-2 text-lg font-semibold">
                      Rating : {Toys.Rating}
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="mt-2 text-gray-500">{Toys.tag}</span>
                    <span className="mt-2 font-semibold text-lg text-gray-700">
                      {Toys.price}
                    </span>
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

export default Toys;
