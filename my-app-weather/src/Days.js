import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import 'bootstrap/dist/css/bootstrap.min.css';
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'
import { Col, Container , Row } from 'react-bootstrap';
import  { useEffect, useState } from 'react' 


export default function Days(props) {
  console.log(props.arr);
  const printDaysArray = props.arr.map((item, index) => 
  <Col sx="4">
  <div>
  <center>
    <Card style={{ width: '18rem' }}>
<Card.Img variant="top" src="https://i.pinimg.com/originals/8c/39/ac/8c39aca4bce4b8035038576873d2872e.png" />
<Card.Body>
<Card.Title>{item.conditions}</Card.Title>
<Card.Text>
{item.description}
</Card.Text>
</Card.Body>
<ListGroup className="list-group-flush">
<ListGroupItem> Date : {item.datetime}</ListGroupItem>
<ListGroupItem> Sunrise : {item.sunrise}</ListGroupItem>
<ListGroupItem> Sunset : {item.sunset}</ListGroupItem>
</ListGroup>
</Card>
</center>   
</div>
</Col>
);
//   {/* );      //  key={index}>{item.conditions}{item.datetime}{item.description}{item.sunrise}{item.sunset}</div>);
//     console.log(printDaysArray); */}


  return (
    <div>
         <Container>
                    <Col>
                    <Row>
                    {printDaysArray}
                    </Row>
                    </Col>
                </Container>
                
    </div>
  )
}
