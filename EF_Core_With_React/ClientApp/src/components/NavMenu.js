import React, { Component } from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';

export class NavMenu extends Component {
  static displayName = NavMenu.name;

  constructor (props) {
    super(props);
    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true,
    };
  }

  toggleNavbar () {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  logingOut = ()=>{
    localStorage.clear();
  }
  render () {
    return (
      <header>
        <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3" light>
          <Container>
            <NavbarBrand tag={Link} to="/">
              {/* EF_Core_With_React */}
              GameOnTheHouse
              <img src="https://www.freepnglogos.com/uploads/games-png/download-games-png-transparent-for-designing-work-5.png" width="30" height="30" className="d-inline-block align-top" alt=""></img>
              </NavbarBrand>
            <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
            <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!this.state.collapsed} navbar>
            
             {localStorage.getItem("id")?
              <ul className="navbar-nav flex-grow">
                <NavItem>
                  <NavLink tag={Link} className="text-dark" to="/RGames"><h6 style={{color:"#7d34c6"}}>Games</h6></NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} className="text-dark" to="/RfavGames">
                        <img src="https://images.squarespace-cdn.com/content/v1/571fab4ad51cd4f5bee60686/1530019536400-OQMKMGKI9OJ1AIH4L65S/ke17ZwdGBToddI8pDm48kGfiFqkITS6axXxhYYUCnlRZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpxQ1ibo-zdhORxWnJtmNCajDe36aQmu-4Z4SFOss0oowgxUaachD66r8Ra2gwuBSqM/if_heart_1055045+%281%29.png?format=1000w" width="28" height="28" className="d-inline-block align-top" alt=""></img>                     
                    </NavLink>
                </NavItem>
                <NavItem>
                <div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
                    <div className="nav-item dropdown">
                    <img src={localStorage.getItem("picture")} style={{borderRadius:"40px",blockSize:"45px"}} className="d-inline-block align-top nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false" alt=""></img>
                      <div className="dropdown-menu dropdown-menu-end dropdown-menu-lg-start" aria-labelledby="navbarDarkDropdownMenuLink">
                        <NavLink tag={Link} className="dropdown-item" to="/RUserAccount">Setting</NavLink>
                        <NavLink tag={Link} className="dropdown-item" to="/" onClick={this.logingOut}>Log out</NavLink>
                      </div>
                    </div>
                </div>
                </NavItem>

                {/* <NavItem>
                  <NavLink tag={Link} className="text-dark" to="/RUserAccount">
                    <img src={localStorage.getItem("picture")} style={{borderRadius:"40px",blockSize:"25px"}} className="d-inline-block align-top"></img>
                    </NavLink>
                </NavItem> */}
              </ul>
              :null}
            </Collapse>
          </Container>
        </Navbar>
      </header>
    );
  }
}
