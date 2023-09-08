import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartData: {},
};

export const cartSlice = createSlice({
  name: "customers",
  initialState,
  reducers: {
    setCartProduct: (state, action) => ({
      ...state,
      cartData: action.payload,
    }),
  },
});

export const { setCartProduct } = cartSlice.actions;
export default cartSlice.reducer;
