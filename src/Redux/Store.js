import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./Cart/CartSlice";
import cateReducer from "./Categories/cateReducer";
import CartReducer from "./Cart/CartReducer";
export const store = configureStore({
  reducer: {
    cate: cateReducer,
    cart: CartReducer,
  },
});
