import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import { BrowserRouter as Router } from 'react-router-dom';

import { reducer } from './reducers';


const store = createStore(reducer, applyMiddleware())

ReactDOM.render(
  <Router>
<Provider store={store}>
      <App />
    </Provider>
    </Router>,
  document.getElementById('root')
);
