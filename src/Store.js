import React, { useState, useEffect } from 'react'
import './App.css';
import Com from './Com';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar,Nav } from 'react-bootstrap';
import axios from 'axios'

export default function Store() {
    const [data, setData] = useState([])


    const callApi = ()=> {
        axios({
            method:"GET",
            url:'https://fakestoreapi.com/products'
          }).then((response)=>{
             console.log("this response",response.data)
            setData(response.data)
          }).catch((error)=>{
            console.log("error",error)
          })
        }

      useEffect(() => {
        callApi()
        return () => {
        }
      }, [])

    return (
    <div className="bg-img" >
        <Navbar bg="light" expand="lg" className="ba">
            <Navbar.Brand href="#" className="center"> <spam className="big">Store</spam></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="https://fakestoreapi.com" > <spam className="big">Fake Store Api</spam></Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        <div> <Com list = {data} /> </div>       
      </div>
    )
}
