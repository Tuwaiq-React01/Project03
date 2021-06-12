import React, { useState, useEffect } from "react";
import "./App.css";
import FacebookLogin from "react-facebook-login";
import Home from "./components/Home";

export default function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [picture, setPicture] = useState("");
  const [token, setToken] = useState(null);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      console.log(token);
      setName(localStorage.getItem("name"));
      setEmail(localStorage.getItem("email"));
      setPicture(localStorage.getItem("picture"));
      setToken(localStorage.getItem("token"));
    } else {
      setToken(null);
    }
    return () => {};
  }, [localStorage.getItem("token")]);

  useEffect(() => {
    if (token) {
      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      localStorage.setItem("picture", picture);
      localStorage.setItem("token", token);
    }
    return () => {};
  }, [token]);

  const responseFacebook = (response) => {
    console.log(response);
    setName(response.name);
    setEmail(response.email);
    setPicture(response.picture.data.url);
    setToken(response.accessToken);
  };

  return (
    <div className="app-screen align-self-center text-center">
      {token ? (
        <Home />
      ) : (
        <FacebookLogin
          appId="3633847266720370"
          autoLoad={false}
          fields="name,email,picture"
          callback={responseFacebook}
          cssClass="facebook"
        />
      )}
    </div>
  );
}
