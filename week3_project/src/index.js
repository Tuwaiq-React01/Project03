import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route , BrowserRouter as Router ,Switch } from 'react-router-dom'
import contact from './contact';
import PageNotFound from './PageNotFound';


ReactDOM.render(<Router>
  <Switch>
  <Route exact path='/' component={App} />
  <Route exact path='/contact' component={contact} />
  <Route path='/logout' component={App} />
  <Route component={PageNotFound} />
  </Switch>
</Router>,
document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
