import {connect} from 'react-redux';

import SearchComponent from './SearchComponent.jsx';

const mapStateToProps = state => {
    return {
        fruits: state.search
    }
};

export default connect(mapStateToProps)(SearchComponent);