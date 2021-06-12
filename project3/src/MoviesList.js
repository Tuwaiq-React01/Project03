import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

export default function MoviesList (props)
{         return (
            
         <div className="Movie">
             <center>
            <Card style={{ width: '16rem' }}>
            <center>{props.Poster} </center>
            <Card.Body>
            <Card.Title>{props.Title}</Card.Title>
            <Card.Text>{props.Year}  </Card.Text>
            <Card.Text>{props.imdbID}  </Card.Text>
            <Card.Text>{props.Type}  </Card.Text>
            <Button variant="info">Book movie</Button>{' '}
            </Card.Body>
            </Card>
            </center>
         </div>
        )
    }
