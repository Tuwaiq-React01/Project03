import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'

export default class HeaderImage extends Component {
    render() {
        return (
            <div>
  <Card className="bg-dark text-white">
  <Card.Img src="https://alcoholics-anonymous.eu/wp-content/uploads/2016/06/clouds-sky-header-2068-1024x300.jpg" alt="Card image" height="250" />
  <Card.ImgOverlay>
    <Card.Title><h1 className="wt">Weather App</h1></Card.Title>
    <Card.Text>
      <p className="wt">This site displays the weather based on API</p>
    </Card.Text>
    <Card.Text></Card.Text>
  </Card.ImgOverlay>
</Card>
            </div>
        )
    }
}
