import React from 'react'
import { useEffect, useState } from 'react'
import FacebookLogin from 'react-facebook-login';
import App from './App'
export default function Facebook() {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [picture, setPicture] = useState("")
    const [token, setToken] = useState("")

    const responseFacebook =(response) => {
        if(response.status !== "unknown"){
            setName(response.name)
            setEmail( response.email)
            setPicture(response.picture.data.url)
            setToken( response.accessToken)
        }
        else{
     console.log("You are not sign in");
        }
    }
    useEffect(() => {
        if(localStorage.getItem("token")){
            setName(localStorage.getItem('name'))
            setEmail(localStorage.getItem('email'))
            setPicture(localStorage.getItem('picture'))
          }
    }, [])
   
    useEffect(() => {
        if (token){
            localStorage.setItem("token",token)
            localStorage.setItem("name",name)
            localStorage.setItem("email",email)
            localStorage.setItem("picture",picture)
          }
    }, [])

    return (
        <div>
        <center>
          {token? <App /> :
            <div>
              <h1>Login</h1>
              <label>Enter Enter your username  </label>
              <input type="text"></input><br></br>
              <label>Enter Enter your password  </label>
              <input type="password"></input><br></br><br></br>
            <FacebookLogin
            appId="1503010193376844"
            autoLoad={false}
            fields="name,email,picture"
            callback={responseFacebook} />
            </div>
            }
            <img src={picture}></img>
            <h4>Welcome {name} </h4>
            <h4>Email {email} </h4>
       </center>
        </div>

    )
}
    

