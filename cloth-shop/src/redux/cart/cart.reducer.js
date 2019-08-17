import cartActiontype from "./cart.type";
import {addIyemToCart} from './cart.utils'

const INITIAL_STATE = {
  hidden: true,
  cartItems: []
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case cartActiontype.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      };
    case cartActiontype.ADD_ITEM:
      return {
        ...state,
        cartItems:addIyemToCart(state.cartItems,action.payload)
      };
    default:
      return state;
  }
};

export default cartReducer;
