import cartActiontype from "./cart.type";
import {addIyemToCart} from './cart.utils'

const INITIAL_STATE = {
  hidden: true,
  cartItem: []
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
        cartItem:addIyemToCart(state.cartItem,action.payload)
      };
    default:
      return state;
  }
};

export default cartReducer;
