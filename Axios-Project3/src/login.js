import React, { useState } from 'react'
import FacebookLogin from 'react-facebook-login';
import "./App.css"
import App from './App';

export default function Login () {

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
        <b>{name} <br></br></b>
        <img src={picture}/><br></br>
        <b>{email}</b>
        {token? <App></App>:
        <FacebookLogin
          appId="337867537730918"
          autoLoad={false}
          fields="name,email,picture"
          callback={responseFacebook}
        />
        }
      </center>
    )
  }
