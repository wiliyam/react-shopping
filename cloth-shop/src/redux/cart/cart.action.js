import cartActiontype from "./cart.type";

export const toggleCartHidden = () => ({
  type: cartActiontype.TOGGLE_CART_HIDDEN
});

export const addItem=item=>({
  type:cartActiontype.ADD_ITEM,
  payload:item
})
