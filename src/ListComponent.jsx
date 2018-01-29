import React from 'react';

const ListComponent = ({items}) => {
  const rowsOfResults = items.map(item => <div key={item} className='list-item'>{item}</div>);
  return (<div> {rowsOfResults} </div>);
};

export default ListComponent;