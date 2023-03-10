//Brandon Le
//3-10-23
//Tic Tac Toe Tutorial but made with React and bootstrap. My special features were a bunch of different animations and effects from framer-motion. I had a lot of fun messing around with them and trying to ge them to work.



import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
