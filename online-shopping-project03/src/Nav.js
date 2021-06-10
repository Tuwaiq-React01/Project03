import React from "react";
import { Route, Link, BrowserRouter as Router, Switch } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import "./Nav.css";

export default function Nav() {
  return (
    <Router>
      <div className="card text-center">
        <div className="card-header">
          <ul className="nav nav-tabs card-header-tabs">
            <h3
              style={{
                backgroundColor: "white",
                color: "#041c41d0",
                paddingRight: 10 + "px",
              }}
            >
              online
            </h3>
            <br></br>
            <h4 style={{ color: "white", paddingLeft: 5 + "px" }}>shopping</h4>
            <li className="nav-item" style={{ paddingLeft: 40 + "px" }}>
              <Link className="nav-link active" aria-current="true" to="./Home">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="true"
                to="./Login"
              >
                Login with Facebook
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <Switch>
        <Route exact path="/Home" component={Home} />
        <Route path="/Login" component={Login} />
      </Switch>
    </Router>
  );
}
