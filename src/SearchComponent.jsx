import React from 'react';
import './searchComponent.scss';

class SearchComponent extends React.Component {
  constructor(props) {
    super(props);
    const {fruits, filteredFruits} = props;
    this.state = { //this does not subscribe to updates as props is updated
      fruits,
      filteredFruits
    };
  }

  filterFruits(event) {
    this.props.saveSearchQuery(event.target.value);
  }

  renderFilteredFruits(filteredFruits) {
    const rowsOfFruit = filteredFruits.map(currentFruit => <div key={currentFruit}
                                                                className='search__result'>{currentFruit}</div>);
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
          {this.renderFilteredFruits(this.props.filteredFruits)}
        </div>
      </div>
    );
  }

}

export default SearchComponent;
