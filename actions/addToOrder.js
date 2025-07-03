import axios from "axios";

export const addToOrderDB = async (product) => {
  const res = await axios.post(
    "http://localhost:8080/api/v1/order/addToOrder",
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
