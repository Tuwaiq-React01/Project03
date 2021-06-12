import React, { useState } from 'react'
import FacebookLogin from 'react-facebook-login'
import './App.css'
//import Contact from './Contact'
import Store from './Store'

export default function App() {
  const [token, setToken] = useState("")

  const responseFacebook = (response) => {
    if (response.status !== "unknown") {
      setToken(response.accessToken)
    }
    else {
      console.log("you have to sing in");
    }
 }
 return (
  <center class="m-3">
    <h2>Login using Facebook</h2>
    <FacebookLogin
      appId="152705956899724"
      autoLoad={false}
      fields="name,email,picture"
      callback={responseFacebook} />
      {token?
      <Store/>
        : null
      }
  </center>
)
}