import React from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.action";
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';
import "./cart-icon.scss";

const cartIcon = ({ toggleCartHidden,itemsCount }) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{itemsCount}</span>
  </div>
);

const mapDispatchToProp = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = state => ({
  itemsCount: selectCartItemsCount(state)
});

export default connect(
  mapStateToProps,
  mapDispatchToProp
)(cartIcon);
