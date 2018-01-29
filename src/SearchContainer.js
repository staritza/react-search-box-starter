import {connect} from 'react-redux';

import SearchComponent from './SearchComponent.jsx';
import {saveSearchQuery} from "./actions";

const mapStateToProps = state => {
  return {
    fruits: state.results
  }
};

const mapDispatchToProps = dispatch => {
  return {
    saveSearchQuery: query => {
      dispatch(saveSearchQuery(query));
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchComponent);