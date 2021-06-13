import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Route,BrowserRouter as Router}from 'react-router-dom'
import Food3 from './Components/Food3.js'
import Food2 from './Components/Food2.js'

ReactDOM.render(
  <Router>
    <Route exact path="/" component={App} />
    <Route  path="/Components/Food2" component={Food2} />
    <Route  path="/Components/Food3" component={Food3} />
    <Route path="/logout" component={App} />
  </Router>,
  document.getElementById('root')
);


reportWebVitals();
