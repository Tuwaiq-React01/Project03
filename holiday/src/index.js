import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import CA from "./CA"
import Login from './Login'
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route , Link , Switch} from "react-router-dom";
import "./App.css"
ReactDOM.render(
  <Router>
    <ul>
      <li>
        <Link to="/">US</Link>
      </li>
      <li>
        <Link to="/CA">CA</Link>
      </li>
      <li>
        <Link to="/Login">Login</Link>
      </li>
    </ul>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/CA" component={CA} />
      <Route path="/Login" component={Login} />
      {/* <Route component={PageNotFound} /> */}
    </Switch>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
