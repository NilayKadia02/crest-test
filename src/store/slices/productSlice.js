import { createSlice } from "@reduxjs/toolkit";
import ProductList from "../jsonData/products.json";

const initialState = {
  productList: ProductList,
};

export const productSlice = createSlice({
  name: "customers",
  initialState,
  reducers: {},
});

export const {} = productSlice.actions;
export default productSlice.reducer;
