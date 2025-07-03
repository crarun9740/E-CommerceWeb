import axios from "axios";

export const getCart = async () => {
  const response = await axios.get("http://localhost:8080/api/v1/cart/getCart");

  return response.data.cartItems;
};
