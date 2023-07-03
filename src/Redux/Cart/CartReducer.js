import { ADD_TO_CART } from "./CartTypes";
import { REMOVE_FROM_CART } from "./CartTypes";
const cart = [];

const CartReducer = (state = cart, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      //const find = state.cartItems.find((item) => item.id === action.payload);
      //   if (find) {
      //     return {
      //       ...state,
      //       cartItems: state.cartItems.map((item) => {
      //         if (item.id === action.payload.id) {
      //           //   return {
      //           //     ...item,
      //           //     Quantity: item.Quantity + 1,
      //           //   };
      //           item.Quantity += 1;
      //         }
      //         return item;
      //       }),
      //     };
      //   }
      return [...state, ...action.payload];

    case REMOVE_FROM_CART:
      return state.filter((item) => item.id !== action.payload);
    default:
      return state;
  }
};
export default CartReducer;
