import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, reducer } from 'redux'

import SearchContainer from './SearchContainer.js';
import searchReducer from './reducer'


let store = createStore(searchReducer, undefined, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

render(
    <Provider store={store}>
        <SearchContainer/>
    </Provider>,
    document.getElementById('root'));