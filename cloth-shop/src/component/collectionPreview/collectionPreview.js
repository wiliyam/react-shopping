import React from "react";

import "./collectionPreview.scss";

import CollectionItem from "../collectionItem/collectionItem";

const collectionPreview = props => (
  <div className="collection-preview">
    <h1 className="title">{props.title.toUpperCase()}</h1>
    <div className="preview">
      {props.items
        .filter((item, idx) => idx < 4)
        .map(item => {
          return <CollectionItem key={item.id} {...item}/>
        })}
    </div>
  </div>
);

export default collectionPreview;
