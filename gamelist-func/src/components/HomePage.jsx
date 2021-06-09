import React, { Component } from 'react'
import { Carousel,  } from 'react-bootstrap';


export default class HomePage extends Component {


    render() {
        return (
            <div className="container">
<br></br>
<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100 h0"
      src="https://images.unsplash.com/photo-1534423861386-85a16f5d13fd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
      alt="First slide"
      height="550px"
    />
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
      alt="First slide"
      height="550px"
    />
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images.unsplash.com/photo-1552820728-8b83bb6b773f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
      alt="First slide"
      height="550px"
    />
  </Carousel.Item>


</Carousel>



            </div>
        )
    }
}
