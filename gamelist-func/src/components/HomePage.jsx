import FacebookLogin from "react-facebook-login";
import React, { useState, useEffect } from "react";
import { Carousel } from "react-bootstrap";

export default function HomePage(props) {
  const [name, setName] = useState("");
  const [token, setToken] = useState("");
  const [email, setEmail] = useState("");

  const responseFacebook = (response) => {
    if (localStorage.getItem("token")) {
      setName(response.name);
      setEmail(response.email);
      setToken(response.accessToken);
    } else {
      console.log("you are not singned in");
    }
  };

  useEffect(() => {
    props.setInfo(name, token, email);
    return () => {
      // cleanup
    };
  }, [name, token, email]);

  return (
    <div className="container">
      {token ? (
        <h1 className="display-4">Welcome, {name}</h1>
      ) : (
        <center className="my-3">
          <FacebookLogin
            appId="1947245272097728"
            autoLoad={false}
            fields="name,email,picture"
            callback={responseFacebook}
            textButton="Login"
            icon="fa-facebook"
            width="10px"
          />
        </center>
      )}

      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 h0"
            src="https://images.unsplash.com/photo-1534423861386-85a16f5d13fd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
            alt="First slide"
            height="550px"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
            alt="First slide"
            height="550px"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1552820728-8b83bb6b773f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
            alt="First slide"
            height="550px"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
