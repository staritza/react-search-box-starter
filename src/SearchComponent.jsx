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
        <p> {this.state.filteredFruits} </p>
    </div>

    );
  }

}

export default SearchComponent;
