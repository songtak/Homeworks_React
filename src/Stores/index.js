import CounterStore from "./CounterStore";
import InfoStore from "./InfoStore";
import MarketStore from './MarketStore';
import SubwayStore from './SubwayStore';

class RootStore {
  constructor() {
    this.counterStore = new CounterStore(this);
    this.infoStore = new InfoStore(this);
    this.marketStore = new MarketStore(this);
    this.subwayStore = new SubwayStore(this);
  }
}

export default RootStore;

/**
 * 
import CounterStore from "./CounterStore";
import InfoStore from "./InfoStore";

class RootStore {
  counterStore = new CounterStore(this);
  this.infoStore = new InfoStore(this);

}

export default RootStore;
 * 
 */
