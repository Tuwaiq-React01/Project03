import React, { useState } from 'react'
import FacebookLogin from 'react-facebook-login';

export default function Login() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [token, setToken] = useState('');

  const responseFacebook = (response) => {
    if (response.status !== "unknown") {
      setName(response.name)
      setEmail(response.email)
      setToken(response.accessToken)
    }
    else {
      console.log("Please sign in");
    }
  }
  return (
    <div className="login pt-3">
      <center>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>

        {token ?
          <div>
            <h3>Welcome {name}</h3>
            <h5>The email {email} is authorized</h5>
            <br></br>
          </div> : <FacebookLogin
            appId="135275661915406"
            autoLoad={false}
            fields="name,email"
            callback={responseFacebook} />}

      </center>
      <br></br>
    </div>

  )
}