import { action, observable } from "mobx";

export default class InfoStore {
  constructor(root) {
    this.root = root;
  }

  @observable name = '';

  @observable nickname = '';


  @action
  changeName (name){
      this.name = name;
  };

  @action 
  changeNickname (nickname){
    this.nickname = nickname;
  };


}
