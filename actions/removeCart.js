import axios from "axios";

export const removeCart = async (productId) => {
  console.log(productId);
  await axios.delete(
    `http://localhost:8080/api/v1/cart/deleteCartById/${productId}`
  );
};
