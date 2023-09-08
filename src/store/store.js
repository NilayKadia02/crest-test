import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import cartSlice from "./slices/cartSlice";
import productSlice from "./slices/productSlice";
import inventorySlice from "./slices/inventorySlice";

const rootReducer = combineReducers({
  cartSlice,
  productSlice,
  inventorySlice,
});

export const store = configureStore({
  reducer: rootReducer,
});
