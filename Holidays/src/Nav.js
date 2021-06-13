import React, { Component } from 'react'
import {Route, Link , BrowserRouter as Router} from 'react-router-dom'
import App from './App'
import FacebookLogin from './Facebooklogin'


export default function Nav() {
  return (  <nav>
  <h1 className="navbar-brand" href="#">Holidays  WebApp</h1>
  <Link  className="nav-link active nv" aria-current="page" to='/'>Home</Link>
  <Link  className="nav-link active nv" aria-current="page" to='/TimeZone'>Holidays</Link>
  <Link  className="nav-link active nv" aria-current="page" to='/FacebookLogin'>Facebook</Link>
</nav>)
}

