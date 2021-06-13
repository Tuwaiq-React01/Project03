import React from 'react'
import Nav from 'react-bootstrap/Nav'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'


export default function navbar() {
    return (
        <div>
        <Nav fill variant="tabs" defaultActiveKey="/home">
  <Nav.Item>
    <Nav.Link to="/home">Home </Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-1" to ='./'>Contact </Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-2"to='/Logout' onClick={ this.logout} >Logout</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="disabled" disabled>
      Disabled
    </Nav.Link>
  </Nav.Item>
</Nav>
        </div>
    )
}
