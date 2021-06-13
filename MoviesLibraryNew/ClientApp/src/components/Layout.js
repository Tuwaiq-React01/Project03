import React, { Component } from 'react';
import { Container } from 'reactstrap';
import NavMenu from './NavMenu';

export default function Layout(props) {
  // static displayName = Layout.name;
    
    return (
      <div>
        <NavMenu onLogin={props.onLogin} onLogout={props.onLogout} user={props.user}/>
        <Container>
          {props.children}
        </Container>
      </div>
    );
}
