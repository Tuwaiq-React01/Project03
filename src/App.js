import React, { useState } from 'react'
import FacebookLogin from 'react-facebook-login'
import './App.css'
import NewsPage from './Components/NewsPage.js';

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
  <center class="m-3">
    <h2>Login using Facebook</h2>
    <FacebookLogin
      appId="1492015204466948"
      autoLoad={false}
      fields="name,email,picture"
      callback={responseFacebook} />
      {token?
        <div>
          <h3>Welcome {name}</h3>
          <img src={picture}></img>
          <h3>The email {email} is authorized</h3>
          <NewsPage/>
        </div>
        : null
      }
  </center>
)
}
