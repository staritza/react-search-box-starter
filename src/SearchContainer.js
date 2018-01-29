import {connect} from 'react-redux';

import SearchComponent from './SearchComponent.jsx';
import {saveSearchQuery} from "./actions";

const filterResults = (query, results) => {
  const myRegex = new RegExp('.*' + query + '.*');
  return results.filter(result => myRegex.test(result))
};

const mapStateToProps = state => {
  return {
    fruits: state.results,
    filteredFruits: filterResults(state.query, state.results)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    saveSearchQuery: query => {
      dispatch(saveSearchQuery(query));
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchComponent);