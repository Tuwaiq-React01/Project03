import React, {Component, useEffect, useState} from 'react';
import {Collapse, Container, Nav, Navbar, NavbarBrand, NavbarText, NavbarToggler, NavItem, NavLink} from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';
import Login from "./Login";
import Logout from "./Logout";

export default function NavMenu(props) {
  // static displayName = NavMenu.name;

  const [collapsed, setCollapsed] = useState(true);
  const [user, setUser] = useState(props.user);
  
  console.log(user.name)
  
  useEffect(() => {
    setUser(props.user);
    console.log("NavMenu mounted")
    return () => {

    }
  }, [props.user])
  
  const logout = () => {
    
  }
  
  
  // constructor (props) {
  //   super(props);
  //
  //   this.toggleNavbar = this.toggleNavbar.bind(this);
  //   this.state = {
  //     collapsed: true
  //   };
  // }

  const toggleNavbar = () => {
    
    setCollapsed(!collapsed)
  }
  
  return (
    <header>
      <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3" light expand="md">
        <Container>
          <NavbarBrand tag={Link} to="/" className="text-light">MoviesLibrary</NavbarBrand>
          <NavbarToggler onClick={toggleNavbar} className="mr-2" />
          <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!collapsed} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink tag={Link} className="text-light" to="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} className="text-light" to="/movies">Movies</NavLink>
              </NavItem> 
              <NavItem>
                <NavLink tag={Link} className="text-light" to="/tv-shows">TV Shows</NavLink>
              </NavItem>
              {typeof user.name !== "undefined" ?
                  <div style={{display:"flex", float:"left"}}>
                    <NavItem>
                      <NavLink tag={Link} className="text-light" to="/favorite-movies">Favorite Movies</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink tag={Link} className="text-light" to="/favorite-tv-shows">Favorite TV Shows</NavLink>
                    </NavItem>
                  </div>  : 
                  null
              }
            </Nav>
              
            
            
            
          </Collapse>
          {typeof user.name !== "undefined" ?
              <div className="d-flex">
                <img src={user.image} height="35px"/>
                {user.name}
                <Logout onLogout={props.onLogout}/>
              </div> : 
              <NavItem className="d-flex">
                <Login onLoggin={props.onLogin}/>
              </NavItem>  }
        </Container>
      </Navbar>

      {/*<nav className="navbar navbar-expand-lg navbar-light bg-light">*/}
      {/*  <div className="container-fluid">*/}
      {/*    <a className="navbar-brand" href="#">MoviesLibrary</a>*/}
      {/*    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"*/}
      {/*            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"*/}
      {/*            aria-label="Toggle navigation">*/}
      {/*      <span className="navbar-toggler-icon"></span>*/}
      {/*    </button>*/}
      {/*    <div className="collapse navbar-collapse" id="navbarSupportedContent">*/}
      {/*      <ul className="navbar-nav me-auto mb-2 mb-lg-0">*/}
      {/*        <li className="nav-item">*/}
      {/*          <a className="nav-link active" aria-current="page" href="#">Home</a>*/}
      {/*        </li>*/}
      {/*        <li className="nav-item">*/}
      {/*          <a className="nav-link" href="#">Link</a>*/}
      {/*        </li>*/}
      {/*        <li className="nav-item dropdown">*/}
      {/*          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"*/}
      {/*             data-bs-toggle="dropdown" aria-expanded="false">*/}
      {/*            Dropdown*/}
      {/*          </a>*/}
      {/*          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">*/}
      {/*            <li><a className="dropdown-item" href="#">Action</a></li>*/}
      {/*            <li><a className="dropdown-item" href="#">Another action</a></li>*/}
      {/*            <li>*/}
      {/*              <hr className="dropdown-divider">*/}
      {/*            </li>*/}
      {/*            <li><a className="dropdown-item" href="#">Something else here</a></li>*/}
      {/*          </ul>*/}
      {/*        </li>*/}
      {/*        <li className="nav-item">*/}
      {/*          <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Disabled</a>*/}
      {/*        </li>*/}
      {/*      </ul>*/}
      {/*      <form className="d-flex">*/}
      {/*        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search">*/}
      {/*          <button className="btn btn-outline-success" type="submit">Search</button>*/}
      {/*      </form>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</nav>*/}
    </header>
  );
  
}
