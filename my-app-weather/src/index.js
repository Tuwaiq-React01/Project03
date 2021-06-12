import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import NavbarHeader from './NavbarHeader'
import TimeZone from './TimeZone'
import {Route, Link , BrowserRouter as Router} from 'react-router-dom'
import Facebook from './Facebook'
ReactDOM.render(
  <Router>
    <NavbarHeader />
    <Route exact path='/' component={App}></Route>
    <Route path='/TimeZone' component={TimeZone} ></Route>
    <Route path='/Facebook' component={Facebook} ></Route>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
