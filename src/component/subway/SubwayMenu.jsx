import React from 'react';
import "./SubwayMenu.css"



const SubwayMenu = (props) => {
    return (
        <div className="ShopItem" onClick={() => props.onClick(props.name, props.price)}>
      <h4>{props.name}</h4>
      <div>{props.price}원</div>
        </div>
    );
};

export default SubwayMenu;


