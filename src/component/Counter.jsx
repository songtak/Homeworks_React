import React from "react";
import { observer } from "mobx-react";
import { useStore } from "../Stores/Helper";



const Counter = observer(()=>{
  const { counterStore } = useStore();

  return(
          <div>
        <h1>{counterStore.number}</h1>
        <button onClick={counterStore.increase}>+1</button>
        <button onClick={counterStore.decrease}>-1</button>
      </div>
  )
  
})


export default Counter;
