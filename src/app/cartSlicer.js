import { createSlice } from "@reduxjs/toolkit";
import time from "../utils/time";

const cartSlicer = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    addCart(state, action) {
      state.cart.push(action.payload);
    },
  },
});

export const { addCart } = cartSlicer.actions;

export default cartSlicer.reducer;
