import React, {useEffect} from 'react';
import BasketItem from './BasketItem';
import { observer } from 'mobx-react';
import { useStore } from '../../Stores/Helper'


const BasketItemList = observer(() => {
    const { marketStore } = useStore();

    const onTake = (name) => {
        marketStore.take(name);
        
    };

    // useEffect(()=>{
    //   marketStore.total;
    //   alert(marketStore.total)
    // },[marketStore.total])


    // useEffect(()=>{
    //   marketStore.square
    // },[marketStore.square])

    useEffect(()=>{
        marketStore.put('콜라',1000)
    },[])


  return (
    <div>
      {marketStore.itemList = marketStore.selectedItems.map((item, i) => { return (
      <BasketItem
        name={item.name}
        price={item.price}
        count={item.count}
        key={i}
        onTake={onTake}
      />)})}
      <hr />
      <p>
      <b>총</b> {marketStore.square}개
      </p>
      <p>
        <b>총합: </b> {marketStore.total}원 
      </p>
    </div>
  );
});

export default BasketItemList;