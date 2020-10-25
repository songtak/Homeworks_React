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

//여기서 받아오는 값들이 다르지 않나? 이름이 다르니까 그래서 여기서 조건부 렌더링하고???
//List에서도 바꿔줘야 하나?
//여기서 조건부 렌더링으로 메뉴 종류 이름을 명시해 줘야하나?

