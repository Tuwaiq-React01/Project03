import React from "react";
import { BrowserRouter as Router,Route, Link} 
from "react-router-dom";
import './App.css'

import Home from './Component/Home'
import LogIn from './Component/LogIn'
import About from './Component/About'


export default function App() {
  return (
    <Router>

      <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">

        <ul >
          <li class="navbar-brand">  <Link to="/">Home</Link> </li>
          <li class="navbar-brand"> <Link to="/About">About</Link> </li>
          <li class="navbar-brand">  <Link to="/LogIn">Log In</Link> </li>
        </ul>
        </nav>

    <Route exact path="/" component={Home}>
       </Route>
    <Route path="/About" component={About}>
          </Route>
    <Route path="/LogIn" component={LogIn}>
          </Route>
         
      </div>
      
   
    </Router>
   
  );
}



