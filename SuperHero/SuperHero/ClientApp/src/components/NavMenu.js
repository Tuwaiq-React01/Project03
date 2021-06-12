import React, { useState } from 'react'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import DarkModeToggle from "react-dark-mode-toggle";
const NavMenu = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => false);
  
  isDarkMode ? document.body.style.backgroundColor = "rgb(26, 28, 34)" : document.body.style.backgroundColor = "white"
  return (
    <Navbar style={{ marginBottom: "40px" }} collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Hero</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        </Navbar.Collapse>
      </Container>
      <DarkModeToggle
        onChange={setIsDarkMode}
        checked={isDarkMode}
        size={80}
      />
    </Navbar>
  );
}

export default NavMenu;