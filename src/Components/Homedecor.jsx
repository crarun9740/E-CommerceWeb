import React from "react";
import Footer from "./Footer";
import { Link } from "react-router-dom";

function Homedecor() {
  const homedecor = [
    {
      id: 1,
      name: "Leo Creation",
      tag: " Cotton Double Jaipuri Prints Flat Bedsheet ",
      price: "RS.349",
      image: "/assets/homedecor-1.jpeg",
      Rating: "4.5",
    },
    {
      id: 2,
      name: "Homeify",
      tag: "Fabric Sofa Set with 4-Puffy Convertible Sofa ",
      price: "Rs.9,795",
      image: "/assets/homedecor-4.jpeg",
      Rating: "4.6",
    },
    {
      id: 3,
      name: "Signamio",
      tag: "Hanuman ji Idol Statue murti Car Dashboard",
      price: "Rs.483",
      image: "/assets/homedecor-5.jpeg",
      Rating: "3.8",
    },
    {
      id: 4,
      name: "Homesake",
      tag: "Pinewood Table Lamp for Nightstand",
      price: "Rs.567",
      image: "/assets/homedecor-6.jpeg",
      Rating: "4.5",
    },
    {
      id: 5,
      name: "TrendsTube",
      tag: "AJANTA Analog 23 cm X 23 cm Wall Clock",
      price: "Rs.499",
      image: "/assets/homedecor-7.jpeg",
      Rating: "4.3",
    },
    {
      id: 6,
      name: "Bon Homey",
      tag: "Pack of 3 Ceramic Cup",
      price: "Rs.339",
      image: "/assets/homedecor-8.jpeg",
      Rating: "4.1",
    },
    {
      id: 7,
      name: "Homify",
      tag: "Ceramics Place pack of 5",
      price: "Rs.699",
      image: "/assets/homedecor-9.jpeg",
      Rating: "4.3",
    },
    {
      id: 8,
      name: "C R Stores",
      tag: "Creative retro peacock dancer artwork",
      price: "Rs.2199",
      image: "/assets/homedecor-10.jpeg",
      Rating: "4.3",
      size: "",
    },
  ];
  return (
    <>
      <div className="pt-20">
        <h2 className="text-2xl pl-13 font-semibold ">homedecor Collections</h2>
        <div className="mt-5">
          <div className="flex flex-wrap justify-around items-center gap-10 p-10">
            {homedecor.map((homedecor, index) => (
              <Link to={`/categories/homedecor/${homedecor.id}`}>
                <div key={index} className="">
                  <img
                    src={homedecor.image || "/placeholder.svg"}
                    alt={`${homedecor.name}`}
                    className="w-[300px] h-[400px] object-cover border-2 border-gray-400  rounded-2xl"
                  />
                  <div className="flex justify-between items-center">
                    <span className="mt-2 font-bold text-xl">
                      {homedecor.name}
                    </span>
                    <span className="mt-2 text-lg font-semibold">
                      Rating : {homedecor.Rating}
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="mt-2 text-gray-500">{homedecor.tag}</span>
                    <span className="mt-2 font-semibold text-lg text-gray-700">
                      {homedecor.price}
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

export default Homedecor;
