import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import About from './About'
import Contact from './Contact'
import NotFound from './NotFound'
import Nav from './Nav'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


ReactDOM.render(
  <Router>
  
    <Nav />
    <Switch>
    <Route exact path="/" component={App} />
    <Route path="/About" component={About} />
    <Route path="/Contact" component={Contact} />
    <Route component={NotFound}/>
    </Switch>
  </Router>,
  document.getElementById('root')
);


