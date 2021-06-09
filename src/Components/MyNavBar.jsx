import { Navbar, Nav } from 'react-bootstrap'
import { Link } from "react-router-dom";
import React, { useState } from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';


const MyNavBar = () => {
  const [login, setLogin] = useState(false);
  const [profileObj, setProfileObj] = useState({});

  const onSuccess = (res) => {
    console.log('Login Success: currentUser:', res.profileObj);
    alert(
      `Logged in successfully welcome ${res.profileObj.name} 😍.`
    );
    setProfileObj(res.profileObj)
    setLogin(true)
  };

  const onFailure = (res) => {
    console.log('Login failed: res:', res);
    alert(
      `Failed to login. 😢`
    );
  };

  const onSuccessLogout = () => {
    console.log('Logout made successfully');
    alert('Logout made successfully ✌');
    setLogin(false)
  };

  return (
    <Navbar collapseOnSelect expand="lg" variant="light" style={{ "backgroundColor": "rgba(93, 23, 73,0.3)" }}>
      <Navbar.Brand as={Link} to="/" >
        <img alt="logo" width="150" src="https://d33wubrfki0l68.cloudfront.net/c6a54be7d89b1ebc31ad2f5558ee470fd4ebd11e/1fb54/institute-images/logo-text-black-centered.png"></img>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">
            Home
        </Nav.Link>
          <Nav.Link as={Link} to="/browse">
            Browse
        </Nav.Link>
          <Nav.Link as={Link} to="/about">
            About
        </Nav.Link>
        </Nav>

        {!login ? (<GoogleLogin
          clientId="527075466581-u0krqedrqk3kpvg89569p832g7gi7per.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={onSuccess}
          onFailure={onFailure}
          cookiePolicy={'single_host_origin'}
          style={{ marginTop: '100px' }}
          isSignedIn={true}
        />) :

        (<div>
          <span className="mr-3"> {"Welcome " + profileObj.name }</span>
          <GoogleLogout
            clientId="527075466581-u0krqedrqk3kpvg89569p832g7gi7per.apps.googleusercontent.com"
            buttonText="Logout"
            onLogoutSuccess={onSuccessLogout}
          ></GoogleLogout>
        </div>)
        }
      </Navbar.Collapse>
    </Navbar>
  );
}

export default MyNavBar;
