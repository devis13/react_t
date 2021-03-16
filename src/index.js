import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import store from './redux/redux-store';

let renderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App  state={ state }
            dispatch={ store.dispatch.bind(store) }/>
    </React.StrictMode>,
    document.getElementById('root')
  );
};

store.subscribe(() => {
  renderEntireTree(store.getState());
});

renderEntireTree(store.getState());

reportWebVitals();
