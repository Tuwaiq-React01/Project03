import React, { useState,useEffect } from 'react'
import FacebookLogin from 'react-facebook-login'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import LoggedIn from './LoggedIn'

export default function App() {
  const[name,setName]=useState("")
  const[email,setEmail]=useState("")
  const[picture,setpicture]=useState("")
  const[token,setToken]=useState("")
  useEffect(() => {
   if(localStorage.getItem("token")){
     setName(localStorage.getItem("name"))
     setpicture(localStorage.getItem("picture"))
     setEmail(localStorage.getItem("email"))
   }
   if(token){
     localStorage.setItem(setEmail(email))
     localStorage.setItem(setName(name))
     localStorage.setItem(setpicture(picture))
     localStorage.setItem(setToken(token))
   }
  }, [])

  const responseFacebook = (response) => { 
    console.log("response",response)

    if (response.status !== "unknown") {
      setName( response.name )
      setEmail( response.email )
      setpicture( response.picture.data.url )
      setToken( response.accessToken )
    }
    else {
      console.log("you are not singned in");
    }
  }

  return (
    <center>

   

    {token? <LoggedIn name = {name } picture={picture}/> : 
    <div>  <h2>PLEASE Login using Facebook</h2> 
     <FacebookLogin
appId="230922138555239"
autoLoad={false} 
fields="name,email,picture"
 callback={responseFacebook} />
 </div> 
    }
  </center>
  )
}
