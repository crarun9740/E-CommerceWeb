import { createSlice } from "@reduxjs/toolkit";

const initState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initState,
  reducers: {
    addToCart: (state, action) => {
      state.cart.push(action.payload);
    },
    removeFromCart: (state, action) => {
      const id = action.payload;

      console.log(id);
      const exists = state.cart.some((item) => item.id === id);
      console.log(exists);
      if (!exists) {
        return;
      }

      const filteredCart = state.cart.filter((item) => item.id !== id);
      state.cart = filteredCart;
    },
    clearCart: (state) => {
      state.cart = [];
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice;
