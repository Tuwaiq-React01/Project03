import React, { useState, useEffect } from 'react'
import Home from './Components/Home';
import FacebookLogin from 'react-facebook-login';
function App() {
  const [email, setEmail] = useState("");
  const [token, setToken] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setEmail(localStorage.getItem("email"));
      setToken(localStorage.getItem("token"));
      setName(localStorage.getItem("name"));
    }
  }, [])

  const facebookResponse = (response) => {
    if (response.state != "unknown") {
      setEmail(response.email);
      localStorage.setItem("email", response.email);
      setToken(response.accessToken);
      localStorage.setItem("token", response.accessToken);
      localStorage.setItem("name", response.name);
      setName(response.name);
    }
  }


  return (

    <div>
      {token ? <Home /> :
        <center>
          <h1>Please login using Facebook to access this website</h1>
          <FacebookLogin
            appId="1776021115902115"
            autoLoad={false}
            fields="email, name"
            callback={facebookResponse} />
        </center>
      }

    </div>


  );
}

export default App;
