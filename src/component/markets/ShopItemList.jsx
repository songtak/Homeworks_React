import React from "react";
import ShopItem from "./ShopItem";
import { observer } from "mobx-react";
import { useStore } from "../../Stores/Helper";

const items = [
  {
    name: "생수",
    price: 850,
  },
  {
    name: "신라면",
    price: 900,
  },
  {
    name: "포카칩",
    price: 1500,
  },
  {
    name: "새우깡",
    price: 1000,
  },
    {
    name: "감자깡",
    price: 1200,
  },
];

const ShopItemList = observer(() => {
  const { marketStore } = useStore();

  const onClick = (name, price) => {
    marketStore.put(name, price)
  }


  const itemList = items.map((item) => <ShopItem {...item} key={item.name} onClick={onClick}/>);
  return <div>{itemList}</div>;
});

export default ShopItemList;
