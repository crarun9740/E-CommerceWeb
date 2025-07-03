import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orders: [],
};

const recentOrdersSlice = createSlice({
  name: "recentOrders",
  initialState,
  reducers: {
    addOrder: (state, action) => {
      state.orders.push(...action.payload);
    },
    clearOrders: (state) => {
      state.orders = [];
    },
  },
});

export const { addOrder, clearOrders } = recentOrdersSlice.actions;
export default recentOrdersSlice.reducer;
