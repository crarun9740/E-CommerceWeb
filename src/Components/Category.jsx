import Footer from "./Footer";

function Category() {
  const categories = [
    { name: "Men", image: "/assets/men-3.jpeg" },
    { name: "Women", image: "/assets/women-6.jpeg" },
    { name: "Accecory", image: "/assets/accecories-5.jpeg" },
    { name: "Footwears", image: "/assets/footwear-2.jpeg" },
    { name: "Mobiles", image: "/assets/mobile-1.jpeg" },
    { name: "Toys", image: "/assets/toy-5.jpeg" },
    { name: "Beauty", image: "/assets/beauty-3.jpeg" },
  ];

  const Bestseller = [
    {
      name: "Snitch",
      price: "Rs.499",
      tag: "Men Premium Solid Polo Neck Polycotton",
      image: "/assets/tshirt-2.jpeg",
      rating: "Rating : 4.5",
    },
    {
      name: "Denim",
      price: "Rs.1399",
      tag: "Full Sleeve Men Denim Jacket with white",
      image: "/assets/shirt-6.jpeg",
      rating: "Rating : 4.7",
    },
    {
      name: "Wrogn",
      price: "Rs.899",
      tag: "Men Full Sleeve Premium Polycotton shirt",
      image: "/assets/shirt-2.jpeg",
      rating: "Rating : 4.6",
    },
    {
      name: "Ketch",
      price: "Rs.559",
      tag: "Men half Sleeve Baggy tshirt Round neck",
      image: "/assets/men-1.jpeg",
      rating: "Rating : 3.9",
    },
    {
      name: "Bear",
      price: "Rs.1099",
      tag: "Men Comport Fit Grey Cotton Blend Pant",
      image: "/assets/men-2.jpeg",
      rating: "Rating : 4.5",
    },
    {
      name: "Ethos",
      price: "Rs.1559",
      tag: "Analog Watch for Men limited edition",
      image: "/assets/watch-1.jpg",
      rating: "Rating : 4.5",
    },
    {
      name: "Ketch",
      price: "Rs.1099",
      tag: "Women Casual Bollywood Fashion Shirt",
      image: "/assets/women-2.jpg",
      rating: "Rating : 4.1",
    },
    {
      name: "Manyavar",
      price: "Rs.2999",
      tag: "Women Salvar Blue and Gold Combo ",
      image: "/assets/women-3.jpg",
      rating: "Rating : 4.3",
    },
  ];

  const Accecories = [
    {
      name: "Ray-Ban",
      price: "Rs.499",
      tag: "Men/Women UV Protection Sunglasses",
      image: "/assets/accecories-2.jpeg",
      rating: "Rating : 4.5",
    },
    {
      name: "Ansh Enterpris",
      price: "Rs.1399",
      tag: "Om Religious Gold Plated Pendant Crystal ",
      image: "/assets/accecories-3.jpeg",
      rating: "Rating : 4.7",
    },
    {
      name: "Devora",
      price: "Rs.899",
      tag: " Gifts Couple Ring for Girls and Boys....",
      image: "/assets/accecories-4.jpeg",
      rating: "Rating : 4.6",
    },
    {
      name: "ZARMIA ",
      price: "Rs.559",
      tag: "Gold-plated Stainless Steel Pendant Set",
      image: "/assets/accecories-5.jpeg",
      rating: "Rating : 3.9",
    },
    {
      name: "Anne Klein",
      price: "Rs.1099",
      tag: "Analog Watch and bracelet For Couple ",
      image: "/assets/accecories-6.jpeg",
      rating: "Rating : 4.5",
    },
    {
      name: "American Eagle",
      price: "Rs.1559",
      tag: "Embroidered Sports/Regular Cap for Men",
      image: "/assets/accecories-9.jpeg",
      rating: "Rating : 4.5",
    },
    {
      name: "Olivia Burton",
      price: "Rs.1099",
      tag: "Analog Watch for Women Round dial with ",
      image: "/assets/accecories-7.jpeg",
      rating: "Rating : 4.1",
    },
    {
      name: "Palmonas ",
      price: "Rs.2999",
      tag: "Crystal Love Bracelet for men and women ",
      image: "/assets/accecories-8.jpeg",
      rating: "Rating : 4.3",
    },
  ];
  return (
    <>
      <div className="pt-20 flex flex-col">
        <h2 className="text-3xl font-semibold px-4 md:px-6 lg:px-8">
          Categories
        </h2>
        <div className="bg-gray-200 mt-5 py-6 px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {categories.map((category, index) => (
              <div key={index} className="flex justify-center">
                <div className="flex flex-col items-center cursor-pointer">
                  <div className="border-2 border-gray-400 rounded-xl overflow-hidden">
                    <img
                      src={category.image || "/placeholder.svg"}
                      alt={`${category.name} category`}
                      className="w-[100px] h-[100px] object-cover"
                    />
                  </div>
                  <span className="font-bold text-lg text-gray-800 mt-2 text-center">
                    {category.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-10">
        <h2 className="text-3xl font-semibold px-4 md:px-6 lg:px-8">
          Bestseller
        </h2>
        <div className="mt-10">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 pl-15 gap-4">
            {Bestseller.map((Bestseller, index) => (
              <div key={index} className="justify-center">
                <div className="flex flex-col w-[300px] h-[500px] items-center cursor-pointer">
                  <div className="border-2 border-gray-400 rounded-xl overflow-hidden">
                    <img
                      src={Bestseller.image || "/placeholder.svg"}
                      alt={`${Bestseller.name} category`}
                      className="w-[300px] h-[400px] object-cover"
                    />
                  </div>
                  <div className="flex flex-col gap-1 pr-10 mb-10">
                    <div className="flex justify-between items-center mt-2">
                      <span className="font-semibold text-lg text-black  ">
                        {Bestseller.name}
                      </span>
                      <span className="font-semibold">{Bestseller.rating}</span>
                    </div>
                    <span className="text-sm text-gray-400 mt-1  ">
                      {Bestseller.tag}
                    </span>
                    <span className="font-semibold text-lg text-gray-700 mt-1 ">
                      {Bestseller.price}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-10">
        <h2 className="text-3xl font-semibold px-4 md:px-6 lg:px-8">
          Accecories
        </h2>
        <div className="mt-10">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 pl-15 gap-4">
            {Accecories.map((Accecories, index) => (
              <div key={index} className="justify-center">
                <div className="flex flex-col w-[300px] h-[500px] items-center cursor-pointer">
                  <div className="border-2 border-gray-400 rounded-xl overflow-hidden">
                    <img
                      src={Accecories.image || "/placeholder.svg"}
                      alt={`${Accecories.name} category`}
                      className="w-[300px] h-[400px] object-cover"
                    />
                  </div>
                  <div className="flex flex-col gap-1 pr-10 mb-10">
                    <div className="flex justify-between items-center mt-2">
                      <span className="font-semibold text-lg text-black  ">
                        {Accecories.name}
                      </span>
                      <span className="font-semibold">{Accecories.rating}</span>
                    </div>
                    <span className="text-sm text-gray-400 mt-1  ">
                      {Accecories.tag}
                    </span>
                    <span className="font-semibold text-lg text-gray-700 mt-1 ">
                      {Accecories.price}
                    </span>
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

export default Category;
