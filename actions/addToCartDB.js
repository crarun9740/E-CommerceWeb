import axios from "axios";

export const addToCartDB = async (product) => {
  const res = await axios.post(
    "http://localhost:8080/api/v1/cart/addToCart",
    {
      product: product,
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  return res.data;
};
