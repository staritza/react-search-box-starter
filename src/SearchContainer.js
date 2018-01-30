import React from 'react';
import Reflux from 'reflux';

import SearchComponent from './SearchComponent.jsx';
import QueryStore from './QueryStore.js';
import ResultsStore from './ResultsStore.js';
import {SearchQuery} from './actions.js';

const filterResults = (query, results) => {
  const myRegex = new RegExp('.*' + query + '.*');
  return results.filter(result => myRegex.test(result))
};

class SearchContainer extends Reflux.Component {
  constructor(props) {
    super(props);
    this.stores = [QueryStore, ResultsStore];
  }

  render() {
    return (<SearchComponent saveSearchQuery={SearchQuery.save}
                             filteredFruits={filterResults(this.state.query, this.state.results)}/>)
  }
}

export default SearchContainer;