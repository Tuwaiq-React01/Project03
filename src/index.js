import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import About from './Components/About';
import Contact from './Components/Contact';
import NotFound from './Components/NotFound';

import {
  BrowserRouter as Router, Route, Switch
} from 'react-router-dom';
ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/About" component={About} />
      <Route path="/Logout" component={App} />
      <Route path="/Contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  </Router>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
