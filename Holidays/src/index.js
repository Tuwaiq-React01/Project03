import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Contact from './Contact'
import Home from './Home';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  
  <ul>
    <Router>
    <il> <Link to ='/'> Holidays </Link></il>
    <il> <Link to='/contact' >Contact</Link></il>
    <Route exact path='/' component={App}/>
    <Route path='/contact' component={Contact}/>

  </Router>
  </ul>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
