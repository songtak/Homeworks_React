import React from 'react';
import './BasketItem.css';
import { observer } from 'mobx-react';
import { useStore } from '../../Stores/Helper';

const BasketItem = observer(({ name, price, count }) => {
  const { marketStore } = useStore();

      const onTake = (name) => {
        marketStore.take(name);
    };
    
  


  return (
    <div className="BasketItem">
      <div className="name">{name}</div>
      <div className="price">{price}원</div>
      <div className="count">{count}</div>
      <div className="return" onClick={() => onTake(name)}>갖다놓기</div>
    </div>
  );
});

export default BasketItem;