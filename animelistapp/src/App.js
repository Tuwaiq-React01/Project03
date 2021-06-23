import './App.css';
import React from "react";
import AnimeList from './AnimeList';
import FacebookLogin from "react-facebook-login";
import HomePage from './HomePage'
import { useEffect, useState } from 'react';

function App() {
  
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [token, settoken] = useState(null);

  useEffect(() => {
    if (localStorage.getItem("token")) {

      setname(localStorage.getItem("name"))
      setemail(localStorage.getItem("email"))
      settoken(localStorage.getItem("token"));
    }
    console.log(token);
  })

  useEffect(() => {
    if (token) {
      localStorage.setItem("name",name);
      localStorage.setItem("email",email);
      localStorage.setItem("token",token)
    }
  })

  const responseFacebook = (response) => {
    console.log(response);

    setname(response.name)
    setemail(response.email)
    settoken(response.accessToken)
    
  }

  return (
    <div className="App">
    <center>
        {token ? (
          <HomePage/>
        ) : (
          <div>
            <h1>Log In</h1>
            <FacebookLogin
              appId="475572430184446"
              autoLoad={false}
              fields="name,email"
              callback={responseFacebook}
            />
          </div>
        )}
      </center>
    </div>
  );
}

export default App;
