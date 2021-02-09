import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const postData = [
  {id: 1, text: "hi"},
  {id: 2, text: "hi"},
  {id: 3, text: "hi"},
];

const navDate = [
  { id: 1, path: "/profile", title: "Profile" },
  { id: 2, path: "/dialogs", title: "Messages" },
  { id: 3, path: "/news", title: "News" },
  { id: 4, path: "/music", title: "Music" },
  { id: 5, path: "/settings", title: "Settings" },
]

const userDate = [
  {name:"Andrey", id:"1"},
  {name:"Ivan", id:"2" },
  {name:"Tymur", id:"3"},
  {name:"Roman", id:"4"},
]

const messageDate = [
  {id: 1, massage: "Hello!!!"},
  {id: 2, massage: "Hello!!!"},
  {id: 3, massage: "Hello!!!"},
]

ReactDOM.render(
  <React.StrictMode>
    <App  postData={postData}
          navDate={navDate}
          userDate={userDate}
          messageDate={messageDate}
    />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
