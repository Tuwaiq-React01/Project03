import React ,{useState,useEffect}from 'react'
import FacebookLogin from 'react-facebook-login'


export default function Login(response) {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [token, setToken] = useState("")

    const responseFacebook = (response) => {
        if(response.status !=="unknown"){
            alert("YOU ARE LOGGED IN SUCCESSFULLY !!!")
            setName(response.name)
            setEmail(response.email)
            setToken(response.accessToken)
         }
         else{
            alert("YOU ARE NOT SIGNED IN")
         }
      }

    return (
   
        <center link>
            
            {
                token ? 
                <div>
                    <h2 style="color:white">Welcome {name} </h2>
                    <h3 style="color:white">Your email: {email} is authorized</h3>
                </div>
                 : <FacebookLogin
                 appId="200067995305467"
                 autoLoad={false}
                 fields="name,email"
                 callback={responseFacebook} />
                
                
            }

        </center>
            
      
    )
}
