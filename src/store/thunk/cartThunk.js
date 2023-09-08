import { createAsyncThunk } from "@reduxjs/toolkit";
import { setCartProduct } from "../slices/cartSlice";

export const addProductToCart = createAsyncThunk(
  "addProductToCart",
  async (_request, { dispatch }) => {
    dispatch(setCartProduct(_request));
  }
);
