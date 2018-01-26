import React from 'react';

class SearchComponent extends React.Component {
  constructor() {
      super();
      this.state = {
        fruits: ["orange", "apple", "watermelon", "apricot", "olives"],
      };
  }

  printFilter(event) {
      console.log("wow " + event.target.value + "!!!")
  }


  render() {
    return (
    <div>
        <div>
        <p> {this.state.fruits} </p>
        </div>
         <div className='search-bar'>
            <input
                type='text'
                placeholder='Search'
                onChange={this.printFilter.bind(this)}>
            </input>
        </div>

    </div>

    );
  }

}

export default SearchComponent;
