import { action, observable, computed } from 'mobx';

export default class SubwayStore {
    constructor(root) {
    this.root = root;
  }

    @observable chooseItems = [];
    @observable menus = [];
    @observable breads = [];
    @observable meats = [];
    @observable veggies = [];
    @observable sources = [];
    @observable toppings = [];

    @observable number = 0;

 @action
  put = (name, price) => {
    this.number++;
    const exists = this.chooseItems.find((item) => { return item.name === name});
    if (!exists) {
      this.chooseItems.push({
        name,
        price,
        count: 1,
      });
      return;
    }
    exists.count++;
  };


  @action
  take = name => {
    const menuToTake = this.chooseItems.find((item)  => { 
      return  item.name === name});
    menuToTake.count--;
    if (menuToTake.count === 0) {
      this.chooseItems.remove(menuToTake); 
    }
  };
  @computed
  get total() {
    console.log('total')
    return this.chooseItems.reduce((previous, current) => {
      return previous + current.price * current.count;
    }, 0);
  }

  @computed
  get square() {
    console.log('square')
    return this.chooseItems.reduce((previous, current) => {
      return previous + current.count;
    }, 0)
  }


}