import React from 'react';
import './Needs.css';
import { observer } from 'mobx-react';
import { useStore } from '../../Stores/Helper';


const Needs = observer(({ name, price, count }) => {
    const { subwayStore } = useStore();

    const onTake = (name) => {
        subwayStore.take(name);
    }

    return (
        <div>
      <div className="BasketItem">
      <div className="name">{name}</div>
      <div className="price">{price}원</div>
      <div className="count">{count}</div>
      <div className="return" onClick={() => onTake(name)}>갖다놓기</div>
    </div>
        </div>
    );
});

export default Needs;