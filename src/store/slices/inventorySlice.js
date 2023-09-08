import { createSlice } from "@reduxjs/toolkit";
import InventoryList from "../jsonData/inventory.json"

const initialState = {
  inventoryList: InventoryList,
};

export const inventorySlice = createSlice({
  name: "customers",
  initialState,
  reducers: {},
});

export const {  } = inventorySlice.actions;
export default inventorySlice.reducer;
