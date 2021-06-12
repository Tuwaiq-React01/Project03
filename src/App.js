import React, { useEffect , useState } from 'react'
import FacebookLogin from 'react-facebook-login'
import Home from './Home'
export default function App () {

 const [ name , setName]  = useState("")
 const [ email  , setEmail] = useState("")
 const [ picture , setPicture] = useState("")
 const [ token , setToken ] = useState("")

 const responseFacebook = (response) => {
  
  setName(response.name)
    setEmail(response.email)
    setPicture(response.picture.data.url)
    setToken(response.accessToken)
 
}
  return (
    <center>
  


   
    
    {token ?      <>  <img src={picture} width = {150} /> <h3 style={{color:'black'}}> Hello {name}</h3> <Home/> </>: <>  <h1>Login </h1> <FacebookLogin
appId="227170892267502"
autoLoad={false}
fields="name,email,picture"
callback={responseFacebook} /> </> }

  </center>
  )
    
 
    
}
