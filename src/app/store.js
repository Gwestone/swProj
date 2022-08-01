import { combineReducers, createStore } from "@reduxjs/toolkit";
import categoryReducer from "./categorySlicer";
import currencyReducer from "./currencySlicer";
import cartReducer from "./cartSlicer";

const rootReducer = combineReducers({
  category: categoryReducer,
  currency: currencyReducer,
  cart: cartReducer,
});

const persistedState = localStorage.getItem("reduxState")
  ? JSON.parse(localStorage.getItem("reduxState"))
  : {};

const store = createStore(rootReducer, persistedState);

store.subscribe(() => {
  localStorage.setItem("reduxState", JSON.stringify(store.getState()));
});

export default store;
