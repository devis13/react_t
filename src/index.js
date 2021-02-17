import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import store from './state';

let renderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App  state={ store.getState() }
            addPost={ store.addPost.bind(store)}
            addMessage={ store.addMessage.bind(store) }
            newPostValue={ store.newPostValue.bind(store) }
            newMessageValue={ store.newMessageValue.bind(store) } />
    </React.StrictMode>,
    document.getElementById('root')
  );
};

store.setSubscriber(renderEntireTree);

renderEntireTree(store.getState());

reportWebVitals();
