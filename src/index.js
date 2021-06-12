import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Memes from './Memes'
import SportsNews from './SportsNews'
import reportWebVitals from './reportWebVitals';
import {Route,Link,BrowserRouter as Router , Switch} from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
     <Router>
     <nav className="navbar navbar-inverse navbar-expand">
            <div className="container-fluid">
              <ul className="nav navbar-nav">
                <li  style={{ color: '#bf1363'  }} id="len1" className="hoverable" >
                <Link to="/">Home</Link>
                </li>
                <li style={{ color: '#bf1363'  }} id="len2" className="hoverable" href="#">
                <Link to="/Memes">Memes</Link>
                </li>
                <li style={{ color: '#bf1363' }} id="len3" className="hoverable" href="#">
                <Link to="/SportsNews">Sports News</Link>
                </li>
              </ul>
            </div>
          </nav>
      <Switch>
      <Route path='/SportsNews' component={SportsNews} />
    
    <Route exact path='/' component={App} /> 
    
    <Route path='/Memes' component={Memes} />

      </Switch>
    
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
