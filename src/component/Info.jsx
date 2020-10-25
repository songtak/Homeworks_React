import React, {useEffect} from "react";
import { observer } from "mobx-react";
import { useStore } from "../Stores/Helper";



const Info = observer(() => {
  const { infoStore } = useStore();

  const onChangeName = (e) => {
    infoStore.changeName(e.target.value);
  };

  const onChangeNickname = (e) => {
    infoStore.changeNickname(e.target.value);
  };

   useEffect(() => {
    console.log(infoStore.name);
  }, [infoStore.name]);



  return (
    <div>
      <div>
        <input onChange={onChangeName} />
        <input onChange={onChangeNickname} />
      </div>
      <div className="infoView">
        <div>
          <b>이름: </b> {infoStore.name}
        </div>
        <div>
          <b>닉네임: </b> {infoStore.nickname}
        </div>
      </div>
    </div>
  );
});

export default Info;
