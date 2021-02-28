import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import store from './redux/store';

let renderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App  state={ store.getState() }
            dispatch={ store.dispatch.bind(store) }/>
    </React.StrictMode>,
    document.getElementById('root')
  );
};

store.subscribe(renderEntireTree);

renderEntireTree(store.getState());

reportWebVitals();
