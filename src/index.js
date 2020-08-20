import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from "redux";
import { Provider } from "react-redux";

import App from './App';
import allReducers from './reducers/combineAllReducers';
import { HashRouter } from 'react-router-dom';

console.log("...................................Store will be created...............................................................");
const reduxStore = createStore(allReducers)
console.log(reduxStore);
console.log("Store is created....");

ReactDOM.render(  
  <HashRouter>
    <Provider store={reduxStore}>
        <App />
    </Provider> 
  </HashRouter>,
  document.getElementById('root')
);

