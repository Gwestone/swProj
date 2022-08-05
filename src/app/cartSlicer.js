import { createSlice } from "@reduxjs/toolkit";

const cartSlicer = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    addCart(state, action) {
      let index = -1;
      state.cart.find((item, _index) => {
        if (
          item.id === action.payload.id &&
          JSON.stringify(item.productAttributes) ===
            JSON.stringify(action.payload.productAttributes)
        ) {
          index = _index;
          return true;
        }
        return false;
      });
      if (index !== -1) {
        state.cart[index].quantity += action.payload.quantity;
      } else {
        state.cart.push(action.payload);
      }
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
      if (state.cart[action.payload].quantity === 0) {
        state.cart.splice(action.payload, 1);
      }
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
