import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Info from './Info'
import Contact from './Contact'
import Err from './Err'
import {Route,Link,BrowserRouter as Router,Switch} from 'react-router-dom'


ReactDOM.render(

  <Router>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Info">Info</Link>
        </li>      <li>
          <Link to="/Contact">Contact</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path="/" component={App}/>
        <Route path="/Contact" component={Contact}/>
        <Route path="/Info" component={Info}/>
        <Route component={Err}/>
      </Switch>
    </Router >,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
