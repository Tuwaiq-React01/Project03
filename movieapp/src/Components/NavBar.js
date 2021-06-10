import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'


export default function MyNavBar() {
    return (
        <Navbar collapseOnSelect expand="lg" variant="light" style={{ "backgroundColor": "rgba(121, 121, 121)" }}>
            <Navbar.Brand as={Link} to="/" >
                <img className="logo" src="https://cdn.dribbble.com/users/2264632/screenshots/6708631/final.gif" width="80" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link as={Link} to="/">
                        Latest
        </Nav.Link>
                    

        <Nav.Link as={Link} to="/search">
                        Search Movies
        </Nav.Link>

        <Nav.Link as={Link} to="/about">
                        About
        </Nav.Link>
        <Nav.Link as={Link} to="/login">
                        Login
        </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}