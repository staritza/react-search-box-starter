import React from 'react';
import './searchComponent.scss';
import ListComponent from "./ListComponent.jsx";

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
          <ListComponent items={filteredFruits}/>
        </div>
      </div>
    );
};

export default SearchComponent;
