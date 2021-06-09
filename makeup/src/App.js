import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Nav, Navbar } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import MakeupList from './MakeupList'
import Login from './Login'
import Search from './Search'
import Home from "./Home";

export default function App() {

  return (

    <div>
      <Router>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href=""> Albandry</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/MakeupList">MakeupList</Nav.Link>
            <Nav.Link as={Link} to="/Home">Home</Nav.Link>
            <Nav.Link as={Link} to="/Search">Search</Nav.Link>
            <Nav.Link as={Link} to="/">Login</Nav.Link>
          </Nav>
        </Navbar>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/MakeupList" component={MakeupList} />
          <Route exact path="/Home" component={Home} />
          <Route exact path="/Search" component={Search} />  
        </Switch>
      </Router>
    </div>

  )

}


