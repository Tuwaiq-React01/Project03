import React, { useState } from 'react'
import FacebookLogin from 'react-facebook-login'
import NavBar from './Components/NavBar.js'
import './App.css'


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
   <div>
     <NavBar/>
  <center class="m-3">
    <h2>Login using Facebook</h2>
    <FacebookLogin
      appId="175838644478520"
      autoLoad={false}
      fields="name,email,picture"
      callback={responseFacebook} />
      {token?
        <div>
          <h3>Welcome {name}</h3>
          <img src={picture}></img>
          <h3>The email {email} is authorized</h3>
          
        </div>
        : null
      }
  </center>
  </div>
)
}