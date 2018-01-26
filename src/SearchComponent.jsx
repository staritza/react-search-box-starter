import React from 'react';
import './searchComponent.scss';

class SearchComponent extends React.Component {
  constructor() {
      super();
      this.state = {
        fruits: ["orange", "apple", "watermelon", "apricot", "olives"],
        filteredFruits: ["orange", "apple", "watermelon", "apricot", "olives"],
      };
  }

  printFilter(event) {
      const value = event.target.value;
      const myregex = new RegExp(".*" + value + ".*");

      const matchingFruits = this.state.fruits.filter(function(fruit) {return myregex.test(fruit)});

      this.setState({filteredFruits: matchingFruits})
  }

  renderFilteredFruits(filteredFruits) {
    const rowsOfFruit = filteredFruits.map(function(currentFruit) {return <div key={currentFruit} className="search__result">{currentFruit}</div>});
    return (<div> {rowsOfFruit} </div>);
  }

  render() {
    return (
    <div className='search'>
         <div className='search__bar'>
            <input
                type='text'
                placeholder='Search'
                onChange={this.printFilter.bind(this)}>
            </input>
        </div>
        <div className='search-results'>
            {this.renderFilteredFruits(this.state.filteredFruits)}
        </div>
    </div>

    );
  }

}

export default SearchComponent;
