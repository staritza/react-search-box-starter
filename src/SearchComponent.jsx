import React from 'react';
import './searchComponent.scss';

class SearchComponent extends React.Component {
  constructor(props) {
      super(props);
      const fruits = props.fruits;
      this.state = {
        fruits,
        filteredFruits: fruits
      };
  }

  filterFruits(event) {
      const query = event.target.value;
      this.props.saveSearchQuery(query);
      const myRegex = new RegExp('.*' + query + '.*');
      const matchingFruits = this.state.fruits.filter(fruit => myRegex.test(fruit));

      this.setState({filteredFruits: matchingFruits})
  }

  renderFilteredFruits(filteredFruits) {
    const rowsOfFruit = filteredFruits.map(currentFruit => <div key={currentFruit} className='search__result'>{currentFruit}</div>);
    return (<div> {rowsOfFruit} </div>);
  }

  render() {
    return (
    <div className='search'>
         <div className='search__bar'>
            <input
                type='text'
                placeholder='Search'
                onChange={this.filterFruits.bind(this)}>
            </input>
        </div>
        <div className='search__results'>
          {this.renderFilteredFruits(this.state.filteredFruits)}
        </div>
      </div>
    );
  }

}

export default SearchComponent;
