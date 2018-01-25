//document.getElementById('root').innerHTML = "<div class='search-bar'><input type='text' placeholder='Search..'/></div>";
import React from 'react';
import ReactDOM from 'react-dom';


//React.createElement(component, props, ...children)

class SearchComponent extends React.Component {
  render() {
    return React.createElement(
        'div',
        { 'class': 'search-bar' },
        React.createElement('input', { type: 'text', placeholder: 'Search..' })
      );
  }
}

ReactDOM.render(React.createElement(SearchComponent, null, null), document.getElementById('root'));