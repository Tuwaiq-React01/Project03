import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Row, Container, Col, Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Page() {

    const [games, setGames] = useState([])

    useEffect(() => {
        axios({
            method: 'get',
            url: "games"
        }).then((response) => {
            setGames(response.data)
        }).catch((e) => {
            console.log("error", e);
        })
    }, [])

    const logout = () => {
        localStorage.clear()
    }
    return (
        <div>
            <nav className="pageHeader">
                <Link to="/contact" className="link">contact  |  </Link>
                <Link to="/logout" onClick={logout} className="link">Logout</Link>
            </nav>
            <Container><Row>
                {games.map((item, i) => {
                    return (
                        <Col>
                            <Card style={{ width: '18rem' }} className="card" key={i}>
                                <Card.Img className="image" variant="top" src={item.thumbnail} />
                                <Card.Body>
                                    <Card.Title>Game Name: {item.title}</Card.Title>
                                    <Card.Text><p>{item.short_description}</p></Card.Text>
                                    <a href={item.freetogame_profile_url}> <Button variant="danger">Play</Button></a>
                                </Card.Body>
                            </Card>
                        </Col>)
                })}
            </Row></Container>
        </div>
    )
}
