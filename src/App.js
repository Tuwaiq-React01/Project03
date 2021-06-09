import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import MainScreen from '../src/screens/MainScreen'
import NotFoundScreen from '../src/screens/NotFoundScreen'

export default function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/Project03" component={MainScreen} exact />
          <Route component={NotFoundScreen} />
        </Switch>
      </Router>
    </div>
  )
}
