import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {WishCartProvider} from "./context/WishCartContext"
import {BrowserRouter as Router,} from "react-router-dom"


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <WishCartProvider>
        <App />
      </WishCartProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


