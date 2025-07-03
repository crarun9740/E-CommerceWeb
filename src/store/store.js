import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import recentOrdersSlice from "./recentOrdersSlice";
const store = configureStore({
  reducer: {
    cartSlice: cartSlice.reducer,
    recentOrder: recentOrdersSlice,
  },
});

export default store;
