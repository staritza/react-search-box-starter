import Reflux from 'reflux';

import {SearchQuery} from "./actions.js";

class QueryStore extends Reflux.Store {
  constructor() {
    super();
    this.state = {query: ''}; // <- set store's default state much like in React
    this.listenables = [SearchQuery];
  }

  onSave(query) {
    this.setState({query});
  }
}

export default QueryStore;