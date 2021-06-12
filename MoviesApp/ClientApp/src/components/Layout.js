import React from 'react';
import { Container, Row } from 'reactstrap';
import NavMenu from './NavMenu';

function Layout(props) {
    return (
        <div>
            <NavMenu />
            <Container>
                <Row>
                    {props.children}
                </Row>
            </Container>
        </div>
    );
}

export default Layout;

