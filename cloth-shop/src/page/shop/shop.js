import React, { Component } from "react";
import shopData from "./shop.data";

import CollectionPreview from "../../component/collectionPreview/collectionPreview";

class Shop extends Component {
  state = {
    collections: shopData
  };
  render() {
    const { collections } = this.state;
    
    return (
      <div>
    
        {collections.map(({ id, ...otherCollectionProps }) => {
          return (
            <CollectionPreview
              className="shope-page"
              key={id}
              {...otherCollectionProps}
            />
          );
        })}
      </div>
    );
  }
}

export default Shop;
