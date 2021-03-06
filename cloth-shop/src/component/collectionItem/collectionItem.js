import React from "react";
import "./collectionItem.scss";
import CustomButton from '../custom-button/custom-button.component'
import {connect} from 'react-redux'
import {addItem} from '../../redux/cart/cart.action'

const collectionItem = ({ item,addItem }) => {
  return (
    <div className="collection-item ">
      <div className="image" style={{ backgroundImage: `url(${item.imageUrl})` }} />
      <div className="collection-footer">
        <span className="name">{item.name}</span>
        <span className="price">₹{item.price}</span>
      </div>
      <CustomButton onClick={()=>addItem(item)} inverted>ADD</CustomButton>
    </div>
  );
};

const mapDispatchProps=dispatch=>({
  addItem:item=>dispatch(addItem(item))
})

export default connect(null,mapDispatchProps)(collectionItem);
