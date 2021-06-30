import React, { Component, useEffect, useState } from 'react'
import FacebookLogin from 'react-facebook-login';
import FormInput from"./Form"
import Home from './Home'

export default function App(props) {
  const [name, setName] = useState("Fahad")
  const [email, setEmail] = useState("fahad@gmail.com")
  const [picture, setPicture] = useState("url")
  const [token, setToken] = useState("fsdfsdfsdnfkjhnoufhweu")

  useEffect(()=>{
    if(localStorage.getItem("token")){
      setName(localStorage.getItem('name'))
      setEmail(localStorage.getItem('email'))
      setPicture(localStorage.getItem('picture'))
      setToken(localStorage.getItem('token'))
    }
  }, [])

  useEffect(()=>{
    if(token){
      localStorage.setItem("token",token)
      localStorage.setItem("name",name)
      localStorage.setItem("email",email)
      localStorage.setItem("picture",picture)
    }
  })

  const responseFacebook = (response) => {
    if(response.status !== "unknown"){ 
      console.log(response);
      setName(response.name)
      setEmail(response.email)
      setPicture(response.picture.data.url)
      setToken(response.accessToken)
    }
    else{
      console.log("nuknow response")
    }
  }

  return (
    <div>


<center>
      {token 
        ? <Home/> 
        : <FacebookLogin
            appId="337869971034903"
            autoLoad={false}
            fields="name,email,picture"
            callback={responseFacebook} />
      
    }

</center>

    </div>
  )
}