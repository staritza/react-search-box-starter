import React from 'react';
import './searchComponent.scss';

const renderFilteredFruits = filteredFruits => {
  const rowsOfFruit = filteredFruits.map(currentFruit => <div key={currentFruit}
                                                              className='search__result'>{currentFruit}</div>);
  return (<div> {rowsOfFruit} </div>);
};

class SearchComponent extends React.Component {
  constructor(props) {
    super(props);
    const {fruits, filteredFruits} = props;
    this.state = { //this does not subscribe to updates as props is updated
      fruits,
      filteredFruits
    };
  }
  render() {
    return (
      <div className='search'>
        <div className='search__bar'>
          <input
            type='text'
            placeholder='Search'
            onChange={(event) => {this.props.saveSearchQuery(event.target.value);}}>
          </input>
        </div>
        <div className='search__results'>
          {renderFilteredFruits(this.props.filteredFruits)}
        </div>
      </div>
    );
  }

}

export default SearchComponent;
