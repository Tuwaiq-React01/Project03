import React, { Component } from 'react';
import { Card, CardBody, CardTitle, CardText, Button } from 'bootswatch/dist/lux/bootstrap.min.css';



export default function Note(props)
{
    
    return (
        <Card >
            <CardBody>
            <CardTitle>{props.title}</CardTitle>
            <CardText>{props.content}</CardText>
            <Button> edit </Button>
            <Button className="mx-3"> Delete </Button>
            </CardBody>
        </Card>
    )
}