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
    updateCart(state, action) {
      state.cart[action.payload.itemKey].productAttributes[action.payload.id] =
        action.payload.value;
    },
    incrementQuantityCart(state, action) {
      state.cart[action.payload].quantity += 1;
    },
    decrementQuantityCart(state, action) {
      state.cart[action.payload].quantity -= 1;
    },
  },
});

export const {
  addCart,
  updateCart,
  incrementQuantityCart,
  decrementQuantityCart,
} = cartSlicer.actions;

export default cartSlicer.reducer;
