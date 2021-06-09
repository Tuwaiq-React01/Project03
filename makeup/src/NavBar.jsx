<Navbar collapseOnSelect expand="lg" variant="light" style={{ "backgroundColor": "rgba(93, 23, 73,0.3)" }}>
<Navbar.Brand as={Link} to="/" >
    <h4>logo</h4>
</Navbar.Brand>
<Navbar.Toggle aria-controls="responsive-navbar-nav" />
<Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
        <Nav.Link as={Link} to="/">
            Home
</Nav.Link>
        <Nav.Link as={Link} to="/about">
            About
</Nav.Link>
    </Nav>
</Navbar.Collapse>
</Navbar>