import React from 'react';
import Needs from './Needs';
import { observer } from 'mobx-react';
import { useStore } from '../../Stores/Helper'


const NeedsList = observer(() => {
    const { subwayStore } = useStore();

    const onTake = (name) => {
        subwayStore.take(name);
        
    };

    return (
        <div>
        {subwayStore.itemList = subwayStore.chooseItems.map((item, i) => { return (
        <Needs
          name={item.name}
          price={item.price}
          count={item.count}
          key={i}
          onTake={onTake}
        />)})}
        <hr />
        <p>
        <b>총</b> {subwayStore.square}개
        </p>
        <p>
          <b>총합: </b> {subwayStore.total}원 
        </p>
      </div>
    );
});

export default NeedsList;