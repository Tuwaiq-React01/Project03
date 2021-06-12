import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import CA from "./CA"
import Login from './Login'
import { Navbar, Nav, Container } from 'react-bootstrap';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route , Link , Switch} from "react-router-dom";
import "./App.css"
ReactDOM.render(
  
  <Router>
    <Navbar bg="light" variant="light">
    <Navbar.Brand >Holiday</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link to="/" as={Link}>US</Nav.Link>
      <Nav.Link to="/CA" as={Link}>CA</Nav.Link>
      <Nav.Link to="/Login"as={Link} >Login</Nav.Link>
    </Nav>
    
  </Navbar>
  
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
