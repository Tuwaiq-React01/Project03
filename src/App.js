import './App.css'
import Layout from './Layout'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Movies from './MoviesHome.js'
import { NavBar } from './NavBar.js'
import MyList from './mylist'
import Login from './Login'
import React from 'react'

const MovieList = []

class App extends React.Component {
  render() {
    return (
      <Layout>
        <Router >
          <NavBar className="navbar "></NavBar>
          <switch>
            <Route
              path="/"
              exact
              component={() => <Movies MovieList={MovieList} />}
            />
            <Route
              path="/mylist"
              component={() => <MyList MovieList={MovieList} />}
            />
            <Route
              path="/Login"
              component={() => <Login />}
            />
          </switch>
        </Router>
      </Layout>
    )
  }
}
export default App
