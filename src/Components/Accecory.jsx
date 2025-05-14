import React from "react";
import Footer from "./Footer";

function Accesory() {
  const Accesory = [
    {
      name: "Ray-Ban",
      price: "Rs.499",
      tag: "Men/Women UV Protection Sunglasses",
      image: "/assets/accecories-2.jpeg",
      rating: "Rating : 4.5",
    },
    {
      name: "ZARMIA",
      price: "Rs.559",
      tag: "Gold-plated Stainless Steel Pendant Set",
      image: "/assets/accecories-5.jpeg",
      rating: "Rating : 3.9",
    },
    {
      name: "Anne Klein",
      price: "Rs.1099",
      tag: "Analog Watch and bracelet For Couple",
      image: "/assets/accecories-6.jpeg",
      rating: "Rating : 4.5",
    },
    {
      name: "Olivia Burton",
      price: "Rs.1099",
      tag: "Analog Watch for Women Round dial with",
      image: "/assets/accecories-7.jpeg",
      rating: "Rating : 4.1",
    },
    {
      name: "Ethos",
      price: "Rs.1559",
      tag: "Analog Watch for Men limited edition",
      image: "/assets/watch-1.jpg",
      rating: "Rating : 4.5",
    },
    {
      name: "Ansh Enterpris",
      price: "Rs.1399",
      tag: "Om Religious Gold Plated Pendant Crystal",
      image: "/assets/accecories-3.jpeg",
      rating: "Rating : 4.5",
    },
    {
      name: "Palmonas ",
      price: "Rs.299",
      tag: "Nail Bangle Bracelet for Men/Women",
      image: "/assets/accecories-10.jpeg",
      rating: "Rating : 4.1",
    },
    {
      name: "Fashion B Brand",
      price: "Price ₹ 559",
      tag: "Women Black Leather Bag with good..",
      image: "/assets/bag-2.jpeg",
      rating: "Rating : 4.3",
    },
  ];

  return (
    <>
      <div className="pt-20">
        <div className="">
          <h2 className="text-3xl font-semibold px-4 md:px-6 lg:px-8 ">
            Accesory Collection
          </h2>
          <div className="mt-10">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 pl-15 gap-4">
              {Accesory.map((Accesory, index) => (
                <div key={index} className="justify-center">
                  <div className="flex flex-col w-[300px] h-[500px] items-center cursor-pointer">
                    <div className="border-2 border-gray-400 rounded-xl overflow-hidden">
                      <img
                        src={Accesory.image || "/placeholder.svg"}
                        alt={`${Accesory.name} category`}
                        className="w-[300px] h-[400px] object-cover"
                      />
                    </div>
                    <div className="flex flex-col gap-1 pr-10 mb-10">
                      <div className="flex justify-between items-center mt-2">
                        <span className="font-semibold text-lg text-black  ">
                          {Accesory.name}
                        </span>
                        <span className="font-semibold">{Accesory.rating}</span>
                      </div>
                      <span className="text-sm text-gray-400 mt-1  ">
                        {Accesory.tag}
                      </span>
                      <span className="font-semibold text-lg text-gray-700 mt-1 ">
                        {Accesory.price}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Accesory;
