import { combineReducers, configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./categorySlicer";
import currencyReducer from "./currencySlicer";

const rootReducer = combineReducers({
  category: categoryReducer,
  currency: currencyReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
