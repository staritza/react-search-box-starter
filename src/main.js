//document.getElementById('root').innerHTML = "<div class='search-bar'><input type='text' placeholder='Search..'/></div>";
import React from 'react';
import ReactDOM from 'react-dom';


//React.createElement(component, props, ...children)

class SearchComponent extends React.Component {
  render() {
    return <div className='search-bar'><input type='text' placeholder='Search'/></div>
  }
}

ReactDOM.render(React.createElement(SearchComponent), document.getElementById('root'));