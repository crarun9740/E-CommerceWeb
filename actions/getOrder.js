import axios from "axios";

export const getOrders = async () => {
  const response = await axios.get(
    "http://localhost:8080/api/v1/order/getOrder"
  );

  return response.data.orderItems;
};
