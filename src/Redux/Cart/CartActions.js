import { ADD_TO_CART } from "./CartTypes";
import { REMOVE_FROM_CART } from "./CartTypes";
import { UPDATE_PRODUCT_AMOUNT } from "./CartTypes";
export const addCart = (item) => {
  return {
    type: "ADD_TO_CART",
    payload: item,
  };
};
export const removeCart = (id) => {
  return {
    type: "REMOVE_FROM_CART",
    payload: id,
  };
};
export const updateAmountProduct = () => {
  return {};
};
