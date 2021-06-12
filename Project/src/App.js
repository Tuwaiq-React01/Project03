import React, { Component, useState } from 'react'
import FacebookLogin from 'react-facebook-login'
import './App.css'
import { Card } from 'react-bootstrap';
import Home from './component/Home'
export default function App() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [picture, setPicture] = useState("")
  const [token, setToken] = useState("")

  const responseFacebook = (response) => {
    if (response.status !== "unknown") {

      setName(response.name)
      setEmail(response.email)
      setPicture(response.picture.data.url)
      setToken(response.accessToken)
    }
    else {
      console.log("you are not singned in");
    }
  }
  return (
    <center>
      {token ? <Home /> :
        <div>
          <Card body>
            <h2 className="Facebook">Make Me Laugh! </h2>
            <FacebookLogin
              appId="957072475047158"
              autoLoad={true}
              fields="name,email,picture"
              callback={responseFacebook} />
          </Card>
        </div>
      }
    </center>
  )
}
