import React from 'react'
import { Button, Container, Row, Col } from 'react-bootstrap';
import { BrowserRouter as Router, Route,Switch ,Link} from "react-router-dom";



export default function MainPage() {
    return (
        <div>
            <Container style={{ marginTop: "50px" }}>
                <Row>
                    <Col><img src="http://gifimage.net/wp-content/uploads/2017/11/gif-no-background-3.gif" alt="" /></Col>
                    <Col style={{ marginTop: "115px" }}>
                        <h2>Trending Videos</h2>
                        <h6>If You Want To See The Most Popular Videos In The World</h6>
                        <Link to="/Videos"> <Button variant="outline-primary" style={{ marginTop: "25px" }}>Videos</Button></Link>
                    </Col>
                </Row>

                <br />
            </Container>
        </div>
    )
}

