import Reflux from 'reflux';

import {Results} from "./actions.js";

class StatusStore extends Reflux.Store {
  constructor() {
    super();
    this.state = {results: ["orange", "apple", "watermelon", "apricot", "olives"]}; //defaultStaete
    this.listenables = [Results];
  }

  onGet() {
    return this.state.results;
  }
}

export default StatusStore;