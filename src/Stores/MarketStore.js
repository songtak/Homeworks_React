import { observable, action, computed } from 'mobx';


export default class MarketStore {
  constructor(root) {
    this.root = root;
  }

  @observable selectedItems = [];
  @observable itemList = [];
  @observable number = 0;

  @action
  put = (name, price) => {
    this.number++;
    const exists = this.selectedItems.find((item) => { return item.name === name});
    if (!exists) {
      this.selectedItems.push({
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
    const itemToTake = this.selectedItems.find((item)  => { 
      return  item.name === name});
    itemToTake.count--;
    if (itemToTake.count === 0) {
      this.selectedItems.remove(itemToTake); 
    }
  };

  @computed
  get total() {
    console.log('total')
    return this.selectedItems.reduce((previous, current) => {
      return previous + current.price * current.count;
    }, 0);
  }

  @computed
  get square() {
    console.log('square')
    return this.selectedItems.reduce((previous, current) => {
      return previous + current.count;
    }, 0)
  }

    @computed
  get test() {
    console.log('test')
    return this.number;
  }
}
