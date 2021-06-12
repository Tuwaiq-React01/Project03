import React, {useState,useEffect } from 'react'
import Headers from "./components/Headers"
import FacebookLogin from 'react-facebook-login';
import './App.css';
export default function App() {

  const [token, setToken] = useState('')
  const [name, setname] = useState('')

  const responseFacebook = (response) => {
    setToken(response.accessToken)
    setname(response.name)

    
  }

  useEffect(() => {
  // localStorage.setItem("name",name)
  localStorage.setItem("token",token)
  }, [token])

  return (
    <div>
        <Headers/>
          {}

          {token ? <div > 
     
       <h1>welcome {name}</h1> </div>  :null
    }

        {token ?   console.log('>>',localStorage.getItem("token"))      /// window.location.href = "/home"  
        :<FacebookLogin
          appId="321137749523098"
          autoLoad={false}
          fields="name,email"
          callback={responseFacebook} />}
       
      </div>
  )
}
