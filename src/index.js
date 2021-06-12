import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Profile from "./components/Profile";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/logout" component={Profile} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
