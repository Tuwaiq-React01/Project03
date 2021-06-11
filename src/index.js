import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Route,Link,BrowserRouter as Router, Switch} from 'react-router-dom'
import PageNotFound from './Components/PageNotFound';
import NavB from "./Components/NavB";
import Contact from './Components/Contact';

ReactDOM.render(
  <Router>
    <NavB/>
    <Switch>
      <Route exact path="/" component={App}/>
      <Route  path="/Contact" component={Contact}/>
      <Route path="/logout" component={App} />
      <Route component={PageNotFound}/>
    </Switch>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
