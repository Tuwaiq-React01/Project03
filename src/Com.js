import React from 'react'
import { Card }  from 'react-bootstrap'
import './App.css';

export default function Com(props) {
    
    const items = props.list.map((item) =>
    <div >
    <Card className="backgraund" style={{ width: '23rem' }}>
    <Card.Img  variant="top" className="hhh" src={item.image}  />
    <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>
        price: {item.price}
        </Card.Text>
        <Card.Text>
        description: {item.description}
        </Card.Text>
        <Card.Text>
        category: {item.category}
        </Card.Text>
    </Card.Body>
    </Card></div>
    )
    return (
        <div className="d-flex flex-wrap wrapper">
            {items}
        </div>
    )
}
