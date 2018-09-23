import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './index.css';
import App from './Containers/App';
import { searchRobots } from './reducers.js'
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';

const store = createStore(searchRobots);
console.log(searchRobots);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));
   

registerServiceWorker();
