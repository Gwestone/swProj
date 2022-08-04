import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./categorySlicer";
import currencyReducer from "./currencySlicer";
import cartReducer from "./cartSlicer";
import dimmerReducer from "./dimmerSlicer";

const persistedState = localStorage.getItem("reduxState")
  ? JSON.parse(localStorage.getItem("reduxState"))
  : {};

const store = configureStore({
  reducer: {
    category: categoryReducer,
    currency: currencyReducer,
    cart: cartReducer,
    dimmer: dimmerReducer,
  },
  preloadedState: persistedState,
});

store.subscribe(() => {
  localStorage.setItem("reduxState", JSON.stringify(store.getState()));
});

export default store;
