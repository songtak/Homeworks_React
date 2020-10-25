import React from "react";
import "./ShopItem.css";

const ShopItem = (props) => {
  return (
    <div className="ShopItem" onClick={() => props.onClick(props.name, props.price)}>
      <h4>{props.name}</h4>
      <div>{props.price}원</div>
    </div>
  );
};

export default ShopItem;
