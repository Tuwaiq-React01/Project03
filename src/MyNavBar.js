import React from 'react'
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'
// import Home from './Home';
import { Link } from 'react-router-dom'


export default function MyNavBar() {

    return (
        <div>
            <div className="row">
                <div className="col-md-12">
                        <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
                            <Navbar.Brand href="#home">Norah Recipes</Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="mr-auto">
                                    <Nav.Link><Link to="/" style={{color: "white"}}>Home</Link></Nav.Link>
                                    <Nav.Link><Link to="/AboutUs" style={{color: "white"}}>About Us</Link></Nav.Link>
                                    <Nav.Link><Link to="/ContactUs" style={{color: "white"}}>Contact Us</Link></Nav.Link>
                                    <Nav.Link><Link to="/Authenticate" style={{color: "white"}}>Login</Link></Nav.Link>
                                </Nav>
                                <Form inline>
                                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                                    <Button variant="outline-success">Search</Button>
                                </Form>
                            </Navbar.Collapse>
                        </Navbar>
                </div>
            </div>
        </div>
    )
}


