import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import MyNavBar from './MyNavBar';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import FacebookLoginPage from './FacebookLogin'
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <MyNavBar />
      <Switch>
        <Route exact path="/AboutUs">
          <AboutUs />
        </Route>
        <Route exact path="/ContactUs">
          <ContactUs />
        </Route>
        <Route exact path="/Authenticate">
          <FacebookLoginPage/>
        </Route>
        <Route exact path="/">
          <App />
        </Route>
        <Route path="/">
          <h1 style={{ textAlign: "center" }}>404</h1>
          <h2 style={{ textAlign: "center" }}>Page Not Found</h2>
        </Route>
      </Switch>
    </Router>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
