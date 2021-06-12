import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import NotFound from './components/NotFound'
import Login from './components/Login'
import Steps from './components/Steps'
import reportWebVitals from './reportWebVitals';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'


ReactDOM.render(
  <Router>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" to="/">Home</Link>
            </li>
            {/* <li className="nav-item">
              <Link className="nav-link " to="/login">Login</Link>
            </li> */}
            <li className="nav-item">
              <Link className="nav-link " to="/steps">How to  play</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/login" component={Login} />
      <Route path="/steps" component={Steps} />
      <Route component={NotFound} />
    </Switch>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
