import React from 'react';

class SearchComponent extends React.Component {
  constructor() {
      super();
      this.state = {
        fruits: ["orange", "apple", "watermelon", "apricot", "olives"],
        filteredFruits: [],
      };
  }

  printFilter(event) {
      const value = event.target.value;
      const myregex = new RegExp(".*" + value + ".*");

      const matchingFruits = this.state.fruits.filter(function(fruit) {return myregex.test(fruit)});

      this.setState({filteredFruits: matchingFruits})
  }

  renderFilteredFruits(filter edFruits) {
    const initialValue = ""
    const rowsOfFruit = filteredFruits.map(function(currentFruit) {return <p key={currentFruit}>{currentFruit}</p>});
    return (<div> {rowsOfFruit} </div>);
  }

  render() {
    return (
    <div>
        <div>
        </div>
         <div className='search-bar'>
            <input
                type='text'
                placeholder='Search'
                onChange={this.printFilter.bind(this)}>
            </input>
        </div>
        {this.renderFilteredFruits(this.state.filteredFruits)}
    </div>

    );
  }

}

export default SearchComponent;
