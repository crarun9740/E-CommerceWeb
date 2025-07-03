import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const addToCartBackend = createAsyncThunk(
  "cart/addToCartBackend",
  async (product, { rejectWithValue }) => {
    try {
      const res = await axios.post(
        "http://localhost:8080/api/v1/cart/addToCart",
        { product: product }
      );
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);
