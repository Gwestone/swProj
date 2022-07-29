import { combineReducers, configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./categorySlicer";
import currencyReducer from "./currencySlicer";
import cartReducer from "./cartSlicer";

const rootReducer = combineReducers({
  category: categoryReducer,
  currency: currencyReducer,
  cart: cartReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
