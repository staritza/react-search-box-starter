import React from 'react';
import './searchComponent.scss';

const renderFilteredFruits = filteredFruits => {
  const rowsOfFruit = filteredFruits.map(currentFruit => <div key={currentFruit}
                                                              className='search__result'>{currentFruit}</div>);
  return (<div> {rowsOfFruit} </div>);
};

const SearchComponent = ({saveSearchQuery, filteredFruits}) => {
    return (
      <div className='search'>
        <div className='search__bar'>
          <input
            type='text'
            placeholder='Search'
            onChange={(event) => {saveSearchQuery(event.target.value);}}>
          </input>
        </div>
        <div className='search__results'>
          {renderFilteredFruits(filteredFruits)}
        </div>
      </div>
    );
};

export default SearchComponent;
