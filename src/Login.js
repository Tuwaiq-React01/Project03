import React, { useEffect, useState } from 'react'
import FacebookLogin from 'react-facebook-login'
import './App.css'
import App from './App';


const Login = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [picture, setPicture] = useState('');
  const [token, setToken] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    setLoggedIn(false);
  }, []);

  const responseFacebook = (response) => {
    if (response.status !== "unknown") {
      setName(response.name);
      setEmail(response.email);
      setPicture(response.picture.data.url);
      setToken(response.accessToken);
      setLoggedIn(true);

        }
    else {
      console.log("you are not singned in");
    }
  }
 
  return (
    loggedIn === false ?
    <center>
      <FacebookLogin
        appId="387843689219447"
        autoLoad={false}
        fields="name,email,picture"
        on
        callback={responseFacebook} />
      {token ?
          <App></App>
        : null
      }
    </center>
    : 
    <div>
      <div class="card">
      <div class="row">
          <div class="col-lg-3 col-sm-6">
              <div class="card hovercard">
                  <div class="cardheader"  style={{ color: 'black' }}>
                          <p>Welcome</p>
                  </div>
                  <div class="avatar" >
                      <img alt="" src={picture}/>
                  </div>
                  <div class="info">
                      <div class="title">
                          {name}
                      </div>
                      <div class="desc">{email}</div>
                  </div>
                  <div class="bottom">
                      <a class="btn btn-primary btn-twitter btn-sm" href="https://twitter.com/webmaniac">
                          <i class="fa fa-twitter"></i>
                      </a>
                      <a class="btn btn-danger btn-sm" rel="publisher"
                          href="https://plus.google.com/+ahmshahnuralam">
                          <i class="fa fa-google-plus"></i>
                      </a>
                      <a class="btn btn-primary btn-sm" rel="publisher"
                          href="https://plus.google.com/shahnuralam">
                          <i class="fa fa-facebook"></i>
                      </a>
                      <a class="btn btn-warning btn-sm" rel="publisher" href="https://plus.google.com/shahnuralam">
                          <i class="fa fa-behance"></i>
                      </a>
                  </div>
              </div>
  
          </div>
  
      </div>
  </div>
</div>
  );
};

export default Login;