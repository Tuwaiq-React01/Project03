import React , {useState,useEffect}from 'react'
import FacebookLogin from 'react-facebook-login'
 
export default function Login() {
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [token,setToken] = useState("");

  const responseFacebook = (response) => {
      setName(response.name)
      setEmail(response.email)
      setToken(response.accessToken)
  }
    return (
      <div className="card">
   <h2 className="title"><i className="fa fa-cloud"></i>Weather App</h2>
 

        <h2 className="title" > login using Facebook</h2>
        <form > 
            <h2 >Email <input/></h2>
            <br/>
            <h2> Password<input/></h2>
            <br/>
            <button class="btn btn-info"> Sign in </button>
            <br/> <br/>
        </form>
        <br/>
        <FacebookLogin
          appId="494079185257480"
          autoLoad={false}
          fields="name,email"
          callback={responseFacebook} />

        {token ?
          <div>
            <h3>Welcome {name}</h3>
         
            <h3>The email {email} is authorized</h3>
          </div> : null  }
          </div>
   )
  }

