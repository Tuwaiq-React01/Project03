import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import AuthPage from "./Components/AuthPage";
import App from "./App";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import Navbar from "./Components/Navbar";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <App />
        </Route>
        <Route exact path="/auth">
          <AuthPage />
        </Route>
        <Route exact path="/app">
          <App />
        </Route>
        <Route path="/">
          <h1 style={{ textAlign: "center", paddingTop: "50px" }}>
            404 Page not found
          </h1>
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
