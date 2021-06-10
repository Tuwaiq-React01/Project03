import React, { Component } from 'react'
import Advice from './Advice';
import FacebookLogin from 'react-facebook-login'
import {  Link } from 'react-router-dom'
import './Component/Login.css'

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      picture: "",
      token: false
    }
  }
  componentDidMount = () => {
    if (localStorage.getItem("token")) {
      this.setState({ name: localStorage.getItem('name') })
      this.setState({ email: localStorage.getItem('email') })
      this.setState({ picture: localStorage.getItem('picture') })
      this.setState({ token: localStorage.getItem('token') })

    }
  }
  componentDidUpdate = () => {
    if (this.state.token) {
      localStorage.setItem("name", this.state.name)
      localStorage.setItem("email", this.state.email)
      localStorage.setItem("picture", this.state.picture)
      localStorage.setItem("token", this.state.token)
    }
  }
  responseFacebook = (response) => {
    if (response.state !== "unknown") {
      this.setState({
        name: response.name,
        email: response.email,
        picture: response.picture.data.url,
        token: response.accessToken
      })
    } else {
      console.log("You are not sign up!")
    }
  }
  logout = () => {
    localStorage.clear()
  }
  render() {

    return (
      <center>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul>
        <Link className="btn btn-warning" style ={{textDecoration:"none", textAlign:"center"}}to='/'> Home  </Link>
        <Link className ="btn btn-warning"style ={{textDecoration:"none"}}to='/logout' onClick={this.logout}>Logout</Link>
          </ul>
        </nav>
        <div>
          {this.state.token ? <Advice></Advice> :
          <div>
          <div class="login">
          <div class="login-triangle"></div>

          <h2 class="login-header">Log in</h2>

          <form class="login-container">
              <p><input type="email" placeholder="Email" /></p>
              <p><input type="password" placeholder="Password" /></p>
              <p><input type="submit" value="Log in" /></p>
              <FacebookLogin
              appId="172967094690149"
              autoLoad={false}
              fields="name,email,picture"
              callback={this.responseFacebook} />
              
          </form>
          </div>
      </div>}
        </div>
      </center>
    )
  }
}
