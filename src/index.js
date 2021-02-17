import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import state, { addMessage, addPost, newMessageValue, newPostValue, renderDom } from './state';

let renderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App  state={ state }
            addPost={ addPost }
            addMessage={ addMessage }
            newPostValue={ newPostValue }
            newMessageValue={ newMessageValue } />
    </React.StrictMode>,
    document.getElementById('root')
  );
};

renderDom(renderEntireTree);

renderEntireTree(state);

reportWebVitals();
